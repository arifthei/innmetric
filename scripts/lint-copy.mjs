#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const bannedPhrases = [
  "Not SaaS yet",
  "Riyadh and Jeddah first",
  "first cohort",
  "Airbnb",
  "bungalow",
  "villa",
  "short-term rental",
  "holiday home",
  "48 saat",
  "2.500",
  "€129",
  "guaranteed revenue",
  "occupancy growth"
];

const errors = [];

function walk(dir, { skipWeb = false } = {}, out = []) {
  for (const name of readdirSync(dir)) {
    if (
      name === "node_modules" ||
      name === ".git" ||
      name === ".netlify" ||
      name === "_context" ||
      name === ".next" ||
      name === "test.html"
    ) {
      continue;
    }
    const full = join(dir, name);
    const rel = relative(root, full).split(sep).join("/");
    if (rel === "archive" || rel.startsWith("archive/")) continue;
    if (skipWeb && (rel === "web" || rel.startsWith("web/"))) continue;
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, { skipWeb }, out);
    else out.push(full);
  }
  return out;
}

function lintText(rel, text, { requireCta, ctaString = "Request a distribution review" }) {
  if (text.includes("\u2014")) errors.push(`${rel}: em dash`);
  if (text.includes("\u2013")) errors.push(`${rel}: en dash`);
  if (/, and\b/.test(text)) errors.push(`${rel}: Oxford comma (", and")`);
  if (/, or\b/.test(text)) errors.push(`${rel}: Oxford comma (", or")`);
  if (/\/tr\//i.test(text)) errors.push(`${rel}: public /tr/ link`);

  for (const phrase of bannedPhrases) {
    if (text.toLowerCase().includes(phrase.toLowerCase())) {
      errors.push(`${rel}: banned phrase "${phrase}"`);
    }
  }

  const forCta = text.replace(/&apos;/g, "'");
  if (requireCta && !forCta.includes(ctaString)) {
    errors.push(`${rel}: missing site-wide CTA`);
  }
}

const htmlFiles = walk(root, { skipWeb: true }).filter((file) => file.endsWith(".html"));
if (!htmlFiles.length) {
  console.error("lint-copy: no HTML files found");
  process.exit(1);
}

for (const file of htmlFiles) {
  const rel = relative(root, file).split(sep).join("/");
  lintText(rel, readFileSync(file, "utf8"), { requireCta: true });
}

const webSrc = join(root, "web", "src");
let webFiles = [];
try {
  webFiles = walk(webSrc).filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));
} catch {
  webFiles = [];
}

for (const file of webFiles) {
  const rel = relative(root, file).split(sep).join("/");
  lintText(rel, readFileSync(file, "utf8"), { requireCta: false });
}

if (webFiles.length) {
  const header = webFiles.find((file) =>
    relative(root, file).split(sep).join("/").endsWith("components/SiteHeader.tsx")
  );
  if (!header) {
    errors.push("web/src/components/SiteHeader.tsx: missing header with site-wide CTA");
  } else {
    // The destination is part of the site contract; editable copy is not a lock.
    if (!readFileSync(header, "utf8").includes('href="/contact/"')) {
      errors.push("web/src/components/SiteHeader.tsx: missing contact action");
    }
  }
}

if (errors.length) {
  console.error(`lint-copy failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `lint-copy passed (${htmlFiles.length} HTML files, ${webFiles.length} web/src files)`
);
