# InnMetric

Public website for [innmetric.com](https://innmetric.com). Production is static HTML on the existing Netlify site from GitHub `main`.

Canonical git: [github.com/arifthei/innmetric](https://github.com/arifthei/innmetric). Local folder plus that remote. Cursor Origin is not the source of truth.

## Start or resume

Check the worktree and fetch `github` before editing. Preserve local work when bringing `preview` up to date. Read [docs/INTENT.md](docs/INTENT.md), [AGENTS.md](AGENTS.md), [docs/BRANCHES.md](docs/BRANCHES.md), [docs/HANDOFF.md](docs/HANDOFF.md), [docs/CONTRADICTIONS.md](docs/CONTRADICTIONS.md) and open entries in [docs/AGENT_EXCHANGE.md](docs/AGENT_EXCHANGE.md).

| File | Purpose |
| --- | --- |
| [docs/INTENT.md](docs/INTENT.md) | Human-in-the-loop brief for website and email copy |
| [AGENTS.md](AGENTS.md) | Product locks, remotes, branch rules |
| [docs/BRANCHES.md](docs/BRANCHES.md) | `main` / `preview` / Codex audit |
| [docs/HANDOFF.md](docs/HANDOFF.md) | Current checkpoint |
| [docs/AGENT_EXCHANGE.md](docs/AGENT_EXCHANGE.md) | Cursor and Codex feedback, responses and next reviewer |
| [docs/COPY_COMPARISON.md](docs/COPY_COMPARISON.md) | Latest preview versus Drive suggestions and the proposed copy |
| [docs/RELEASE_NOTES.md](docs/RELEASE_NOTES.md) | What the current preview candidate changes and what remains pending |
| [CHANGELOG.md](CHANGELOG.md) | Unreleased work vs production |

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
