import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { formsEnabled as computeFormsEnabled } from "./scripts/forms-enabled.mjs";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const formsEnabled = computeFormsEnabled();

const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      {
        source: "/:file(llms|llms-full).txt",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  env: {
    INNMETRIC_FORMS_ENABLED: formsEnabled ? "true" : "false",
  },
  turbopack: {
    root: appDir,
  },
};

export default nextConfig;
