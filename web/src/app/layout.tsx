import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innmetric.com"),
  title: {
    default: "Hotel availability and rate problems, investigated | InnMetric",
    template: "%s",
  },
  description:
    "InnMetric traces hotel booking problems, makes approved changes in your existing systems and checks the result, with a record your team can follow.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "InnMetric",
    images: ["https://innmetric.com/assets/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "InnMetric",
  url: "https://innmetric.com/",
  email: "hello@innmetric.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
