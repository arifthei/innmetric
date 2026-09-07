import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric | A successful push is not a sellable room",
  description:
    "The guest still cannot buy. InnMetric checks that stay with your hotel, applies only approved corrections and tests the same booking again.",
  openGraph: {
    title: "InnMetric | A successful push is not a sellable room",
    description:
      "The guest still cannot buy. InnMetric checks that stay with your hotel, applies only approved corrections and tests the same booking again.",
    url: "https://innmetric.com/",
  },
  alternates: { canonical: "/" },
};

const TICKETS = [
  {
    id: "Ticket 01",
    title: "The room cannot be bought",
    body: "The PMS can show the room open while the booking engine shows none. We match that stay against stop-sells, minimum stays and room mapping.",
    primary: true,
  },
  {
    id: "Ticket 02",
    title: "The public offer drifts",
    body: "An OTA rate that does not match your website is not proof of a fault. We compare the same room, dates, occupancy and terms before we recommend a change.",
    primary: false,
  },
  {
    id: "Ticket 03",
    title: "The fix does not stay fixed",
    body: "If the same stay fails after a later update, the record shows what changed last. That is where the next check starts.",
    primary: false,
  },
];

const VERBS = [
  {
    verb: "Observed",
    body: "We record the room, dates, guest count, currency and channel.",
  },
  { verb: "Approved", body: "Your named approver agrees the change before we touch a live setting." },
  {
    verb: "Changed",
    body: "We make the agreed correction and record how to reverse it.",
  },
  { verb: "Verified", body: "We repeat the booking check and record what the guest sees." },
  {
    verb: "Rechecked",
    body: "We repeat the agreed checks on schedule and flag anything that has returned.",
  },
];

const OFFERS = [
  {
    index: "01",
    title: "Distribution Baseline Audit",
    body: "Know which stays cannot be bought, which differences are expected and which corrections to do first.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "The approved stays become bookable again. Each change has a way back.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "Agreed rates and availability get a scheduled recheck. If a problem returns, it is on the list.",
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
              <span className="label">When the guest cannot buy the stay</span>
              <h1>A successful push is not a sellable room.</h1>
              <p className="lede">The PMS can show open. The guest still cannot buy.</p>
              <p className="hero-hook">
                The guest should be able to buy the stay you meant to sell. We
                check that stay, you approve the change and we test the same
                booking again.
              </p>
              <div className="hero-actions">
                <Link className="button lg" href="/contact/">
                  Request a distribution review
                </Link>
                <Link className="button ghost lg" href="/how-it-works/">
                  See how we work
                </Link>
              </div>
              <p className="hero-why">
                Name the property, the stay that fails and who can approve a
                change.
              </p>
              <p className="hero-decline">
                If this is not our work we will say so before we agree a scope.
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
            <span className="label">What we check</span>
            <h2>Guests cannot complete the stay you meant to sell.</h2>
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
            <span className="label">How we handle a problem</span>
            <h2>Your team can see what changed.</h2>
            <p className="section-lead">
              The record shows the stay we checked, who approved the correction
              and what the guest could book afterwards. Open questions stay
              open.
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
            <span className="label">Ways to work with us</span>
            <h2>Start with one stay that cannot be bought.</h2>
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
                    OTAs. Guests still cannot complete a stay you meant to sell.
                  </li>
                  <li>You can name the person who will approve access and changes.</li>
                  <li>
                    You want the live booking checked, not a leakage number.
                  </li>
                  <li>
                    You want a record of what we found, including what we cannot
                    yet explain.
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
                  <li>Hotels looking to outsource revenue management or pricing</li>
                  <li>Teams that need someone to run OTA listings, photos or ranking</li>
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Talk through one property"
        title="Where does the booking go wrong?"
        lead="Name the property, the stay that fails and who can approve a change. We will say if it is our work before anything is changed."
        email
      />
    </>
  );
}
