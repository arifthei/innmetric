# Changelog

A commit on `preview` is not a production release. innmetric.com follows `main` until Mert authorizes a cutover.

## Unreleased

### Page purpose and Contact revision, 2026-09-12

- Refreshed `preview` from GitHub at `98e35041b391c9a8c9a59c890375d773c76a8c75`, including Cursor's founder portraits, production form gate and Netlify cutover preparation. Applied a corrected version of Mert's attached build revision plan in six page chunks.
- Home now opens with a recognizable availability mismatch and one explanation of the service. The deliverables lead with what the hotel team can learn or follow up. Services offers direct section links and separates an audit's findings from repair work. How it works removes repeated phase summaries. About puts the sourced founder bios first, removing the five-row process manifesto. FAQ retains six questions with scoped answers. Metadata follows each page's purpose.
- The primary action is `Talk to us`, shared from `web/src/lib/copy.ts`. Mert explicitly permitted H1/CTA judgment. The copy lint retains the header's contact destination check without freezing an editable phrase. Page-specific closing invitations use the shared CTA component.
- Contact uses one centered column with existing field pairs at desktop widths. Privacy sits with consent, data guidance sits beside the outcome field and the reply expectation sits by submit. Field labels use sentence case. Added name/email/organization autocomplete. Required fields, optional website/systems, detector schema, submission handler and both receipt states are preserved.
- Updated agent rules, Intent, Writing, contradictions, both READMEs and historical-pack entry points. The source adaptations and plan corrections are recorded in the handbook and exchange. No new general copy-review loop.
- Validation: copy lint, ESLint, form tests and default/enabled Next builds passed, including TypeScript and 12 generated static pages. Enabled built-HTML checks passed across nine routes for headings, the shared action and production canonical URLs; form field names matched the detector. Protected-source checks confirmed the form handler, release gate, Netlify configuration, typesetting helper, wheel and illustrative record were unchanged. Every palette variable matched the baseline. Final disabled-build checks and the remaining visual-review status are in HANDOFF.
- Browser limitation: the available cloud browser could not open the local app (`ERR_BLOCKED_BY_CLIENT`). GitHub returned no commit statuses or check runs exposing a branch-preview URL for the baseline. No fresh visual or interactive browser pass is claimed. Cursor has one bounded rendering/form check, not a new editorial rewrite. No main merge, production deployment or outreach.

### Founder photos, gated form and cutover prep, 2026-09-10

- About founder cards now show processed 640×800 portraits (`tunahan`/`mert` WebP 28–39 KB, JPEG 55–65 KB) above the name. `alt` is name, Co-founder and role. `object-position: center 18%`. Portraits sit at 160×200 beside the name and bio so the card has no empty strip. Cards stay equal at 1920 and stack at 390. No faces on the homepage. The 2 MB source PNGs stay gitignored.
- Form gate is `CONTEXT === "production"` and `INNMETRIC_FORMS_ENABLED === "true"`. Ordinary preview still does not send. `prebuild` copies `detector.html.template` to gitignored `web/public/__forms.html` only when the gate is on and deletes it otherwise. `ReviewForm` uses named form `distribution-review`, `postEnquiry` with `getAll("systems")` joined, a 20s abort, Sending…, no double submit, inline thanks when enabled, and the existing non-sent receipt when disabled. `/thanks/` does not confirm receipt.
- Production contact/privacy wording, preview bar and `metadataBase https://innmetric.com` sit behind the same flag. `netlify.toml` on this branch is the Next pack: base `web`, `npm --prefix .. run lint:copy && npm run build`, publish `.next`, `@netlify/plugin-nextjs`. `.netlifyignore` no longer excludes `web`.
- Validation: `lint:copy` passed (10 HTML, 22 web/src). ESLint passed. Form unit tests covered prepare-forms leftover deletion and mocked `postEnquiry` (2xx, 500, network, abort, in-flight guard). Default build: detector absent, no `data-netlify` in `.next`. Enabled build: detector matches the template field names. Second default build removed the leftover file. Browser: About 1920/390, homepage has no founder images, disabled contact submit stays on `/contact/` with no `fetch`. No production deploy. No merge to `main`.

