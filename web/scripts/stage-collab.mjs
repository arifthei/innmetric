#!/usr/bin/env node
/**
 * Builds the InnMetric guided demo (github.com/arifthei/innmetric-replit) at the commit pinned in
 * collab.source.json and stages it into web/public/collab/ before the Next build. Netlify CI runs this
 * from netlify.toml; the output is not committed.
 *
 * Local use:
 *   npm run stage:collab                         # clone the pinned commit, install, build, stage
 *   COLLAB_SOURCE_DIR=../../innmetric-replit npm run stage:collab
 *                                                # build an existing checkout instead (marked as unpinned)
 *   COLLAB_SKIP_INSTALL=1                        # reuse that checkout's node_modules
 */
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(readFileSync(path.join(webDir, "collab.source.json"), "utf8"));
const target = path.join(webDir, "public", config.basePath.replace(/^\/|\/$/g, ""));

function fail(message) {
  console.error(`[stage-collab] ${message}`);
  process.exit(1);
}

if (!/^[0-9a-f]{40}$/.test(config.commit)) fail("collab.source.json: commit must be a full 40-character SHA.");
if (!/^\/[a-z0-9-]+\/$/.test(config.basePath)) fail("collab.source.json: basePath must look like /collab/.");
if (!config.apiBase.startsWith(config.basePath)) fail("collab.source.json: apiBase must live under basePath.");
for (const route of config.entryRoutes) {
  if (!/^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(route)) fail(`collab.source.json: invalid entry route "${route}".`);
}

function run(command, args, options = {}) {
  console.log(`[stage-collab] ${command} ${args.join(" ")}`);
  execFileSync(command, args, { stdio: "inherit", ...options });
}

const localSource = process.env.COLLAB_SOURCE_DIR ? path.resolve(process.env.COLLAB_SOURCE_DIR) : null;
let tempDir = null;
let sourceDir = localSource;

if (!sourceDir) {
  tempDir = mkdtempSync(path.join(os.tmpdir(), "innmetric-collab-"));
  sourceDir = tempDir;
  run("git", ["init", "--quiet", sourceDir]);
  run("git", ["-C", sourceDir, "fetch", "--quiet", "--depth", "1", config.repository, config.commit]);
  run("git", ["-C", sourceDir, "checkout", "--quiet", "--detach", "FETCH_HEAD"]);
}

let commit = "unknown";
try {
  commit = execFileSync("git", ["-C", sourceDir, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
} catch {}
const pinned = commit === config.commit;
if (!localSource && !pinned) fail(`Fetched ${commit}, expected ${config.commit}.`);
if (localSource && !pinned) {
  console.warn(`[stage-collab] ${sourceDir} is at ${commit}, not the pinned ${config.commit}. Do not deploy this build.`);
}

const pnpm = ["--yes", `pnpm@${config.pnpm}`];
// devDependencies hold the whole Vite toolchain, so install without NODE_ENV=production.
const installEnv = { ...process.env, CI: "true" };
delete installEnv.NODE_ENV;
const buildEnv = {
  ...process.env,
  CI: "true",
  NODE_ENV: "production",
  BASE_PATH: config.basePath,
  PORT: String(config.port),
  VITE_DEMO_API_BASE: config.apiBase,
};

if (process.env.COLLAB_SKIP_INSTALL !== "1") {
  run("npx", [...pnpm, "install", "--frozen-lockfile", "--filter", `${config.package}...`], { cwd: sourceDir, env: installEnv });
}
run("npx", [...pnpm, "--filter", config.package, "run", "build"], { cwd: sourceDir, env: buildEnv });

const dist = path.join(sourceDir, config.dist);
const indexHtml = readFileSync(path.join(dist, "index.html"), "utf8");
const assetRefs = [...indexHtml.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
for (const ref of assetRefs) {
  if (/^(https?:)?\/\//.test(ref)) continue;
  if (!ref.startsWith(config.basePath)) fail(`index.html references "${ref}" outside ${config.basePath}. Check BASE_PATH.`);
  if (!existsSync(path.join(dist, ref.slice(config.basePath.length)))) fail(`index.html references missing file "${ref}".`);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(path.dirname(target), { recursive: true });
cpSync(dist, target, { recursive: true });

// Explicit entry files: each known route loads directly, with no /collab/* SPA fallback that could swallow assets.
for (const route of config.entryRoutes) {
  mkdirSync(path.join(target, route), { recursive: true });
  writeFileSync(path.join(target, route, "index.html"), indexHtml);
}

writeFileSync(
  path.join(target, "build.json"),
  `${JSON.stringify({ repository: config.repository, commit, pinned, basePath: config.basePath, apiBase: config.apiBase }, null, 2)}\n`,
);

if (tempDir) rmSync(tempDir, { recursive: true, force: true });

const assets = readdirSync(path.join(target, "assets")).length;
console.log(`[stage-collab] Staged ${commit.slice(0, 12)}${pinned ? "" : " (unpinned)"} into ${path.relative(webDir, target)}/ with ${assets} assets and ${config.entryRoutes.length + 1} entry files.`);
