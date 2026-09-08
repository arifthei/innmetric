import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { RecordSlip } from "@/components/RecordSlip";

const DESCRIPTION =
  "Three phases from an agreed scope to a verified booking result. See what your team does, what InnMetric does and what you hold at the handover.";

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
    body: "We start from the problem you named and the result you want. Nothing is accessed or changed in this phase.",
    yours: "Tell us the property, the systems involved and where the booking result goes wrong. Name the outcome that would count as fixed.",
    ours: "Reproduce the problem from the guest's side, say whether it fits our work and propose a scope, the access we need and who approves changes.",
  },
  {
    verb: "Trace and correct with approval",
    body: "With agreed access, we follow the problem through your existing systems and change only what your approver signs off.",
    yours: "Grant the agreed access. Review each proposed correction and approve, defer or reject it.",
    ours: "Check the relevant settings across PMS, channel manager, booking engine and OTA accounts. Explain each finding, record the approval and make the correction.",
  },
  {
    verb: "Verify and hand over",
    body: "A correction counts when the guest-facing result matches what your team intended.",
    yours: "Confirm the result against your own expectation. Decide which rates, availability and channels we recheck and how often.",
    ours: "Repeat the same booking check under the same conditions. Hand over the findings register, change list, open items and the recheck plan.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Three phases. Your hotel approves every live change.">
        <p className="lede">
          You bring the problem and the person who can approve changes when the
          work reaches that point. We bring the trace, the corrections and the
          proof that the guest can now book what your team intended.
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
                  <strong>{item.verb}</strong>
                  <span>{item.body}</span>
                  <dl className="who">
                    <div>
                      <dt>Your team</dt>
                      <dd>{item.yours}</dd>
                    </div>
                    <div>
                      <dt>InnMetric</dt>
                      <dd>{item.ours}</dd>
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
              A result that is still wrong stays open in the record. If a
              correction depends on a vendor, we record that dependency and what
              was asked of them. A scheduled recheck can catch a problem that
              returns. It cannot promise that it never will.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tell us which booking problem you want owned."
        lead="If you already know which phase you need, choose the engagement. If not, write and we will say."
        next={{ href: "/services/", label: "Choose the engagement" }}
      />
    </>
  );
}
