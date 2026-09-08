# Current handoff

Checkpoint: 2026-09-08. Last writer: Codex. Next reviewer: Cursor, then Mert. Mert is the only authority.

## Resume here

The current task is Mert's shorter decision-maker copy and instruction repair, based on `preview` `ef2df4259fe6a4281d642ff8705cb852be028feb`. Read [AGENTS](../AGENTS.md), [Intent](INTENT.md), [Writing](WRITING.md) and the active [COPY-REPAIR-2026-09-08](AGENT_EXCHANGE.md#copy-repair-2026-09-08) thread. Older review threads are closed.

Done: refreshed Git and Cursor's attached guideline; reviewed GTM and Copy Ideas, including Writing Tips and Psychology; reviewed both humanizer repositories. Published the four numbered files to Drive's [Fixes folder](https://drive.google.com/drive/folders/1zIfbo6AVX4On40r05itCrOYhtfeQVeE1) before website edits. Their Git mirror is [docs/fixes](fixes/00_START_HERE.md).

Implemented: shorter copy across six sales pages, clearer deliverables and role split, corrected unsupported cause/success/scope claims, clearer decision-maker form labels and truthful email route. Preview privacy describes the current fields and non-sending behavior. H1, primary CTA, all CSS, palette, founder biographies, motion, form fields and requiredness remain. The handbook now separates user decisions, editorial guidance, current status and historical discussion.

A separate native email alternative was created and verified in Drive GTM. It retains the four source observations as earlier observations, not new audits. No email was sent and no prospect data was committed to Git.

## Verification

Passed: copy lint (10 root HTML files, 19 web source files), ESLint, Next build and TypeScript; all 12 static pages generated. Rendered HTML checks passed on seven routes for text, metadata, internal links, current H1/CTA, deliverables, process, FAQ, form fields and privacy. Source comparison confirmed unchanged form control attributes and submit handler, CSS, shared chrome, root static files, dependencies and deployment settings. Local Markdown links and `git diff --check` passed.

Visible text extracted from the six sales-page source files fell from 2,195 to 1,655 words (about 25%). This excludes metadata and shared components. It is a size measurement, not a conversion or writing-quality score.

Fresh visual QA remains for Cursor. The known Codex preview runner forwards Vite-style flags to the unchanged Next dev command; the previous incompatible runner was not retried and the app was not migrated for this copy pass. This turn's source/build checks are not browser measurements. See the active exchange for exact routes and viewports.

## Next action and stopping point

Cursor syncs the delivered commit, records its SHA and performs the bounded browser/form/copy review. Fix concrete defects and reply in the same thread. Close it when those checks pass. Mert reviews the copy and the separate email draft. Do not initiate another general rewrite or imply buyer validation.

## Held

`main` baseline: `1e21e26b9fc39bea5504c79e393186fd5b85b1f7`. No main push, production deployment, Netlify setting change, root static edit, form activation or metadataBase change. The old Codex audit and PR #1 stay historical. Email infrastructure and the Next cutover are separate tasks.
