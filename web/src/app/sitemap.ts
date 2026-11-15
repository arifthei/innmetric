import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-11-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
