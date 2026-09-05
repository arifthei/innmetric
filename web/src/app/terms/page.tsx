import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Terms of Use | InnMetric",
  description:
    "Website terms for InnMetric. Public pages are not a proposal. Live changes require hotel approval.",
  openGraph: {
    title: "Terms of Use | InnMetric",
    description:
      "Website terms for InnMetric. Public pages are not a proposal. Live changes require hotel approval.",
    url: "https://innmetric.com/terms/",
  },
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <PageHero eyebrow="Legal" title="Terms of Use">
      <div className="prose">
        <p>Effective date: 20 August 2026</p>
        <h2>Website information is not a proposal</h2>
        <p>
          Pages on innmetric.com describe a founder-led service. They are not a
          binding offer, quotation or statement of work. Paid work requires a
          signed scope.
        </p>
        <h2>No performance guarantee</h2>
        <p>
          InnMetric does not guarantee revenue, occupancy or ranking. Public copy
          must not be read as a promise of commercial improvement.
        </p>
        <h2>Public observations</h2>
        <p>
          A difference seen on a public booking path is an observation. It does
          not by itself prove an internal defect, vendor failure or financial
          loss.
        </p>
        <h2>Live changes</h2>
        <p>
          Hotel approval is required before any live system change. InnMetric does
          not treat a saved configuration as complete until the agreed
          guest-facing result is checked or a remaining limit is documented.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Do not submit passwords, payment data or guest information through this
          website. Do not use the site to attempt unauthorized access to any
          system.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Site copy, layout and illustrations belong to InnMetric unless a
          separate licence is stated. Illustrations on the site are examples. They
          are not client records.
        </p>
        <h2>Governing law</h2>
        <p>
          InnMetric is not yet incorporated. Until a legal entity exists, governing
          law and venue will be stated in the signed scope for any paid
          engagement. These website terms do not create that entity.
        </p>
        <p>
          Questions: <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </p>
      </div>
    </PageHero>
  );
}
