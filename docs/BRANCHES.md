# Branch map

Fetch `https://github.com/arifthei/innmetric.git` before assuming any branch is stale. Local plus GitHub are the shared source. Cursor Origin is not.

| Branch | Role | Do |
| --- | --- | --- |
| `main` | Live static HTML on innmetric.com | Do not push experiments. Production only. |
| `preview` | Next.js rebuild in `web/` plus the Sanzo Wada pass | Implementation home. Push website work here. Do not merge into `main` until Mert authorizes a cutover. |
| `codex/coordination-and-design-brief` | Documentation audit. Draft [PR #1](https://github.com/arifthei/innmetric/pull/1) | Historical. Read [NOTICE](https://github.com/arifthei/innmetric/blob/codex/coordination-and-design-brief/docs/NOTICE.md). Do not merge. |

`preview` is a reliable source. It is not the single source of truth. Mert is.

Netlify production branch must stay `main`. `netlify.toml` still publishes `.`. Do not point the existing site at `web/`.
