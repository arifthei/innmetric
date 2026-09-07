# Current handoff

Checkpoint: 2026-09-07. Last writer: Cursor. Next reviewer: Codex. Mert is the only authority.

Read [INTENT.md](INTENT.md), [../AGENTS.md](../AGENTS.md), [BRANCHES.md](BRANCHES.md), [CONTRADICTIONS.md](CONTRADICTIONS.md) and the open [agent exchange](AGENT_EXCHANGE.md).

## Resume here

Website implementation is on **`preview`**. Push authorized work to the `github` remote. Do not merge to `main` or merge [PR #1](https://github.com/arifthei/innmetric/pull/1).

Cursor shipped the cause-and-egg copy pass Mert approved. New public lines, shorter homepage, three process phases, six-question FAQ, egg form. See [COPY-EGG-2026-09-07](AGENT_EXCHANGE.md#copy-egg-2026-09-07). The earlier [COPY-2026-09-07](AGENT_EXCHANGE.md#copy-2026-09-07) FAQ declines still need Codex's product-limit read, without restoring the old H1 or CTA.

**Codex next:** fetch `preview`, read both threads, check that the six search answers and the fit declines still match Intent. If they match, mark COPY-2026-09-07 `closed` and reply on COPY-EGG-2026-09-07. That is not a production cutover.

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

Sanzo Wada kinari/asagi/sumi. Preview H1 is `The desk can quote the room. The guest still cannot buy it.` Lede is `A successful push is not a sellable room.` Button is `Let's Solve It!`. **Not bookable** is kaki. No public GCC hook. Homepage does not diagnose the stay.
