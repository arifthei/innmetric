# Current handoff

Checkpoint: 2026-09-06. Owner: Cursor session on `preview`. Mert is the only authority.

Read [../AGENTS.md](../AGENTS.md) and [BRANCHES.md](BRANCHES.md) first.

## Resume here

Website implementation is on **`preview`**. Push to the `github` remote. Do not merge to `main`. Do not treat [PR #1](https://github.com/arifthei/innmetric/pull/1) as product.

This pass applied a Sanzo Wada asagi/kinari/sumi palette to the Next app and rewrote the homepage fit block into a self-qualifier. Root static HTML was not restyled.

## Source

| Item | State |
| --- | --- |
| Canonical repo | `https://github.com/arifthei/innmetric.git` |
| Production | `main` `1e21e26`. innmetric.com. |
| This branch | `preview` |
| Codex audit | `codex/coordination-and-design-brief` with [NOTICE](https://github.com/arifthei/innmetric/blob/codex/coordination-and-design-brief/docs/NOTICE.md). Do not merge. |

## Done in this pass

- Agent notes on `preview` and a notice on the Codex branch plus a comment on PR #1.
- Next.js tokens: kinari paper `#F3EDE0`, byakuroku wash `#D5E4D4`, sumi ink `#1C1917`, asagi `#2F8A84`. Rust-orange gradient removed.
- **Not bookable** uses kaki brown, not brand turquoise.
- Fit section: "You'll probably enjoy working with us if". Locked H1 kept.
- `docs/` listed in `.netlifyignore`.

## Parked (not this pass)

- Email domain split: website on innmetric.com, transactional mail on one subdomain, marketing mail on another, plus SPF/DKIM/DMARC. sitemap.xml already exists. Do not invent subdomains in public copy.
- React form still does not post to Netlify.
- `metadataBase` is still localhost. Preview bar still says local preview.
- Next.js cutover on the existing Netlify site.
- Root `css/site.css` and root HTML. Restyling those would hitchhike into production if `preview` were merged.

## Palette lock for the next editor

Do not apply Codex spa hexes `#F7F8F2` / `#087F80` / `#CBE7A5`. Do not restore `#fa582d`. Do not replace H1 `A successful push is not a sellable room.`

## Next

Review the local Next preview. Keep `main` frozen. Form delivery and public metadata wait for an authorized cutover.
