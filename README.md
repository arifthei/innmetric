# InnMetric

Public website for [innmetric.com](https://innmetric.com). Static HTML on Netlify.

**Read [docs/NOTICE.md](docs/NOTICE.md) first.** Mert lifted the hold on editing `preview`. Implementation continues there. Do not merge this documentation PR.

The [preview branch](https://github.com/arifthei/innmetric/tree/preview) contains the Next.js company-page rebuild under `web/` plus the Sanzo Wada pass. This main-based documentation branch does not contain `web/`.

Shared repository: [arifthei/innmetric](https://github.com/arifthei/innmetric).

## Start or resume

Read [AGENTS.md](AGENTS.md) and [the current handoff](docs/HANDOFF.md), then continue the first unfinished task whose prerequisites are met. Compare their recorded commits with GitHub and preserve local changes first. Do not restart the audit when its inputs have not changed.

| File | Purpose |
| --- | --- |
| [NOTICE](docs/NOTICE.md) | 2026-09-06 override: work on `preview`, do not merge this PR |
| [AGENTS.md](AGENTS.md) | Authority, product rules, branch ownership and checkpoint protocol |
| [Current handoff](docs/HANDOFF.md) | Completed work, decisions, next task and remaining unknowns |
| [Repository review](docs/REPOSITORY_REVIEW.md) | Source evidence, preview findings and proposed design |
| [CHANGELOG.md](CHANGELOG.md) | Record of changes, with unreleased work clearly identified |
| [Release notes](docs/RELEASE_NOTES.md) | Current candidate scope, validation and deployment status |

These instructions currently live on `codex/coordination-and-design-brief`. Agents on main or preview will not automatically see them. Read this branch's files or the draft PR first. Bring the relevant guidance into a new implementation branch while preserving that branch's existing rules. No production merge is needed to read the guidance.

## Local

```bash
npm run lint:copy
npx --yes serve .
```

Routes: `/`, `/services/`, `/how-it-works/`, `/about/`, `/faq/`, `/privacy/`, `/terms/`, `/contact/`, `/thanks/`.

## Deploy

`netlify.toml` declares `npm run lint:copy` as the build command, Node 22 and `.` as the publish directory. Mert reports that the existing Netlify project is linked to GitHub and only `main` publishes to `innmetric.com`. Keep `main` as production and verify the published deploy in Netlify before release. Do not publish or merge `preview`; a future cutover to the Next.js site is separate work.

Work on task branches and review changes before merging to the confirmed production branch. The current redesign is not authorized for production release. See [AGENTS.md](AGENTS.md#deploy) for the release workflow.

`deploy.ps1` and `npm run deploy` publish local files directly to production. They are legacy/manual release paths, not local preview commands. Do not create a second Netlify site.

## Existing Cursor checkouts

Some local checkouts may still have `https://origin.cursor.com/arifthei/innMetric.git` as their remote. Inspect destinations before changing remotes. Preserve local work and compare it with GitHub before integrating. The [current handoff](docs/HANDOFF.md) names the next task and the [Cursor integration notes](docs/REPOSITORY_REVIEW.md#next-handoff-for-cursor) explain how to carry the guidance forward.
