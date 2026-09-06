import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric | A successful push is not a sellable room",
  description:
    "The PMS can show open. The guest still cannot buy. InnMetric finds the defect, gets named approval, changes the agreed system and retests where the guest buys.",
  openGraph: {
    title: "InnMetric | A successful push is not a sellable room",
    description:
      "The PMS can show open. The guest still cannot buy. InnMetric finds the defect, gets named approval, changes the agreed system and retests where the guest buys.",
    url: "https://innmetric.com/",
  },
  alternates: { canonical: "/" },
};

const TICKETS = [
  {
    id: "Ticket 01",
    title: "The room cannot be bought",
    body: "Inventory looks open in one system. A stop-sell, length-of-stay rule or incomplete mapping keeps it off a channel. That is the failure a GM feels first.",
    primary: true,
  },
  {
    id: "Ticket 02",
    title: "The public offer drifts",
    body: "Refundable and non-refundable rates lose their intended relationship. Occupancy pricing breaks. Promotions stack in a way nobody intended.",
    primary: false,
  },
  {
    id: "Ticket 03",
    title: "The fix does not stay fixed",
    body: "A change is applied without a complete record. Another update reverses it. The same problem returns without a clear owner.",
    primary: false,
  },
];

const VERBS = [
  {
    verb: "Observed",
    body: "under recorded dates, occupancy, currency and channel conditions.",
  },
  { verb: "Approved", body: "by a named hotel owner before any live change." },
  {
    verb: "Changed",
    body: "in the agreed PMS, channel manager, booking engine or OTA.",
  },
  { verb: "Verified", body: "on the live path where the guest buys." },
  {
    verb: "Rechecked",
    body: "on the agreed schedule so the issue cannot quietly return.",
  },
];

const OFFERS = [
  {
    index: "01",
    title: "Distribution Baseline Audit",
    body: "Prove what is wrong, what is only suspected and what should be fixed first.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "Turn named findings into controlled changes with QA and a rollback note.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "Recheck agreed pricing, availability, mapping and channel outcomes after the baseline.",
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
              <span className="label">The desk can quote it. The public path still refuses it.</span>
              <h1>A successful push is not a sellable room.</h1>
              <p className="lede">The PMS can show open. The guest still cannot buy.</p>
              <p className="hero-hook">
                Connectivity is not a guest who can pay. If the live path is wrong
                the night audit does not save you.
              </p>
              <div className="hero-actions">
                <Link className="button lg" href="/contact/">
                  Request a distribution review
                </Link>
                <Link className="button ghost lg" href="/how-it-works/">
                  See how the work closes
                </Link>
              </div>
              <p className="hero-why">
                Write if you can name the property, the failing path and an
                approver.
              </p>
              <p className="hero-decline">
                If this is not the work we will say so. We do not take brochure
                jobs or low-hanging fruit.
              </p>
            </Reveal>
            <div className="col-6">
              <ProblemWheel />
            </div>
          </div>
        </div>
      </section>

      <section className="section wash" id="problem">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">What breaks on Thursday</span>
            <h2>The stack can be connected while the offer is wrong.</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="cols-3">
              {TICKETS.map((ticket) => (
                <article
                  className={ticket.primary ? "card primary" : "card"}
                  key={ticket.id}
                >
                  <span className="ticket-id">{ticket.id}</span>
                  <h3>{ticket.title}</h3>
                  <p className="push">{ticket.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark" id="record">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">How a defect closes</span>
            <h2>Observed. Approved. Changed. Verified. Rechecked.</h2>
            <p className="section-lead">
              InnMetric finds the defect, gets named approval, changes the agreed
              system and retests where the guest buys. That file is how a defect
              closes.
            </p>
          </Reveal>
          <Reveal index={1}>
            <ol className="verbs">
              {VERBS.map((item) => (
                <li key={item.verb}>
                  <strong>{item.verb}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section" id="services">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">What you buy</span>
            <h2>Start with diagnosis. Repair only what is approved. Keep control after.</h2>
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
                <p className="list-head">This is the work</p>
                <ul className="checklist">
                  <li>
                    You already run a PMS, a booking engine and at least two
                    OTAs. The guest-facing result still drifts.
                  </li>
                  <li>You can name an approver before anyone touches a live system.</li>
                  <li>
                    You care that a room can be bought, not that a push reported
                    success.
                  </li>
                  <li>
                    You would rather see a recorded observation than an invented
                    leakage number.
                  </li>
                </ul>
              </article>
              <article className="card">
                <p className="list-head">Usually not a fit</p>
                <ul className="not-list">
                  <li>Large international chains with centralized distribution teams</li>
                  <li>Individually listed homes that are not hotel-operated</li>
                  <li>Properties seeking only social media, advertising or review responses</li>
                  <li>Teams that cannot authorize access or name an approver</li>
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Start with the property"
        title="Tell us which room, rate or channel is behaving incorrectly."
        lead="Write if you can name the property, the failing path and an approver. If this is not the work we will say so. No live change without named approval. No invented revenue claims."
        email
      />
    </>
  );
}
