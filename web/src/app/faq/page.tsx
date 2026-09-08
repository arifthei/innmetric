import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric FAQ | Hotel distribution questions",
  description:
    "Plain answers for hotel decision makers on unavailable rooms, rate differences, channel-manager setups and where InnMetric's work stops.",
  openGraph: {
    title: "InnMetric FAQ | Hotel distribution questions",
    description:
      "Plain answers for hotel decision makers on unavailable rooms, rate differences, channel-manager setups and where InnMetric's work stops.",
    url: "https://innmetric.com/faq/",
  },
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Why is my hotel booking engine showing no availability?",
    a: "If the booking engine itself is down, its provider is the first call. If the engine is up, the PMS shows rooms for those dates and the engine still shows none, the gap is usually somewhere in mappings, restrictions or allotments. That is a configuration review. Tell us the room and dates and we will reproduce it from the guest's side before proposing anything.",
  },
  {
    q: "Why are my hotel rates different on Booking.com?",
    a: "A different price is not proof of a fault. Occupancy, cancellation terms, currency, taxes and promotions all change what a guest sees. We compare the same room and dates under matching conditions first. If the offers still differ, that becomes a finding with a proposed correction for your approval.",
  },
  {
    q: "Do you set up a hotel channel manager?",
    a: "No. We work on the channel manager you already run. If rates or availability are not reaching a channel the way your team set them, we trace the setup and propose corrections for approval. If you have no channel manager yet, the vendor's onboarding is the right route.",
  },
  {
    q: "How do we simplify our hotel rate plans?",
    a: "When overlapping rate plans are what makes the mappings or restrictions hard to trace, we flag it in the findings register and propose a simpler structure for your approval. We do not sell a standalone rate-plan redesign. If that is the whole job, tell us and we will say so.",
  },
  {
    q: "Can we outsource hotel revenue management?",
    a: "Not to us. Pricing, yield and rate decisions stay with your hotel. Our job is narrower: making sure the rate and availability your team decided on is what a guest can actually book, on every channel you sell through.",
  },
  {
    q: "Who can manage our hotel OTA listings?",
    a: "Listing content, photos and ranking are marketing work and we do not do it. What we do on an ongoing basis is recheck the rates, availability and mappings agreed after a baseline review and tell you when one of them moved.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="The questions hotel teams search before they write to us.">
        <p className="lede">
          Short answers on what we take on and where the line sits. If your
          question is not here, ask it in the form and we will answer it there.
        </p>
      </PageHero>
      <section className="section wash">
        <div className="frame stack">
          <Reveal>
            <div className="faq-list">
              {FAQ.map((item) => (
                <article className="faq-item" key={item.q}>
                  <h2>{item.q}</h2>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="hero-actions">
              <Link className="button lg" href="/contact/">
                Let&apos;s Solve It!
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