### Typesetting, equal cards and active-nav scroll, 2026-09-08

- Mert's screenshots at 1920 showed lines ending on `in the`, `you`, `or`, `it`, `what` and paragraphs finishing on one or two words. The frame caps at 1320px and leads at 46ch, so the same wraps appeared at every desktop width. Wording is unchanged.
- New `web/src/lib/typeset.ts` `t()` glues the space after short function words and the last two words of a string with non-breaking spaces at render time. Chains stop after three glued spaces; the widow tail is capped at 28 characters for body and 18 for H1 so nothing overflows at 390. Applied to every reader-facing heading, lede, body, list item and form receipt across the six sales pages, the wheel cards and the CTA band. Source strings stay plain ASCII for `lint:copy`.
- CSS: `text-wrap: balance` on one- and two-line blocks (ledes, section leads, wheel bodies, row states, pairs, checklist and not-list items, side-card steps, phase summaries, form note). Longer paragraphs keep `pretty`, because balancing three lines left a short middle line on the hero hook. Side-by-side card rows stretch to equal height, so the two founder cards and the two fit cards share one bottom edge.
- Header: clicking the nav item, logo or `Let's Solve It!` for the page already on screen scrolls to the top instead of doing nothing. Same URL, `aria-current` kept, mobile menu closes. Smoothness and reduced motion follow the existing `scroll-behavior` on `html`.
- Proofread: `Prioritised` on Services aligned to the Oxford `-ize` used elsewhere (`organized`). No other spelling, punctuation or double-space defects found.
- Validation: `lint:copy` passed (10 HTML, 20 web/src files), ESLint passed, `next build` compiled with TypeScript and generated 12 static pages. Browser audit on the dev server walked every rendered text block on `/`, `/how-it-works/`, `/services/`, `/about/`, `/faq/` and `/contact/` at 1920, 1536, 1440, 1280, 1024, 768 and 390: zero lines ending on a listed function word, zero one-word last lines, zero block or document overflow (42 page/width combinations). Wheel cards checked separately at 1920. Founder cards measured 648x248 each with the same top at 1920. Nav test: on `/faq/` scrolled to 534 at desktop and 900 in the mobile menu, clicking FAQ returned to 0 with the URL unchanged. No production deploy. No Netlify change.

### Shorter decision-maker copy and instruction repair, 2026-09-08

- Reviewed `ef2df42`, including Cursor's rewrite and latest founder-card fix, against the attached guideline, current Drive sources and both humanizer repositories.
- Published the four-file Fixes pack in Drive before implementing its Git mirror. The report names actual writing failures, unsupported claims, stale instructions and the limits of the references.
- Shortened the six sales pages and wheel bodies. Kept the concrete deliverables, team responsibilities, approved H1/CTA, offer names and six FAQ questions. Removed invented vendor history, known-cause/success promises, all-channel scope and formula repetition.
- Preserved the decision-maker fields and requiredness. Clarified optional website/systems, the problem/outcome prompt, working email links and non-sending state. Updated the preview privacy field and processing descriptions to match the code.
- Consolidated current rules into AGENTS, Intent and Writing, shortened the current handoff and replaced stacked contradictions with a resolved-conflict table. Answered Cursor's six questions and opened one bounded review thread. README and historical comparison point to the current repair.
- Created and read back a separate native email alternative in Drive GTM. No emails sent and no hotel-specific data added to Git.
- Validation: copy lint passed (10 HTML, 19 web source files), ESLint passed and Next build/TypeScript passed with 12 static pages. Rendered HTML checks passed on seven routes for metadata, links, the current H1/CTA, process, FAQ, form contract and privacy. Form control attributes and submit handler match the baseline. Protected source comparison, local Markdown links and `git diff --check` passed. Six sales-page source texts fell from 2,195 to 1,655 words, excluding metadata and shared components. Fresh browser QA remains open for Cursor. CSS, palette, founder biographies, root static files, form wiring and deployment settings remain unchanged.

### Card and title wrap CSS, 2026-09-08

