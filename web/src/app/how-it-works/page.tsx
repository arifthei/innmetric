import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";

export const metadata: Metadata = {
  title: "How InnMetric follows a stay that cannot be bought",
  description:
    "You show the stay. InnMetric follows it. You approve the change. The guest result is checked and handed over.",
  openGraph: {
    title: "How InnMetric follows a stay that cannot be bought",
    description:
      "You show the stay. InnMetric follows it. You approve the change. The guest result is checked and handed over.",
    url: "https://innmetric.com/how-it-works/",
  },
  alternates: { canonical: "/how-it-works/" },
};

const PHASES = [
  {
    verb: "You show the stay.",
    body: "The hotel and the booking you expected to sell. That has to come from you.",
  },
  {
    verb: "We trace it. You approve the change.",
    body: "We look at the systems you already use. A named person at the hotel approves any live change.",
  },
  {
    verb: "We check the guest result and hand you the record.",
    body: "After the approved change, we try the same booking again. You get what changed and what is still open.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="You show the stay. That is the first step.">
        <p className="lede">
          The hotel names the booking. Three steps get from that stay to a
          checked result.
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
              The point is a sellable room and a record the next person can read.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Show us the stay."
        lead="That is the first piece of work. It has to come from you."
      />
    </>
  );
}
