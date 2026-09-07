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
- There is no Chief Brain Officer. Mert is the only authority.
- Do not write a NOTICE on every later preview commit. Preview `AGENTS.md` plus `docs/INTENT.md`, `docs/HANDOFF.md` and `docs/AGENT_EXCHANGE.md` is the live handbook.
- Codex's replacement H1 (`Make the room you sell match the room guests can book`) stays rejected. That is not permission to restore the 2026-09-06 public lines either. See the later Mert overrides below.

## Later voice and coordination decisions

- Mert rejected the inhuman tone of the earlier prompt. The anger persona and fruit-picker or brochure-job put-downs are superseded.
- On 2026-09-07 Mert explicitly authorized committing and pushing website copy and agent coordination work to `preview`. The earlier instruction to wait for commit approval has been satisfied for this task.
- Mert wants feedback and replies in the repository so he does not carry messages between agents. Use one shared [agent exchange](AGENT_EXCHANGE.md). Update the current handoff when progress or the next action changes. This supersedes the old restriction that HANDOFF could change only when a design or authority lock changed.
- The earlier Drive Intent and attached prompt may still contain the superseded voice or handoff rule. Do not restore them over the current Git brief.
- Branding Drive copy is a suggestion, not a paste. Do not revert Git because that doc said to retain the old H1, lede and CTA.
- On 2026-09-07 Mert asked first for Humanizer-style supporting copy plus public answers to six search questions. Those FAQ answers must not turn InnMetric into an RMS, an OTA listing agency or a first-time channel-manager installer. A different public rate is not treated as a fault until the stay is matched. The later same-day cause-and-egg pass supersedes the homepage dump that grew around that request. Keep the six search answers on `/faq/`.

## 2026-09-07 public-line overrides (Mert)

These six replace the older preview locks. Do not restore them from CONTRADICTIONS history, from the branding Drive doc or from COPY-2026-09-07.

1. H1 is `The desk can quote the room. The guest still cannot buy it.` not `A successful push is not a sellable room.`
2. Lede is `A successful push is not a sellable room.` not `The PMS can show open. The guest still cannot buy.`
3. Preview button is `Let's Solve It!` not `Request a distribution review`. Keep the slogan off the H1, eyebrow and metadata title. Root static HTML on `main` keeps the old production CTA until cutover.
4. A named approver is not required to send the first note. Bring an approver when a live change is needed.
5. Public process is three phases on `/how-it-works/`, not five verbs on the homepage.
6. Homepage job is Signal, one cause and an ask. Do not dump tickets, process essays or the search FAQ onto `/`. The contact message field is the egg: they name the stay. Do not show a fake thanks state.

Psychology register (Drive): hotel is the hero, InnMetric is the guide, the egg is naming the stay. That file is a method, not copy to paste.

## Authority

Latest explicit instruction from Mert wins over this file, over a Codex brief, over a Drive suggestion and over an older handoff.