- Founder cards were capped at 20ch for titles and 42ch for body, so Co-founder broke across lines and a dead strip sat on the right of each card. Titles now fill the card. Name and role sit on two lines. Headings do not hyphenate.
- Homepage offer titles and services state lines fill their columns. Services title column is 340px so the three offer names stay on one line at 1440. Belief pairs use a wider first column.
- Copy unchanged. Palette unchanged. Browser: About, Home, Services, How it works and FAQ at 1440, founders also at 390. No overflow. **Not bookable** stays kaki. `lint:copy` passed.

### Decision-maker copy rewrite, 2026-09-08

- Mert judged the Codex candidate too vague for a hotel decision maker and its form written for a guest. He authorized a rewrite of copy, layout and CSS with the palette unchanged and answered three scoping questions: keep H1 and `Let's Solve It!`, replace the lede and the guest-flavored form and band lines, rebuild the form for decision makers, name deliverables without durations or vendor names.
- New public lines on the Next app: lede `Your systems say the room is on sale. Somewhere between the PMS and the booking page, it stopped being one.`, form submit `Send the problem`, band `Tell us which booking problem you want owned.` H1 and button unchanged.
- Homepage gained a `What you get` section with four deliverables. Offers are framed as buyer states. Fit and wheel bodies rewritten. How it works shows a Your team and an InnMetric block in each of three renamed phases. Services opens each offer with its buyer state and rewords the boundaries. About uses We believe X, so we do Y. FAQ answers end with a next step.
- Contact form fields: name, work email, role (required), number of properties, hotel or group name, website, systems in use, the problem (required), what should be true when it is fixed, consent. Side card adds What happens next. Still non-sending. No fake thanks.
- CSS: checkbox chip fieldset, phase who-blocks on a subgrid, services row state line, side-card steps, wheel caption clearance, role and property count side by side. Sanzo Wada palette unchanged. **Not bookable** stays kaki.
- Intent, contradictions, handoff and the exchange updated. COPY-ALTERNATIVE-2026-09-07 closed as superseded. COPY-DECISION-MAKER-2026-09-08 opened for Codex.
- Validation: `npm run lint:copy` passed (10 HTML files, 19 web/src files). From `web/`, `eslint src` passed and `next build` compiled with TypeScript and generated all 12 static pages. Browser checks at 1440 and 390 on `/`, `/how-it-works/`, `/services/`, `/about/`, `/faq/` and `/contact/` are recorded in the exchange. No production deploy. No Netlify change.

### Preview alignment CSS, 2026-09-07

- Cursor reviewed Codex `835afa4`. Copy was left as the current proposal. Mert authorized CSS-only alignment work.
- How-it-works process grid is three columns, not five. Optional Role spans the contact form. Homepage H1 wraps on two lines. Offer-row index, title and link share a top edge. Fit cards no longer stretch to a 210px minimum.
- Browser: `/`, `/how-it-works/` and `/contact/` at 1440 and 390. No overflow. **Not bookable** stays kaki. No production deploy.

### Drive-informed copy alternative, 2026-09-07

