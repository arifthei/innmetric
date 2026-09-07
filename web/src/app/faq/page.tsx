import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "InnMetric FAQ | Hotel distribution audit and control",
  description:
    "Why the booking engine shows no rooms. Why an OTA rate looks different. What InnMetric will not take on.",
  openGraph: {
    title: "InnMetric FAQ | Hotel distribution audit and control",
    description:
      "Why the booking engine shows no rooms. Why an OTA rate looks different. What InnMetric will not take on.",
    url: "https://innmetric.com/faq/",
  },
  alternates: { canonical: "/faq/" },
};

const FAQ = [
  {
    q: "Is InnMetric a channel manager or PMS?",
    a: "No. We work in the PMS, channel manager, booking engine and OTA accounts your hotel already uses. You approve each correction. We check whether the guest can complete the stay.",
  },
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
  {
    q: "Is this only a public OTA audit?",
    a: "A public check can show what a guest sees. To understand why, we may also need approved access to your PMS, channel manager, booking engine or OTA extranet. That access is agreed as part of the paid baseline.",
  },
  {
    q: "Do you guarantee more revenue?",
    a: "No. Making a room bookable does not tell us what the hotel would have earned. A financial result needs hotel data, a defined baseline and an agreed method.",
  },
  {
    q: "Will you change rates without approval?",
    a: "No. Your hotel names the person who can approve changes. We record proposed changes before carrying them out.",
  },
  {
    q: "Do you need our passwords?",
    a: "Where the system allows it, we use a named account with only the access needed for the work. Please don't send passwords by ordinary email. Access is removed when the agreed work ends.",
  },
  {
    q: "Can you work with our current vendors?",
    a: "Yes. Some issues need a vendor ticket or a change only the vendor can make. We record that so your team can see what happens next.",
  },
  {
    q: "Which properties are a fit?",
    a: "Independent hotels, resorts, aparthotels and small groups with direct bookings plus at least two active OTAs. An owner, GM or commercial lead must be able to approve access and changes.",
  },
  {
    q: "Do you work with non-hotel lodging?",
    a: "We work with accommodation operated as a hotel. Individually listed homes and other lodging portfolios are outside the service.",
  },
  {
    q: "What does a baseline audit produce?",
    a: "A map of the systems involved, a record of the stays we checked and a list of findings in order. Each proposed correction includes a way to test it. Confirmed problems stay separate from questions that still need an answer.",
  },
  {
    q: "Is ongoing support available?",
    a: "Yes, after the baseline. We agree which rates, availability, restrictions, mappings, promotions and channels to recheck. The contract sets the daily, weekly or monthly schedule.",
  },
  {
    q: "How is pricing determined?",
    a: "It depends on the property's size, systems, channels and access, plus whether you want us to carry out the corrections. The first call agrees a fixed initial scope.",
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
                Request a distribution review
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
