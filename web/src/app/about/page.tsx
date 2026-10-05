import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, ORG_ID, pageMetadata, SITE_URL } from "@/lib/site";
import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { t } from "@/lib/typeset";

export const metadata: Metadata = pageMetadata({
  title: "The two people who do the work | InnMetric",
  description:
    "Tunahan Aras follows the booking path through the hotel's systems. Mert Carikci keeps the findings, the approval and the booking check in one record. You work with both of them.",
  path: "/about/",
});

const FOUNDERS = [
  {
    name: "Tunahan Aras",
    role: "Hotel Distribution Lead",
    photo: {
      webp: "/founders/tunahan.webp",
      jpg: "/founders/tunahan.jpg",
    },
    body: [
      "Tunahan follows a booking through the property system, the channel manager, the booking engine and the listings, until the page and the hotel agree or the open point is named. His background is hotel technology, operations and integrations.",
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
      "Mert keeps the work in an order your team can follow: what was found, what was approved, what changed and what the booking check showed afterwards. His background is product ownership and systems analysis for live operations and complex integrations.",
    ],
  },
];

const ABOUT_SCHEMA = [
  ...FOUNDERS.map((founder) => ({
    "@type": "Person",
    "@id": `${SITE_URL}/about/#${founder.name.split(" ")[0].toLowerCase()}`,
    name: founder.name,
    jobTitle: `Co-founder and ${founder.role}`,
    description: founder.body.join(" "),
    image: `${SITE_URL}${founder.photo.jpg}`,
    worksFor: { "@id": ORG_ID },
    url: `${SITE_URL}/about/`,
  })),
  {
    "@type": "AboutPage",
    url: `${SITE_URL}/about/`,
    about: { "@id": ORG_ID },
  },
  breadcrumb("/about/", "About"),
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ABOUT_SCHEMA} />
      <PageHero
        eyebrow="About"
        title="You work directly with the founders."
      >
        <p className="lede">
          {t(
            "Tunahan follows the booking path through the systems that produce it. Mert keeps what was found, what you approved and what the next booking check showed. A founder answers."
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
        title="Ask us about the page that disagrees."
        lead="A founder will reply. Describe what guests can book and what you meant to sell. We'll say whether we're the right people to take it on."
      />
    </>
  );
}
