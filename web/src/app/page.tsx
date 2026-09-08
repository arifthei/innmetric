import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";

const DESCRIPTION =
  "InnMetric traces hotel booking problems through the PMS, channel manager, booking engine and OTA accounts you already use, corrects them with your approval and verifies what a guest can book.";

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
    body: "Every issue we confirmed, in the order it should be corrected, with the booking check that showed it.",
  },
  {
    title: "Approved change list",
    body: "Each correction your hotel approved, who approved it and how to reverse it.",
  },
  {
    title: "Repeat booking check",
    body: "The same room, dates and conditions checked again after the change, from the guest's side.",
  },
  {
    title: "Handover record",
    body: "What changed, what is still open, which items need a vendor and which rechecks we agreed.",
  },
];

const OFFERS = [
  {
    index: "01",
    title: "Distribution Baseline Audit",
    body: "You do not know yet what is wrong. We find it and put the corrections in order.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "You know what is wrong. We correct it with your approval and check the booking again.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "You want it to stay fixed. We recheck the agreed rates, availability and channels.",
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
              <p className="lede">
                Your systems say the room is on sale. Somewhere between the PMS
                and the booking page, it stopped being one.
              </p>
              <p className="hero-hook">
                InnMetric works with owners, general managers and commercial
                leads of independent hotels and small groups. We trace the
                problem through your PMS, channel manager, booking engine and
                OTA accounts, correct it with your approval and verify what a
                guest can book. One party owns the trace. Your team keeps the
                record.
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
                Write with the problem and the outcome you want. We reply on fit
                and scope. Access and live changes are agreed later with the
                person who approves them.
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
            <h2>Four things your team holds when the work is done.</h2>
            <p className="section-lead">
              Not a slide deck. Working documents the next person on your team
              can pick up without repeating the investigation.
            </p>
          </Reveal>
          <Reveal index={1}>
            <ul className="rows">
              {DELIVERABLES.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
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
            <h2>Three ways to bring us in.</h2>
            <p className="section-lead">
              Pick by where you are. If you are not sure, tell us the problem
              and we will say which one fits.
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

      <section className="section" id="fit">
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
                    You run a PMS, a booking engine and at least two OTAs.
                    Something a guest sees on one of them does not match what
                    your team set.
                  </li>
                  <li>
                    You want one party to own the trace from your systems to
                    the booking page and to tell you plainly what it found.
                  </li>
                  <li>
                    You can bring in the person who approves access and live
                    changes when the work reaches that point.
                  </li>
                </ul>
              </article>
              <article className="card">
                <p className="list-head">Usually not a fit</p>
                <ul className="not-list">
                  <li>Large international chains with a central distribution team already owning this</li>
                  <li>Individually listed homes that are not hotel-operated</li>
                  <li>Properties looking for social media, advertising or review responses</li>
                  <li>Hotels that want pricing or revenue management taken over</li>
                  <li>Teams that need someone to run OTA listings, photos or ranking</li>
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tell us which booking problem you want owned."
        lead="Name the property, the problem and what should be true when it is fixed. We reply with whether it fits our work, what we would check first and what we need from you."
        email
      />
    </>
  );
}
