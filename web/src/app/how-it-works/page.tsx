import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Your hotel approves the changes. InnMetric investigates across your existing systems, carries out agreed corrections and hands over checked results and open issues.";

export const metadata: Metadata = {
  title: "How InnMetric works with your hotel",
  description: DESCRIPTION,
  openGraph: {
    title: "How InnMetric works with your hotel",
    description: DESCRIPTION,
    url: "https://innmetric.com/how-it-works/",
  },
  alternates: { canonical: "/how-it-works/" },
};

const PHASES = [
  {
    verb: "Agree the scope",
    yours: "Show us what guests see, what you expected and the systems involved.",
    ours: "Propose the work and agree access, the result to check and who can approve changes.",
  },
  {
    verb: "Investigate and correct",
    yours: "Provide the agreed access, answer questions about the setup and approve, defer or reject each proposed change.",
    ours: "Trace the issue, explain the findings and make approved corrections with a way to reverse them.",
  },
  {
    verb: "Verify and hand over",
    yours: "Review the results and decide who will handle any remaining actions.",
    ours: "Repeat the booking checks under the same conditions. Hand over what changed, what remains open and any agreed rechecks.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="We do the investigation. You decide what changes.">
        <p className="lede">
          {t(
            "You provide the context and agreed access. We follow the problem across the relevant systems and keep a record your team can use."
          )}
        </p>
      </PageHero>

      <section className="section dark">
        <div className="frame stack">
          <Reveal>
            <ol className="verbs">
              {PHASES.map((item, index) => (
                <li key={item.verb}>
                  <span className="verb-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <strong>{t(item.verb)}</strong>
                  <dl className="who">
                    <div>
                      <dt>Your team</dt>
                      <dd>{t(item.yours)}</dd>
                    </div>
                    <div>
                      <dt>InnMetric</dt>
                      <dd>{t(item.ours)}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal index={1}>
            <div className="grid wide-gap verification">
              <div className="col-6 intro">
                <h2>{t("The booking result decides whether the issue stays open.")}</h2>
                <p className="section-lead">
                  {t(
                    "If the result is still wrong after a correction, we record the next action, including anything needed from your vendor. A later problem belongs in the record too. Scheduled rechecks cover the channels and conditions we agree."
                  )}
                </p>
              </div>
              <div className="col-6">
                <RecordSlip />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Already have findings? Bring them."
        lead="We can start with your team's investigation. Compare the services or tell us what remains unresolved."
        next={{ href: "/services/", label: "Compare the services" }}
      />
    </>
  );
}
