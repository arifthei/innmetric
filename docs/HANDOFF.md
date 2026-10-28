# Current handoff

Checkpoint: 2026-10-28. Last writer: Cursor. Next action: confirm innmetric.com built from `main` at `467c9e2`. Mert is the only authority.

## Resume here

Mert authorized the production cutover after Codex's commits were verified on GitHub `copy/booking-page`. `main` fast-forwarded to `467c9e2` (Codex copy `479dc71`, then Codex's validation record). Home explains the service and four problem types, Services clarifies the engagement choices and Contact explains the email reply. How it works contains a clearly illustrative investigation with an unresolved result. About and FAQ have distinct page roles. The carousel, English footer sentence and `/tr` redirects stay off. Existing service scope, fit lists, offer bodies, required form fields, Privacy and Terms remain intact. PR #1 was not merged.

## Revision checks

- Copy lint, ESLint and existing form tests passed. A separate editorial review found no factual or scope defects.
- Source revision `479dc712b19531cf5e01aaf75ce7afb01594b8fc` was checked in the local browser: all six sales pages at 1440px and 390px, with About also at 1920px. DOM width checks and visual inspection of Home, Contact and the worked example found two narrow-screen issues; the delivery corrects founder paragraph wrapping and the example grid. Both were rechecked with no remaining horizontal overflow. Kaki status retained.
- Production build compilation and TypeScript checks passed, but static generation failed with Windows `EPERM` while creating generated `.segments` directories. A fresh temporary output directory and a single-worker retry produced the same class of error. Temporary config and TypeScript changes were restored; no build configuration change ships. A complete production build remains unverified.
- No production form submission, merge or deployment was performed. The existing live notification/delivery check remains open.

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
