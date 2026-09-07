import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About InnMetric | Hotel distribution control",
  description:
    "The founders check booking problems in the systems you already use. Your hotel approves each change.",
  openGraph: {
    title: "About InnMetric | Hotel distribution control",
    description:
      "The founders check booking problems in the systems you already use. Your hotel approves each change.",
    url: "https://innmetric.com/about/",
  },
  alternates: { canonical: "/about/" },
};

const BELIEFS = [
  {
    title: "Match the stay before calling a rate wrong",
    body: "Occupancy, cancellation terms or a promotion can explain the gap. We compare those before we treat it as a defect.",
  },
  {
    title: "Your hotel approves the change",
    body: "You decide what we are allowed to change. The named approver signs each correction.",
  },
  {
    title: "The guest has to be able to complete the stay",
    body: "A saved setting is not the result. We try the same booking again after the correction.",
  },
  {
    title: "You speak with the people who checked the stay",
    body: "The founders do the review and the approved corrections. You can ask them what they found.",
  },
  {
    title: "Start with the systems you have",
    body: "We first check whether the current stack can sell the stay you meant to sell. A replacement needs a written reason.",
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
          InnMetric follows that issue across those systems. Your hotel approves
          each correction. The same stay is checked again. Open questions stay
          in the record.
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
            <h2>Talk through one stay with the people doing the work.</h2>
            <p className="section-lead">
              Show us the hotel and the booking you expected to sell. An
              approver is needed when a live change is on the table.
            </p>
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
