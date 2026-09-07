import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";

export const metadata: Metadata = {
  title: "How InnMetric investigates hotel booking problems",
  description:
    "From your booking example to approved corrections and a repeat check. See what your hotel receives at the handover and how unresolved issues are recorded.",
  openGraph: {
    title: "How InnMetric investigates hotel booking problems",
    description:
      "From your booking example to approved corrections and a repeat check. See what your hotel receives at the handover and how unresolved issues are recorded.",
    url: "https://innmetric.com/how-it-works/",
  },
  alternates: { canonical: "/how-it-works/" },
};

const PHASES = [
  {
    verb: "Show us what the guest sees.",
    body: "Share the hotel, room, dates and booking page, with what you expected to happen. We clarify the issue and agree the scope.",
  },
  {
    verb: "Trace the problem and agree the change.",
    body: "With agreed access, we check the relevant settings across your existing systems. We explain the findings and make only the changes your named approver agrees to.",
  },
  {
    verb: "Check the booking and hand over the record.",
    body: "We repeat the check for the same room, dates and booking conditions. Your team gets the result, a record of changes and any unresolved items, plus the rechecks we've agreed.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="From the first booking check to the handover.">
        <p className="lede">
          We agree what to investigate and what access is needed. Your hotel
          stays in control of live changes throughout the work.
        </p>
      </PageHero>

      <section className="section dark">
        <div className="frame stack">
          <Reveal>
            <ol className="verbs">
              {PHASES.map((item) => (
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
          <Reveal index={2}>
            <p className="section-lead">
              If a result is still wrong or a vendor needs to act, it stays open
              in the record.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Show us the stay."
        lead="Start with what you saw. Access and changes are agreed separately."
      />
    </>
  );
}
