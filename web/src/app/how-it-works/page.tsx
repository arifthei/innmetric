import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";

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
    body: "We record the room, dates, guest count, currency and channel.",
  },
  { verb: "Approved", body: "Your named approver agrees the change before we touch a live setting." },
  {
    verb: "Changed",
    body: "We make the agreed correction and record how to reverse it.",
  },
  { verb: "Verified", body: "We repeat the booking check and record what the guest sees." },
  {
    verb: "Rechecked",
    body: "We repeat the agreed checks on schedule and flag anything that has returned.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="We check the booking again before calling a fix complete."
      >
        <p className="lede">
          We agree the property, channels and access with your named approver.
          You can follow each finding from the first booking check to the agreed
          correction and the retest.
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
            <RecordSlip />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="frame">
          <Reveal>
            <div className="cols-2">
              <article className="card">
                <p className="list-head">Before we start</p>
                <ul className="checklist">
                  <li>Named hotel contact and approver</li>
                  <li>Agreed property and channel scope</li>
                  <li>Agreed access method</li>
                  <li>Confidentiality terms where needed</li>
                </ul>
              </article>
              <article className="card">
                <p className="list-head">What a finding can mean</p>
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
            <h2>How we handle access</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="checklist">
              <li>Only the access needed for the work, where the system allows it</li>
              <li>Named user accounts where available</li>
              <li>Credentials shared through an agreed secure method, never ordinary email</li>
              <li>A record of the person who approved each live change</li>
              <li>Access removed when the agreed work ends</li>
              <li>Hotel data used only for the agreed work</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Start with the booking that isn't working." />
    </>
  );
}
