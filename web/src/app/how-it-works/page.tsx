import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, pageMetadata } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "See how InnMetric investigates hotel distribution problems, agrees access and approvals with your team and checks the booking result after an agreed repair.";

export const metadata: Metadata = pageMetadata({
  title: "How InnMetric works with your hotel team | InnMetric",
  description: DESCRIPTION,
  path: "/how-it-works/",
});

const PHASES = [
  {
    verb: "Agree the scope",
    yours: "Show us what guests can book, what you expected and the systems involved.",
    ours: "Propose the work and agree access, the result to check and who can approve changes.",
  },
  {
    verb: "Investigate and agree any correction",
    yours: "Provide the agreed access, answer questions about the setup and approve, defer or reject each proposed change.",
    ours: "Trace the issue and explain the findings. Make a correction only inside an agreed repair and keep a way to reverse it.",
  },
  {
    verb: "Verify and hand over",
    yours: "Review the results and decide who will handle any remaining actions.",
    ours: "After an agreed repair, repeat the booking checks under the same conditions. Hand over the findings, any changes, open issues and agreed rechecks.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumb("/how-it-works/", "How it works")} />
      <PageHero eyebrow="How it works" title="We do the investigation. You decide what changes.">
        <p className="lede">
          {t(
            "Your team provides the context and agreed access. We investigate across the relevant systems. If you commission a repair, you approve each change and we check the booking result."
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
