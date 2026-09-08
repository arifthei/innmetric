import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ReviewForm } from "@/components/ReviewForm";

const DESCRIPTION =
  "For hotel owners, general managers and commercial leads. Name the booking problem and the outcome you want. InnMetric replies on fit, scope and what it needs from you.";

export const metadata: Metadata = {
  title: "Tell us the booking problem | InnMetric",
  description: DESCRIPTION,
  openGraph: {
    title: "Tell us the booking problem | InnMetric",
    description: DESCRIPTION,
    url: "https://innmetric.com/contact/",
  },
  alternates: { canonical: "/contact/" },
};

const NEXT_STEPS = [
  "We read your note and reply on whether the problem fits our work.",
  "If it does, we propose a scope, the access we would need and who at your hotel approves changes.",
  "Access is requested only after you agree the scope. Nothing changes in your systems before a named approver signs it off.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us the booking problem you want owned.">
        <p className="lede">
          This form is for the person who can decide to bring us in: an owner,
          a general manager or a commercial lead. Tell us the property, the
          problem and what should be true when it is fixed. This preview does
          not send. Until it does, please email hello@innmetric.com.
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
                <h3>What happens next</h3>
                <ol className="steps">
                  {NEXT_STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
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
