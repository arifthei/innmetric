# InnMetric - agent rules

This repository is the innmetric.com website and git workspace. It is not the sports-assist product. Do not import Google Drive traction packs into this repo.

## Coordination and authority

Mert is the project owner and final decision-maker. As requested on 2026-09-05, ChatGPT/Codex in the InnMetric project conversation is the primary coordinating agent ("Chief Brain Officer") until Mert changes that assignment. The coordinator maintains the product and design decisions, reviews overlapping work and assembles the release recommendation. Cursor and other agents implement scoped tasks and return reviewable changes.

Follow Mert's latest explicit instructions. The coordinator's role does not cancel work that Mert has already authorized or require permission for routine reversible work. Record unresolved product, design or shared-file conflicts for the coordinator instead of silently making competing decisions. No agent can see another agent's unpushed local work. This agreement does not create automatic monitoring, GitHub branch protection or Netlify deployment controls.

Start with [the current handoff](docs/HANDOFF.md). It records completed work, outstanding tasks and the next owner. Read [the repository review](docs/REPOSITORY_REVIEW.md) only when its evidence is relevant to the next task. Dated observations are a baseline, not a substitute for checking the current branch and working tree.

## Resume and checkpoint protocol

At the start of a session, read this file and `docs/HANDOFF.md`, inspect local changes and compare the recorded SHAs with the canonical remote. Report the next unfinished task in one sentence and continue it. Do not repeat a completed audit or reinstall/rebuild unchanged code unless a changed commit, missing evidence or a required release gate makes that necessary.

Before ending a session or moving to another task, update `docs/HANDOFF.md` with completed work, exact source revisions, changed files, validation results, unresolved items and the next owner. Make a scoped checkpoint commit on the task branch and push it when authorized. If publication fails or work is interrupted, explicitly mark what remains local. Never describe uncommitted work as delivered to GitHub.

Use `CHANGELOG.md` for changes over time and `docs/RELEASE_NOTES.md` for the current candidate's scope, validation and deployment status. Keep accepted decisions separate from proposals in the handoff. The user's current instructions take precedence over an older checkpoint. Do not invent approvals or mark a release complete from a passing build alone.

## Shared source and parallel work

- Canonical shared repository: `https://github.com/arifthei/innmetric.git`. GitHub `main` is the integration baseline. An unpushed local folder is work in progress that must be preserved and compared before integration.
- Mert's current hold: `main` serves production and `preview` is a reference to evaluate without editing. Do not push changes to `preview`, merge it into `main`, publish its deploy or change Netlify's production branch. Continue new work on a separately named task branch with an explicitly recorded base. The coordinator's documentation branch starts from `main`; a later redesign can derive from a reviewed `preview` commit without modifying `preview` itself.
- Do not assume the remote named `origin` is GitHub. Existing local checkouts may still use `https://origin.cursor.com/arifthei/innMetric.git`. Inspect remote destinations first. Preserve an existing Cursor remote; add a clearly named GitHub remote if needed. Do not overwrite remote configuration blindly.
- Check the current branch, HEAD, working-tree changes and relevant open PRs before editing. Fetch the canonical remote and record the base SHA. Preserve dirty or untracked local work before switching branches or integrating someone else's changes.
- Use a dedicated branch per task, such as `codex/<task>` or `cursor/<task>`. Agents working on one computer should use separate worktrees when they need to work at the same time.
- State the files owned by the task in its PR or handoff. Coordinate changes to `css/site.css`, repeated page headers, `js/nav.js`, `web/src/app/globals.css`, shared React components, shared assets and deployment files before two agents edit them. Recheck the base before publishing changes.
- Stage only the intended files. Keep credentials, `.env` files, `.netlify` state, dependency folders and private hotel records out of commits. This repository is currently public.
- Do not force-push shared branches, reset away another agent's work or resolve a conflict by replacing an entire version with the other. Compare the intent of both changes. If histories have no common ancestor, preserve both and prepare a scoped reconciliation; do not combine unrelated histories automatically.
- Handoff through a branch or PR with the base SHA, resulting SHA, changed paths, checks run, remaining limitations and next owner. GitHub is the handoff record; copying folders between agents is not synchronization.

