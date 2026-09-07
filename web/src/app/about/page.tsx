import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About InnMetric | Hotel distribution control",
  description:
    "Meet the founders who work with your hotel to investigate booking problems, carry out approved corrections and check the result across your existing systems.",
  openGraph: {
    title: "About InnMetric | Hotel distribution control",
    description:
      "Meet the founders who work with your hotel to investigate booking problems, carry out approved corrections and check the result across your existing systems.",
    url: "https://innmetric.com/about/",
  },
  alternates: { canonical: "/about/" },
};

const BELIEFS = [
  {
    title: "Check before drawing conclusions",
    body: "A different public rate may have a reasonable explanation. We compare the booking conditions and check the relevant settings before deciding that something is wrong.",
  },
  {
    title: "Your hotel approves the change",
    body: "You decide what we are allowed to change. We agree each correction with the person your hotel has named to approve it.",
  },
  {
    title: "Check what the guest can book",
    body: "After a correction, we repeat the booking check. A saved setting on its own doesn't tell us whether the result is right.",
  },
  {
    title: "Work directly with the founders",
    body: "We carry out the review and agreed corrections ourselves. You can speak with the people who checked the issue about what they found and what happens next.",
  },
  {
    title: "Start with the systems you have",
    body: "We first check whether your current setup can support the result you need. Any recommendation to replace a system needs a clear reason.",
  },
];

const FOUNDERS = [
  {
    name: "Tunahan Aras, Co-founder and Hotel Distribution Lead",
    body: [
      "Tunahan has worked with rates, restrictions, room and rate mappings, reservation flows and OTA operations. His experience includes hotel partner cases in channel manager environments.",
      "He looks at how the hotel's setup behaves and which settings need a closer check.",
    ],
  },
  {
    name: "Mert Carikci, Co-founder and Product Operations Lead",
    body: [
      "Mert's background is in product ownership and systems analysis across high-volume regulated platforms, live operations and products with complex integrations.",
      "He keeps the findings, approvals, change records and tests organized so the team can follow the work.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Someone needs to follow the problem across the systems."
      >
        <p className="lede">
          Your team may have checked the PMS, spoken to the channel manager and
          looked at the OTA. The guest is still seeing something different.
        </p>
        <p className="lede">
          We help follow that issue across the systems involved, work through the
          corrections your hotel approves and check the booking again. You get a
          record of what changed and what still needs an answer.
        </p>
      </PageHero>

      <section className="section wash">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>What you can expect from us</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="rows">
              {BELIEFS.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>Founders</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="cols-2">
              {FOUNDERS.map((founder) => (
                <article className="card" key={founder.name}>
                  <h3>{founder.name}</h3>
                  {founder.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="frame">
          <Reveal className="intro intro-center">
            <span className="label">Working with us</span>
            <h2>Talk through one property with the people doing the work.</h2>
            <p className="section-lead">
              You&apos;ll speak directly with us about the property and the booking
              problem. We&apos;ll agree access, approvals and a practical scope
              before the work begins.
            </p>
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
