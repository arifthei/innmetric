import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric FAQ | Hotel distribution audit and control",
  description:
    "Answers about hotel system access, approvals, pricing, audits, implementation, monitoring and data handling.",
  openGraph: {
    title: "InnMetric FAQ | Hotel distribution audit and control",
    description:
      "Answers about hotel system access, approvals, pricing, audits, implementation, monitoring and data handling.",
    url: "https://innmetric.com/faq/",
  },
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Is InnMetric a channel manager or PMS?",
    a: "No. InnMetric works across the hotel systems you already use. It audits their combined commercial behavior then supports approved corrections and verification.",
  },
  {
    q: "Is this only a public OTA audit?",
    a: "No. A public review can identify a symptom. The paid baseline may include authorized work inside the PMS, channel manager, booking engine and OTA extranets so the cause can be verified.",
  },
  {
    q: "Do you guarantee more revenue?",
    a: "No. Distribution corrections can remove commercial friction but InnMetric does not invent revenue impact. A financial claim requires reliable hotel data, a defined baseline and an agreed measurement method.",
  },
  {
    q: "Will you change rates without approval?",
    a: "No. The hotel names the approver and the permitted scope. Material changes are logged before implementation.",
  },
  {
    q: "Do you need our passwords?",
    a: "Use named accounts with the lowest practical access level whenever the system permits it. Credentials should not be sent through ordinary email. Access is removed when the agreed work ends.",
  },
  {
    q: "Can you work with our current vendors?",
    a: "Yes. InnMetric is designed to work across the existing stack. Some issues require a vendor ticket or vendor-led change. That dependency is documented rather than hidden.",
  },
  {
    q: "Which properties are a fit?",
    a: "The strongest fit is an independent hotel, resort, aparthotel or small hotel group with a direct booking path plus two or more active OTAs. A hotel owner, GM or commercial lead must be able to approve access and changes.",
  },
  {
    q: "Do you work with non-hotel lodging?",
    a: "The current focus is hotel-operated accommodation. Individually listed homes and non-hotel lodging portfolios are outside the primary scope.",
  },
  {
    q: "What does a baseline audit produce?",
    a: "The output includes a system map, evidence register, confirmed findings, unresolved hypotheses, a prioritized correction backlog and the QA test for each recommended action.",
  },
  {
    q: "Is ongoing support available?",
    a: "Yes after the baseline. The cadence may include pricing, availability, restriction, mapping, promotion and live-channel checks. The contract defines which controls are daily, weekly or monthly.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing depends on property size, stack complexity, channel count, access requirements and whether implementation is included. The first call is used to define a fixed initial scope.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
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
                Request a distribution review
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
