import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ReviewForm } from "@/components/ReviewForm";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Tell InnMetric where your hotel's availability or rates differ from what you intended. A founder will review your enquiry and discuss the next step.";

export const metadata: Metadata = {
  title: "Talk through a hotel booking problem | InnMetric",
  description: DESCRIPTION,
  openGraph: {
    title: "Talk through a hotel booking problem | InnMetric",
    description: DESCRIPTION,
    url: "https://innmetric.com/contact/",
  },
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the booking problem."
        contentClassName="contact-width"
      >
        <p className="lede">
          {t(
            "Tell us where availability or rates differ from what your hotel intended. You don't need to know the cause."
          )}
        </p>
      </PageHero>
      <section className="section wash">
        <div className="frame">
          <Reveal className="contact-width">
            <ReviewForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
