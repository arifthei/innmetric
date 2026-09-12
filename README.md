# InnMetric

Public website for [innmetric.com](https://innmetric.com). Production is the Next app in `web/` on GitHub `main`.

Canonical git: [github.com/arifthei/innmetric](https://github.com/arifthei/innmetric). Local folder plus that remote. Cursor Origin is not the source of truth.

## Start or resume

Check the worktree and fetch `github` before editing. Preserve local work. Start with [AGENTS.md](AGENTS.md), [current handoff](docs/HANDOFF.md), [Intent](docs/INTENT.md) and the active [agent exchange](docs/AGENT_EXCHANGE.md). Copy work also uses [WRITING.md](docs/WRITING.md).

| File | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Startup, Git safety and delivery procedure |
| [docs/INTENT.md](docs/INTENT.md) | Current product, audience and user decisions |
| [docs/WRITING.md](docs/WRITING.md) | Voice, page purpose and editing guidance |
| [docs/HANDOFF.md](docs/HANDOFF.md) | Current checkpoint and remaining checks |
| [docs/AGENT_EXCHANGE.md](docs/AGENT_EXCHANGE.md) | Agent feedback and replies |
| [docs/CONTRADICTIONS.md](docs/CONTRADICTIONS.md) | Resolved conflicts; current decisions are in Intent |
| [docs/fixes/00_START_HERE.md](docs/fixes/00_START_HERE.md) | Historical 2026-09-08 diagnosis, also in Drive's Fixes folder; newer decisions are in Intent |
| [docs/BRANCHES.md](docs/BRANCHES.md) | Production, implementation and historical audit branches |
| [docs/RELEASE_NOTES.md](docs/RELEASE_NOTES.md) / [CHANGELOG.md](CHANGELOG.md) | Delivered scope and verification history |

The 2026-09-12 revision gives each sales page a distinct job, simplifies Contact to one column and uses one shared primary action. The old exact H1/CTA locks are superseded by Mert's latest brief. Read the current handoff for verification and the single remaining review.

The older [copy comparison](docs/COPY_COMPARISON.md) explains the previous candidate. It is historical, not the current brief. Hotel-specific emails and recipient data stay in Drive's GTM folder.

The copy pass is on `preview`, then merges to `main` when Mert authorizes. Read open entries in the shared exchange before editing. Cursor's always-applied project rule points there; other agents start from `AGENTS.md`. Each agent writes its response in the repository and pushes authorized work to `preview`. Mert does not need to copy responses between chats. This works when agents run and sync the repository; it does not wake idle sessions.

Draft [PR #1](https://github.com/arifthei/innmetric/pull/1) is a documentation audit on `codex/coordination-and-design-brief`. Do not merge it. Implementation is on `preview`.

## Local

```bash
npm run lint:copy
npm run dev
```

Open http://localhost:3000. Localhost builds do not send the form.

Routes: `/`, `/services/`, `/how-it-works/`, `/about/`, `/faq/`, `/privacy/`, `/terms/`, `/contact/`, `/thanks/`.

## Deploy

`main` is live innmetric.com. Do not create a second Netlify site. Do not merge PR #1.

`netlify.toml` builds the Next app (base `web`, publish `.next` with `@netlify/plugin-nextjs`). Ordinary localhost and deploy-preview builds stay non-sending.

`.\deploy.ps1` and `npm run deploy` run `netlify deploy --prod --build`. Do not pass `--dir .`.
