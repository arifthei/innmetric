# Current handoff

Checkpoint: 2026-09-25. Last writer: Cursor. Next action: Mert's search-console, analytics and email checks below. Mert is the only authority.

## Resume here

Mert asked for a full audit of the site, copy, business fit and email, then authorized the technical fixes to be deployed directly. The fixes are on `preview` and `main`. The audit summary and open business decisions are in [AUDIT-2026-09-25](AGENT_EXCHANGE.md#audit-2026-09-25). Read [AGENTS](../AGENTS.md) and [Intent](INTENT.md).

## Delivered

- Hero, page heroes and contact form paint with the HTML. `Reveal` is one-shot with a no-JavaScript fallback.
- `robots.txt`, `sitemap.xml`, generated share image and icons, per-page canonical and Open Graph through `pageMetadata`.
- JSON-LD graph per page, `llms.txt` and `llms-full.txt`, AI crawler allowances, IndexNow key and script.
- Security headers and single-hop `www` redirects in `netlify.toml`.
- Env-gated Cloudflare Web Analytics.

## Mert's actions

1. Google Search Console: submit `https://innmetric.com/sitemap.xml`, request indexing of `/`.
2. Bing Webmaster Tools: import from Search Console, submit the sitemap.
3. Cloudflare Web Analytics: add innmetric.com, copy the token, set `NEXT_PUBLIC_CF_BEACON_TOKEN` in Netlify production environment and redeploy.
4. Email: one test from mert@ and tunahan@ to mail-tester.com; confirm SPF, DKIM and DMARC pass; confirm DKIM is on in Google Admin; check hello@ for DMARC reports.
5. Profiles for backlinks and `sameAs`: Google Business Profile, LinkedIn company page, Crunchbase. Send the URLs; they go into `SAME_AS` in `web/src/lib/site.ts`.
6. Still open from the cutover: Netlify Forms notification for `distribution-review` to hello@ and one live test submit.

## Open decision

Current prospect lists target hotels without a working booking engine, while the site's fit requires an existing PMS, channel manager and booking engine. Either the targeting or the offer changes. Copy rewrite and a proof page wait for that decision.
