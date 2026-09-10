import { copyFileSync, existsSync, mkdirSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { formsEnabled } from "./forms-enabled.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const webRoot = join(root, "..");
const template = join(webRoot, "src", "forms", "detector.html.template");
const destDir = join(webRoot, "public");
const dest = join(destDir, "__forms.html");

const enabled = formsEnabled();

if (enabled) {
  mkdirSync(destDir, { recursive: true });
  copyFileSync(template, dest);
  console.log("prepare-forms: wrote public/__forms.html");
} else if (existsSync(dest)) {
  unlinkSync(dest);
  console.log("prepare-forms: removed public/__forms.html");
} else {
  console.log("prepare-forms: detector omitted (forms disabled)");
}
