import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, ORG_ID, pageMetadata, SITE_URL } from "@/lib/site";
import { PageHero } from "@/components/PageChrome";
import { ReviewForm } from "@/components/ReviewForm";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Describe your hotel's availability or rate problem. A founder reviews your enquiry and replies by email about whether we can take it on and what we'd check first.";

export const metadata: Metadata = pageMetadata({
  title: "Talk through a hotel booking problem | InnMetric",
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
        title="Tell us about the booking problem."
        contentClassName="contact-width"
      >
        <p className="lede">
          {t(
            "Tell us what is happening and what you want to change. Include the affected channel and dates if you have them. You don't need to know the cause."
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
