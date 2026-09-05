# InnMetric repository review and design proposal

Reviewed on 2026-09-05 by ChatGPT/Codex, the coordinating agent appointed by Mert. This is a dated review and handoff. Recheck the repository before acting on it.

## Observed baseline

| Surface | Evidence | What it establishes |
| --- | --- | --- |
| GitHub `main` | `1e21e26b9fc39bea5504c79e393186fd5b85b1f7` | Static marketing website with ten active HTML files, shared CSS, a small navigation script and no framework dependencies. |
| GitHub `preview` | `94978cc09e0e8dd5a9265e7765dd20b92d6471f1` | One commit ahead of the reviewed main, with the same main commit as its parent. Adds a Next.js company-page rebuild in `web/` and changes several root static pages. Mert explicitly requests evaluation without editing this branch. |
| Live homepage | Browser inspection of `https://innmetric.com/` | Heading: "Connected does not always mean correct." Navy `#0F172A` with cyan `#38BDF8` accents matches main's design. This does not establish the exact published Git SHA. |
| Local PC / Cursor | Mert's update and the newly pushed preview snapshot | The orange/red Next.js source is now reviewable on GitHub. Any uncommitted or later local changes remain unseen. |
| Netlify configuration | Both branches' `netlify.toml` | Node 22, `npm run lint:copy` and root publish directory `.`. The preview branch's `.netlifyignore` excludes `web`. No Next.js cutover is configured. |
| Production selection | Mert reports GitHub integration and only `main` publishing to `innmetric.com` | Keep `main` as production. The Netlify dashboard, exact published deploy, auto-publish state and form delivery settings were not inspected. |
| GitHub checks | Zero commit statuses and zero check runs on both reviewed commits | No deployment URL or deployment confirmation was obtained from these endpoints. Empty results do not establish failing builds. |

The preview is a marketing website implemented in Next.js, not evidence of a working hotel-operations SaaS. Its interactive work record is illustrative and its contact form is intentionally local-only. Preserve that distinction in public claims.

## Assessment of the two versions

Main has specific positioning and honest examples. Its weakness is how much reading it asks of a buyer before showing the work. The hero has two substantial explanatory paragraphs followed by eight similarly treated sections. Repeated dark cards give different kinds of information similar visual weight.

The existing evidence-register and change-log illustrations are useful, but low on the page. The SVGs are 920 pixels wide with 13 to 14 pixel labels. Scaling them into small cards makes the labels difficult to read. Keep the visible "Illustrative example. Not a client record." disclosure when replacing them with responsive content.

Preview is the more useful structural starting point for a future redesign. It already has shared navigation, footer and page components, a shorter hero beside an example work record, clearer service rows and a consistent grid. Keep those strengths on a new implementation branch. The CSS explicitly describes a layout measured from another corporate site. A colour substitution alone will not create InnMetric's own identity: the composition, language and evidence presentation need to reflect hotel distribution work.

HotelRunner's inspected homepage uses a light background with orange accents. Preview uses white, orange `#FA582D` and a red-brown gradient, so this is the branch relevant to Mert's colour comparison. Main is navy and cyan. The colour resemblance is a design observation, not a claim that the sites share code.

Preview's opening line, "A successful push is not a sellable room," is memorable but assumes familiarity with distribution jargon. Pair any punchy headline with a plain explanation of the service. Labels such as "The object" and repeated defensive copy such as "No invented revenue" consume attention that could explain the deliverable. Retain the limits on claims without making those limits the main sales message.

Both form versions ask for ten required information fields plus consent. Consider requiring property, contact name, email and a short problem description, with systems and channels optional or collected later. This is a recommendation, not measured evidence of a conversion problem.

## Preview findings before a release

These findings describe the reviewed source. They are not requests to edit the reference preview branch. GitHub reports `protected: false` for both main and preview; the user's hold is an instruction, not an enforced GitHub control.

