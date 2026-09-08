# InnMetric HITL Intent

Updated: 2026-09-08. Owner: Mert. Canonical git: `https://github.com/arifthei/innmetric.git`. Earlier Drive copy: https://docs.google.com/document/d/14hJbHK8UQvX735QXRlo265BKGwVLyp5QPsU1go59nPk/edit. That copy is stale. Do not restore its anger persona over this file. The current website handbook is this file plus `AGENTS.md`, `docs/HANDOFF.md` and `docs/AGENT_EXCHANGE.md` on **`preview`**. Latest explicit instructions from Mert take precedence.

This brief is for website copy **and** later email copy. Hotel prospecting stays a separate track. Do not import Drive traction packs into git.

Branding Drive [implementation suggestions](https://docs.google.com/document/d/1WcQQv5zdqA4I4ZMpwHhEf7DzMSF49seO5F4N2LqK1VQ/edit) is a suggestion, not a paste and not authority to revert newer Git decisions.

## Branches

| Branch | Role |
| --- | --- |
| `main` | Production static HTML on innmetric.com. Do not push experiments. |
| `preview` | Implementation home for the Next.js rebuild in `web/`. |
| `codex/coordination-and-design-brief` | Historical audit. Draft PR #1. Do not merge. Current overrides live in `docs/CONTRADICTIONS.md` on `preview`. |

Cursor Origin is not the source of truth. Fetch GitHub before assuming a branch is stale. Do not write a Codex NOTICE on every preview commit. Update this Intent when an accepted decision changes or an older instruction needs correction. Keep `docs/HANDOFF.md` current with the next action and use `docs/AGENT_EXCHANGE.md` for agent feedback and replies. Mert requested this Git-based loop on 2026-09-07 and authorized committing and pushing website work to `preview`.

## Product

InnMetric is a founder-delivered, vendor-neutral distribution-control service. It audits, repairs with named hotel approval, verifies the live guest-facing result and rechecks agreed outcomes across the hotel's existing PMS, channel manager, booking engine and OTA accounts.

Internal ICP (keep in `AGENTS.md`, not as a homepage hook): independent and small-group hotels in the GCC.

Public pages must not lead with GCC. The site is read by anyone. Geography is not the hook.

## Locked public lines (preview Next app)

- H1: `The desk can quote the room. The guest still cannot buy it.`
- Lede: `Your systems say the room is on sale. Somewhere between the PMS and the booking page, it stopped being one.` (2026-09-08, replaces `A successful push is not a sellable room.`)
- Button (header, hero, CtaBand): `Let's Solve It!` to `/contact/`. Never as H1, eyebrow or metadata title.
- Form submit: `Send the problem` (2026-09-08, replaces `Send the stay`)
- Closing band and contact title: `Tell us which booking problem you want owned.` / `Tell us the booking problem you want owned.` (2026-09-08, replaces `Show us the stay.`)
- Audience: the person who can decide to bring InnMetric in. Owner, general manager, revenue or distribution lead, commercial lead, operations or cluster lead. Do not write to the guest or ask for the guest's stay as if the reader were the guest.
- English only. No em dash. No Oxford comma. No prices. No SaaS or AI claims. No leakage amounts. No vendor negligence. No real hotel names. No founder full names on the homepage.

Root static HTML on `main` (and the leftover root HTML on this branch) still uses the older production CTA. Leave it until an authorized cutover. Preview lint requires `Let's Solve It!` in the Next header only.

Approved evidence pattern: We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Voice and neural register

Hero is the hotel decision maker, never InnMetric. Mission: rooms and rates a guest can actually book, on every channel the hotel sells through. Obstacle: connected systems that still produce a wrong guest-facing result and no one at the hotel who owns tracing it end to end. Not a named vendor as villain. Guide: InnMetric. Journey: three phases on `/how-it-works/`. Resolution: a verified booking result, a record the next person can use and one accountable party. A result that still needs correction remains open; do not promise that every approved repair succeeds.

Egg (2026-09-08): they name the problem and the outcome they want. The contact form asks for role, property count, systems in use, the closest problem type and what should be true when it is fixed. It does not ask the reader to describe a guest's stay as if they were the guest. The psychology references are drafting aids, not proof that more friction improves enquiries. Keep a short explanation of the service and its deliverables beside the hook.

Page arc (2026-09-08). Each page has one job and hands the reader to the next. Primary button is always `Let's Solve It!` to `/contact/`. The secondary button on a page points to the next page in the arc.

| Page | Job | Hands to |
| --- | --- | --- |
| `/` | Recognise the problem, learn what InnMetric delivers, self-qualify | `/how-it-works/`, offers to `/services/` |
| `/how-it-works/` | Three phases with the Your team / InnMetric split | `/services/` |
| `/services/` | Choose by state: do not know yet / know and want it corrected / want it to stay fixed | `/contact/` |
| `/about/` | We believe X, so we do Y. Founders | `/contact/` |
| `/faq/` | Objections in the searcher's words, each with a next step | `/contact/` |
| `/contact/` | The ask. Decision-maker form. What happens next | none |

Deliverables named on the public site: findings register, approved change list with a way to reverse each correction, repeat booking check under the same conditions, handover record with open items and agreed rechecks. No durations. No PMS or channel-manager vendor names.

Public voice: concise, not boring. Clear, natural and professional. Complete sentences mixed with short ones. Do not dump process, offers and FAQ onto the homepage. No contempt, invented staff anecdotes or theatrical warnings. No health-coach identity pull. No `helps`, `unlock` or `leverage` on public pages.

Self-qualifier: "You'll probably enjoy working with us if" then the person who already has systems, can name the stay that should sell and can bring an approver when a live change is needed. Keep the wrong-fit column specific and respectful.

Why write: the property, the booking problem and what should be true when it is fixed. A named approver is not required to send the first note. InnMetric replies on fit and scope before asking for access. Rechecks can find a problem that returns; they cannot promise it will never return.

History: the Codex alternative at `835afa4` and its [comparison](COPY_COMPARISON.md) were the review candidate on 2026-09-07. On 2026-09-08 Mert judged that candidate too vague for a decision maker and its form written for a guest. He authorized the decision-maker rewrite recorded above. The comparison stays as history of the earlier decisions.

## Email register

Same story as the site. Do not build a mailer in this repo.

- Open on their desk, not on InnMetric.
- One cause: a stay they can quote still cannot be bought.
- One ask: send that stay.
- Do not paste the homepage. Do not attach the three offers unless they asked.

## Public answers to common searches

Use the searcher's phrasing. Keep InnMetric's particular answer. These live on `/faq/`, not as a homepage dump.

- Empty booking engine: if the whole engine is down, start with the vendor. If the PMS is open for those dates and the engine shows none, that is a configuration review.
- Different OTA rate: not proof of a fault. Compare the same room, dates, occupancy and terms.
- Channel manager setup: work on a live stack. Not a first-time install.
- Rate-plan simplification: may appear as a finding. Not a standalone product.
- Outsourced revenue management: decline. The hotel keeps pricing.
- OTA listing management: decline. Rechecks of named rates and availability are not listing work.

## Design

Sanzo Wada cartella on the Next app: kinari paper `#F3EDE0`, byakuroku wash `#D5E4D4`, sumi ink `#1C1917`, asagi `#2F8A84`, kaki warning `#8A4B2E`. Do not restore HotelRunner orange. Do not apply Codex spa hexes. **Not bookable** is never brand turquoise.

Wordmark: lowercase `innmetric`, tight tracking, asagi square with glow at the end. No IM box. No Eosyn amber.

Homepage: copy left, four-card 3D problem wheel right, then What you get, three offers by buyer state, fit and the closing band. No ticket row. No five-verb band. Offer names stay short. Cards:

1. The room cannot be bought
2. The public rate drifted
3. The stop-sell never lifted
4. The last fix came undone

Illustrative only. Not a live operations product. Prefer-reduced-motion: stacked list. Do not copy Eosyn chat chrome, amber bars or iGaming voice. Motion idea only.

Control-record tab toy is off the homepage. `/how-it-works/` keeps a quiet static slip and three phases only. Each phase shows a Your team block and an InnMetric block so the split of work is visible.

Offer names: Distribution Baseline Audit, Approved Repair Sprint, Ongoing Distribution Control.

## Production hold

`netlify.toml` publishes `.`. Do not point Netlify at `web/`. Do not merge `preview` into `main` until Mert authorizes a cutover. Root HTML/CSS on `preview` can hitchhike into production if merged wholesale.

The React form still does not send. Its fields are name, work email, role, number of properties, hotel or group name, website, systems in use, the problem and what should be true when it is fixed, plus consent. `metadataBase` is localhost until cutover. Keep the local-preview bar. Do not show a fake thanks state.

Inquiry: hello@innmetric.com
