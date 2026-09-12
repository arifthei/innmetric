import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Compare InnMetric's hotel distribution audit, approved repair sprint and scheduled checks. See the deliverables, responsibilities and service limits.";

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
    state: "The booking result is wrong. The cause is unclear.",
    body: "We follow the affected room or rate through your setup and compare it with what guests see. You get findings to act on; live corrections are a separate scope.",
    points: [
      "Relevant systems, channel connections, mappings and restrictions reviewed",
      "Booking evidence with the room, dates, occupancy and terms recorded",
      "Prioritized actions, unanswered questions and checks for any proposed correction",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    state: "You have findings. The corrections need doing.",
    body: "We review the findings with you, make the corrections you approve and repeat the booking checks. You can bring findings from our audit or your own investigation.",
    points: [
      "Named approval and reversal instructions for each live change",
      "Before-and-after results for the same room, dates and conditions",
      "A handover of completed changes, open issues and vendor actions",
    ],
  },
  {
    id: "control",
    index: "03",
    title: "Ongoing Distribution Control",
    state: "You need to catch problems that return.",
    body: "We check agreed channels on a set schedule and compare each result with what your hotel intends to sell. New and returning issues go into the record for follow-up.",
    points: [
      "Agreed rates, availability and mappings checked",
      "A dated history of findings and verified corrections",
      "Check frequency, channels and any tools specified in your agreement",
    ],
  },
];

const BOUNDARIES = [
  {
    title: "Your setup stays in place",
    body: "We work in your existing PMS, channel manager, booking engine and OTA accounts. First-time installation and system replacement are outside this service.",
  },
  {
    title: "Your hotel sets the rates",
    body: "Pricing, yield and revenue management stay with your team. We don't offer standalone rate-plan redesign.",
  },
  {
    title: "We focus on bookability",
    body: "OTA listing content, photos, ranking, advertising, social media and review responses need a different service.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Choose an audit, a repair or ongoing checks.">
        <p className="lede">
          {t(
            "Each service works with the systems you already use. Here's what you get and where our work stops."
          )}
        </p>
        <nav className="section-links" aria-label="Compare services">
          <Link className="inline" href="#baseline">Audit</Link>
          <Link className="inline" href="#repair">Repair</Link>
          <Link className="inline" href="#control">Ongoing checks</Link>
        </nav>
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

      <section className="section" id="scope">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Scope</span>
            <h2>{t("Where our work starts and stops.")}</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="rows">
              {BOUNDARIES.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        lead="Describe the problem and any work already done. We'll suggest a starting point, including if you need a different kind of provider."
      />
    </>
  );
}
