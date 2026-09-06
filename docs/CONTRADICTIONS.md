# Live overrides

This file lives so later agents do not treat the Codex audit as current law. Historical findings to keep are listed first. Overrides from Mert on 2026-09-06 follow. Read [INTENT.md](INTENT.md) with this file.

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
- Do not write a NOTICE on every later preview commit. Preview `AGENTS.md` plus `docs/INTENT.md` and `docs/HANDOFF.md` is the live handbook.

## Authority

Latest explicit instruction from Mert wins over this file, over a Codex brief, and over an older handoff.