- Refreshed after the usage interruption to `3e79c47df763a38053efe2b8a3db09454b9771fb`. Read all five documents in Copy Ideas, including Psychology and the updated Email & webcopy guidelines. The earlier interrupted attempt had made no alternative commit.
- Added `docs/COPY_COMPARISON.md` with a head-to-head comparison, source decisions and the completed product-limit review requested by Cursor. The current Git H1, lede, CTA and compact layout take precedence over the older Drive suggestions.
- Replaced the hero's refusal to diagnose with a short explanation of InnMetric's role and handover. Made the first enquiry concrete, clarified the form placeholder and kept the non-sending form explicit.
- Removed the implied guarantee that approved stays become bookable and tightened unsupported diagnostic and recurrence claims. Kept the three process phases, six FAQ questions, service exclusions, short form and all current public-line locks.
- Updated the agent guidance, Intent, contradictions, handoff and release notes. Closed the older product-limit review threads and opened COPY-ALTERNATIVE-2026-09-07 for Cursor and the email/branding agent to respond in Git.
- Validation: `node scripts/lint-copy.mjs` passed on 10 HTML files and 19 web source files. From `web/`, `node node_modules/eslint/bin/eslint.js` and `node node_modules/next/dist/bin/next build` passed, including TypeScript and static page generation.
- An AST comparison of all 9 changed TSX files confirmed changes only to prose, metadata descriptions/titles and the form placeholder. Markup, routes, classes, form logic and field requirements were unchanged. Built HTML checks passed for the 6 edited pages, current public lines, 4 wheel titles, 3 process phases, 6 FAQ questions and non-sending form notice. Local documentation links and `git diff --check` passed. Root static HTML, styling, shared chrome, illustrative slip, dependencies and deployment files were unchanged.
- Fresh browser QA remains queued for Cursor. The available supervised preview forwards Vite-style flags that the existing Next dev command rejects. Its supported recovery does not provide a compatible Next path; no app migration or temporary runtime rewrite was made. Earlier Cursor browser checks apply to `3e79c47`, not this wording. No production deploy or change to Netlify configuration.

### Cause-and-egg copy pass, 2026-09-07

- Mert approved a concise preview copy pass: hotel as hero, one cause, homepage stops before the diagnosis, contact form as the egg.
- New public lines on the Next app: H1 `The desk can quote the room. The guest still cannot buy it.`, lede `A successful push is not a sellable room.`, button `Let's Solve It!`, form submit `Send the stay`. Root static HTML still uses the production CTA.
- Homepage lost the ticket row and five-verb band. Wheel titles stayed. Offer names stayed with one-clause bodies. Fit delayed the approver until a live change.
- `/how-it-works/` is three phases plus the kaki slip. FAQ keeps the six search questions and drops the operational pile. Contact required fields are name, work email, hotel or website and what to look at. The form still does not send. No fake thanks.
- Intent, contradictions, exchange and handoff record the six handbook overrides. Branding Drive remains a suggestion, not a paste.
- Validation and browser checks are recorded in `docs/AGENT_EXCHANGE.md`. No production deploy.

### Search answers and Humanizer supporting copy, 2026-09-07

- Cursor reviewed Codex `e0dd115` at desktop ~1440 and narrow 390 with reduced motion. Locked H1, lede and CTA held. The four-card wheel, stacked fallback, illustrative slip and non-sending contact form behaved as specified.
- Mert then asked for a further copy pass: Humanizer-style supporting copy and public answers to six buyer-search questions. The homepage strategy, layout, palette and wordmark were not restarted.
- FAQ now answers empty booking-engine availability, a different Booking.com rate, channel-manager setup, rate-plan simplification, outsourced revenue management and OTA listing management in InnMetric's particular way. Fit and services lists decline RMS takeover, listing management and a first-time channel-manager install. A public rate difference is not treated as a fault until the stay is matched.
- Validation: `npm run lint:copy` passed on 10 HTML files and 19 web source files. `npm --prefix web run lint` passed. Browser checks are recorded in `docs/AGENT_EXCHANGE.md`. No production deploy.

### Shared agent review and final copy refinements, 2026-09-07

- Recovered the reattached `innmetric-copy-pass.patch`. It matched the saved patch and was already applied. GitHub `preview` was still at `e575a122e201930c7c7da64da16a34881d52df7c`; `main` was still at `1e21e26b9fc39bea5504c79e393186fd5b85b1f7`.
- Mert explicitly authorized committing and pushing this copy pass and the repository feedback loop to `preview`. The earlier wait for commit approval is resolved for this task.
- Added `docs/AGENT_EXCHANGE.md` with Codex's critique, a bounded Cursor review and a reply protocol. Linked it from root and web agent instructions and READMEs. Added a small always-applied Cursor project rule. No background agent service or automatic wake-up is claimed.
- Updated the Intent, contradiction log and branch map so the older anger persona and restriction on routine handoff updates cannot override the latest brief. The earlier Drive copy was not edited. Added preview release notes and refreshed the current handoff.
- Simplified Home/About search and sharing descriptions and replaced About's future-tools sentence with a description of direct founder involvement. No layout, style, interaction or deployment configuration changed.
- Validation on 2026-09-07: `node scripts/lint-copy.mjs` from the root passed on 10 HTML files and 19 web source files. From `web/`, `node node_modules/eslint/bin/eslint.js` and `node node_modules/next/dist/bin/next build` passed, including TypeScript and static page generation. These run the existing package scripts directly through Node.
- Source comparison confirmed that all 8 changed TSX files differ only in prose and description strings. JSX structure, links, classes and behavior are unchanged. Built HTML checks passed on all 6 edited pages, including the locked hero, CTA, four problems, illustrative status, non-sending form notice and revised descriptions. Local documentation links and agent entry points passed. `git diff --check` passed; the 14 checked design, form, root page and configuration files were unchanged.
- Browser QA remains outstanding and assigned to Cursor in `COPY-2026-09-07`. No visual pass is claimed. The Next.js dev command still rejects the browser preview runner's Vite-style flags; no runtime change was added for that limitation.

