import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { ProblemWheel } from "@/components/ProblemWheel";
import { Reveal } from "@/components/Reveal";
import { CONTACT_CTA } from "@/lib/copy";
import { t, TAIL } from "@/lib/typeset";

const DESCRIPTION =
  "Rooms available but missing online? InnMetric investigates availability and rate problems in your existing hotel systems, makes approved corrections and checks the result.";

export const metadata: Metadata = {
  title: "Hotel availability and rate problems, investigated | InnMetric",
  description: DESCRIPTION,
  openGraph: {
    title: "Hotel availability and rate problems, investigated | InnMetric",
    description: DESCRIPTION,
    url: "https://innmetric.com/",
  },
  alternates: { canonical: "/" },
};

const DELIVERABLES = [
  {
    title: "What needs attention first",
    body: "A findings register puts the issues in priority order, with the booking evidence and anything still unconfirmed.",
  },
  {
    title: "What changed in your systems",
    body: "An approved change list records each correction, its approver and how to reverse it.",
  },
  {
    title: "What guests can book now",
    body: "Repeat booking checks compare the same room, dates and conditions after a correction.",
  },
  {
    title: "What your team needs to follow up",
    body: "The handover keeps unresolved issues, vendor actions and agreed rechecks in one place.",
  },
];

const OFFERS = [
  {
    index: "01",
    title: "Distribution Baseline Audit",
    body: "Investigate a booking result that doesn't match what your hotel intended.",
    href: "/services/#baseline",
    link: "Baseline audit",
  },
  {
    index: "02",
    title: "Approved Repair Sprint",
    body: "Turn existing findings into approved corrections and checked results.",
    href: "/services/#repair",
    link: "Repair sprint",
  },
  {
    index: "03",
    title: "Ongoing Distribution Control",
    body: "Recheck agreed rates and channels on a schedule, with a dated record of what turns up.",
    href: "/services/#control",
    link: "Ongoing control",
  },
];

const FIT = [
  "Independent hotels, resorts, aparthotels and small groups selling direct and on at least two OTAs",
  "An existing PMS, channel manager and booking engine to investigate",
  "A hotel contact who can arrange access and involve the person approving changes",
];

const NOT_FIT = [
  "Large international chains whose central team already owns distribution",
  "Individually listed homes that are not hotel-operated",
  "Teams seeking system installation, revenue management or OTA content and marketing",
];

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="frame">
          <div className="grid wide-gap home-hero-grid">
            <Reveal className="col-6 hero-copy">
              <span className="label">Hotel distribution support</span>
              <h1>
                {t(
                  "You have rooms to sell. The booking page says otherwise.",
                  TAIL.heading
                )}
              </h1>
              <p className="lede">
                {t(
                  "We trace availability and rate problems through your existing hotel systems. Then we make the changes you approve and check what guests can book."
                )}
              </p>
              <div className="hero-actions">
                <Link className="button lg" href="/contact/">
                  {CONTACT_CTA}
                </Link>
                <Link className="button ghost lg" href="/how-it-works/">
                  See how we work
                </Link>
              </div>
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
            <h2>{t("See what's been checked, changed and left open.")}</h2>
            <p className="section-lead">
              {t(
                "Your records cover the work we agree, from initial findings to the checks after a repair."
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
            <h2>{t("Bring us in to investigate, repair or recheck.")}</h2>
            <p className="section-lead">
              {t(
                "Each is a separate service. You can start with the findings your team already has."
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
            <span className="label">Who we work with</span>
            <h2>{t("For hotels selling across several channels.")}</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="cols-2">
              <article className="card">
                <h3 className="list-head">A fit for this work</h3>
                <ul className="checklist">
                  {FIT.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </article>
              <article className="card">
                <h3 className="list-head">Outside our scope</h3>
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
        title="You don't need to know the cause to start."
        lead="Tell us what guests see and what your hotel expected. We'll explain whether it fits our work and what we'd check first."
        email
      />
    </>
  );
}
