import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

const DESCRIPTION =
  "Three engagements for hotel decision makers: a baseline audit when you do not know what is wrong, an approved repair sprint when you do and ongoing control when it has to stay fixed.";

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
    state: "You do not know yet what is wrong.",
    body: "Guests see something your team did not set and nobody can say which system produced it. We map your channels, reproduce the problems from the guest's side and tell you what needs correcting and in which order.",
    points: [
      "A map of your systems, active channels and who owns each account",
      "Booking checks with room, dates, occupancy and conditions recorded",
      "Room and rate mappings and restrictions checked against the intended setup",
      "A findings register in priority order, each with the test that will confirm the fix",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    state: "You know what is wrong and want it corrected.",
    body: "You have a findings register, from our audit or your own. We propose the corrections, your approver signs each one off and we make the changes in your systems. Then we check the booking again and record what still needs attention.",
    points: [
      "A named approver at your hotel before any live change",
      "An approved change list with a way to reverse each correction",
      "Corrections made in the agreed PMS, channel manager, booking engine or OTA account",
      "A repeat booking check of what the guest can see and book",
    ],
  },
  {
    id: "control",
    index: "03",
    title: "Ongoing Distribution Control",
    state: "You want it to stay fixed.",
    body: "Problems that were corrected once can return after a rate change, a mapping update or a vendor release. We recheck the rates, availability and channels your team agreed, on the schedule you agreed and tell you when something moved.",
    points: [
      "Repeat checks of agreed rates, availability, mappings and channels",
      "A running record of problems found and corrections verified",
      "A change log that shows when an earlier problem returned",
      "Check frequency and any monitoring tools set out in the agreement",
    ],
  },
];

const BOUNDARIES = [
  "Your PMS, channel manager, booking engine and OTA accounts stay in place. We work inside them.",
  "Pricing, yield and rate decisions stay with your hotel. We check that guests can book what you decided.",
  "Every live change is approved by a named person at your hotel before we make it.",
  "We do not manage OTA listing content, photos or ranking.",
  "We do not install a channel manager from scratch. We review the one you run.",
  "Advertising, social media and review responses are outside this service.",
  "A booking problem on its own does not tell us its revenue impact. We do not estimate one.",
  "If a correction needs your vendor, we record the dependency and what was asked of them.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Choose by where you are.">
        <p className="lede">
          Three engagements, one for each state a hotel is usually in. You do
          not know yet what is wrong. You know and want it corrected. You want
          it to stay fixed. All three run inside the systems you already use.
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
                    <h2>{offer.title}</h2>
                    <p className="row-state">{offer.state}</p>
                  </div>
                  <div>
                    <p>{offer.body}</p>
                    <ul className="checklist">
                      {offer.points.map((point) => (
                        <li key={point}>{point}</li>
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
            <span className="label">Boundaries</span>
            <h2>What you can rely on us not to touch.</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="not-list">
              {BOUNDARIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which one fits?"
        lead="Tell us the problem and what should be true when it is fixed. We will say which engagement it is or whether it sits outside our work."
      />
    </>
  );
}
