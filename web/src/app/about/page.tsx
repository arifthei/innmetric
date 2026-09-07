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
    title: "Compare the same booking conditions",
    body: "Occupancy, cancellation terms or a promotion can explain a rate difference. We check those details before recommending a correction.",
  },
  {
    title: "Your hotel approves the change",
    body: "You decide what we are allowed to change. We explain each proposed correction and record approval before carrying it out.",
  },
  {
    title: "Check what the guest can book",
    body: "We repeat the booking check after a correction. If the result is still wrong, the finding stays open.",
  },
  {
    title: "Speak with the people doing the work",
    body: "The founders carry out the review and approved corrections. You can ask us about the findings and what needs attention next.",
  },
  {
    title: "Start with the systems you have",
    body: "We start with the systems your team already uses. A recommendation to replace one needs a clear reason from the review.",
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
          We take on that investigation with your team and work through the
          corrections you approve. At the handover, you can see what was checked,
          what changed and what still needs an answer.
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
            <h2>Talk through the booking problem with us.</h2>
            <p className="section-lead">
              Start with what your team sees and what the guest sees. We&apos;ll
              discuss whether we can take it on and agree the scope before
              requesting access.
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
