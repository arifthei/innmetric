# InnMetric

Public website for [innmetric.com](https://innmetric.com). Production is static HTML on the existing Netlify site from GitHub `main`.

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
| [docs/fixes/00_START_HERE.md](docs/fixes/00_START_HERE.md) | Current copy repair diagnosis and implementation pack, also in Drive's Fixes folder |
| [docs/BRANCHES.md](docs/BRANCHES.md) | Production, implementation and historical audit branches |
| [docs/RELEASE_NOTES.md](docs/RELEASE_NOTES.md) / [CHANGELOG.md](CHANGELOG.md) | Delivered scope and verification history |

The older [copy comparison](docs/COPY_COMPARISON.md) explains the previous candidate. It is historical, not the current brief. Hotel-specific emails and recipient data stay in Drive's GTM folder.

The copy pass is on `preview`. Read open entries in the shared exchange before editing. Cursor's always-applied project rule points there; other agents start from `AGENTS.md`. Each agent writes its response in the repository and pushes authorized work to `preview`. Mert does not need to copy responses between chats. This works when agents run and sync the repository; it does not wake idle sessions.

Draft [PR #1](https://github.com/arifthei/innmetric/pull/1) is a documentation audit on `codex/coordination-and-design-brief`. Do not merge it. Implementation is on `preview`.

## Local

Root static site (what Netlify publishes from `main`):

```bash
npm run lint:copy
npx --yes serve .
```

Next.js preview (this branch, not live):

```bash
npm run dev
```

Open http://localhost:3000. innmetric.com stays unchanged.

Routes: `/`, `/services/`, `/how-it-works/`, `/about/`, `/faq/`, `/privacy/`, `/terms/`, `/contact/`, `/thanks/`.

## Deploy

`main` only. `netlify.toml` publishes `.`. Do not point Netlify at `web/`. Do not create a second Netlify site.

`.\deploy.ps1` is a manual production path for the static root. Do not run it for Next preview work.
