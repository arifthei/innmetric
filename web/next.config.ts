import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { formsEnabled as computeFormsEnabled } from "./scripts/forms-enabled.mjs";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const formsEnabled = computeFormsEnabled();

const nextConfig: NextConfig = {
  trailingSlash: true,
  env: {
    INNMETRIC_FORMS_ENABLED: formsEnabled ? "true" : "false",
  },
  turbopack: {
    root: appDir,
  },
};

export default nextConfig;
