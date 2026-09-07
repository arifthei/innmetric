# Live overrides

This file keeps later agents from treating an older audit or prompt as current instructions. Historical findings to keep are listed first, followed by Mert's overrides through 2026-09-07. Read [INTENT.md](INTENT.md) with this file.

Draft [PR #1](https://github.com/arifthei/innmetric/pull/1) stays documentation. Do not merge it.

## Inherit (still true)

- Do not merge `preview` wholesale into `main`. Root HTML and CSS on `preview` would hitchhike into production. `netlify.toml` still publishes `.`.
- The React contact form still does not send.
- `metadataBase` is localhost until cutover. Keep the local-preview bar.
- **Not bookable** must not become brand turquoise. Use kaki `#8A4B2E`.
- PR #1 is a documentation audit. Leave it draft.

## Override (Codex is wrong here)

- Preview **is** the implementation branch. The old hold that said do not edit `preview` / open a new branch is lifted.
- Palette on the Next app is Sanzo Wada (kinari `#F3EDE0`, byakuroku `#D5E4D4`, sumi `#1C1917`, asagi `#2F8A84`). Not Codex spa `#F7F8F2` / `#087F80` / `#CBE7A5`. Not HotelRunner orange.
- Public homepage must not lead with GCC. GCC stays internal ICP in `AGENTS.md` only.
- Locked H1 stays `A successful push is not a sellable room.` Codex’s replacement H1 is rejected.
- CTA string stays `Request a distribution review`. Add filter copy around it. Do not change the button.
- There is no Chief Brain Officer. Mert is the only authority.
- Do not write a NOTICE on every later preview commit. Preview `AGENTS.md` plus `docs/INTENT.md`, `docs/HANDOFF.md` and `docs/AGENT_EXCHANGE.md` is the live handbook.

## Later voice and coordination decisions

- Mert rejected the inhuman tone of the earlier prompt. The anger persona and fruit-picker or brochure-job put-downs are superseded. Keep the product constraints and locked lines while writing natural support copy.
- On 2026-09-07 Mert explicitly authorized committing and pushing the recovered copy pass and agent coordination work to `preview`. The earlier instruction to wait for commit approval has been satisfied for this task.
- Mert wants feedback and replies in the repository so he does not carry messages between agents. Use one shared [agent exchange](AGENT_EXCHANGE.md). Update the current handoff when progress or the next action changes. This supersedes the old restriction that HANDOFF could change only when a design or authority lock changed.
- The earlier Drive Intent and attached prompt may still contain the superseded voice or handoff rule. Do not restore them over the current Git brief. No new Drive brief was created in this pass.
- On 2026-09-07 Mert asked for a further copy pass: Humanizer-style supporting copy plus public answers to six search questions. Those answers must not turn InnMetric into an RMS, an OTA listing agency or a first-time channel-manager installer. A different public rate is not treated as a fault until the stay is matched.

## Authority

Latest explicit instruction from Mert wins over this file, over a Codex brief, and over an older handoff.
