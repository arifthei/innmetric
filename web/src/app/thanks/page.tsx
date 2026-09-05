import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Request received | InnMetric",
  description: "Your InnMetric distribution review request was received.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thanks/" },
};

export default function ThanksPage() {
  return (
    <PageHero eyebrow="Contact" title="Your request was received.">
      <p className="lede">
        A founder will review the property details then reply from an
        @innmetric.com address.
      </p>
      <p className="form-note">
        On this local preview a form submit does not create a production inquiry.
      </p>
      <div className="hero-actions">
        <Link className="button lg" href="/">
          Return home
        </Link>
      </div>
    </PageHero>
  );
}
