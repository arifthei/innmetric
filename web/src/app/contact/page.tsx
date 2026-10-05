import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, ORG_ID, pageMetadata, SITE_URL } from "@/lib/site";
import { PageHero } from "@/components/PageChrome";
import { ReviewForm } from "@/components/ReviewForm";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Describe what the booking page shows and what your hotel meant to sell. A founder reviews the enquiry and replies about the next step.";

export const metadata: Metadata = pageMetadata({
  title: "Tell us what the page shows | InnMetric",
  description: DESCRIPTION,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "ContactPage",
            url: `${SITE_URL}/contact/`,
            about: { "@id": ORG_ID },
          },
          breadcrumb("/contact/", "Contact"),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what the page shows and what you meant to sell."
        contentClassName="contact-width"
      >
        <p className="lede">
          {t(
            "You don't need the cause. Name the channel, the dates and the result you expected. A founder reads it."
          )}
        </p>
      </PageHero>
      <section className="section wash">
        <div className="frame">
          <div className="contact-width">
            <ReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
