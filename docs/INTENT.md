# Current InnMetric intent

Updated 2026-09-12. Mert is the only authority. Canonical repository: `https://github.com/arifthei/innmetric.git`. Website work lands on `preview` and merges to `main` when Mert authorizes. Latest explicit user instruction wins. [AGENTS.md](../AGENTS.md) owns Git and deployment procedure; this file owns current product and user decisions.

## The service and the reader

InnMetric is a founder-delivered, vendor-neutral service for hotel distribution problems. It investigates the hotel's existing PMS, channel manager, booking engine and OTA accounts, makes agreed corrections with named approval, checks the guest-facing booking result and rechecks the outcomes included in the agreement.

Write to the hotel owner, GM, commercial, revenue, distribution or operations decision maker. A chain operator should understand the offer too; that does not silently change the launch ICP. Internal ICP remains independent and small-group hotels in the GCC. Public fit is independent hotels, resorts, aparthotels and small groups selling direct and on at least two OTAs. Large international chains with their own central distribution team and individually listed homes outside hotel operations remain outside the launch fit.

The first purchase is a service. Do not claim an AI product, SaaS, autonomous pricing, validated prices, customer outcomes, revenue recovery or a launch timetable. No public GCC hook, real prospect names or founder full names on the homepage. Founder biographies belong on About.

## Decisions retained by Mert

Mert's 2026-09-12 request authorizes implementing a corrected version of the attached build revision plan on `preview`, including surgical copy and layout changes. It explicitly allows judgment on the H1 and primary CTA, superseding the older exact-string locks. Complete the page chunks and checks under that authorization; the attachment's repeated page-by-page approval gates do not apply. Distinguish user decisions from agent-authored wording.

| Decision | Current constraint |
| --- | --- |
| Homepage H1 | Editable under the current brief; lead with a recognizable hotel booking problem |
| Primary button | Editable wording, consistent across sales pages, leading to `/contact/`; do not imply a booked call or completed repair |
| Visual identity | Sanzo Wada palette and current lowercase wordmark |
| Form audience | Hotel decision makers; ask for the problem and wanted result |
| Form context | Include role, property count, systems and problem type; role is required |
| Concreteness | Name the deliverables and next step. No invented durations or PMS/channel-manager vendor names |
| Writing | Natural professional English. No em/en dashes or Oxford comma. No contempt or invented anecdotes |

The lede, closing bands, submit label and other supporting sentences are editable under a copy brief. `Send the stay`, `Show us the stay` and the old push lede are superseded. Current wording is in the app; do not duplicate it here as new locks. The header CTA applies to the live Next site.

## Service boundaries

- The hotel's existing systems remain in place. InnMetric is not a PMS, channel manager, booking engine, OTA or RMS replacement. No first-time system installation.
- Hotel pricing, yield and rate decisions stay with the hotel. No revenue-management takeover, standalone rate-plan redesign or autonomous inventory/pricing bot.
- No OTA content, photos, ranking, advertising, social media, SEO or review-response service.
- Agree access before entering accounts and obtain named hotel approval before each live change. A first enquiry does not require an approver's name.
- Observed symptoms are separate from causes. Match the room, dates, occupancy, terms, taxes, currency and promotions before interpreting a public rate difference. Confirm the hotel's intent before calling it a fault.
- Do not promise a known cause, successful repair or permanent fix. Unresolved findings stay open. Rechecks cover agreed conditions and channels, not every future booking.
- A public symptom alone cannot establish revenue loss or vendor negligence. A factual limit belongs where it changes the reader's decision, not at the end of every paragraph.

## Deliverables and page structure

Keep the three offer names: Distribution Baseline Audit, Approved Repair Sprint and Ongoing Distribution Control. Name findings, approved changes with reversal, repeat booking checks and a handover with open items and agreed rechecks. Those are delivered as applicable to the selected scope; an audit does not imply completed repair work.

The current structure stays: homepage hook, four-card problem wheel, useful deliverables, offers, fit and invitation. No ticket row or homepage FAQ. How it works has three phases with Your team / InnMetric responsibilities and a static illustrative slip. FAQ keeps its six buyer-search questions. About puts the founders before repeated process explanations, retaining the portraits, sourced biography facts and responsive cards. Contact uses one focused column, with concise privacy information near consent and submission. [WRITING.md](WRITING.md) defines each page's job without forcing a visitor through every page or repeating the same closing headline everywhere.

## Form and privacy contract

Current required fields: name, work email, role, number of properties, hotel/group name, problem type, problem-and-outcome note and consent. Website and systems are optional. Optional labels must be clear. No credentials, guest data or approver name are requested. Reuse form name `distribution-review` and keep the field name `email` for Reply-to.

Ordinary localhost and deploy-preview builds stay non-sending. Public copy is always the live wording. Gated submits do not show a fake receipt; they stay on the form and offer email to hello@innmetric.com. Visiting `/thanks/` is not a receipt.

The collector turns on only when `CONTEXT === "production"` and `INNMETRIC_FORMS_ENABLED === "true"`. `NODE_ENV` is not the gate. That production build generates `web/public/__forms.html` from the template and posts through `postEnquiry`. Do not commit the generated detector. Mert authorized the 2026-09-12 cutover of `preview` into `main`.

## Design and production

Sanzo Wada: paper `#F3EDE0`, wash `#D5E4D4`, ink `#1C1917`, asagi `#2F8A84`, press `#2A6B68`, kaki `#8A4B2E`. Preserve the remaining current palette variables too. **Not bookable** uses kaki, never brand turquoise. No HotelRunner orange or former Codex spa palette.

Wordmark: lowercase `innmetric` with a small asagi square glow. Keep Figtree, the four wheel titles and motion/reduced-motion behavior. Mert permits targeted layout/CSS edits when the brief calls for them; no palette change. Preserve Cursor's founder wrap and column fixes.

`main` is live innmetric.com (Next in `web/`). Public copy is always production-shaped. `metadataBase` is `https://innmetric.com`. Founder portraits belong on About only. See [BRANCHES.md](BRANCHES.md).

## Email consistency

Use the same service boundary and ordinary language. Open with the actual observation or relevant question and ask for one useful reply from the hotel team. Do not require a guest's stay, paste the offers or presume a fault. Keep the observation's original tense and uncertainty. Drafting an email does not mean a new inspection, recipient verification or permission to send it.

Writing references in Drive are source material, not a second handbook. The older Drive Intent and earlier [copy comparison](COPY_COMPARISON.md) remain history. The current source assessment is in [the repair report](fixes/01_CRASH_REPORT.md).
