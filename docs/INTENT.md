# InnMetric HITL Intent

Updated: 2026-09-07. Owner: Mert. Canonical git: `https://github.com/arifthei/innmetric.git`. Earlier Drive copy: https://docs.google.com/document/d/14hJbHK8UQvX735QXRlo265BKGwVLyp5QPsU1go59nPk/edit. That copy has not been updated in this pass. The current website handbook is this file plus `AGENTS.md`, `docs/HANDOFF.md` and `docs/AGENT_EXCHANGE.md` on **`preview`**. Latest explicit instructions from Mert take precedence. Do not ask him to paste this prompt again.

This brief is for website copy **and** later email copy. Hotel prospecting stays a separate track. Do not import Drive traction packs into git.

## Branches

| Branch | Role |
| --- | --- |
| `main` | Production static HTML on innmetric.com. Do not push experiments. |
| `preview` | Implementation home for the Next.js rebuild in `web/`. |
| `codex/coordination-and-design-brief` | Historical audit. Draft PR #1. Do not merge. Current overrides live in `docs/CONTRADICTIONS.md` on `preview`. |

Cursor Origin is not the source of truth. Fetch GitHub before assuming a branch is stale. Do not write a Codex NOTICE on every preview commit. Update this Intent when an accepted decision changes or an older instruction needs correction. Keep `docs/HANDOFF.md` current with the next action and use `docs/AGENT_EXCHANGE.md` for agent feedback and replies. Mert requested this Git-based loop on 2026-09-07 and authorized committing and pushing the current copy and coordination work to `preview`.

## Product

InnMetric is a founder-delivered, vendor-neutral distribution-control service. It audits, repairs with named hotel approval, verifies the live guest-facing result and rechecks agreed outcomes across the hotel's existing PMS, channel manager, booking engine and OTA accounts.

Internal ICP (keep in `AGENTS.md`, not as a homepage hook): independent and small-group hotels in the GCC.

Public pages must not lead with GCC. The site is read by anyone. Geography is not the hook.

## Locked public lines

- H1: `A successful push is not a sellable room.`
- Lede: `The PMS can show open. The guest still cannot buy.`
- Button: `Request a distribution review` to `/contact/`.
- English only. No em dash. No Oxford comma. No prices. No SaaS or AI claims. No leakage amounts. No vendor negligence. No real hotel names. No founder full names on the homepage.

Approved evidence pattern: We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Voice

Clear, natural and professional. Mert's feedback on 2026-09-06 supersedes the earlier anger persona. Describe a booking problem a hotel team can recognize, explain what we will check and make the next step clear. Keep the locked hook without making every supporting sentence another punchline. No contempt, invented staff anecdotes or theatrical warnings.

Self-qualifier on the site: "You'll probably enjoy working with us if" then the person who already has systems, can name an approver and wants the booking result checked with a record they can follow. Keep the wrong-fit column specific and respectful.

Why write: they can name the property, the booking problem and an approver. InnMetric will say if the issue falls outside its work before agreeing a scope. Rechecks can find a problem that returns; they cannot promise it will never return.

## Design

Sanzo Wada cartella on the Next app: kinari paper `#F3EDE0`, byakuroku wash `#D5E4D4`, sumi ink `#1C1917`, asagi `#2F8A84`, kaki warning `#8A4B2E`. Do not restore HotelRunner orange. Do not apply Codex spa hexes. **Not bookable** is never brand turquoise.

Wordmark: lowercase `innmetric`, tight tracking, asagi square with glow at the end. No IM box. No Eosyn amber.

Homepage hero: copy left, four-card 3D problem wheel right. Cards:

1. The room cannot be bought
2. The public rate drifted
3. The stop-sell never lifted
4. The last fix came undone

Illustrative only. Not a live operations product. Prefer-reduced-motion: stacked list. Do not copy Eosyn chat chrome, amber bars or iGaming voice. Motion idea only.

Control-record tab toy is off the homepage. `/how-it-works/` may keep a quiet static slip.

## Production hold

`netlify.toml` publishes `.`. Do not point Netlify at `web/`. Do not merge `preview` into `main` until Mert authorizes a cutover. Root HTML/CSS on `preview` can hitchhike into production if merged wholesale.

The React form still does not send. `metadataBase` is localhost until cutover. Keep the local-preview bar.

Inquiry: hello@innmetric.com
