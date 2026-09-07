import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric FAQ | Hotel distribution questions",
  description:
    "Why the booking engine shows no rooms. Why an OTA rate looks different. What InnMetric will not take on.",
  openGraph: {
    title: "InnMetric FAQ | Hotel distribution questions",
    description:
      "Why the booking engine shows no rooms. Why an OTA rate looks different. What InnMetric will not take on.",
    url: "https://innmetric.com/faq/",
  },
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Why is my hotel booking engine showing no availability?",
    a: "If every hotel on that engine is empty, start with the vendor. If your PMS still shows the room open for those dates and the engine shows none, the mapping, restriction or allotment needs a review. That second case is our work.",
  },
  {
    q: "Why are my hotel rates different on Booking.com?",
    a: "A different public rate is not proof of a fault. Occupancy, cancellation terms or a promotion can make two honest offers look wrong. We compare the same room, dates and guest count before we call it a problem.",
  },
  {
    q: "Do you set up a hotel channel manager?",
    a: "We work on a channel manager that is already live. If guests still cannot buy the stay you meant to sell, we find the setting and you approve the correction. Installing a new channel manager from scratch is outside this service.",
  },
  {
    q: "How do we simplify our hotel rate plans?",
    a: "Too many plans can make mappings and restrictions hard to keep. If the booking check shows that, we will say so. We do not sell a rate-plan redesign as a separate product.",
  },
  {
    q: "Can we outsource hotel revenue management?",
    a: "No. Your hotel keeps pricing. We check whether the public offer matches what you intended. We do not take over yield, pickup or rate decisions.",
  },
  {
    q: "Who can manage our hotel OTA listings?",
    a: "Not us. We do not run listing content, photos or ranking. After a baseline we can recheck the rates, availability and mappings you name. That is not listing management.",
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
