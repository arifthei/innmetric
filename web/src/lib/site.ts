import type { Metadata } from "next";

export const SITE_URL = "https://innmetric.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SITE_DESCRIPTION =
  "InnMetric investigates search visibility, booking failures and pricing errors in existing hotel systems, makes approved changes and measures the result.";

export const PAGES = [
  { path: "/", name: "Home", priority: 1 },
  { path: "/services/", name: "Services", priority: 0.9 },
  { path: "/how-it-works/", name: "How it works", priority: 0.8 },
  { path: "/tourism-programme/", name: "Tourism programme", priority: 0.8 },
  { path: "/faq/", name: "FAQ", priority: 0.8 },
  { path: "/about/", name: "About", priority: 0.7 },
  { path: "/contact/", name: "Contact", priority: 0.8 },
  { path: "/privacy/", name: "Privacy Notice", priority: 0.2 },
  { path: "/terms/", name: "Terms of Use", priority: 0.2 },
] as const;

export const SAME_AS: string[] = [];

const OG_IMAGE = {
  url: "/opengraph-image/",
  width: 1200,
  height: 630,
  alt: "InnMetric: More bookings. Lower selling costs.",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "InnMetric",
      locale: "en_US",
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function breadcrumb(path: string, name: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
