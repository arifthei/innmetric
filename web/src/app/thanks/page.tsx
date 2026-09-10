import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { t } from "@/lib/typeset";

export const metadata: Metadata = {
  title: "Contact InnMetric",
  description:
    "Opening this page does not confirm that InnMetric received an enquiry.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thanks/" },
};

export default function ThanksPage() {
  return (
    <PageHero eyebrow="Contact" title="This page does not confirm an enquiry.">
      <p className="lede">
        {t("If you meant to send a request, use the contact form or email")}{" "}
        <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
      </p>
      <div className="hero-actions">
        <Link className="button lg" href="/contact/">
          Go to the form
        </Link>
      </div>
    </PageHero>
  );
}