## Locked product position

InnMetric is a founder-delivered, vendor-neutral **distribution-control service** for independent and small-group hotels in the GCC.

One sentence:

> InnMetric audits, repairs with the hotel’s approval, verifies the live guest-facing result and rechecks agreed outcomes across the hotel’s existing PMS, channel manager, booking engine and OTA accounts.

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
- Preserve the newer `preview` instruction: founder full names belong on `/about/`, not the homepage, when implementing the redesign.
- Run `npm run lint:copy` before deploy.

Approved pattern:

> We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Operating motion (not this repo’s job to automate)

Select a small batch of hotels → inspect → contact a named person politely → website as backup → book a meeting → follow up twice → record whether they would pay. Do not blast thousands of addresses.

## Deploy

Mert reports that GitHub is linked to the existing Netlify project and only `main` publishes to `innmetric.com`. Keep that production branch. The dashboard, published deploy SHA, auto-publish state and form notification settings have not been inspected here and must be verified before a release. Do not infer them from a successful local check or an empty GitHub checks list.

Production is the root static site. The Next.js company-page rebuild is in `web/` on `preview`. That branch still publishes `.` and excludes `web` through `.netlifyignore`. It also changes root HTML and CSS, so merging it could alter the existing production site even without a Next.js cutover. Treat the merge and the hosting cutover as explicit release decisions. A cutover needs a working Next.js build/deploy configuration, not just a publish-directory change.

The current task is analysis, coordination documentation and a design proposal. Keep this work on its task branch. Do not merge the redesign into the production branch or deploy it until Mert authorizes the release. Continue authorized implementation and local checks without asking again for routine steps.

The intended release path is a reviewed task PR, an inspected preview for changes to the site and an authorized merge to the confirmed production branch. Netlify should build the approved Git commit. Before that merge, reconcile Cursor's local differences and record the currently published Netlify deploy as the rollback target. After deployment, verify the published commit, changed pages, navigation and the contact route. A rollback should also be reconciled back into Git so the next deploy does not restore the defect.

`deploy.ps1`, `npm run deploy` and `npx netlify deploy --prod` publish local files directly. They are legacy/manual release paths, not preview or verification commands. Use them only for a specifically authorized manual release to the existing site. Do not create a second Netlify site or change DNS as part of ordinary website work.

Before a website release, run `npm run lint:copy` and the checks appropriate to the changed behavior. On the reviewed `main` it checks HTML strings; `preview` extends it to the web source. Preserve that extension when reconciling the branches. The check does not verify layout, links, accessibility, form delivery or deployment synchronization. `node scripts/lint-copy.mjs` invokes the same check directly without npm.

Current configuration publishes the repository root with `publish = "."`. Treat tracked coordination documents as public material. Any future change to the publish directory must preserve routes, redirects, assets and Netlify Forms detection.

## Design direction

Mert requests turquoise and light green and rejects generic purple-gradient styling and copying HotelRunner's appearance. Exact colours, layouts and copy in [the design proposal](docs/REPOSITORY_REVIEW.md#proposed-design-direction) remain recommendations until selected by Mert. Do not turn a proposal into an approved requirement or replace the current site as part of a documentation task.

Preserve the locked product position in this file when redesigning. Use concrete distribution examples with clear illustrative labels. Do not invent client results, integrations, a working dashboard or live product capabilities to make the page look more established.

## Local context and branch-specific instructions

Cursor may have local-only website context in `_context/website/`. If present, read relevant website instructions before implementation. It is not available in this checkout. Do not claim it was reviewed or publish it. Hotel prospecting is a separate task; do not import its private context into a website PR.

When working on a branch containing `web/`, read `web/AGENTS.md` and the installed Next.js documentation it requires before writing application code. Reconcile this file with newer branch instructions by intent. Preserve the `preview` restrictions on production, local context, names and separate prospecting work; do not replace its entire AGENTS file with this main-based version.

Inquiry inbox: hello@innmetric.com
