# Resolved instruction conflicts

Updated 2026-09-12 for Mert's build revision request. Current decisions live in [INTENT.md](INTENT.md); Git procedure lives in [AGENTS.md](../AGENTS.md). This table replaces stacked chronological overrides. Historical wording remains in Git history.

| Conflict | Current resolution |
| --- | --- |
| Old prohibition on editing preview | Mert authorized implementation and pushes to `preview`. No production cutover. |
| Old Codex branch or PR #1 treated as current | Historical audit only. Use the current preview handoff. |
| Old H1/CTA locks versus the latest revision request | Mert explicitly permits judgment on both in the 2026-09-12 prompt. Public wording is in the app; do not restore the old strings from historical files. |
| The attachment asks for approval after every page | Mert authorized implementation and asked to end the rewrite loop. Work in page chunks, verify the finished result and deliver to preview without adding intermediate approval requests. |
| The plan treats identical closing lines as coherence | Keep the same service scope and primary action; each page may answer a different remaining question. The missing-room hook does not exclude rate, reopening or recurrence problems. |
| Full privacy/process sidebar beside the form | Use one focused Contact column. Keep a short privacy link with consent, data guidance by the textarea and one reply expectation near submit. |
| Agent-authored wording recorded as Mert's exact answer | Record the user's actual decision separately from an agent's implementation. An older attachment is not proof that Mert approved every replacement string. |
| Short guest-style form versus new decision-maker fields | Keep the current hotel-team form and its requiredness. No "send that stay" instruction. |
| The form does not send but FAQ/privacy imply it does | Ordinary preview stays non-sending. Production contact, privacy and chrome use the same `CONTEXT` plus `INNMETRIC_FORMS_ENABLED` gate. `/thanks/` is never a receipt. |
| Every page must hand to the next page | Give each page a job and relevant links. A visitor can enter anywhere or contact us immediately. |
| Framework phrases treated as public voice | Use the sources to choose the message. Do not print the framework repeatedly. |
| Meaningful effort treated as proven conversion improvement | Ask for context because it is useful. No conversion claim or extra friction by default. |
| Chain decision makers mentioned versus launch ICP | They should understand the copy. Launch fit remains independent and small-group hotels unless Mert changes the product scope. |
| Anger persona, old spa colors or HotelRunner orange | Natural professional voice and the current Sanzo Wada palette. |
| Chief Brain Officer role | Mert is the only authority. Agents have task assignments, not authority over him or each other. |
| Copied current rules in changelog and old handoffs | History is evidence of earlier decisions, not a competing live brief. |
| Repo feedback mistaken for automatic notification | Each agent reads the shared inbox on startup and writes its own reply. No wake-up or invented acknowledgement. |

The four wheel titles, three offers, three process phases, six FAQ questions, current wordmark and latest founder layout remain. Ordinary preview keeps the local bar, localhost metadata and a non-sending form. The Next Netlify pack on `preview` is cutover preparation, not a live flip. **Not bookable** remains kaki. Root static production remains on `main` until merge.
