# Current handoff

Checkpoint: 2026-11-15. Last writer: Codex. Current delivery: B2B/B2G website content on `preview`, based on GitHub `f08dd3653e30733cfc4b959c0484c0b2fdd3f644`. Mert is the only authority. Full production-build and browser verification remain open on a normal development host; production cutover is separate.

## Guided demo at /collab/ (2026-11-17, branch `collab/partner-demo`)

Requested: publish the InnMetric guided demo, with new Ireckonu and Torus Legacy partner pitches, at `https://innmetric.com/collab/` through this Netlify site. The branch adds the build step, proxy, rewrites, edge function and headers (see CHANGELOG). Open before production:

1. The Replit API at `inn-metric-programme-planning.replit.app` serves an older revision: it has no hotel service state, so the B2B steps fail through `/collab/api` until that Replit deployment is republished from the pinned demo commit (`63a24ff`, branch `collab/meeting-demo`). The same republish adds `Cache-Control: private, no-store` to session responses.
2. Deploy Preview checks: direct load and refresh of `/collab/`, `/collab/partners/ireckonu/` and `/collab/partners/torus-legacy/`, slash-less redirects, assets, 1440px and 390px, Present mode, the B2B/B2G walkthrough, actions and export, two isolated demo sessions, partner pages with `/collab/api` blocked, and the rest of the site.
3. Rollback: revert the merge commit on `main`, or publish the previous production deploy in Netlify. Bumping `web/collab.source.json` to another demo commit changes only the demo.

## Resume here

Mert requested the approved one-page B2B/B2G content be integrated verbatim, with the existing website context and design preserved, then committed and pushed. Home now carries the exact public overview in `web/src/lib/overview.ts`. Services retains the three named paid engagements; How it works retains approvals, investigation, reversal and verification, adding AI-assisted checks and financial measurement. `/tourism-programme/` explains the proposed department-held fund, joint approvals, collected contributions, supplier work and separate commercial fees. Navigation is Services, How it works, Tourism programme and About; FAQ remains in the footer. The hotel form adds search/link and checkout issue options without changing required fields or sending behavior. Institutional enquiries use email.

The new brief supersedes the old blanket exclusions on search visibility and AI wording. Current boundaries are in Intent. The government programme remains a proposal. No pricing percentages, customer savings, automatic payback or official department relationship are claimed. About, Privacy, Terms, the form collector and the palette remain intact. Internal source notes are not published.

## Revision checks

- Copy lint, ESLint, TypeScript and existing form tests passed. React server rendering of all seven sales routes passed, including canonical paths and one H1 per page. The source-render check verified all 23 approved public overview phrases verbatim against the local source document after whitespace normalization. This is a content check, not browser validation.
- Independent source review found two issues: the proposed fund needed explicit joint approval, and a long link risked overflow at 320px. Both are corrected. The existing palette, Figtree, wordmark, reduced-motion behavior and kaki status color are retained.
- Production compilation and TypeScript passed. Static generation fails with Windows `EPERM` creating nested `.segments` directories, including unrelated existing pages. A scoped output-directory permission and a temporary single-worker/thread retry did not resolve it. The original Next config was restored; no environment workaround ships.
- Browser QA remains open. The local Chromium process was denied by Windows; the in-app browser could not reach the local server and explicitly blocked local-file navigation. No viewport or screenshot pass is claimed for this revision. Reviewer: the next frontend reviewer with a working local browser, before production cutover. Check Home and Tourism programme at 1440px, 1024px, 390px and 320px, then navigation and the unchanged form contract.
- No production form submission, main merge or deployment was performed. The existing live notification/delivery check remains open. Prior screenshots do not verify this revision.

## Delivered

- Hero, page heroes and contact form paint with the HTML. `Reveal` is one-shot with a no-JavaScript fallback.
- `robots.txt`, `sitemap.xml`, generated share image and icons, per-page canonical and Open Graph through `pageMetadata`.
- JSON-LD graph per page, `llms.txt` and `llms-full.txt`, AI crawler allowances, IndexNow key and script.
- Security headers and single-hop `www` redirects in `netlify.toml`.
- Env-gated Cloudflare Web Analytics.
- Google tag `G-D71XSP5J7T` on production builds only. Privacy notice updated 27 September 2026.
- Wordmark SVG at `/logo.svg`, used in the header and footer.

## Mert's actions

1. Google Search Console: submit `https://innmetric.com/sitemap.xml`, request indexing of `/`.
2. Bing Webmaster Tools: import from Search Console, submit the sitemap.
3. Optional second counter: Cloudflare Web Analytics. Set `NEXT_PUBLIC_CF_BEACON_TOKEN` in Netlify production if you still want it. Google Analytics is already on the live site.
4. Email: one test from mert@ and tunahan@ to mail-tester.com; confirm SPF, DKIM and DMARC pass; confirm DKIM is on in Google Admin; check hello@ for DMARC reports.
5. Profiles for backlinks and `sameAs`: Google Business Profile, LinkedIn company page, Crunchbase. Send the URLs; they go into `SAME_AS` in `web/src/lib/site.ts`.
6. Still open from the cutover: Netlify Forms notification for `distribution-review` to hello@ and one live test submit.

## Open decision

Current prospect lists target hotels without a working booking engine, while the site's fit requires an existing PMS, channel manager and booking engine. The authorized copy revision retains the existing-system service. An absent engine or a first-time installation remains outside scope; an existing engine with incorrect booking results can fit. The targeting decision is still open. The new worked example illustrates the method and is not customer proof.
