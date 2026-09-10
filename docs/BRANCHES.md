# Branch map

Fetch `https://github.com/arifthei/innmetric.git` before assuming any branch is stale. Local plus GitHub are the shared source. Cursor Origin is not.

| Branch | Role | Do |
| --- | --- | --- |
| `main` | Live static HTML on innmetric.com | Do not push experiments. Production only. |
| `preview` | Next.js rebuild in `web/` plus the Sanzo Wada pass | Implementation home. Push website work here. Do not merge into `main` until Mert authorizes a cutover. |
| `codex/coordination-and-design-brief` | Documentation audit. Draft [PR #1](https://github.com/arifthei/innmetric/pull/1) | Historical. Do not merge. Current [CONTRADICTIONS](CONTRADICTIONS.md) and [INTENT](INTENT.md) live on `preview`. Do not expect a new notice on every preview commit. |

`preview` is a reliable source. It is not the single source of truth. Mert is.

Both Cursor and Codex use the same [agent exchange](AGENT_EXCHANGE.md) on `preview`. An agent's name does not imply a separate implementation branch. Follow the fetch and integration steps in [AGENTS.md](../AGENTS.md) before editing or pushing.

Netlify production branch must stay `main`. Live innmetric.com still publishes `.` from `main`. The `preview` `netlify.toml` is the Next cutover pack (base `web`, publish `.next` with the adapter) and applies only after an authorized merge.
