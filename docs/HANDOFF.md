# Current handoff

Checkpoint: 2026-09-12. Last writer: Cursor. Next action: Mert's Netlify Forms clicks and one live test submit. Mert is the only authority.

## Resume here

Mert authorized a production cutover from `preview` into `main`. Public copy is production-shaped. Tunahan's About paragraph is updated. The collector still requires `CONTEXT=production` and `INNMETRIC_FORMS_ENABLED=true`. Read [AGENTS](../AGENTS.md) and [Intent](INTENT.md).

[PAGE-REVISION-2026-09-12](AGENT_EXCHANGE.md#page-revision-2026-09-12) is closed as superseded by this cutover.

## Delivered

- Removed the local preview bar, localhost `metadataBase` and preview-only privacy/form notices.
- Gated localhost/deploy-preview submits stay on the form and show the send-failure line. No fake thanks.
- Tunahan About copy is the lint-safe version of Mert's paragraph. Mert's bio is unchanged.
- `deploy.ps1` and `npm run deploy` use `netlify deploy --prod --build`. They no longer publish `--dir .`.

## Production

`main` serves the Next app through `netlify.toml`. After the first green production deploy, Mert: confirm form `distribution-review`, email notification to `hello@innmetric.com`, Reply-to from field `email`, then one real innmetric.com submit visible in Netlify Verified.

## Verification

Recorded in the cutover changelog entry. Browser checks of live `/`, `/about/` and `/contact/` follow the production deploy.
