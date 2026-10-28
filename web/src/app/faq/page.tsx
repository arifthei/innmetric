import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/lib/faq";
import { breadcrumb, ORG_ID, pageMetadata, SITE_URL } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

export const metadata: Metadata = pageMetadata({
  title: "Hotel booking engine and OTA rate questions | InnMetric",
  description:
    "Answers on missing hotel availability, rate differences, channel manager setups and the services InnMetric covers.",
  path: "/faq/",
});

const FAQ_SCHEMA = [
  {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq/#faq`,
    url: `${SITE_URL}/faq/`,
    publisher: { "@id": ORG_ID },
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
  breadcrumb("/faq/", "FAQ"),
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
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
