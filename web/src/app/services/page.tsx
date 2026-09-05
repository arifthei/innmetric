import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageChrome";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hotel distribution audit and control services | InnMetric",
  description:
    "Baseline audits, approved system corrections and ongoing distribution control for independent hotels using PMS, channel-manager, booking-engine and OTA systems.",
  openGraph: {
    title: "Hotel distribution audit and control services | InnMetric",
    description:
      "Baseline audits, approved system corrections and ongoing distribution control for independent hotels using PMS, channel-manager, booking-engine and OTA systems.",
    url: "https://innmetric.com/services/",
  },
  alternates: { canonical: "/services/" },
};

const OFFERS = [
  {
    id: "baseline",
    index: "01",
    title: "Distribution Baseline Audit",
    body: "Create an evidence-backed view of the current commercial setup before anyone changes it. The baseline does not promise a revenue increase.",
    points: [
      "System and channel map",
      "Live sellability tests under recorded conditions",
      "Mapping and restriction review",
      "Prioritized correction backlog",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    body: "Implement a defined group of corrections without losing control of the current setup. InnMetric applies only named and approved actions.",
    points: [
      "Named hotel approver before any live change",
      "Confirmed change list with rollback notes",
      "Change in the agreed PMS, channel manager, booking engine or OTA",
      "Live guest-facing verification",
    ],
  },
  {
    id: "control",
    index: "03",
    title: "Ongoing Distribution Control",
    body: "Prevent known commercial controls from drifting after the baseline and repair work. Cadence is defined in the contract.",
    points: [
      "Recheck agreed pricing, availability, mapping and channel outcomes",
      "Exception list and verified fixes",
      "Change log and recurrence reporting",
      "No claim of continuous automated monitoring unless the agreed tools support it",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Control the live result across the systems you already use."
      >
        <p className="lede">
          InnMetric does not ask you to replace a functioning hotel stack. It
          establishes how that stack behaves today, fixes approved defects and
          verifies the result where the guest buys.
        </p>
        <div className="hero-actions">
          <Link className="button lg" href="/contact/">
            Request a distribution review
          </Link>
        </div>
      </PageHero>

      <section className="section wash">
        <div className="frame">
          <Reveal>
            <div className="rows">
              {OFFERS.map((offer) => (
                <article className="row wide" id={offer.id} key={offer.id}>
                  <span className="row-index" aria-hidden="true">
                    {offer.index}
                  </span>
                  <h2>{offer.title}</h2>
                  <div>
                    <p>{offer.body}</p>
                    <ul className="checklist">
                      {offer.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="frame stack">
          <Reveal className="intro">
            <h2>What InnMetric is not</h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="not-list">
              <li>Not a PMS or channel manager</li>
              <li>Not an OTA or booking engine</li>
              <li>Not a generic digital marketing agency</li>
              <li>Not a replacement for hotel management</li>
              <li>Not an automated revenue promise</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Start with the problem that keeps returning."
        lead="Tell us what the team sees, which systems are involved and who owns approval. We will propose the smallest useful first scope."
      />
    </>
  );
}
