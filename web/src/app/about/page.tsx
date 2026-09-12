import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

export const metadata: Metadata = {
  title: "Meet the founders | InnMetric",
  description:
    "Meet Tunahan Aras and Mert Carikci, the founders who bring hotel distribution and product operations experience to InnMetric's investigation and repair work.",
  openGraph: {
    title: "Meet the founders | InnMetric",
    description:
      "Meet Tunahan Aras and Mert Carikci, the founders who bring hotel distribution and product operations experience to InnMetric's investigation and repair work.",
    url: "https://innmetric.com/about/",
  },
  alternates: { canonical: "/about/" },
};

const FOUNDERS = [
  {
    name: "Tunahan Aras",
    role: "Hotel Distribution Lead",
    photo: {
      webp: "/founders/tunahan.webp",
      jpg: "/founders/tunahan.jpg",
    },
    body: [
      "Tunahan has worked on rates, restrictions, room and rate mappings and reservation flows in channel manager environments, including hotel partner cases and OTA operations.",
      "He looks at how the hotel's setup behaves and which settings need a closer check.",
    ],
  },
  {
    name: "Mert Carikci",
    role: "Product Operations Lead",
    photo: {
      webp: "/founders/mert.webp",
      jpg: "/founders/mert.jpg",
    },
    body: [
      "Mert's background is in product ownership and systems analysis for regulated platforms, live operations and complex integrations.",
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
            "InnMetric brings hotel distribution experience and product operations together to follow booking problems across systems. We carry out the work and answer your team's questions directly."
          )}
        </p>
      </PageHero>

      <section className="section wash">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>{t("Meet Tunahan and Mert.")}</h2>
          </Reveal>
          <Reveal index={1}>
            <div className="cols-2">
              {FOUNDERS.map((founder) => (
                <article className="card founder" key={founder.name}>
                  <picture className="founder-photo">
                    <source srcSet={founder.photo.webp} type="image/webp" />
                    <Image
                      src={founder.photo.jpg}
                      alt={`${founder.name}, Co-founder and ${founder.role}`}
                      width={640}
                      height={800}
                    />
                  </picture>
                  <div className="founder-copy">
                    <h3>
                      <span className="founder-name">{founder.name}</span>
                      <span className="founder-role">
                        <span className="keep">Co-founder</span> and {founder.role}
                      </span>
                    </h3>
                    {founder.body.map((paragraph) => (
                      <p key={paragraph}>{t(paragraph)}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ask us about your hotel's setup."
        lead="A founder will reply. Describe what's happening and we'll discuss whether we're the right people to take it on."
      />
    </>
  );
}
