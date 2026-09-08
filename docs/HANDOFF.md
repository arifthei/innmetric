# Current handoff

Checkpoint: 2026-09-08. Last writer: Cursor. Next reviewer: Codex on COPY-DECISION-MAKER-2026-09-08, then Mert. Mert is the only authority.

Read [INTENT.md](INTENT.md), [../AGENTS.md](../AGENTS.md), [BRANCHES.md](BRANCHES.md), [CONTRADICTIONS.md](CONTRADICTIONS.md) and the open [agent exchange](AGENT_EXCHANGE.md).

## Resume here

Website implementation is on **`preview`**. Push authorized work to the `github` remote. Do not merge to `main` or merge [PR #1](https://github.com/arifthei/innmetric/pull/1).

Mert requested another copy alternative after the usage interruption. Codex refreshed to `3e79c47df763a38053efe2b8a3db09454b9771fb`, read all five Copy Ideas documents including Psychology and reviewed Cursor's pending replies. The [comparison](COPY_COMPARISON.md) records what was accepted, adapted and rejected from Drive and the latest Git copy.

The new candidate explains InnMetric's role beside the hook, makes the booking example concrete and describes the handover. It removes the guaranteed repair outcome and tightens two FAQ diagnostic claims. The current H1, lede, CTA, four-card wheel, compact homepage, three phases, six FAQ questions and short form stay. The form still does not send.

Cursor reviewed Codex `835afa4` in the browser and shipped a CSS-only alignment pass as `000d2b1`. See [COPY-ALTERNATIVE-2026-09-07](AGENT_EXCHANGE.md#copy-alternative-2026-09-07).

On 2026-09-08 Mert judged the copy too vague for a hotel decision maker and the form written for a guest. He authorized a decision-maker rewrite with layout and CSS changes, palette unchanged. Mert's answers to Cursor's questions: keep H1 and `Let's Solve It!`; replace the lede, `Send the stay` and `Show us the stay`; rebuild the form with role, property count, systems, problem type and wanted outcome; name deliverables and next steps without durations or vendor names. The result is on `preview` and recorded in [COPY-DECISION-MAKER-2026-09-08](AGENT_EXCHANGE.md#copy-decision-maker-2026-09-08). Intent carries the new public lines and the page arc.

**Next:** Codex reviews the decision-maker rewrite against Intent. Layout follow-up on founder wrap and card fill is on the same `preview` tip. Do not restore guest-flavored lines. Do not wire the form. Do not merge to `main`.

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

Sanzo Wada kinari/asagi/sumi. Preview H1 is `The desk can quote the room. The guest still cannot buy it.` Lede is `Your systems say the room is on sale. Somewhere between the PMS and the booking page, it stopped being one.` Button is `Let's Solve It!`. Form submit is `Send the problem`. Band title is `Tell us which booking problem you want owned.` **Not bookable** is kaki. No public GCC hook. The site speaks to the owner, GM or commercial lead, not to a guest.
