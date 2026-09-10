# Current handoff

Checkpoint: 2026-09-10. Last writer: Cursor. Next reviewer: Mert. Mert is the only authority.

## Resume here

Preview now has founder portraits on About, a gated Netlify form that stays off for ordinary preview, and the Next cutover files. GitHub `preview` was `991b441` before this delivery. Read [AGENTS](../AGENTS.md), [Intent](INTENT.md) and [Writing](WRITING.md). No agent review thread is open.

This is a non-sending preview. Approving the commit is not a merge to `main`. Cutover steps live in local gitignored `buildplan.md`. The form contract is local `formtutorial-live.md`.

## Delivered

- About founder cards: 640×800 WebP plus JPEG in `web/public/founders/`, photo first, `alt` is name and role, faces cropped high. No faces on the homepage. Original 2 MB PNGs stay gitignored.
- Form gate: `CONTEXT === "production"` and `INNMETRIC_FORMS_ENABLED === "true"`. `NODE_ENV` is not the switch. Default preview keeps the local bar, localhost `metadataBase`, the non-sent notice and receipt.
- Detector: `web/src/forms/detector.html.template` copied to gitignored `web/public/__forms.html` only when the gate is on; disabled builds delete leftovers. `ReviewForm` posts through `postEnquiry` to `/__forms.html` when enabled. `/thanks/` is not a receipt.
- Cutover files on this branch: `netlify.toml` base `web`, `npm run build` (with root `lint:copy`), publish `.next`, `@netlify/plugin-nextjs`. `.netlifyignore` no longer excludes `web`. Production chrome and privacy copy sit behind the same flag.

## Verification

Passed: `lint:copy` (10 HTML, 22 web/src), ESLint, form unit tests (prepare-forms copy/delete, `postEnquiry` 2xx / non-2xx / network / abort / double-submit), default `next build` with no `__forms.html` and no `data-netlify` in `.next`, enabled `CONTEXT=production INNMETRIC_FORMS_ENABLED=true` build with a matching detector, then a second default build that removed the leftover file.

Browser on `npm run dev`: `/about/` at 1920, equal 648×516 cards, portraits 200×250, no overflow; at 390 the cards stack, photo first at 200×250, no overflow. Homepage has no founder images. `/contact/` shows the local notice; a filled submit stayed on `/contact/`, showed “The request was not sent.” and issued no `fetch`. `/thanks/` title is not a receipt.

Skipped: merge to `main`, production deploy, a live innmetric.com submit, outreach.

## Next action and stopping point

Mert reviews `buildplan.md` and this preview. Merge, Netlify dashboard checks and one innmetric.com submit come after that. Do not start the first email batch until that live row is in Verified and `hello@innmetric.com`.

## Held

`main` baseline: `1e21e26b9fc39bea5504c79e393186fd5b85b1f7`. innmetric.com still publishes `.` from `main`. No main push, `netlify deploy --prod`, `npm run deploy` or `deploy.ps1`. The old Codex audit and PR #1 stay historical.
