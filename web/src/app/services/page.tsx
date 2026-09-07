import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hotel distribution audit and control services | InnMetric",
  description:
    "Hotel distribution reviews, approved corrections and scheduled rechecks in the PMS, channel manager, booking engine and OTA accounts you already use.",
  openGraph: {
    title: "Hotel distribution audit and control services | InnMetric",
    description:
      "Hotel distribution reviews, approved corrections and scheduled rechecks in the PMS, channel manager, booking engine and OTA accounts you already use.",
    url: "https://innmetric.com/services/",
  },
  alternates: { canonical: "/services/" },
};

const OFFERS = [
  {
    id: "baseline",
    index: "01",
    title: "Distribution Baseline Audit",
    body: "We check where the booking result differs from what your team expects. You get confirmed findings, open questions and proposed corrections in priority order.",
    points: [
      "A map of your systems and active channels",
      "Booking checks with the room, dates and guest count recorded",
      "Room mappings and restrictions checked against the intended setup",
      "Findings in order, with a test for each proposed correction",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    body: "Your hotel approves the correction list before we change anything. We carry out the agreed work, repeat the booking check and record anything that still needs attention.",
    points: [
      "A named hotel approver before any live change",
      "An agreed change list with instructions for reversing each correction",
      "Corrections in the agreed PMS, channel manager, booking engine or OTA",
      "A repeat check of what the guest can see and book",
    ],
  },
  {
    id: "control",
    index: "03",
    title: "Ongoing Distribution Control",
    body: "We recheck the rates, availability and channels agreed with your team. If a problem returns, the earlier findings and change record give the next review a starting point.",
    points: [
      "Repeat checks of agreed rates, availability, mappings and channels",
      "A record of problems found and corrections verified",
      "A change log showing when an earlier problem returns",
      "Check frequency and any monitoring tools defined in the contract",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Start with the booking problem your team is trying to solve."
      >
        <p className="lede">
          We work in the PMS, channel manager, booking engine and OTA accounts
          you already use. The first review establishes what needs attention
          before you decide which corrections to approve.
        </p>
        <div className="hero-actions">
          <Link className="button lg" href="/contact/">
            Let&apos;s Solve It!
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
                  <h2>{offer.title}</h2>
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
            <h2>Where our role stops</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="not-list">
              <li>Your existing PMS, channel manager, booking engine and OTA accounts stay in place.</li>
              <li>Your hotel keeps control of pricing and approvals.</li>
              <li>We do not take over revenue management.</li>
              <li>We do not manage OTA listings, photos or ranking.</li>
              <li>We do not install a new channel manager from scratch.</li>
              <li>Advertising, social media and review responses are outside this service.</li>
              <li>A booking problem alone does not establish its revenue impact.</li>
              <li>If a correction needs a vendor, we record that dependency.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Show us the stay."
        lead="Share the room or rate you want checked and what the guest sees. We'll agree the first piece of work with you before asking for access."
      />
    </>
  );
}
