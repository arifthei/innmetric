import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/lib/faq";
import { breadcrumb, ORG_ID, pageMetadata, SITE_URL } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

export const metadata: Metadata = pageMetadata({
  title: "Availability, rates and where the work stops | InnMetric",
  description:
    "Answers on missing availability, rate differences and channel setups and on the work InnMetric does not take: installation, pricing and listing content.",
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
      <PageHero eyebrow="FAQ" title="If the page and the hotel disagree, start here.">
        <p className="lede">
          {t(
            "The answers below are about whether a guest can book what you meant to sell. Installation, pricing and listing content sit outside the work."
          )}
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
        </div>
      </section>
      <CtaBand
        title="Ask us about your situation."
        lead="Tell us which channel is affected, what the page shows and what you meant to sell. We'll say whether our work covers it."
      />
    </>
  );
}
