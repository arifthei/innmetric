import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric | The desk can quote the room. The guest still cannot buy it.",
  description:
    "InnMetric traces hotel booking problems, makes approved changes in your existing systems and checks the result, with a record your team can follow.",
  openGraph: {
    title: "InnMetric | The desk can quote the room. The guest still cannot buy it.",
    description: "InnMetric traces hotel booking problems, makes approved changes in your existing systems and checks the result, with a record your team can follow.",
    url: "https://innmetric.com/",
  },
  alternates: { canonical: "/" },
};

const OFFERS = [
  {
    index: "01",
    title: "Distribution Baseline Audit",
    body: "Find what needs attention and which corrections come first.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "Agreed corrections, checked against the same booking.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "Keep track of the rates and availability we recheck.",
    href: "/services/#control",
    link: "Ongoing control",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="frame">
          <div className="grid wide-gap">
            <Reveal className="col-6 hero-copy">
              <h1>The desk can quote the room. The guest still cannot buy it.</h1>
              <p className="lede">A successful push is not a sellable room.</p>
              <p className="hero-hook">
                InnMetric traces the problem through the systems you already
                use. We make the changes your hotel approves, check the booking
                again and leave a record your team can follow.
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
                Start with the hotel, room and dates. Tell us what you expected
                to see.
              </p>
            </Reveal>
            <div className="col-6">
              <ProblemWheel />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Ways to work with us</span>
            <h2>Start with the booking you want checked.</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="rows">
              {OFFERS.map((offer) => (
                <article className="row" key={offer.index}>
                  <span className="row-index" aria-hidden="true">
                    {offer.index}
                  </span>
                  <div>
                    <h3>{offer.title}</h3>
                    <p>{offer.body}</p>
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

      <section className="section wash" id="fit">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Fit</span>
            <h2>You&apos;ll probably enjoy working with us if</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="cols-2">
              <article className="card">
                <p className="list-head">A useful starting point</p>
                <ul className="checklist">
                  <li>
                    You already run a PMS, a booking engine and at least two
                    OTAs.
                  </li>
                  <li>
                    You want to understand why a room or rate looks different
                    to a guest.
                  </li>
                  <li>
                    You can bring in the person who approves access and live
                    changes.
                  </li>
                </ul>
              </article>
              <article className="card">
                <p className="list-head">Usually not a fit</p>
                <ul className="not-list">
                  <li>Large international chains with centralized distribution teams</li>
                  <li>Individually listed homes that are not hotel-operated</li>
                  <li>Properties seeking only social media, advertising or review responses</li>
                  <li>Hotels looking to outsource revenue management or pricing</li>
                  <li>Teams that need someone to run OTA listings, photos or ranking</li>
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Show us the stay."
        lead="Tell us what you expected to see and what appeared instead. We'll explain whether it fits our work and what the next step would be."
        email
      />
    </>
  );
}
