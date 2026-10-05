import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { CONTACT_CTA } from "@/lib/copy";
import { FIT, NOT_FIT } from "@/lib/services";
import { pageMetadata } from "@/lib/site";
import { t, TAIL } from "@/lib/typeset";

const DESCRIPTION =
  "When the booking page and the rooms you meant to sell disagree, InnMetric traces the gap in your existing systems, makes the changes you approve and checks what a guest can book.";

export const metadata: Metadata = pageMetadata({
  title: "The booking page disagrees with the hotel | InnMetric",
  description: DESCRIPTION,
  path: "/",
});

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

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="frame">
          <div className="hero-copy">
            <span className="label">When the page and the hotel disagree</span>
            <h1>
              {t(
                "You have rooms to sell. The booking page says otherwise.",
                TAIL.heading
              )}
            </h1>
            <p className="lede">
              {t(
                "That split is the work. We trace it through the systems you already run. We change only what you approve. We check what a guest can book."
              )}
            </p>
            <p>
              {t(
                "We don't install a new system. We don't set your rates. We don't sell another login."
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
          </div>
        </div>
      </section>

      <section className="section" id="deliverables">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">What you leave with</span>
            <h2>{t("See what's been checked, changed and left open.")}</h2>
            <p className="section-lead">
              {t(
                "The record is what you can use the next morning. It shows what the page did, what you approved and what is still wrong."
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
            <h2>
              {t(
                "Three ways to start. An audit ends in findings. A repair and a recheck end in a booking check."
              )}
            </h2>
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
            <h2>
              {t(
                "A fit when you already have the systems and the page disagrees with them."
              )}
            </h2>
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
        lead="Tell us what the page shows and what you meant to sell. We'll say whether that disagreement is our work and what we'd check first."
        email
      />
    </>
  );
}
