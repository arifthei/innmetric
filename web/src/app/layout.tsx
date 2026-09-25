import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  ORG_ID,
  SAME_AS,
  SITE_DESCRIPTION,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hotel availability and rate problems, investigated | InnMetric",
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  applicationName: "InnMetric",
  authors: [{ name: "InnMetric", url: SITE_URL }],
  creator: "InnMetric",
  publisher: "InnMetric",
  category: "Hotel distribution services",
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon/", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon/", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "InnMetric",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const siteGraph = [
  {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: "InnMetric",
    url: `${SITE_URL}/`,
    email: "hello@innmetric.com",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon/`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/opengraph-image/`,
    description: SITE_DESCRIPTION,
    slogan: "You have rooms to sell. The booking page says otherwise.",
    knowsAbout: [
      "Hotel distribution",
      "Hotel booking engine availability",
      "Channel manager mapping",
      "Property management system integration",
      "OTA rate parity",
      "Hotel rate plans and restrictions",
      "Stop-sell and allotment troubleshooting",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@innmetric.com",
      url: `${SITE_URL}/contact/`,
      availableLanguage: ["English"],
    },
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  },
  {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "InnMetric",
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <JsonLd data={siteGraph} />
        {CF_BEACON_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
          />
        ) : null}
      </body>
    </html>
  );
}
