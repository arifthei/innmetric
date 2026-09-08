import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "See what your hotel team does, what InnMetric takes on and how findings, approved changes and booking checks are handed over.";

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
    body: "First, decide what needs checking.",
    yours: "Describe the problem and the result you want. You do not need to know the cause.",
    ours: "Clarify the problem and propose the work. Agree access and who approves changes before entering your accounts.",
  },
  {
    verb: "Investigate and correct",
    body: "Your hotel decides what changes.",
    yours: "Provide agreed access and approve, defer or reject each proposed correction.",
    ours: "Follow the problem through the relevant systems. Explain the findings, record your approval and make the agreed changes.",
  },
  {
    verb: "Verify and hand over",
    body: "Check what the change achieved.",
    yours: "Review the result with us and decide whether you need ongoing checks.",
    ours: "Repeat the booking check under the same conditions. Hand over the findings, changes and open items, with any agreed recheck schedule.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="You know what we need from your team at each step.">
        <p className="lede">
          {t(
            "We agree the work before asking for access. Your hotel approves every live change. Here is how the investigation and handover fit together."
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
                  <span>{t(item.body)}</span>
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
            <RecordSlip />
          </Reveal>
          <Reveal index={2}>
            <p className="section-lead">
              {t(
                "If the booking still fails, the issue stays open. We record what needs attention, including any action required from your vendor. Scheduled rechecks can find a returning problem; they cannot guarantee it stays fixed."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Which part do you need us for?"
        lead="You can start with an audit or bring the findings your team already has."
        next={{ href: "/services/", label: "Compare the services" }}
      />
    </>
  );
}
