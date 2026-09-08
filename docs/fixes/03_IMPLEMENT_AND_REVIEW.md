# Implementation and the review loop

Baseline: `ef2df4259fe6a4281d642ff8705cb852be028feb`. The diagnosis and copy instructions were published in Drive before website edits. Implementation and source/build validation are complete; fresh visual review remains open. Use Git's current handoff for the publication checkpoint.

## Codex implementation

1. Refresh `github/preview` and read the current instructions and active exchange. Preserve all unrelated local or remote work.
2. Apply `02_COPY_AND_STORY.md` to the six sales pages and wheel bodies. Update descriptions when their claims change. Keep homepage H1, primary CTA, Sanzo Wada colors, founder-card fixes, motion and navigation working.
3. Keep the decision-maker form's fields and requiredness from Cursor's delivery. Clarify optional fields and the problem/outcome prompt. Keep a working email link and an honest non-sent state. Do not add form wiring or a fake success.
4. Align the preview privacy page's field inventory and form-processing description with the actual code. This is a technical accuracy repair, not a legal compliance certification.
5. Consolidate the handbook using `00_START_HERE.md`. Public strings appear as user locks only when the source shows that Mert retained them. Historical drafts do not become instructions by repetition.
6. Run copy lint, ESLint, the production build and TypeScript checks. Inspect rendered route text, metadata, links and the form's required fields. Compare protected source files against the baseline.
7. Fetch again before publication. Integrate any new overlapping work. Commit and push only intended changes to `preview`, without force. Verify the remote commit and unchanged `main`.
8. Reply to Cursor's six questions with the reviewed commit, accepted points, repairs and exact validation. Update the changelog, release notes and current handoff. Publish the completion state to this same Drive file rather than creating another competing brief.

## Cursor's bounded review

After syncing the delivered commit, check the changed pages at 1440px and 390px. Confirm no clipped headings, overlapping wheel caption, horizontal overflow, broken form labels or awkwardly stretched rows. Check the three phase columns, latest founder layout, reduced-motion stack and keyboard access to email links. Confirm **Not bookable** remains kaki.

Read the copy as a decision maker, including the direct path from an email to Contact. Report an exact passage and the missing or misleading fact if a correction is needed. Keep the accepted tone. Do not start another general rewrite to satisfy a personal preference.

Record your own reply in `docs/AGENT_EXCHANGE.md` with the commit and browser checks. Do not write an acknowledgement for Codex or the branding agent. A Git entry is read when the other agent runs and syncs; it is not a background notification.

## Close conditions

| Condition | Evidence required |
| --- | --- |
| Copy implemented | Actual diff against the refreshed baseline; claims checked against Intent |
| Required behavior preserved | Required form fields, CTA destinations, non-sending receipt and protected source comparison |
| Build healthy | Actual successful commands, not a checklist marked in advance |
| Visual review complete | Named reviewer, exact commit, viewport and observations |
| Shared delivery complete | Remote `preview` verified and the exchange contains the reply |
| Review closed | All requested checks complete or Mert explicitly accepts a named limitation |

If visual QA is unavailable to Codex, record that limitation and leave Cursor's check open. A build does not close it. If a concrete defect remains, fix that defect and repeat only the relevant check. Once the review is complete, close the thread and stop rewriting until Mert gives another brief.

Keep `main`, Netlify settings, root static pages, `metadataBase`, preview notice and deployment scripts unchanged. This copy work does not authorize production publication.

## Delivery status

Implemented against the stated baseline. Six sales pages and wheel bodies are shorter. Decision-maker labels, email links and preview privacy are aligned with the non-sending form. The current handbook separates actual user constraints from draft wording and retains one active review thread.

Passed: copy lint, ESLint, Next build and TypeScript (12 generated static pages). Rendered text, metadata, routes, form contract and privacy checks passed on seven routes. The form's control attributes and submit handler match the baseline. CSS, shared chrome, founder biographies, root static files, dependencies and deployment settings are unchanged. Local documentation links and diff checks passed.

Six sales-page source texts decreased from 2,195 to 1,655 words, about 25%, excluding metadata and shared components. Brevity is not a quality or conversion score. The new native email alternative was created in GTM, moved to the correct folder and read back with its source link. No email was sent.

Publication is the preview commit containing this completion entry; the delivering agent verifies the remote before reporting delivery. The separate open item is Cursor's fresh desktop/narrow/reduced-motion review, recorded in `COPY-REPAIR-2026-09-08`. Do not close it using older screenshots or this successful build. Main and production remain held.
