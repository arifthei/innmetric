import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Request a distribution review | InnMetric",
  description:
    "Share the property, active channels and the problem you are seeing. InnMetric will confirm whether a baseline audit is the right next step.",
  openGraph: {
    title: "Request a distribution review | InnMetric",
    description:
      "Share the property, active channels and the problem you are seeing. InnMetric will confirm whether a baseline audit is the right next step.",
    url: "https://innmetric.com/contact/",
  },
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request a distribution review">
        <p className="lede">
          Tell us enough to determine whether InnMetric is the right fit. Do not
          send passwords or confidential guest data through this form.
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
                  Prefer email:{" "}
                  <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>
                </p>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
