import type { Metadata } from "next";
import Link from "next/link";
import { TourismFlow } from "@/components/BusinessOverview";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { OVERVIEW } from "@/lib/overview";
import { breadcrumb, pageMetadata } from "@/lib/site";
import { t } from "@/lib/typeset";

export const metadata: Metadata = pageMetadata({
  title: "Proposed tourism programme | InnMetric",
  description:
    "A proposed tourism programme where departments hold collected contributions from verified hotel savings and fund improvements through local suppliers.",
  path: "/tourism-programme/",
});

const RESPONSIBILITIES = [
  {
    title: "Verify before collecting",
    body: "InnMetric and the department jointly review the evidence and approve verified savings, contributions and fund payments. Contributions enter the pool only after savings are realised and the agreed amount is collected.",
  },
  {
    title: "Keep the fund with the department",
    body: "The department would handle collections, agreed deductions and payments. Funds could support the contributing hotel or another hotel that needs assistance. Existing departmental support budgets stay separate and every allocation remains traceable.",
  },
  {
    title: "Confirm the work",
    body: "Local suppliers could provide repairs, training or other approved services. The hotel, department and InnMetric confirm the completed work against the agreed scope, with delivery and payment records kept together.",
  },
];

export default function TourismProgrammePage() {
  return (
    <>
      <JsonLd data={breadcrumb("/tourism-programme/", "Tourism programme")} />
      <PageHero eyebrow={OVERVIEW.tourismLabel} title={OVERVIEW.question}>
        <p className="lede">
          {t(
            "A proposed programme for tourism departments: use a collected share of verified hotel savings to pay for improvements and local services. InnMetric would operate the checks and service work."
          )}
        </p>
      </PageHero>

      <section className="section wash">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>{t("From hotel savings to local work.")}</h2>
            <p className="section-lead">{t(OVERVIEW.fundNote)}</p>
          </Reveal>
          <Reveal index={1}>
            <TourismFlow />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="frame stack">
          <Reveal>
            <ul className="rows">
              {RESPONSIBILITIES.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="intro" index={1}>
            <p>
              {t(
                "Hotels can separately buy InnMetric's services and monitoring subscriptions. Those fees stay separate from the programme pool. Programme terms and contribution rates would be agreed before a pilot."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="frame">
          <Reveal className="intro intro-center">
            <h2>{t("Discuss a tourism programme.")}</h2>
            <p className="section-lead">
              {t("Tell us which hotels and local services your department wants to support.")}
            </p>
            <div className="hero-actions">
              <a
                className="button lg"
                href="mailto:hello@innmetric.com?subject=Tourism%20programme"
              >
                Email hello@innmetric.com
              </a>
            </div>
            <nav className="hero-actions" aria-label="Explore hotel services">
              <Link className="button ghost" href="/services/">Hotel services</Link>
              <Link className="button ghost" href="/how-it-works/">How the hotel work runs</Link>
            </nav>
          </Reveal>
        </div>
      </section>
    </>
  );
}
