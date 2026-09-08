import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

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
    a: "If the engine is down, start with its provider. If it loads but shows no rooms your team expects to sell, we compare the booking result with your settings. Mappings, restrictions and allotments are places to check, not a diagnosis from the public page.",
  },
  {
    q: "Why are my hotel rates different on Booking.com?",
    a: "First compare the same room, dates, occupancy, cancellation terms, currency, taxes and promotions. A difference can be intentional. If it remains, we check what your hotel intended before proposing a correction.",
  },
  {
    q: "Do you set up a hotel channel manager?",
    a: "We review the channel manager you already run and carry out approved corrections. For a first-time installation, start with the vendor's onboarding team.",
  },
  {
    q: "How do we simplify our hotel rate plans?",
    a: "Overlapping plans may make room mappings or restrictions harder to follow. We can flag that during a review and propose changes for your approval. We do not offer rate-plan redesign as a standalone service.",
  },
  {
    q: "Can we outsource hotel revenue management?",
    a: "InnMetric does not take over revenue management. Your hotel decides pricing and yield. We check whether guests can book the rates and availability you intended on the agreed channels.",
  },
  {
    q: "Who can manage our hotel OTA listings?",
    a: "You need a provider that covers listing content, photos and visibility. InnMetric's ongoing work is different: scheduled checks of agreed rates, availability and mappings. We do not manage listing content or ranking.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Before you bring us in.">
        <p className="lede">
          {t(
            "Answers to common booking questions and what InnMetric can take on. For anything else, email"
          )}{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </p>
      </PageHero>
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
