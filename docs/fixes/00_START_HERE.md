# Start here: the copy repair

Prepared by Codex on 2026-09-08 against `preview` commit `ef2df4259fe6a4281d642ff8705cb852be028feb`. Cursor's attached `agenticwritingguideline.md` explains `8bde911`; the later founder-card adjustment at `ef2df42` is included in this review.

This pack was created in `InnMetric/Web Content/Fixes` before implementation. It is the diagnosis and implementation brief for Mert's current request. After delivery, use Git's current `docs/HANDOFF.md` for status. A downloaded copy of this pack must never override newer instructions from Mert.

## Read in order

1. `01_CRASH_REPORT.md`: the actual failures, including Codex's earlier pass.
2. `02_COPY_AND_STORY.md`: the editorial decisions and concrete replacements.
3. `03_IMPLEMENT_AND_REVIEW.md`: implementation, verification and the two-agent handoff.

The matching files are committed under `docs/fixes/` on `preview`. They contain no hotel prospect records or email addresses. The separate email alternative belongs in `InnMetric/GTM` and stays out of the public repository.

## What Mert decided and what agents chose

Mert retained the homepage H1, `The desk can quote the room. The guest still cannot buy it.`, and the primary button, `Let's Solve It!`, linking to `/contact/`. He retained the Sanzo Wada palette. He requested a form for hotel decision makers, with role, property count, systems, problem type and wanted outcome. He asked for named deliverables and next steps without invented durations or PMS/channel-manager vendor names.

Cursor chose the replacement lede, the repeated phrase about a problem being "owned" and the exact form submit label. Those are drafts, not additional user-approved locks. Mert's latest request explicitly authorizes revising the wordy parts while retaining the tone he liked.

## One place for each kind of instruction

| File | Owns | Does not own |
| --- | --- | --- |
| `AGENTS.md` | Git safety, startup and who replies next | Copies of public strings or old creative briefs |
| `docs/INTENT.md` | Current product boundaries, audience and user decisions | An agent's preferred wording |
| `docs/WRITING.md` | Short writing and page-purpose guidance | Deployment or prospecting rules |
| `docs/HANDOFF.md` | Current commit context, completed work and remaining checks | The history of every rewrite |
| `docs/AGENT_EXCHANGE.md` | One active review and each agent's own reply | Invented acknowledgements or automatic notifications |
| Changelog and release notes | What shipped and what was verified | New instructions hidden in historical entries |

`docs/CONTRADICTIONS.md` becomes a short table of resolved conflicts. Old debates remain available in Git history. Agents should not have to reconstruct the current brief by reading every previous draft.

Mert remains the only authority. Publication stays on `preview`. Production, form activation and Netlify cutover remain separate work.
