import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric | A successful push is not a sellable room",
  description:
    "InnMetric helps hotel teams find booking problems, make the corrections they approve and check what guests can see and book in their existing systems.",
  openGraph: {
    title: "InnMetric | A successful push is not a sellable room",
    description:
      "InnMetric helps hotel teams find booking problems, make the corrections they approve and check what guests can see and book in their existing systems.",
    url: "https://innmetric.com/",
  },
  alternates: { canonical: "/" },
};

const TICKETS = [
  {
    id: "Ticket 01",
    title: "The room cannot be bought",
    body: "A room can be available in the PMS and closed elsewhere. We check stop-sells, minimum stays and room mappings against the booking the guest is trying to make.",
    primary: true,
  },
  {
    id: "Ticket 02",
    title: "The public offer drifts",
    body: "A rate difference may be expected once occupancy, cancellation terms or promotions are taken into account. We compare like for like before recommending a change.",
    primary: false,
  },
  {
    id: "Ticket 03",
    title: "The fix does not stay fixed",
    body: "When a problem returns, the team needs to know what changed since the last check. A record of the repair gives us somewhere to start.",
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
    body: "Find out what is happening, what still needs checking and which corrections should come first.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "Make the corrections your hotel approves, check the result and keep a record of how to reverse each change.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "Return to the agreed rates, availability and channel checks on a schedule set with your team.",
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
              <span className="label">Hotel distribution support</span>
              <h1>A successful push is not a sellable room.</h1>
              <p className="lede">The PMS can show open. The guest still cannot buy.</p>
              <p className="hero-hook">
                We work with your team to find where the booking goes wrong,
                make the changes you approve and check the result on the same
                room and dates.
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
                Send us the property, the booking problem and the person who can
                approve changes.
              </p>
              <p className="hero-decline">
                If the issue falls outside our work, we&apos;ll tell you before
                agreeing a scope.
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
            <h2>Where a booking can go wrong.</h2>
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
            <h2>Your team can see what changed and what needs checking next.</h2>
            <p className="section-lead">
              We keep a record you can follow: what we saw, who approved the
              correction and what happened when we checked again. Findings that
              still need an answer stay open.
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
            <h2>Start with a review of the problem your team is seeing.</h2>
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
                    You already use a PMS, a booking engine and at least two
                    OTAs, but what guests see does not match what your team expects.
                  </li>
                  <li>You can name the person who will approve access and changes.</li>
                  <li>
                    You want us to check the booking result as well as the
                    settings behind it.
                  </li>
                  <li>
                    You want a record of what we found, including what we cannot
                    yet explain or measure.
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
        eyebrow="Talk through one property"
        title="Where does the booking go wrong?"
        lead="Tell us what your team sees, what the guest sees and who can approve changes. We'll tell you whether we can help and agree the work before changing anything."
        email
      />
    </>
  );
}
