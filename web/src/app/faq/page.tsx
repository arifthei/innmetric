import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric FAQ | Hotel distribution questions",
  description:
    "Answers about unavailable rooms, rate differences, existing channel-manager setups and the work InnMetric takes on.",
  openGraph: {
    title: "InnMetric FAQ | Hotel distribution questions",
    description:
      "Answers about unavailable rooms, rate differences, existing channel-manager setups and the work InnMetric takes on.",
    url: "https://innmetric.com/faq/",
  },
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Why is my hotel booking engine showing no availability?",
    a: "If the booking engine itself is unavailable, contact its provider. If a room is open in your PMS but unavailable for the same dates online, we review the relevant mappings, restrictions and allotments. That difference alone does not establish the cause.",
  },
  {
    q: "Why are my hotel rates different on Booking.com?",
    a: "Different occupancy, cancellation terms, currency or promotions can produce different prices. We compare the same room and dates under matching conditions before recommending a correction.",
  },
  {
    q: "Do you set up a hotel channel manager?",
    a: "We review channel managers that are already in use. If availability or rates do not appear as your hotel expects, we investigate the setup and propose corrections for approval. A first-time installation is outside our service.",
  },
  {
    q: "How do we simplify our hotel rate plans?",
    a: "We can flag overlapping rate plans when they complicate the mappings or restrictions we're reviewing. Any proposed simplification needs your hotel's approval. We do not offer a standalone rate-plan redesign.",
  },
  {
    q: "Can we outsource hotel revenue management?",
    a: "InnMetric does not take over revenue management. Your hotel keeps control of pricing, yield and rate decisions. We check whether guests can book the offer your team intended.",
  },
  {
    q: "Who can manage our hotel OTA listings?",
    a: "We do not manage OTA listing content, photos or ranking. Our ongoing service rechecks the rates, availability and mappings agreed after a baseline review.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="If a guest cannot book, start here." />
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