| Finding | Evidence | Required outcome before cutover |
| --- | --- | --- |
| Contact form sends nothing | `web/src/components/ReviewForm.tsx` prevents submission and displays "The request was not sent." | Implement the chosen form delivery path and verify actual receipt on a test deployment. Do not merely remove the notice. |
| Metadata uses localhost | `web/src/app/layout.tsx` sets `metadataBase` to `http://localhost:3000`; pages use relative canonical paths | Configure the intended public canonical origin and inspect the generated metadata. |
| Preview-only header and notices | `web/src/components/SiteHeader.tsx` always shows local-preview text and `npm run dev` | Keep development instructions out of the released customer experience. |
| Hosting still serves the old root | `netlify.toml` publishes `.`; `.netlifyignore` excludes `web`; Next configuration has no static export | Select and verify a supported Next.js deployment configuration for the existing Netlify site. Publishing the raw `web/` source is not a working cutover. |
| Whole-branch merge also changes the static site | Changes include `index.html`, `css/site.css`, services, how-it-works and the control-loop illustration | Review root changes separately from the new application. Do not assume an unchanged publish directory makes a merge harmless. |
| Essential sections depend on reveal scripting | `Reveal.tsx` begins hidden; `.reveal` uses `opacity: 0` until JavaScript toggles it | Prefer visible content by default with progressive motion. Check keyboard use, reduced motion and failure to hydrate. |
| Example needs clearer visible context | `WorkFile.tsx` has an illustrative ARIA label; its visible note says "The record the engagement produces." Tabs highlight rows while "Not bookable" stays fixed | Add a visible sample disclosure. Make selection mean one clear thing and avoid implying live hotel data or a working operations product. |

The preview's Figtree typography, shared components and simple CSS are sufficient for this next iteration. A new framework or another visual kit is unnecessary for the requested brand direction.

## Proposed design direction

Use a light, warm canvas with turquoise as the recognisable brand colour and light green as a supporting accent. These colours are Mert's preference, not an industry rule. Give the page a clear reading order and room around the evidence.

| Role | Proposed colour | Application |
| --- | --- | --- |
| Main canvas | `#F7F8F2` | Warm off-white page surface |
| Main text | `#163B39` | Dark green headings and body text |
| Primary action | `#087F80` | Deep turquoise buttons with white labels |
| Brand accent | `#3FC6B7` | Selected graphic elements with dark text |
| Supporting accent | `#CBE7A5` | Light green highlights with dark text |
| Secondary text | `#4E6660` | Supporting copy on the main canvas |

Calculated contrast on solid colours: white on the action colour is 4.82:1; main text on the canvas is 11.44:1; main text on turquoise is 5.80:1; main text on light green is 9.03:1; secondary text on the canvas is 5.79:1. White on the bright turquoise is only 2.11:1, so use dark labels there. Verify implemented hover, focus and mobile states separately.

Keep Figtree when building from preview and keep Inter if doing a small main-only change. Use restrained rounding and thin dividers. Remove the red-brown gradient in the proposed redesign. Avoid floating blobs, repetitive card grids and invented performance dashboards. Brand green must remain separate from operational success: an unresolved "Not bookable" state must not become green merely because the brand palette changed.

Suggested homepage sequence:

1. One concise problem and offer beside a clearly labelled illustrative distribution case. Preserve "Request a distribution review" as the primary CTA.
2. Three concrete failure scenarios: unavailable room, inconsistent offer and returning defect.
3. A readable record of observation, conditions, approval and verification. It demonstrates the delivery method without implying a live app or client result.
4. Three service scopes followed by a brief engagement sequence.
5. Hotel fit and a final contact invitation. Put detailed method and founder names on the existing subpages.

A possible headline direction is "Make the room you sell match the room guests can book." Supporting copy should immediately explain that InnMetric reviews the hotel's existing systems, makes approved corrections and checks the guest-facing result. This is proposed copy, not an approved promise that every room can be made bookable.

Colour implementation must include the header, mobile menu, inputs, button states, status indicators, favicon, illustrations and social image. Preview has hardcoded orange tints beyond its accent variable. Main has hardcoded navy and blue beyond its CSS variables. The linked social image is `assets/og-image.png`; changing an SVG source alone will not update it. Preserve routes and reconcile `/tr`, `/archive` and private-context redirects when changing hosting.

## Next handoff for Cursor

The coordinator owns `AGENTS.md`, `README.md`, `CHANGELOG.md`, this review, `docs/HANDOFF.md` and `docs/RELEASE_NOTES.md` on `codex/coordination-and-design-brief`, based on main `1e21e26`. This task changes documentation only. Read the files from the draft PR without merging either branch into production. The handoff is the current resume point; the analysis here is supporting evidence.

