import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";
import { ReviewForm } from "@/components/ReviewForm";
import { t } from "@/lib/typeset";

const DESCRIPTION =
  "Tell InnMetric about your hotel's availability or rate problem and what you want to change. We will explain what we can take on and the next step.";

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
  "We reply about whether the problem fits our work and clarify anything we need to know.",
  "Together, we agree what to check and what a useful result would be.",
  "We agree access before starting. Your hotel approves each live change.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="What needs to work better at your hotel?">
        <p className="lede">
          {t(
            "For owners, GMs and hotel commercial or operations teams. Tell us where availability or rates are going wrong and what you want to change. You don't need to diagnose the cause first."
          )}
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
                <h3>After you email us</h3>
                <ol className="steps">
                  {NEXT_STEPS.map((step) => (
                    <li key={step}>{t(step)}</li>
                  ))}
                </ol>
                <h3>Privacy notice</h3>
                <p>
                  {t(
                    "InnMetric uses the information in this form only to assess and respond to your request. Do not submit passwords, payment data or guest information. See the"
                  )}
                  {"\u00A0"}
                  <a href="/privacy/">Privacy Notice</a>{" "}
                  {t("for retention, deletion and contact details.")}
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
