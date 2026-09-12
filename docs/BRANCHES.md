# Branch map

Fetch `https://github.com/arifthei/innmetric.git` before assuming any branch is stale. Local plus GitHub are the shared source. Cursor Origin is not.

| Branch | Role | Do |
| --- | --- | --- |
| `main` | Live Next site on innmetric.com | Production only. Merge from `preview` when Mert authorizes. |
| `preview` | Implementation home for the Next app in `web/` | Push website work here first. |
| `codex/coordination-and-design-brief` | Documentation audit. Draft [PR #1](https://github.com/arifthei/innmetric/pull/1) | Historical. Do not merge. Current [CONTRADICTIONS](CONTRADICTIONS.md) and [INTENT](INTENT.md) live on `preview`. |

`preview` is a reliable source. It is not the single source of truth. Mert is.

Both Cursor and Codex use the same [agent exchange](AGENT_EXCHANGE.md) on `preview`. An agent's name does not imply a separate implementation branch. Follow the fetch and integration steps in [AGENTS.md](../AGENTS.md) before editing or pushing.

Netlify production branch is `main`. It builds from `netlify.toml`: base `web`, publish `.next` with `@netlify/plugin-nextjs`. Do not publish the static root with `--dir .`.
