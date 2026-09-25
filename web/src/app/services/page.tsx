import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SERVICE_BOUNDARIES, SERVICE_OFFERS } from "@/lib/services";
import { breadcrumb, ORG_ID, pageMetadata, SITE_URL } from "@/lib/site";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Compare InnMetric's hotel distribution audit, approved repair sprint and scheduled checks. See the deliverables, responsibilities and service limits.";

export const metadata: Metadata = pageMetadata({
  title: "Hotel distribution audit, repair and control | InnMetric",
  description: DESCRIPTION,
  path: "/services/",
});

const OFFERS = SERVICE_OFFERS;
const BOUNDARIES = SERVICE_BOUNDARIES;

const SERVICES_SCHEMA = [
  ...OFFERS.map((offer) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/services/#${offer.id}`,
    name: offer.title,
    serviceType: "Hotel distribution service",
    description: `${offer.state} ${offer.body}`,
    url: `${SITE_URL}/services/#${offer.id}`,
    provider: { "@id": ORG_ID },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Independent hotels, resorts, aparthotels and small hotel groups",
    },
  })),
  breadcrumb("/services/", "Services"),
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={SERVICES_SCHEMA} />
      <PageHero eyebrow="Services" title="Choose an audit, a repair or ongoing checks.">
        <p className="lede">
          {t(
            "Each service works with the systems you already use. Here's what you get and where our work stops."
          )}
        </p>
        <nav className="section-links" aria-label="Compare services">
          <Link className="inline" href="#baseline">Audit</Link>
          <Link className="inline" href="#repair">Repair</Link>
          <Link className="inline" href="#control">Ongoing checks</Link>
        </nav>
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
                    <h2>{t(offer.title)}</h2>
                    <p className="row-state">{t(offer.state)}</p>
                  </div>
                  <div>
                    <p>{t(offer.body)}</p>
                    <ul className="checklist">
                      {offer.points.map((point) => (
                        <li key={point}>{t(point)}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="scope">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">Scope</span>
            <h2>{t("Where our work starts and stops.")}</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="rows">
              {BOUNDARIES.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        lead="Describe the problem and any work already done. We'll suggest a starting point, including if you need a different kind of provider."
      />
    </>
  );
}
