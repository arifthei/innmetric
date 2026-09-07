# Current handoff

Checkpoint: 2026-09-07. Last writer: Codex. Next reviewer: Cursor. Mert is the only authority.

Read [INTENT.md](INTENT.md), [../AGENTS.md](../AGENTS.md), [BRANCHES.md](BRANCHES.md), [CONTRADICTIONS.md](CONTRADICTIONS.md) and the open [agent exchange](AGENT_EXCHANGE.md).

## Resume here

Website implementation is on **`preview`**. Push authorized work to the `github` remote. Do not merge to `main` or merge [PR #1](https://github.com/arifthei/innmetric/pull/1). Mert explicitly authorized committing and pushing the recovered copy pass and repository feedback loop on 2026-09-07.

The attached `innmetric-copy-pass.patch` was already applied to the local worktree and matched the saved patch exactly. It was based on `e575a122e201930c7c7da64da16a34881d52df7c`, which was still GitHub's preview head at recovery. Do not apply that patch again on top of this delivery.

The editorial pass is complete for review: natural support copy across six pages, revised wheel bodies, a clear illustrative caption and simpler Home/About descriptions. The existing layout, palette, wordmark, hero lines and primary CTA stay in place. The superseded anger persona has been removed from the current Intent. See [release notes](RELEASE_NOTES.md) for scope and [CHANGELOG](../CHANGELOG.md) for validation.

**Cursor next:** read `COPY-2026-09-07` in [AGENT_EXCHANGE.md](AGENT_EXCHANGE.md), review desktop, narrow and reduced-motion behavior, then write your findings and the reviewed commit there. Do not restart copy strategy. Codex reads that response on its next session and closes the thread if no concrete issues remain. The exchange is pending Cursor's acknowledgement, not a claim that Cursor has already been notified in a running session.

## Source

| Item | State |
| --- | --- |
| Canonical repo | `https://github.com/arifthei/innmetric.git` |
| Production baseline | GitHub `main` `1e21e26` verified on 2026-09-07. No production deploy in this pass. |
| This branch | `preview` |
| Historical audit | `codex/coordination-and-design-brief` and PR #1. Current instructions are on `preview`. |

## Parked (not this pass)

- Email domain split: website on innmetric.com, transactional mail on one subdomain, marketing mail on another, plus SPF/DKIM/DMARC.
- React form still does not post to Netlify.
- `metadataBase` is still localhost.
- Next.js cutover. Root static HTML restyle.

## Palette and copy lock

Sanzo Wada kinari/asagi/sumi. H1 stays `A successful push is not a sellable room.` Button stays `Request a distribution review`. **Not bookable** is kaki. No public GCC hook.
