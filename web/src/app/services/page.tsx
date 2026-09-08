import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Hotel distribution audits, approved repairs and ongoing booking checks. Compare what is included and choose the work your team needs.";

export const metadata: Metadata = {
  title: "Hotel distribution audit, repair and control | InnMetric",
  description: DESCRIPTION,
  openGraph: {
    title: "Hotel distribution audit, repair and control | InnMetric",
    description: DESCRIPTION,
    url: "https://innmetric.com/services/",
  },
  alternates: { canonical: "/services/" },
};

const OFFERS = [
  {
    id: "baseline",
    index: "01",
    title: "Distribution Baseline Audit",
    state: "You need to understand what is wrong.",
    body: "Start here when the booking result does not match your setup. We investigate the gap and give your team findings to act on, including questions that still need an answer.",
    points: [
      "Your systems, active channels and account owners mapped",
      "Booking checks with room, dates, occupancy and terms recorded",
      "Room mappings, rate mappings and restrictions reviewed",
      "Prioritized findings and the checks needed to verify a correction",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    state: "You have findings that need action.",
    body: "Bring the findings from our audit or your own review. We agree the corrections with your approver, make the changes and check the result. Anything unresolved stays in the handover.",
    points: [
      "Named approval before each live change",
      "A change list with a way to reverse each correction",
      "Agreed corrections in your existing systems",
      "Repeat booking checks and a record of the results",
    ],
  },
  {
    id: "control",
    index: "03",
    title: "Ongoing Distribution Control",
    state: "You need to know when a problem returns.",
    body: "Your setup keeps changing as you sell. We recheck the agreed rates and availability on a set schedule, so your team has a current result to compare with the earlier work.",
    points: [
      "Checks of agreed rates, availability, mappings and channels",
      "A running record of findings and verified corrections",
      "A dated check history for investigating recurring problems",
      "Check frequency and any tools specified in the agreement",
    ],
  },
];

const BOUNDARIES = [
  "We work in your existing PMS, channel manager, booking engine and OTA accounts. Initial system installation is outside this service.",
  "Your hotel keeps pricing, yield and rate decisions. We do not take over revenue management or sell standalone rate-plan redesign.",
  "Every live change needs named approval. If a vendor must act, we record what is needed from them.",
  "OTA content, photos, ranking, advertising, social media and review responses are outside this service.",
  "A public booking problem alone cannot establish a revenue loss.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Start with the work your hotel needs.">
        <p className="lede">
          {t(
            "Bring us in to investigate a problem, carry out agreed repairs or recheck an existing setup. Each engagement has its own scope."
          )}
        </p>
        <div className="hero-actions">
          <Link className="button lg" href="/contact/">
            Let&apos;s Solve It!
          </Link>
          <Link className="button ghost lg" href="/how-it-works/">
            See the three phases
          </Link>
        </div>
      </PageHero>

      <section className="section wash">
        <div className="frame">
          <Reveal>
            <div className="rows">
              {OFFERS.map((offer) => (
                <article className="row wide" id={offer.id} key={offer.id}>
                  <span className="row-index" aria-hidden="true">
                    {offer.index}
                  </span>
                  <div>
                    <h2>{t(offer.title)}</h2>
                    <p className="row-state">{t(offer.state)}</p>
                  </div>
                  <div>
                    <p>{t(offer.body)}</p>
                    <ul className="checklist">
                      {offer.points.map((point) => (
                        <li key={point}>{t(point)}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Scope</span>
            <h2>{t("What stays with your team.")}</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="not-list">
              {BOUNDARIES.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        lead="Tell us what your team is dealing with. We'll suggest the work that fits. If you need a different service, we'll say so."
      />
    </>
  );
}
