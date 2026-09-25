import { FAQ } from "@/lib/faq";
import {
  FIT,
  NOT_FIT,
  SERVICE_BOUNDARIES,
  SERVICE_OFFERS,
} from "@/lib/services";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const PHASES = [
  "Agree the scope: the hotel shows what guests see, what it expected and the systems involved. InnMetric proposes the work and agrees access, the result to check and who approves changes.",
  "Investigate and correct: InnMetric traces the issue, explains the findings and makes approved corrections with a way to reverse them. The hotel approves, defers or rejects each proposed change.",
  "Verify and hand over: InnMetric repeats the booking checks under the same conditions and hands over what changed, what remains open and any agreed rechecks.",
];

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export function llmsSummary() {
  return `# InnMetric

> ${SITE_DESCRIPTION}

InnMetric is a founder-led hotel distribution service. When a hotel has rooms to sell but its booking engine, channel manager or OTA listings show something different, InnMetric traces the availability or rate problem through the hotel's existing systems, makes the corrections the hotel approves and checks what guests can book afterwards.

InnMetric does not sell software, install systems, set prices or manage OTA content.

## Services

${SERVICE_OFFERS.map((offer) => `- [${offer.title}](${SITE_URL}/services/#${offer.id}): ${offer.state} ${offer.body}`).join("\n")}

## Who it is for

${list(FIT)}

## Outside scope

${list(NOT_FIT)}

## Pages

- [Home](${SITE_URL}/): What InnMetric does and who it works with
- [Services](${SITE_URL}/services/): Audit, repair and ongoing checks with deliverables and limits
- [How it works](${SITE_URL}/how-it-works/): The three phases and who does what
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

## Frequently asked questions

${FAQ.map((item) => `### ${item.q}

${item.a}`).join("\n\n")}
`;
}
