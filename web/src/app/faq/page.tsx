import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

export const metadata: Metadata = {
  title: "InnMetric FAQ | Hotel distribution questions",
  description:
    "Answers on missing hotel availability, rate differences, channel manager setups and the services InnMetric covers.",
  openGraph: {
    title: "InnMetric FAQ | Hotel distribution questions",
    description:
      "Answers on missing hotel availability, rate differences, channel manager setups and the services InnMetric covers.",
    url: "https://innmetric.com/faq/",
  },
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Why is my hotel booking engine showing no availability?",
    a: "If the booking engine won't load, contact its provider. If it loads but omits rooms you expect to sell, compare the setup with the booking result. Room mappings, restrictions and allotments may need checking. We investigate that gap with your team.",
  },
  {
    q: "Why are my hotel rates different on Booking.com?",
    a: "Compare the same room, dates, occupancy, cancellation terms, currency, taxes and promotions first. Different offers can legitimately have different rates. If those conditions match and the difference wasn't intended, we can investigate it with your team.",
  },
  {
    q: "Do you set up a hotel channel manager?",
    a: "We review and correct an existing setup with your approval. For a first-time channel manager installation, start with the vendor's onboarding team.",
  },
  {
    q: "How do we simplify our hotel rate plans?",
    a: "We can flag overlapping plans when they affect mappings or restrictions and propose corrections as part of that review. Your hotel keeps the pricing decisions. Standalone rate-plan redesign is outside our service.",
  },
  {
    q: "Can we outsource hotel revenue management?",
    a: "InnMetric doesn't take over revenue management. Your team sets prices and yield strategy; we investigate whether your systems make those rates and rooms bookable on the agreed channels.",
  },
  {
    q: "Who can manage our hotel OTA listings?",
    a: "For content, photos and visibility, look for an OTA listing management service. InnMetric checks rates, availability and mappings on agreed channels. Our ongoing service doesn't manage listings or ranking.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Availability, rates and where we can step in." />
      <section className="section wash">
        <div className="frame stack">
          <Reveal>
            <div className="faq-list">
              {FAQ.map((item) => (
                <article className="faq-item" key={item.q}>
                  <h2>{t(item.q)}</h2>
                  <p>{t(item.a)}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand
        title="Ask us about your situation."
        lead="Tell us which channel is affected and what you expected to see. We'll explain whether our work covers it."
      />
    </>
  );
}
