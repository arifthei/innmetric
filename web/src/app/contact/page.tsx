import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Show us the stay | InnMetric",
  description:
    "Share a booking problem at your hotel. InnMetric will explain whether a distribution review fits and what to do next.",
  openGraph: {
    title: "Show us the stay | InnMetric",
    description:
      "Share a booking problem at your hotel. InnMetric will explain whether a distribution review fits and what to do next.",
    url: "https://innmetric.com/contact/",
  },
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Show us the stay.">
        <p className="lede">
          Tell us which room and dates you checked, what you expected and what
          you saw instead. The form is a preview and does not send. Please email
          hello@innmetric.com.
        </p>
      </PageHero>
      <section className="section wash">
        <div className="frame">
          <Reveal>
            <div className="grid wide-gap">
              <div className="col-7">
                <ReviewForm />
              </div>
              <aside className="col-5 side-card">
                <h3>Privacy notice</h3>
                <p>
                  InnMetric uses the information in this form only to assess and
                  respond to your request. Do not submit passwords, payment data
                  or guest information. See the{" "}
                  <a href="/privacy/">Privacy Notice</a> for retention, deletion
                  and contact details.
                </p>
                <p>
                  Prefer email? Write to{" "}
                  <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
                </p>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
