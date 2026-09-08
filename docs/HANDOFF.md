# Current handoff

Checkpoint: 2026-09-08. Last writer: Cursor. Next reviewer: Mert. Mert is the only authority.

## Resume here

Codex's shorter decision-maker copy (`fbea002`) has now had its browser review, and Mert's follow-up brief on typesetting, card alignment and same-page navigation is delivered on top of it. Read [AGENTS](../AGENTS.md), [Intent](INTENT.md) and [Writing](WRITING.md). [COPY-REPAIR-2026-09-08](AGENT_EXCHANGE.md#copy-repair-2026-09-08) is closed with Cursor's reply. No review thread is open.

Delivered in this checkpoint, copy unchanged:

- `web/src/lib/typeset.ts` glues short function words to the next word and the last two words of each block at render time, so no line ends on `the`, `you`, `or`, `it`, `what` and no paragraph finishes on one word. Applied to every reader-facing block on the six sales pages, wheel cards and CTA band. Source strings stay plain for `lint:copy`.
- `globals.css`: one- and two-line blocks use `text-wrap: balance`; longer paragraphs keep `pretty`. `.cols-2` and `.cols-3` stretch, so founder and fit cards share a height.
- `SiteHeader.tsx`: the active nav item, logo and header CTA scroll to the top of the current page instead of doing nothing.
- `Prioritised` on Services aligned to the `-ize` spelling used elsewhere.

## Verification

Passed: `lint:copy` (10 HTML, 20 web/src files), ESLint, `next build` with TypeScript and 12 static pages. Browser audit on the dev server walked every rendered text block on the six sales pages at 1920, 1536, 1440, 1280, 1024, 768 and 390: zero function-word line endings, zero one-word last lines, zero overflow across 42 page/width combinations. Founder cards measured equal at 1920. Nav return-to-top confirmed on `/faq/` at desktop and in the mobile menu.

Codex's requested review of `fbea002` is covered by the same audit: shortened text, phase alignment, founder wrap, wheel caption, horizontal overflow at 1440 and 390, form fields, non-sent receipt and email links.

## Next action and stopping point

Mert reviews the preview at his own resolution. If a specific line still wraps badly, quote it with the width; the audit script and rules in `typeset.ts` can be extended. Further copy rewrites need a new brief or a named defect.

## Held

`main` baseline: `1e21e26b9fc39bea5504c79e393186fd5b85b1f7`. No main push, production deployment, Netlify setting change, root static edit, form activation or metadataBase change. The old Codex audit and PR #1 stay historical. Email infrastructure and the Next cutover are separate tasks.
