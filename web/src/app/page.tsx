import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";
import { t, TAIL } from "@/lib/typeset";

const DESCRIPTION =
  "InnMetric investigates hotel availability and rate problems, makes approved changes in your existing systems and checks what guests can book.";

export const metadata: Metadata = {
  title: "InnMetric | The desk can quote the room. The guest still cannot buy it.",
  description: DESCRIPTION,
  openGraph: {
    title: "InnMetric | The desk can quote the room. The guest still cannot buy it.",
    description: DESCRIPTION,
    url: "https://innmetric.com/",
  },
  alternates: { canonical: "/" },
};

const DELIVERABLES = [
  {
    title: "Findings register",
    body: "Confirmed problems in priority order, with the booking checks that showed them.",
  },
  {
    title: "Approved change list",
    body: "The agreed corrections, who approved them and how to reverse each change.",
  },
  {
    title: "Repeat booking check",
    body: "What guests can book after a change, checked for the same room, dates and conditions.",
  },
  {
    title: "Handover record",
    body: "The results, unresolved items, vendor dependencies and any agreed rechecks.",
  },
];

const OFFERS = [
  {
    index: "01",
    title: "Distribution Baseline Audit",
    body: "You need to understand the problem before deciding what to change.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "You have identified the problem and need someone to carry out the agreed corrections.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "You need to know when a problem returns. We recheck the rates and channels you agree.",
    href: "/services/#control",
    link: "Ongoing control",
  },
];

const FIT = [
  "You manage an independent hotel or small group with a PMS, direct booking and at least two OTAs.",
  "You want someone to investigate the problem, explain the findings and check the result.",
  "You can involve the person who approves access and changes when needed.",
];

const NOT_FIT = [
  "Large international chains with a central distribution team already owning this",
  "Individually listed homes that are not hotel-operated",
  "Properties looking for social media, advertising or review responses",
  "Hotels that want pricing or revenue management taken over",
  "Teams that need someone to run OTA listings, photos or ranking",
];

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="frame">
          <div className="grid wide-gap">
            <Reveal className="col-6 hero-copy">
              <h1>
                {t(
                  "The desk can quote the room. The guest still cannot buy it.",
                  TAIL.heading
                )}
              </h1>
              <p className="lede">
                {t(
                  "Your team shouldn't have to chase the same booking problem through every system."
                )}
              </p>
              <p className="hero-hook">
                {t(
                  "InnMetric investigates room availability and rate problems in the systems your hotel already uses. We make the changes you approve and check what guests can book."
                )}
              </p>
              <div className="hero-actions">
                <Link className="button lg" href="/contact/">
                  Let&apos;s Solve It!
                </Link>
                <Link className="button ghost lg" href="/how-it-works/">
                  See how we work
                </Link>
              </div>
              <p className="hero-why">
                {t(
                  "Tell us what your team is dealing with and what needs to change. We'll reply about whether it fits our work."
                )}
              </p>
            </Reveal>
            <div className="col-6">
              <ProblemWheel />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="deliverables">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">What you get</span>
            <h2>{t("Know what changed and what still needs attention.")}</h2>
            <p className="section-lead">
              {t(
                "For the work we agree, your team gets a record it can pick up without repeating the investigation."
              )}
            </p>
          </Reveal>
          <Reveal index={1}>
            <ul className="rows">
              {DELIVERABLES.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section wash" id="services">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Ways to work with us</span>
            <h2>{t("Three ways to bring us in.")}</h2>
            <p className="section-lead">
              {t(
                "Start with the part you need. We can work through that choice with you."
              )}
            </p>
          </Reveal>
          <Reveal index={1}>
            <div className="rows">
              {OFFERS.map((offer) => (
                <article className="row" key={offer.index}>
                  <span className="row-index" aria-hidden="true">
                    {offer.index}
                  </span>
                  <div>
                    <h3>{t(offer.title)}</h3>
                    <p>{t(offer.body)}</p>
                  </div>
                  <Link className="inline" href={offer.href}>
                    {offer.link}
                  </Link>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="fit">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Fit</span>
            <h2>{t("You'll probably enjoy working with us if")}</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="cols-2">
              <article className="card">
                <p className="list-head">A useful starting point</p>
                <ul className="checklist">
                  {FIT.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </article>
              <article className="card">
                <p className="list-head">Usually not a fit</p>
                <ul className="not-list">
                  {NOT_FIT.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="What needs to work better at your hotel?"
        lead="Tell us where availability or rates are going wrong and what your team wants to change. We'll explain what we can take on."
        email
      />
    </>
  );
}
