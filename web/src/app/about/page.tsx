import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

export const metadata: Metadata = {
  title: "About InnMetric | Hotel distribution control",
  description:
    "Meet the founders who investigate your hotel's booking problems, carry out approved changes and keep your team informed.",
  openGraph: {
    title: "About InnMetric | Hotel distribution control",
    description:
      "Meet the founders who investigate your hotel's booking problems, carry out approved changes and keep your team informed.",
    url: "https://innmetric.com/about/",
  },
  alternates: { canonical: "/about/" },
};

const BELIEFS = [
  {
    title: "Someone needs to follow the whole problem",
    body: "We investigate across the agreed systems and keep one person at your hotel informed, including when a vendor needs to act.",
  },
  {
    title: "Different offers can have different rates",
    body: "We compare the booking conditions and confirm what your hotel intended before proposing a change.",
  },
  {
    title: "Your hotel makes the decisions",
    body: "You choose which corrections go ahead. We record the named approval before changing anything live.",
  },
  {
    title: "A changed setting needs a booking check",
    body: "We repeat the check after the correction. If the result is still wrong, the issue stays open.",
  },
  {
    title: "You should be able to ask the person doing the work",
    body: "The founders carry out the review and approved corrections. We answer your questions directly.",
  },
];

const FOUNDERS = [
  {
    name: "Tunahan Aras",
    role: "Hotel Distribution Lead",
    body: [
      "Tunahan has worked with rates, restrictions, room and rate mappings, reservation flows and OTA operations. His experience includes hotel partner cases in channel manager environments.",
      "He looks at how the hotel's setup behaves and which settings need a closer check.",
    ],
  },
  {
    name: "Mert Carikci",
    role: "Product Operations Lead",
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
        title="You work directly with the founders."
      >
        <p className="lede">
          {t(
            "A booking problem can cross several systems. We follow it through the agreed setup and keep your team informed of what we find, what changes and what still needs an answer."
          )}
        </p>
      </PageHero>

      <section className="section wash">
        <div className="frame stack">
          <Reveal className="intro">
            <span className="label">How we work</span>
            <h2>{t("What you can expect from us.")}</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="rows">
              {BELIEFS.map((item) => (
                <li className="pair" key={item.title}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
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
                <article className="card founder" key={founder.name}>
                  <h3>
                    <span className="founder-name">{founder.name}</span>
                    <span className="founder-role">
                      <span className="keep">Co-founder</span> and {founder.role}
                    </span>
                  </h3>
                  {founder.body.map((paragraph) => (
                    <p key={paragraph}>{t(paragraph)}</p>
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
            <h2>{t("Talk to the people who will do the work.")}</h2>
            <p className="section-lead">
              {t(
                "Tell us what your hotel needs. We'll explain what we can take on and what we would check first."
              )}
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
