# InnMetric — agent rules

This repository is the innmetric.com website and git workspace. It is not the sports-assist product. Do not import Google Drive traction packs into this repo.

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
- Run `npm run lint:copy` before deploy.

Approved pattern:

> We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Operating motion (not this repo’s job to automate)

Select a small batch of hotels → inspect → contact a named person politely → website as backup → book a meeting → follow up twice → record whether they would pay. Do not blast thousands of addresses.

## Deploy

Source of truth is this folder. Cursor Origin remote: `https://origin.cursor.com/arifthei/innMetric.git`. Publish to the **existing** Netlify site with `.\deploy.ps1` or `npx netlify deploy --prod`. Do not create a second Netlify site.

Inquiry inbox: hello@innmetric.com
