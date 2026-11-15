import { FAQ } from "@/lib/faq";
import {
  FIT,
  NOT_FIT,
  SERVICE_BOUNDARIES,
  SERVICE_OFFERS,
} from "@/lib/services";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const PHASES = [
  "Agree the scope: the hotel shows what guests can book, what it expected and the systems involved. InnMetric proposes the work and agrees access, the result to check and who approves changes.",
  "Investigate and agree any correction: InnMetric traces the issue and explains the findings, makes a correction only inside an agreed repair and keeps a way to reverse it. The hotel approves, defers or rejects each proposed change.",
  "Verify and hand over: after an agreed repair, InnMetric repeats the booking checks under the same conditions. InnMetric hands over the findings, any changes, open issues and agreed rechecks.",
];

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export function llmsSummary() {
  return `# InnMetric

> ${SITE_DESCRIPTION}

InnMetric provides hotel services and monitoring subscriptions for direct search visibility, booking failures and pricing errors. Hotel specialists use manual checks and AI-assisted comparisons, investigate the cause and make hotel-approved corrections in existing systems. The work includes missing availability, mappings, restrictions, reopened dates, checkout failures and recurring problems.

The hotel keeps pricing decisions and approves live changes. An audit provides findings; repairs are a separate scope. InnMetric does not install replacement systems or promise savings without hotel booking and cost records.

## Services

${SERVICE_OFFERS.map((offer) => `- [${offer.title}](${SITE_URL}/services/#${offer.id}): ${offer.state} ${offer.body}`).join("\n")}

## Proposed tourism programme

The B2G programme is proposed. A tourism department would hold collected, agreed contributions from verified savings and allocate them to approved hotel improvements and local suppliers. InnMetric provides services and joins the review; it does not hold the pool. Paid hotel services remain separate. Existing departmental support budgets would be tracked separately from savings-funded contributions.

## Who it is for

${list(FIT)}

## Outside scope

${list(NOT_FIT)}

## Pages

- [Home](${SITE_URL}/): What InnMetric does and who it works with
- [Services](${SITE_URL}/services/): Audit, repair and ongoing checks with deliverables and limits
- [How it works](${SITE_URL}/how-it-works/): The three phases and who does what
- [Tourism programme](${SITE_URL}/tourism-programme/): Proposed department-held fund for hotel improvements and local suppliers
- [FAQ](${SITE_URL}/faq/): Booking engine availability, OTA rate differences and service scope
- [About](${SITE_URL}/about/): The founders, Tunahan Aras and Mert Carikci
- [Contact](${SITE_URL}/contact/): Describe the booking problem; a founder replies

## Contact

- Email: hello@innmetric.com
- Form: ${SITE_URL}/contact/

## Optional

- [Full text](${SITE_URL}/llms-full.txt): Services, process and FAQ answers in one file
`;
}

export function llmsFull() {
  return `${llmsSummary()}
## Service details

${SERVICE_OFFERS.map(
  (offer) => `### ${offer.title}

${offer.state} ${offer.body}

${list(offer.points)}`
).join("\n\n")}

## Service limits

${SERVICE_BOUNDARIES.map((item) => `- ${item.title}: ${item.body}`).join("\n")}

## How it works

${list(PHASES)}

Manual checks and AI-assisted comparisons support the specialists' investigation. The hotel approves changes. Financial measurement uses hotel records to compare completed bookings and net room revenue after commissions, marketing, booking and payment costs, discounts and InnMetric fees. Seasonality and price changes must be considered before attributing an improvement.

## Frequently asked questions

${FAQ.map((item) => `### ${item.q}

${item.a}`).join("\n\n")}
`;
}
