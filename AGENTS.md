# InnMetric agent rules

This repository is the innmetric.com website and git workspace. It is not the sports-assist product. Do not import Google Drive traction packs into this repo.

## Authority and remotes

Mert is the only authority. Agents coordinate through GitHub branches and the files in `docs/`. There is no chief-of-staff role. Latest explicit instruction from Mert wins over an older handoff.

Canonical shared repository: `https://github.com/arifthei/innmetric.git`. The local folder plus that GitHub remote are the source of truth. Cursor Origin may still exist as a leftover remote named `origin`. Do not fetch, push or treat it as canonical.

Read [docs/BRANCHES.md](docs/BRANCHES.md) and [docs/HANDOFF.md](docs/HANDOFF.md) at the start of a website session. Fetch GitHub before assuming a branch is stale.

## Locked product position

InnMetric is a founder-delivered, vendor-neutral **distribution-control service** for independent and small-group hotels in the GCC.

One sentence:

> InnMetric audits, repairs with the hotel’s approval, verifies the live guest-facing result, and rechecks agreed outcomes across the hotel’s existing PMS, channel manager, booking engine and OTA accounts.

The first offer is a service. Software may follow repeated paid work. Do not publish internal stage language such as `Not SaaS yet`, `Riyadh and Jeddah first` or `first cohort`.

## Who it is for

- Independent hotels, resorts, aparthotels and small regional groups
- Direct sales plus at least two OTAs
- A GM, owner or commercial lead who can approve access

## Who it is not

- A PMS, channel manager, booking engine, OTA or RMS replacement
- A generic PDF consultancy
- An autonomous pricing or inventory bot
- A digital-marketing / SEO / reputation agency
- Large international chains as the launch ICP
- Individually listed homes that are not hotel-operated

## Language on the public site

- English only. Do not publish `/tr/` or a language switch until approved translation exists. The old Turkish page is archived under `archive/` and `/tr` 301s to `/`.
- Do not claim revenue loss, leakage amounts or vendor negligence from public pages.
- Do not promise that every correction increases revenue.
- Do not call the company AI-powered or SaaS on the live site.
- Do not publish prices as if they were validated.
- Primary CTA: `Request a distribution review` to `/contact/`.
- Never use an em dash or an Oxford comma (`, and` / `, or`).
- Do not publish founder full names on the homepage. Names belong on `/about/`.
- Keep H1 `A successful push is not a sellable room.`
- Run `npm run lint:copy` before deploy.

Approved pattern:

> We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Operating motion (not this repo’s job to automate)

Select a small batch of hotels → inspect → contact a named person politely → website as backup → book a meeting → follow up twice → record whether they would pay. Do not blast thousands of addresses.

## Deploy and branches

GitHub `main` is production for the **existing** Netlify site. Do not create a second Netlify site. Do not merge `preview` into `main` until Mert authorizes a cutover. Do not merge [PR #1](https://github.com/arifthei/innmetric/pull/1). That branch is a documentation audit.

Production is the root static HTML. `netlify.toml` still publishes `.`. Do not point Netlify at `web/`.

A Next.js preview lives in `web/` on **`preview`**. That is the implementation branch for visual and copy work. Run `npm run dev` from the repo root. Do not run `.\deploy.ps1` as part of preview work. `.netlifyignore` must list `web` and `docs` so an accidental prod deploy cannot publish the app or agent notes.

`deploy.ps1` and `npx netlify deploy --prod` publish local files to the live site. Use them only for an authorized manual release of the static root.

## Design on preview

The Next app uses a Sanzo Wada cartella: kinari paper, sumi ink, asagi turquoise. Do not restore HotelRunner orange `#fa582d`. Do not apply the Codex spa palette `#F7F8F2` / `#087F80` / `#CBE7A5`. **Not bookable** must not use brand turquoise.

Inquiry inbox: hello@innmetric.com

## New website chats

Start from `@_context/website/`. That folder is local-only. It is gitignored and excluded from Netlify. Do not link it from public HTML.

When `web/` is present, read `web/AGENTS.md` before writing Next.js code.

## New hotel prospecting chats

This is a separate track from the website. Do not mix the two in one chat.

Start from the Drive file `_BOOT`, not from the local folder: https://docs.google.com/document/d/1qx9CsT7z67EH9-8IuBW6gQceYDHPEv4pFI19PAPKajQ/edit

`_BOOT` names the only files a lurk agent may read, and it names the files that will waste its context. Obey both lists.

Rules and templates are mirrored locally in `@_context/hotel-detection/` so they can be read without a browser. All live state, meaning the id queue, the dedupe index and the register, is in Drive only. If a local file and Drive disagree, Drive wins.

One loop per chat. A loop is up to twenty hotels in one named area, then it closes and a fresh chat takes the next area. Do not run loops as subagents, they lose the browser.
