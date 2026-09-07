import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hotel distribution audit and control services | InnMetric",
  description:
    "Baseline audits, approved system corrections and ongoing distribution control for independent hotels using PMS, channel-manager, booking-engine and OTA systems.",
  openGraph: {
    title: "Hotel distribution audit and control services | InnMetric",
    description:
      "Baseline audits, approved system corrections and ongoing distribution control for independent hotels using PMS, channel-manager, booking-engine and OTA systems.",
    url: "https://innmetric.com/services/",
  },
  alternates: { canonical: "/services/" },
};

const OFFERS = [
  {
    id: "baseline",
    index: "01",
    title: "Distribution Baseline Audit",
    body: "Before changing settings, we check how the property is being sold and separate confirmed problems from things that still need investigation. You get a clear order for the work that follows.",
    points: [
      "A map of your systems and active channels",
      "Booking checks with the room, dates and guest count recorded",
      "Room mappings and restrictions checked against the intended setup",
      "A prioritized list of findings and proposed corrections",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    body: "Once your hotel approves the change list, we make the agreed corrections and check the booking result again. Each change has a record and a way back if it needs to be reversed.",
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
    body: "After the initial work, we return to the agreed checks on a schedule set with your team. If something changes or a problem returns, it goes back on the list.",
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
          We work inside the PMS, channel manager, booking engine and OTA accounts
          you already use. First we check what&apos;s happening, then agree which
          corrections to make and how to verify them.
        </p>
        <div className="hero-actions">
          <Link className="button lg" href="/contact/">
            Request a distribution review
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
              <li>Advertising, social media and review responses are outside this service.</li>
              <li>A booking problem alone does not establish its revenue impact.</li>
              <li>If a correction needs a vendor, we record that dependency.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Tell us where the booking goes wrong."
        lead="Share the room or rate involved, what your team sees and who can approve changes. We'll agree the first piece of work before anything is changed."
      />
    </>
  );
}
