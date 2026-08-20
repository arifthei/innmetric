# InnMetric — agent rules

This repository is the innmetric.com website and git workspace. It is not the sports-assist product. Do not import Google Drive traction packs into this repo.

## Locked product position

InnMetric is a founder-delivered, vendor-neutral **distribution-control service** for independent and small-group hotels in the GCC, beginning with Riyadh and Jeddah.

One sentence:

> InnMetric audits, repairs with the hotel’s approval, verifies the live guest-facing result, and monitors whether the correction holds — across the hotel’s existing PMS, channel manager, booking engine, and OTA accounts.

InnMetric is not SaaS yet. Software follows repeated paid work.

## Who it is for

- Independent hotels, serviced apartments, aparthotels, and small regional groups
- Roughly 20–150 rooms (30–120 preferred)
- At least two OTA connections plus a PMS or channel manager
- English business contact is enough for this cohort

## Who it is not

- A PMS, channel manager, booking engine, OTA, or RMS replacement
- A generic PDF consultancy
- An autonomous pricing or inventory bot
- A digital-marketing / SEO / reputation agency
- Large international chains as the launch ICP

## Language on the public site

- English. Arabic later. The previous Turkish landing page may live at `/tr/` as an archive only.
- Do not claim revenue loss, leakage amounts, or vendor negligence from public pages.
- Do not promise that every correction increases revenue.
- Do not call the company AI-powered or SaaS on the live site.
- Do not publish prices as if they were validated. Conversation first.
- Primary CTA: a meeting / inquiry, not a package picker.

Approved pattern:

> We observed X under Y conditions. This may indicate Z. Public evidence cannot determine root cause or financial impact.

## Operating motion (not this repo’s job to automate)

Select a small batch of hotels → inspect → contact a named person politely → website as backup → book a meeting → follow up twice → record whether they would pay. Do not blast thousands of addresses.

## Deploy

Source of truth is this folder. Cursor Origin remote: `https://origin.cursor.com/arifthei/innMetric.git`. Publish to the **existing** Netlify site with `npx netlify deploy --prod`. Do not create a second Netlify site. Do not require the Netlify dashboard for routine deploys after `netlify link`.

Inquiry inbox: hello@innmetric.com
