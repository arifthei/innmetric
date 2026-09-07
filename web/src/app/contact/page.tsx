import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ReviewForm } from "@/components/ReviewForm";

export const metadata: Metadata = {
  title: "Request a distribution review | InnMetric",
  description:
    "Name the property, the stay that fails and who can approve a change. InnMetric will say if a baseline is the right next step.",
  openGraph: {
    title: "Request a distribution review | InnMetric",
    description:
      "Name the property, the stay that fails and who can approve a change. InnMetric will say if a baseline is the right next step.",
    url: "https://innmetric.com/contact/",
  },
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request a distribution review">
        <p className="lede">
          Name the property, the stay that fails and who can approve a change. We
          will say if it is our work. Keep passwords and guest data out of the
          message.
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
