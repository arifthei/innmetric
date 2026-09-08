# InnMetric agent rules

Mert is the only authority. Latest explicit instructions from Mert override older repo notes. This repository is the InnMetric website, not the sports-assist product.

## Start and sync

1. Inspect the branch, worktree and remotes. The canonical remote is `github`, pointing to `https://github.com/arifthei/innmetric.git`. Do not use a leftover Cursor Origin as the shared source.
2. Fetch `github` before editing. Work on `preview` unless Mert names another branch. A clean branch behind `github/preview` can advance with `git merge --ff-only github/preview`. Preserve local work and inspect divergence. Never discard another agent's changes or force-push.
3. Read [current handoff](docs/HANDOFF.md), [current intent](docs/INTENT.md) and the active inbox entry in [agent exchange](docs/AGENT_EXCHANGE.md). Read [writing guidance](docs/WRITING.md) for copy work and `web/AGENTS.md` before changing the Next app. Read older threads only when their history is relevant.
4. Read the actual files and source material named by the current brief. A previous agent's summary is useful context, not a substitute for a fresh baseline.

Mert has authorized the requested website work and repo feedback loop to be committed and pushed to `preview`. Do not ask again for permission already given. This does not authorize a production release or unrelated work.

## Where decisions belong

| File | Responsibility |
| --- | --- |
| [INTENT](docs/INTENT.md) | Current product, audience, user-approved constraints and form contract |
| [WRITING](docs/WRITING.md) | Voice, page purposes and editorial review |
| [HANDOFF](docs/HANDOFF.md) | Current work, evidence and next action |
| [AGENT_EXCHANGE](docs/AGENT_EXCHANGE.md) | Agent feedback and each agent's own response |
| [CONTRADICTIONS](docs/CONTRADICTIONS.md) | Resolved conflicts and where the current decision lives |
| Changelog / release notes | Delivered changes and verification, not new instructions |

Keep current public strings in Intent only. Do not promote a drafted sentence to a user lock. Preserve Mert's explicit constraints; use judgment for the wording he asked us to improve.

## Finish and hand over

- Respond to the active review with the exact baseline, the concrete issue and what changed. Preserve the other agent's message and write only your own acknowledgement.
- Run the relevant build and lint checks for app edits, including `npm run lint:copy`. Check claims and rendered page text separately. A passing lint is not evidence that copy is clear or that a hotel buyer approves it.
- For visual changes, record actual browser checks by commit and viewport. If browser QA is unavailable, leave that check open and name the reviewer. Do not present an earlier screenshot as verification of new text.
- Fetch again before publication. Reconcile overlapping remote edits and push only intended changes to `github preview` without force. Verify the remote commit before calling it delivered.
- Update the changelog, release notes and short current handoff. Update Intent only when a user decision changes or a stale instruction needs removal. Keep one active thread per distinct unresolved review.
- Once the requested review is complete, close it. Further rewrites need a new brief or a specific defect, not a different agent's stylistic preference.

The exchange is a durable inbox, read when an agent runs and syncs. It does not wake idle agents. Never invent an acknowledgement or ask Mert to relay feedback already available in Git. Do not create duplicate NOTICE files or routine pings on historical PR #1.

## Production hold

`main` is the production branch for the existing Netlify site. It publishes root static HTML through `netlify.toml` with `publish = "."`. Do not merge `preview` into `main`, change the publish directory, create another Netlify site or merge [PR #1](https://github.com/arifthei/innmetric/pull/1) without an explicit cutover brief.

The Next preview lives in `web/`. Run `npm run dev` from the repo root. Do not run `deploy.ps1`, `npm run deploy` or `npx netlify deploy --prod` during preview work. Keep `.netlifyignore` excluding `web` and `docs`. Form activation and `metadataBase` changes remain part of later cutover work.

## Keep private source work separate

Do not import hotel prospect records, email recipient data or Drive traction packs into this public repository. Website and email writing can be reviewed together when Mert asks; email drafts stay in Drive. Do not send outreach as part of a copy pass.

The current repair diagnosis is in [docs/fixes](docs/fixes/00_START_HERE.md) and Drive's [Fixes folder](https://drive.google.com/drive/folders/1zIfbo6AVX4On40r05itCrOYhtfeQVeE1). The current implementation status is always in the handoff.

## New hotel prospecting chats

This is a separate track from the website. Do not mix the two in one chat.

Start from the Drive file `_BOOT`, not from the local folder: https://docs.google.com/document/d/1qx9CsT7z67EH9-8IuBW6gQceYDHPEv4pFI19PAPKajQ/edit

`_BOOT` names the only files a lurk agent may read, and it names the files that will waste its context. Obey both lists.

Rules and templates are mirrored locally in `@_context/hotel-detection/` so they can be read without a browser. All live state, meaning the id queue, the dedupe index and the register, is in Drive only. If a local file and Drive disagree, Drive wins.

One loop per chat. A loop is up to twenty hotels in one named area, then it closes and a fresh chat takes the next area. Do not run loops as subagents, they lose the browser.