### Natural copy pass, 2026-09-06

- Prepared on `preview` from `e575a122e201930c7c7da64da16a34881d52df7c`. Recovered and included in the authorized 2026-09-07 delivery above.
- Rewrote the homepage, problem-card bodies, services, how-it-works, about, FAQ and contact introduction in a more natural hotel-operator voice. Kept the locked H1, lede, CTA and four wheel titles.
- Replaced theatrical warnings and repeated defensive slogans with concrete explanations of the review, approval and booking checks. Removed the promise that scheduled rechecks prevent recurrence.
- Clarified the illustrative record caption and added reusable copy-review guidance to `AGENTS.md`, informed by the Humanizer checklist.
- Kept preview's layout, palette, wordmark, motion and parked form/metadata behavior. No root static page or deployment setting changed. No production release is included.
- Validation: copy lint passed on 10 root HTML files and 19 web source files; Next.js build, TypeScript and ESLint passed. Source comparison confirmed that changes in the 8 TSX files are limited to visible prose. Built HTML checks passed on the 6 edited pages, including the locked hero lines, CTA, four problem titles and illustrative status caption.
- Browser QA remains outstanding. The supervised Sites preview runner passes Vite CLI flags that this Next.js dev command rejects. No compatibility change was added for a copy task. Check desktop and narrow views in Cursor before treating this as a visually verified candidate.

### Hero wheel and shared intent, 2026-09-06

- Added `docs/INTENT.md` as the human-in-the-loop brief. Same text goes to Drive and to the Codex branch once.
- Added Codex `docs/CONTRADICTIONS.md`. No NOTICE on every later preview commit.
- Homepage hero uses a four-card problem wheel. Control-record tabs left the homepage.
- Wordmark is lowercase innmetric with an asagi square. Public GCC copy removed. Locked H1 and CTA kept.

### Sanzo Wada preview pass, 2026-09-06

- Set GitHub as the canonical remote in agent docs. Cursor Origin is not the source of truth.
- Recorded the three GitHub branches in `docs/BRANCHES.md` and this handoff.
- Left a notice on `codex/coordination-and-design-brief` and on [PR #1](https://github.com/arifthei/innmetric/pull/1). That PR stays unmerged.
- Restyled the Next.js app in `web/` with kinari paper, sumi ink and asagi turquoise. Removed the rust-orange dark band.
- Kept **Not bookable** off brand turquoise.
- Rewrote the homepage fit block into a self-qualifier. Kept the locked H1 and primary CTA.
- Did not change root static HTML. Did not deploy.

## Baselines

| Commit | Meaning |
| --- | --- |
| [`1e21e26`](https://github.com/arifthei/innmetric/commit/1e21e26b9fc39bea5504c79e393186fd5b85b1f7) | `main` static site at last review |
| [`94978cc`](https://github.com/arifthei/innmetric/commit/94978cc09e0e8dd5a9265e7765dd20b92d6471f1) | `preview` before this palette and copy pass |
| [`294bcbd`](https://github.com/arifthei/innmetric/commit/294bcbd728dec58c37acd53641bb379c736274ca) | Codex documentation package |