The newly published preview snapshot resolves the earlier request to expose the local app. Do not publish another duplicate or push further changes to the reference branch for this task. Confirm whether the PC has additional uncommitted or unpushed work beyond `94978cc`. Record the current branch, HEAD, dirty paths and remote destinations. Preserve any additional work on a separately named branch before switching or integrating.

For subsequent implementation, record the selected base commit and create a new branch such as `cursor/brand-refresh` or `codex/brand-refresh`. The recommendation is to reuse the reviewed preview structure on that new branch. Preserve the original preview ref. Inspect the existing local remote: if it points to Cursor Origin, preserve it and use a clearly named GitHub remote. Do not overwrite the PC folder or force-push main to make versions match.

Reconcile the coordinator's AGENTS additions with preview's newer rules by intent. Preserve its homepage-name rule, production cutover hold, local-only context rules, separate prospecting instructions and web-specific Next.js guidance. Do not blindly replace preview's AGENTS file with the main-based version. Retain preview's copy-lint extension and deploy exclusions until an explicitly reviewed cutover changes them.

Each handoff should contain:

| Field | What the implementing agent reports |
| --- | --- |
| Source | Canonical repository, task branch and remote destination |
| Version | Base SHA, resulting SHA and any local-only differences |
| Scope | Owned files and resulting user-visible behavior |
| Verification | Checks run, results and steps that could not be performed |
| Deployment evidence | Existing Netlify project, production branch, published deploy ID/SHA and inspected preview URL when accessible |
| Remaining work | Conflicts, release blockers and next owner |

Use GitHub branches and PRs as the shared handoff. Cursor retains access to the local PC; this conversation can inspect what is pushed. The coordinator does not automatically watch Cursor or enforce branch protections.

## Release readiness and validation

Mert wants to finish the work before production release. Keep `main` as production and preserve the existing Netlify project. Record the currently published deploy as the rollback target. Review a deployment of the exact candidate commit before an authorized merge and cutover. A branch build is not itself a production cutover under the reported configuration. This documentation has not changed Netlify settings or GitHub protections.

For a Next.js release, check the built routes, mobile navigation, contact delivery, generated metadata, redirects, assets and accessible presentation. When retaining Netlify Forms, verify its build-time registration and delivery in the chosen deployment setup. The current root form uses `distribution-review`, a hidden `form-name`, a honeypot and `/thanks/`; the preview React form does not implement that submission contract. A local check cannot establish receipt.

The root copy check passed on ten active HTML files on main. Preview's expanded copy check passed on ten HTML files and seventeen web source files. Both were invoked with `node scripts/lint-copy.mjs`, the script used by `npm run lint:copy`. Preview's lockfile installation succeeded with install scripts disabled. `npm run build` completed compilation, TypeScript checking and prerendering of the listed routes. `npm run lint` passed. These checks ran on `94978cc` with no tracked source changes.

The production server started locally, but the cloud browser could not open its localhost URL and returned `ERR_BLOCKED_BY_CLIENT`. Preview layout and interactions therefore remain unverified in this environment; the critique of preview is based on source inspection. Earlier browser inspection covered the public InnMetric and HotelRunner homepages. No production deployment or form submission was performed. The latest validation and next tasks are summarized in [the handoff](HANDOFF.md).

## References

- [Reviewed main commit](https://github.com/arifthei/innmetric/tree/1e21e26b9fc39bea5504c79e393186fd5b85b1f7)
- [Reviewed preview commit](https://github.com/arifthei/innmetric/tree/94978cc09e0e8dd5a9265e7765dd20b92d6471f1)
- [Preview comparison with main baseline](https://github.com/arifthei/innmetric/compare/1e21e26b9fc39bea5504c79e393186fd5b85b1f7...94978cc09e0e8dd5a9265e7765dd20b92d6471f1)
- [InnMetric homepage](https://innmetric.com/)
- [HotelRunner homepage](https://hotelrunner.com/en/)
- [Netlify repository linking](https://docs.netlify.com/build/git-workflows/repo-permissions-linking/)
- [Netlify production branches and preview controls](https://docs.netlify.com/deploy/deploy-overview/)
