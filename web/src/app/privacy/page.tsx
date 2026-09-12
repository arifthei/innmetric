import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Privacy Notice | InnMetric",
  description:
    "How InnMetric collects and uses website inquiry data. Founder-led service hosted on Netlify.",
  openGraph: {
    title: "Privacy Notice | InnMetric",
    description:
      "How InnMetric collects and uses website inquiry data. Founder-led service hosted on Netlify.",
    url: "https://innmetric.com/privacy/",
  },
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <PageHero eyebrow="Legal" title="Privacy Notice">
      <div className="prose">
        <p>Effective date: 20 August 2026</p>
        <h2>Who operates the website</h2>
        <p>
          InnMetric is a founder-led hotel distribution-control service. There is
          no registered legal entity listed on this site. Contact:{" "}
          <a href="mailto:hello@innmetric.com">hello@innmetric.com</a>.
        </p>
        <h2>What the form asks for</h2>
        <p>
          The form asks for your name, work email, role, number of
          properties, hotel or group name, problem type, wanted outcome and
          consent to be contacted. Website and systems in use are optional.
          Submissions are stored by Netlify and a notification is sent to
          hello@innmetric.com.
        </p>
        <h2>Why the data is used</h2>
        <p>
          We use this information only to assess whether InnMetric is a fit and to
          reply to the request. We do not sell inquiry data.
        </p>
        <h2>Hosting and form processing</h2>
        <p>
          The website is hosted by Netlify. Netlify processes form submissions.
          Email notifications go to hello@innmetric.com. You may also write to
          that address directly.
        </p>
        <h2>Retention</h2>
        <p>
          Inquiry records are kept so we can respond. If a paid engagement starts,
          related records follow the signed scope. You may request deletion at
          hello@innmetric.com.
        </p>
        <h2>Who can access submissions</h2>
        <p>
          Founders who handle inbound requests. Netlify staff may access systems
          as required to operate the platform.
        </p>
        <h2>International processing</h2>
        <p>
          Netlify may process data on servers outside the country where you sit.
          Submit the form only if that is acceptable for a first inquiry.
        </p>
        <h2>Access or deletion</h2>
        <p>
          Email hello@innmetric.com to request a copy of your submission or to ask
          that it be deleted.
        </p>
        <h2>Secrets</h2>
        <p>
          Do not submit passwords, payment data or guest information through this
          website.
        </p>
      </div>
    </PageHero>
  );
}
