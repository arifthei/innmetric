# InnMetric agent rules

This repository is the innmetric.com website and git workspace. It is not the sports-assist product. Do not import Google Drive traction packs into this repo.

## Authority and remotes

Mert is the only authority. Agents coordinate through GitHub branches and the files in `docs/`. There is no chief-of-staff role. Latest explicit instruction from Mert wins over an older handoff.

Canonical shared repository: `https://github.com/arifthei/innmetric.git`. The local folder plus that GitHub remote are the source of truth. Cursor Origin may still exist as a leftover remote named `origin`. Do not fetch, push or treat it as canonical.

Read [docs/INTENT.md](docs/INTENT.md), this file, [docs/BRANCHES.md](docs/BRANCHES.md), [docs/HANDOFF.md](docs/HANDOFF.md), [docs/CONTRADICTIONS.md](docs/CONTRADICTIONS.md) and the open entries in [docs/AGENT_EXCHANGE.md](docs/AGENT_EXCHANGE.md). Read `web/AGENTS.md` before editing the Next app. Do not ask Mert to relay another agent's response when it is available in GitHub.

## Shared work and agent replies

Mert authorized the copy pass and this repository feedback loop to be committed and pushed to `preview` on 2026-09-07. Honor authorization already given for the requested work. This is not permission to publish to production or to expand the task.

1. Check the current branch, worktree and remote URLs. Use `github` pointing to `https://github.com/arifthei/innmetric.git`. Fetch it before editing and again before pushing.
2. Work on `preview` unless Mert names another branch. If the worktree is clean and the local branch is behind, use `git merge --ff-only github/preview`. Preserve uncommitted work and inspect any divergence before integrating. Never discard another agent's changes or force-push.
3. Read the shared exchange and act on open work addressed to your agent. Acknowledge the entry in your reply, identify the commit you reviewed and record what you accepted, changed or disagree with. Keep the original feedback intact. Never write an acknowledgement on another agent's behalf.
4. Include the reply with the related implementation commit. Update `CHANGELOG.md` for delivered changes and the short current state in `docs/HANDOFF.md` when the next action or a blocker changes. Use `docs/AGENT_EXCHANGE.md` for discussion. Update Intent only for an accepted decision or to remove a superseded instruction.
5. Before pushing, inspect newly fetched commits and reconcile overlapping edits. Push only the intended changes to `github preview` without force. Verify GitHub has the commit before calling it delivered. If publishing is blocked, retain the work and state that the other agent cannot see it yet.

The shared exchange is the inbox for both Cursor and Codex. Cursor's always-applied project rule points to it; other agents enter through this file. It is read when an agent runs and syncs, not a background notification service. Do not claim to have woken an agent or received a reply that has not been written. No new NOTICE files, duplicate briefs or routine pings to the historical Codex branch or PR #1.

## Locked product position

InnMetric is a founder-delivered, vendor-neutral **distribution-control service** for independent and small-group hotels. Internal ICP is still independent GCC hotels. Do not use GCC as a public homepage hook. The public site is read by anyone.

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
- Primary CTA on the Next preview: `Let's Solve It!` to `/contact/`. Root static HTML keeps `Request a distribution review` until cutover.
- Never use an em dash or an Oxford comma (`, and` / `, or`).
- Do not publish founder full names on the homepage. Names belong on `/about/`.
- Keep H1 `The desk can quote the room. The guest still cannot buy it.`
- Keep lede `A successful push is not a sellable room.`
- Do not lead public pages with GCC.
- Public voice: clear, natural and professional. Mert's later feedback on 2026-09-06 supersedes the older direction to write with rage. Explain the booking problem and what we do with the hotel's team. Keep useful fit criteria and the ability to decline without belittling the reader or performing an angry persona.
- Run `npm run lint:copy` before deploy.

Approved pattern:

> We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Copy review

