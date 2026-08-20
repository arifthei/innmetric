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

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".git" || name === ".netlify") continue;
    const full = join(dir, name);
    const rel = relative(root, full).split(sep).join("/");
    if (rel === "archive" || rel.startsWith("archive/")) continue;
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

const files = walk(root);
if (!files.length) {
  console.error("lint-copy: no HTML files found");
  process.exit(1);
}

for (const file of files) {
  const rel = relative(root, file).split(sep).join("/");
  const text = readFileSync(file, "utf8");

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

  if (!text.includes("Request a distribution review")) {
    errors.push(`${rel}: missing site-wide CTA`);
  }
}

if (errors.length) {
  console.error(`lint-copy failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`lint-copy passed (${files.length} HTML files)`);
