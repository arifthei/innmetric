import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About InnMetric | Hotel distribution control",
  description:
    "Two founders who take a hotel's booking problem as one piece of work across PMS, channel manager, booking engine and OTA accounts. Your hotel approves each change.",
  openGraph: {
    title: "About InnMetric | Hotel distribution control",
    description:
      "Two founders who take a hotel's booking problem as one piece of work across PMS, channel manager, booking engine and OTA accounts. Your hotel approves each change.",
    url: "https://innmetric.com/about/",
  },
  alternates: { canonical: "/about/" },
};

const BELIEFS = [
  {
    title: "We believe a booking problem needs one owner",
    body: "So we take the trace from your systems to the booking page as one piece of work and report it to one person at your hotel.",
  },
  {
    title: "We believe a rate difference is not a fault until the stay is matched",
    body: "So we compare the same room, dates, occupancy, terms and promotions before we propose any correction.",
  },
  {
    title: "We believe the hotel decides what changes",
    body: "So a named person at your hotel approves each correction before we make it and we record that approval.",
  },
  {
    title: "We believe a fix counts only where the guest sees it",
    body: "So we repeat the booking check after the change. If the result is still wrong, the finding stays open in your record.",
  },
  {
    title: "We believe you should hear from the people doing the work",
    body: "So the founders carry out the review and the approved corrections and answer your questions about them directly.",
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
        title="Someone has to own the problem across the systems."
      >
        <p className="lede">
          You have asked the PMS vendor, the channel manager and the OTA. Each
          one checked its own side and found nothing wrong. The guest still
          cannot book what your team put on sale.
        </p>
        <p className="lede">
          InnMetric takes that problem as one piece of work. We trace it across
          the systems, correct it with your approval and hand you a record of
          what was checked, what changed and what still needs an answer.
        </p>
      </PageHero>

      <section className="section wash">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">How we work</span>
            <h2>What we believe, so what we do</h2>
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
            <h2>Tell us which booking problem you want owned.</h2>
            <p className="section-lead">
              Name the property, the problem and the outcome you want. We reply
              on fit and agree the scope before asking for any access.
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