Use [blader/humanizer](https://github.com/blader/humanizer) as an editorial reference for repetitive structures, forced punchlines, stock phrases and unnecessary defenses. It is not an audience test or evidence that copy converts. Do not add it as a runtime dependency.

- Read the whole passage aloud. Mix complete sentences naturally; do not make every line a slogan or a clipped warning.
- Name what the hotel team sees and what InnMetric will do. Prefer familiar booking language over phrases such as "commercial behavior" or "the work closes".
- Preserve the locked H1, lede and CTA in [docs/INTENT.md](docs/INTENT.md). Keep the current preview layout, palette and wordmark when the task is copy. Do not restore the ticket row or the five-verb homepage band.
- Keep observations separate from possible causes. Compare room, dates, occupancy and terms before implying a fault. Do not invent results, customer stories, staff quotes or financial impact.
- Explain approval, access and service limits where they help a buyer decide. Remove contempt, threats and repeated declarations of what we refuse to be.
- Review every revised claim against the source. A scheduled recheck can find recurrence; it cannot guarantee that an issue will never return.
- Use the Drive writing references to make editorial choices. Do not turn a storytelling framework or a conversion anecdote into a product promise or a new rule for the visitor. Ask for a booking example because it is useful for the review.
- Keep a short explanation of InnMetric's role beside the homepage hook. Keeping diagnosis off the homepage does not mean withholding what the service does. Describe the next step without telling the reader to do work for its own sake.

Run the existing copy lint after editing. Check changed pages in their actual layout when browser QA is requested. Distinguish checks that passed from checks still pending. A build does not prove desktop or mobile layout is correct.

Use [docs/HANDOFF.md](docs/HANDOFF.md) to identify the current review candidate. Mert explicitly requested the Drive-informed alternative after the cause-and-egg pass. The [copy comparison](docs/COPY_COMPARISON.md) records that proposal against its exact Git baseline. Its supporting prose is a review candidate, not a new set of locked strings. Preserve the accepted public lines in Intent. Once the requested checks pass, close the review thread and wait for Mert's next brief instead of starting another unsolicited rewrite.

## Operating motion (not this repo’s job to automate)

Select a small batch of hotels → inspect → contact a named person politely → website as backup → book a meeting → follow up twice → record whether they would pay. Do not blast thousands of addresses.

## Deploy and branches

GitHub `main` is production for the **existing** Netlify site. Do not create a second Netlify site. Do not merge `preview` into `main` until Mert authorizes a cutover. Do not merge [PR #1](https://github.com/arifthei/innmetric/pull/1). That branch is a documentation audit.

Production is the root static HTML. `netlify.toml` still publishes `.`. Do not point Netlify at `web/`.

A Next.js preview lives in `web/` on **`preview`**. That is the implementation branch for visual and copy work. Run `npm run dev` from the repo root. Do not run `.\deploy.ps1` as part of preview work. `.netlifyignore` must list `web` and `docs` so an accidental prod deploy cannot publish the app or agent notes.

`deploy.ps1` and `npx netlify deploy --prod` publish local files to the live site. Use them only for an authorized manual release of the static root.

## Design on preview

The Next app uses a Sanzo Wada cartella: kinari paper, sumi ink, asagi turquoise. Do not restore HotelRunner orange `#fa582d`. Do not apply the Codex spa palette `#F7F8F2` / `#087F80` / `#CBE7A5`. **Not bookable** must not use brand turquoise.

Wordmark: lowercase `innmetric` with an asagi square glow at the end. No IM box. No Eosyn amber.

Homepage hero: copy plus a four-card problem wheel. Control-record tabs stay off the homepage. `/how-it-works/` may keep a static illustrative slip. Do not copy Eosyn chat chrome or iGaming voice.

Inquiry inbox: hello@innmetric.com

## New website chats

Start from [docs/INTENT.md](docs/INTENT.md) and `@_context/website/`. The context folder is local-only. It is gitignored and excluded from Netlify. Do not link it from public HTML.

When `web/` is present, read `web/AGENTS.md` before writing Next.js code.

## New hotel prospecting chats

This is a separate track from the website. Do not mix the two in one chat.

Start from the Drive file `_BOOT`, not from the local folder: https://docs.google.com/document/d/1qx9CsT7z67EH9-8IuBW6gQceYDHPEv4pFI19PAPKajQ/edit

`_BOOT` names the only files a lurk agent may read, and it names the files that will waste its context. Obey both lists.

Rules and templates are mirrored locally in `@_context/hotel-detection/` so they can be read without a browser. All live state, meaning the id queue, the dedupe index and the register, is in Drive only. If a local file and Drive disagree, Drive wins.

One loop per chat. A loop is up to twenty hotels in one named area, then it closes and a fresh chat takes the next area. Do not run loops as subagents, they lose the browser.
