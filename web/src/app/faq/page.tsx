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
    a: "No. We work with the PMS, channel manager, booking engine and OTA accounts your hotel already uses. We check how they work together, make the corrections you approve and verify the booking result.",
  },
  {
    q: "Is this only a public OTA audit?",
    a: "A public check can show what a guest sees. To understand why, we may also need approved access to your PMS, channel manager, booking engine or OTA extranet. That access is agreed as part of the paid baseline.",
  },
  {
    q: "Do you guarantee more revenue?",
    a: "No. Making a room bookable does not tell us what revenue the hotel would have earned. Measuring a financial result needs reliable hotel data, a defined baseline and an agreed method.",
  },
  {
    q: "Will you change rates without approval?",
    a: "No. Your hotel names the person who can approve changes and agrees the scope. We record proposed changes before carrying them out.",
  },
  {
    q: "Do you need our passwords?",
    a: "Where the system allows it, we use a named account with only the access needed for the work. Please don't send passwords by ordinary email. Access is removed when the agreed work ends.",
  },
  {
    q: "Can you work with our current vendors?",
    a: "Yes. Some issues need a vendor ticket or a change only the vendor can make. We record that dependency so your team can see what needs to happen next.",
  },
  {
    q: "Which properties are a fit?",
    a: "We're set up to work with independent hotels, resorts, aparthotels and small groups that have direct bookings plus at least two active OTAs. An owner, GM or commercial lead must be able to approve access and changes.",
  },
  {
    q: "Do you work with non-hotel lodging?",
    a: "We focus on accommodation operated as a hotel. Individually listed homes and portfolios of other lodging types are outside the service.",
  },
  {
    q: "What does a baseline audit produce?",
    a: "You get a map of the systems involved, a record of what we checked and a prioritized list of findings. Each proposed correction includes a way to test it. We separate confirmed problems from questions that still need an answer.",
  },
  {
    q: "Is ongoing support available?",
    a: "Yes, after the baseline. We agree which rates, availability, restrictions, mappings, promotions and channels to recheck. The contract sets the daily, weekly or monthly schedule and any monitoring tools included.",
  },
  {
    q: "How is pricing determined?",
    a: "It depends on the property's size, systems, channels and access requirements, plus whether you want us to carry out the corrections. We use the first call to agree a fixed initial scope.",
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
