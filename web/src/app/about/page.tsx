import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About InnMetric | Hotel distribution control",
  description:
    "InnMetric combines hotel distribution judgment with systems analysis to audit, repair and verify commercial outcomes across the booking stack.",
  openGraph: {
    title: "About InnMetric | Hotel distribution control",
    description:
      "InnMetric combines hotel distribution judgment with systems analysis to audit, repair and verify commercial outcomes across the booking stack.",
    url: "https://innmetric.com/about/",
  },
  alternates: { canonical: "/about/" },
};

const BELIEFS = [
  {
    title: "Evidence before accusation",
    body: "A public difference is an observation. It is not proof of an internal defect or vendor failure.",
  },
  {
    title: "Approval before change",
    body: "The hotel retains commercial authority. InnMetric implements only the agreed correction.",
  },
  {
    title: "Live outcome before closure",
    body: "A saved configuration is not the final result. The guest-facing offer must be checked again.",
  },
  {
    title: "Service before software",
    body: "The operating method is being validated through founder-delivered work. Software will automate repeated and proven controls rather than invent a workflow before the work is understood.",
  },
  {
    title: "Existing systems before forced replacement",
    body: "The first question is whether the current stack can be made commercially correct. A replacement recommendation requires evidence.",
  },
];

const FOUNDERS = [
  {
    name: "Tunahan Aras, Co-founder and Hotel Distribution Lead",
    body: [
      "Tunahan brings hands-on experience with rates, restrictions, room and rate mapping, reservation flows, OTA operations and hotel partner cases inside channel-manager environments.",
      "He owns the hotel distribution judgment that separates a visible difference from a real control problem.",
    ],
  },
  {
    name: "Mert Carikci, Co-founder and Product Operations Lead",
    body: [
      "Mert brings product ownership and systems-analysis experience across high-volume regulated platforms, live operations and integration-heavy products.",
      "He owns evidence structure, approval states, delivery workflow, QA and the path from expert work to a repeatable product.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="InnMetric exists because connectivity is not accountability."
      >
        <p className="lede">
          Hotels buy capable systems for property management, distribution, direct
          booking, pricing and channel sales. Yet the commercial result depends on
          how those systems, rules and teams behave together.
        </p>
        <p className="lede">
          When something goes wrong each party can be technically correct inside
          its own boundary. The hotel still has to find the defect, coordinate the
          repair and prove the live outcome. InnMetric is designed to own that
          control loop.
        </p>
      </PageHero>

      <section className="section wash">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>What we believe</h2>
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
            <span className="label">Current stage</span>
            <h2>Speak directly with the founders about one property.</h2>
            <p className="section-lead">
              InnMetric is an early-stage founder-led service. The first commercial
              engagements are scoped around independent hotels where access,
              approval and live verification can be handled directly.
              This site does not publish customer logos, revenue-uplift percentages
              or partner claims.
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
