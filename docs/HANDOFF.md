# Current handoff

Checkpoint: 2026-09-12. Last writer: Codex. Next reviewer: Cursor for one bounded browser check. Mert is the only authority.

## Resume here

The attached build revision plan is implemented on `preview` from `98e35041b391c9a8c9a59c890375d773c76a8c75`. The delivery is the commit containing this checkpoint. Read [AGENTS](../AGENTS.md), [Intent](INTENT.md), [Writing](WRITING.md) and [PAGE-REVISION-2026-09-12](AGENT_EXCHANGE.md#page-revision-2026-09-12).

Copy implementation is complete. Mert explicitly allowed H1/CTA judgment; old exact-string locks are superseded. The historical Fixes pack and earlier threads are not a new task queue.

## Delivered

- Home: a recognizable availability mismatch, one service explanation and deliverables framed around what the hotel team can use.
- Services: direct audit/repair/control links, separate engagement scopes and one service-boundary section.
- How it works: three responsibility splits without duplicate summaries, plus the booking-result explanation beside the illustrative record.
- About: sourced founder bios and existing portraits immediately after the introduction. The five-row manifesto is removed.
- FAQ: the six questions retained with direct, scoped answers. Shared action wording is `Talk to us` in `web/src/lib/copy.ts`; closing invitations remain relevant to each page.
- Contact: one centered column, the same decision-maker fields, sentence-case labels, privacy by consent, data guidance by the textarea and the next step by submit.

Palette variables, founder images, typesetting helper, wheel behavior, illustrative record, form handler, release gate and Netlify cutover settings match the baseline.

## Verification

Passed on this application source: `npm run lint:copy` (10 HTML and 23 web/src files), ESLint, existing form tests and Next builds with the gate off and on, including TypeScript and 12 static pages. A final default build removed the enabled detector and restored preview output.

Built-HTML checks passed across nine routes for the primary action, one H1, canonical mode, internal links and section anchors. Contact has the unchanged required fields and five optional system choices, an associated data hint and privacy inside the form. The enabled detector matches the form schema. `/thanks/` remains neutral and noindex. Protected-source, palette, Markdown-link and whitespace checks passed. These are source/build checks, not browser interaction or buyer validation.

## One remaining review

Cursor: sync this delivery and perform the specific 1440px/390px page checks, 1920px founder check, reduced-motion check and non-sending preview-form test in the exchange. Fix a demonstrated defect, reply once with the exact commit and evidence, then close the thread. Do not reopen general copy review or ask Mert to relay the handoff.

Fresh browser QA is open because the cloud browser rejected the local application URL with `ERR_BLOCKED_BY_CLIENT`. GitHub exposed no commit-status/check-run preview URL for the baseline. Earlier screenshots do not verify this revision.

## Production remains separate

`main` baseline: `1e21e26b9fc39bea5504c79e393186fd5b85b1f7`. No main merge, production deploy or outreach was performed.

Preview retains the Next cutover configuration: base `web`, publish `.next` and `@netlify/plugin-nextjs`. Ordinary preview stays non-sending. The collector and production chrome require both `CONTEXT=production` and `INNMETRIC_FORMS_ENABLED=true`. Before outreach, the separately authorized cutover still needs a real innmetric.com submission visible in Netlify Verified, delivery to `hello@innmetric.com` and a checked Reply-to. This copy delivery is not that proof.
