import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, pageMetadata } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Your hotel shows us the page and opens the systems. InnMetric follows the disagreement, makes the corrections you approve and hands over the booking result plus anything still open.";

export const metadata: Metadata = pageMetadata({
  title: "You approve the change. The booking check finishes it. | InnMetric",
  description: DESCRIPTION,
  path: "/how-it-works/",
});

const PHASES = [
  {
    verb: "Agree the scope",
    yours: "Show us what the page shows, what you meant to sell and the systems involved.",
    ours: "Propose the work and agree access, the result to check and who can approve changes.",
  },
  {
    verb: "Diagnose. Correct only in an agreed repair.",
    yours: "Provide the agreed access, answer questions about the setup and approve, defer or reject each proposed change.",
    ours: "Trace the issue and explain the findings. Make a correction only inside an agreed repair and keep a way to reverse it.",
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
      <JsonLd data={breadcrumb("/how-it-works/", "How it works")} />
      <PageHero eyebrow="How it works" title="We do the investigation. You decide what changes.">
        <p className="lede">
          {t(
            "Your team shows us the page and opens the systems. We follow the disagreement. You approve every change. The booking result says whether the issue is finished."
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
