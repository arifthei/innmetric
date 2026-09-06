# InnMetric

Public website for [innmetric.com](https://innmetric.com). Production is static HTML on the existing Netlify site from GitHub `main`.

Canonical git: [github.com/arifthei/innmetric](https://github.com/arifthei/innmetric). Local folder plus that remote. Cursor Origin is not the source of truth.

## Start or resume

Read [docs/INTENT.md](docs/INTENT.md), [AGENTS.md](AGENTS.md), [docs/BRANCHES.md](docs/BRANCHES.md) and [docs/HANDOFF.md](docs/HANDOFF.md). Fetch GitHub before editing.

| File | Purpose |
| --- | --- |
| [docs/INTENT.md](docs/INTENT.md) | Human-in-the-loop brief for website and email copy |
| [AGENTS.md](AGENTS.md) | Product locks, remotes, branch rules |
| [docs/BRANCHES.md](docs/BRANCHES.md) | `main` / `preview` / Codex audit |
| [docs/HANDOFF.md](docs/HANDOFF.md) | Current checkpoint |
| [CHANGELOG.md](CHANGELOG.md) | Unreleased work vs production |

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
