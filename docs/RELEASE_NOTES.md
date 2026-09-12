# Release notes

Current status is in [HANDOFF.md](HANDOFF.md). Entries below describe their own delivery, not instructions to restore older copy.

## 2026-09-12: production cutover

Public copy is production-shaped. Tunahan's About paragraph is updated. The form still sends only on Netlify production. `main` publishes the Next app. Form notification and one live test submit are Mert's Netlify clicks after the first green production deploy.

## 2026-09-12: clearer page roles and a focused Contact page

Based on `98e3504`. The previous pages repeated the process while leaving the buying questions poorly separated. Home now introduces a concrete availability problem and the work InnMetric takes on. Services compares the three engagements, How it works divides responsibilities, About introduces the founders and FAQ answers the six retained questions.

Contact is one column. Its privacy link is next to consent, with a brief next-step message near submit. The new shared `Talk to us` action opens Contact. The revised homepage headline and all supporting copy remain editorial choices under Mert's brief, not new permanent locks.

Sanzo Wada colors, founder portraits, wheel behavior, form fields and the gated production submission logic remain. Build, lint and form/schema checks passed. A fresh browser pass is still open because the cloud browser could not reach the local server. The exact remaining check is in the handoff.

This delivers a preview candidate. It does not merge to main, activate production forms or authorize outreach. The ordinary preview remains non-sending.

## 2026-09-10: founder photos, gated form and cutover prep

Based on `991b441`. About now has founder portraits. The contact form can post to Netlify when the production flag is on, and stays a truthful non-sending preview otherwise. `/thanks/` is not a receipt.

`preview` also contains the Next Netlify pack: base `web`, `npm run build`, publish `.next` with `@netlify/plugin-nextjs`. That does not change innmetric.com until Mert merges. Ordinary preview still shows the local bar and does not send. Cutover steps are in local `buildplan.md`. Copy and palette are unchanged.

Validation is in [CHANGELOG.md](../CHANGELOG.md). This is a preview candidate, not a live form test or permission to email hotels.

## 2026-09-08: typesetting, equal cards and active-nav scroll

Based on `fbea002`. Mert's 1920 screenshots showed leads and card bodies ending lines on `the`, `you`, `or`, `it`, `what` and finishing on a one-word line. The founder cards also had different heights, and clicking the nav item for the current page did nothing.

Copy is unchanged. A render-time typesetting helper keeps short function words off line ends and glues the last two words of each block. One- and two-line blocks are balanced. Side-by-side cards share a height. The active nav item, logo and header CTA now return the reader to the top of the page they are on.

An automated audit of every rendered text block at seven widths from 1920 to 390 reports no function-word line endings, no one-word last lines and no overflow on the six sales pages. Validation is in [CHANGELOG.md](../CHANGELOG.md). This is a preview candidate. Main and Netlify remain held.

## 2026-09-08: shorter decision-maker copy and instruction repair

Based on `ef2df42`. Mert liked much of Cursor's tone but asked for less wordy copy, a diagnosis of the confused rules and a separate email alternative. The four-file [Fixes pack](fixes/00_START_HERE.md) was placed in Drive before implementation.

The revision keeps the concrete hotel-team form, deliverables and current design. It cuts repeated process language, removes invented support history and corrects unsupported cause, repair and all-channel claims. The form labels ask about the hotel's problem and wanted result. Email links work while the preview form remains non-sending. Its privacy description now matches the code.

Current user decisions, writing guidance and progress have separate homes in the handbook. Cursor's six requested points are answered in the exchange. The new review is bounded to the delivered copy and layout. A native email draft is available in Drive GTM for Mert's review; nothing was sent.

Validation is recorded in [CHANGELOG.md](../CHANGELOG.md). Fresh browser QA is still queued for Cursor. This is a preview candidate, not buyer validation or a production release. Main and Netlify remain held.

## 2026-09-08: decision-maker copy rewrite

**Status:** preview review candidate, based on `000d2b1`. Mert judged the previous candidate too vague for a decision maker and its form written for a guest. This is not a production release and no buyer validation is claimed.

The site now speaks to the owner, general manager or commercial lead. The homepage keeps its H1 and gains a lede about connected systems that still produce an unsellable room, a `What you get` section with four deliverables and offers framed as buyer states. How it works shows the split between the hotel's team and InnMetric in each of three phases. Services lets the reader choose by state. About states what we believe and what we therefore do. FAQ answers end with a next step. The contact form asks for role, property count, systems, problem type and the outcome wanted, and still does not send.

H1, `Let's Solve It!`, palette, wordmark, four-card wheel and three phases remain. `Send the stay` and `Show us the stay` are replaced by `Send the problem` and `Tell us which booking problem you want owned.`

See [COPY-DECISION-MAKER-2026-09-08](AGENT_EXCHANGE.md#copy-decision-maker-2026-09-08). Validation is in [CHANGELOG.md](../CHANGELOG.md). Main and Netlify remain unchanged.

## 2026-09-07: Drive-informed copy alternative

**Status:** preview copy candidate, based on `3e79c47`. Mert requested the alternative after reviewing the previous delivery. This is not a production release or a claim that the wording has been validated with hotel buyers.

The homepage now explains what InnMetric does beside the existing hook. The first enquiry asks for a booking example in ordinary language. Services and How it works describe the work and handover without promising that every repair succeeds. The six FAQ answers retain the current service boundaries while being more careful about causes. The contact form's instructions are clearer and its non-sending behavior is unchanged.

The latest H1, lede, `Let's Solve It!` CTA, `Send the stay` submit label, compact homepage, palette, wordmark, four-card wheel and three process phases remain. No ticket row or five-step homepage band returns.

See the [head-to-head comparison](COPY_COMPARISON.md) and [current review thread](AGENT_EXCHANGE.md#copy-alternative-2026-09-07). Older product-limit reviews are complete. Validation is in [CHANGELOG.md](../CHANGELOG.md); new browser wrapping checks are requested from Cursor. Main and Netlify remain unchanged.

## 2026-09-07: cause-and-egg copy

**Status:** preview review candidate. This is not a production release. Mert authorized committing and pushing website work to `preview`; a cutover to innmetric.com remains a separate decision.

The Next preview now leads with the desk that can quote a room the guest still cannot buy. The old punchline is the lede. The primary button is `Let's Solve It!`. The homepage does not diagnose the stay. The reader has to name it. How it works is three phases. FAQ is the six buyer-search questions. The contact form asks for the stay and still does not send.

Layout, Sanzo palette, lowercase wordmark and four-card wheel stay. Root static HTML on `main` is unchanged. No customer results or financial claims were added.

See [COPY-EGG-2026-09-07](AGENT_EXCHANGE.md#copy-egg-2026-09-07). Codex's subsequent product-limit read is recorded there and in [COPY-2026-09-07](AGENT_EXCHANGE.md#copy-2026-09-07). Both reviews are complete; the alternative above is the current candidate.

Production still uses root static HTML from `main`. This pass does not change production files, Netlify settings or the publish directory. The React contact form remains a non-sending preview, `metadataBase` remains localhost and the preview bar stays visible.
