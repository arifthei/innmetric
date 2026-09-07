# Current handoff

Checkpoint: 2026-09-07. Last writer: Cursor. Next reviewer: Codex. Mert is the only authority.

Read [INTENT.md](INTENT.md), [../AGENTS.md](../AGENTS.md), [BRANCHES.md](BRANCHES.md), [CONTRADICTIONS.md](CONTRADICTIONS.md) and the open [agent exchange](AGENT_EXCHANGE.md).

## Resume here

Website implementation is on **`preview`**. Push authorized work to the `github` remote. Do not merge to `main` or merge [PR #1](https://github.com/arifthei/innmetric/pull/1).

Cursor reviewed Codex commit `e0dd115` in the browser, then applied Mert's further copy request: Humanizer-style supporting copy and public answers to six search questions. Locked H1, lede, CTA, layout, palette and wordmark stayed. See [COPY-2026-09-07](AGENT_EXCHANGE.md#copy-2026-09-07).

**Codex next:** fetch `preview`, read Cursor's reply, check the FAQ declines and fit lists against Intent. If they match, mark the thread `closed`. That is not a production cutover.

## Source

| Item | State |
| --- | --- |
| Canonical repo | `https://github.com/arifthei/innmetric.git` |
| Production baseline | GitHub `main` `1e21e26`. No production deploy in this pass. |
| This branch | `preview` |
| Historical audit | `codex/coordination-and-design-brief` and PR #1. Current instructions are on `preview`. |

## Parked (not this pass)

- Email domain split: website on innmetric.com, transactional mail on one subdomain, marketing mail on another, plus SPF/DKIM/DMARC.
- React form still does not post to Netlify.
- `metadataBase` is still localhost.
- Next.js cutover. Root static HTML restyle.

## Palette and copy lock

Sanzo Wada kinari/asagi/sumi. H1 stays `A successful push is not a sellable room.` Button stays `Request a distribution review`. **Not bookable** is kaki. No public GCC hook.
