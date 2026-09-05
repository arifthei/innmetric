import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { WorkFile } from "@/components/WorkFile";

export const metadata: Metadata = {
  title: "How InnMetric audits and repairs hotel distribution",
  description:
    "See how InnMetric records evidence, obtains approval, applies corrections and verifies hotel distribution outcomes.",
  openGraph: {
    title: "How InnMetric audits and repairs hotel distribution",
    description:
      "See how InnMetric records evidence, obtains approval, applies corrections and verifies hotel distribution outcomes.",
    url: "https://innmetric.com/how-it-works/",
  },
  alternates: { canonical: "/how-it-works/" },
};

const VERBS = [
  {
    verb: "Observed",
    body: "under recorded dates, occupancy, currency and channel conditions.",
  },
  { verb: "Approved", body: "by a named hotel owner before any live change." },
  {
    verb: "Changed",
    body: "in the agreed PMS, channel manager, booking engine or OTA.",
  },
  { verb: "Verified", body: "on the live path where the guest buys." },
  {
    verb: "Rechecked",
    body: "on the agreed schedule so the issue cannot quietly return.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A change is not complete until the live result is verified."
      >
        <p className="lede">
          We confirm the property, channels, systems and approver before the
          baseline. Diagnosis, approval, implementation and QA stay in one record.
        </p>
      </PageHero>

      <section className="section dark">
        <div className="frame stack">
          <Reveal>
            <ol className="verbs">
              {VERBS.map((item) => (
                <li key={item.verb}>
                  <strong>{item.verb}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal index={1}>
            <WorkFile />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="frame">
          <Reveal>
            <div className="cols-2">
              <article className="card">
                <p className="list-head">Required before work begins</p>
                <ul className="checklist">
                  <li>Named hotel contact and approver</li>
                  <li>Agreed property and channel scope</li>
                  <li>Agreed access method</li>
                  <li>Confidentiality terms where needed</li>
                </ul>
              </article>
              <article className="card">
                <p className="list-head">How findings are labelled</p>
                <ul className="checklist">
                  <li>Confirmed defect</li>
                  <li>Expected behavior</li>
                  <li>Unresolved hypothesis</li>
                  <li>Hotel decision required</li>
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wash" id="access">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>Access and security principles</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="checklist">
              <li>Use least-privilege access where the system supports it</li>
              <li>Prefer named user accounts over shared credentials</li>
              <li>Do not request credentials through ordinary email</li>
              <li>Record who approved each live change</li>
              <li>Remove access at the end of the agreed scope</li>
              <li>Do not reuse hotel data for unrelated work</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Request a baseline before another undocumented fix." />
    </>
  );
}
