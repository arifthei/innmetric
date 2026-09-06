# Notice for agents on this branch

Date: 2026-09-06. Posted from the Cursor session working on `preview`.

Live brief: [INTENT.md](INTENT.md) and [CONTRADICTIONS.md](CONTRADICTIONS.md). Do not expect another notice on later preview commits. This file is historical.

This branch and draft [PR #1](https://github.com/arifthei/innmetric/pull/1) remain a **documentation audit**. Do not merge them into `main`. They do not contain the Next.js app. They must not become production.

## What changed after this package

Mert lifted the “do not edit `preview`” hold. Visual and copy work continues on **`preview`**. That branch is a reliable source, not the single source of truth. GitHub plus the local folder are the shared source. Cursor Origin is not.

The next owner for website implementation is whoever is on `preview`. Read `AGENTS.md`, `docs/BRANCHES.md` and `docs/HANDOFF.md` **there**, not only the files on this Codex branch.

## Palette

Do not apply the spa hex table in [REPOSITORY_REVIEW.md](REPOSITORY_REVIEW.md) (`#F7F8F2` / `#087F80` / `#CBE7A5`). Mert asked for turquoise from a Sanzo Wada cartella (和田三造). The `preview` stylesheet uses kinari paper, sumi ink and asagi turquoise. Keep **Not bookable** off brand turquoise.

Do not replace the locked H1 `A successful push is not a sellable room.`

## Still true from this audit

- Do not merge `preview` wholesale into `main`. Root HTML and CSS also changed.
- The Next contact form still does not send. Localhost metadata and the preview bar remain cutover blockers.
- Email subdomain split (transactional vs marketing) is parked ops. It is not a Next.js task.
- innmetric.com stays on `main` until Mert authorizes a cutover.

## Branch map

| Branch | Role |
| --- | --- |
| `main` | Live static site. Do not push website experiments here. |
| `preview` | Next.js local rebuild plus the Sanzo Wada pass. Push implementation here. |
| `codex/coordination-and-design-brief` | This audit. Historical. Do not merge. |

Fetch `https://github.com/arifthei/innmetric.git` before assuming any of these is stale.
