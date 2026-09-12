# InnMetric Next app

This Next.js app in `web/` is what innmetric.com serves from `main`. Website work still lands on `preview` first.

Ordinary localhost and deploy-preview builds keep the form off. Production sending requires both `CONTEXT=production` and `INNMETRIC_FORMS_ENABLED=true`. Public copy is always production-shaped.

Start with the root [agent rules](../AGENTS.md), [current handoff](../docs/HANDOFF.md) and [agent exchange](../docs/AGENT_EXCHANGE.md). Current copy decisions live in [Intent](../docs/INTENT.md) and [Writing](../docs/WRITING.md). Preserve the palette. See [release notes](../docs/RELEASE_NOTES.md).

From the repo root:

```
npm run dev
```

Then open http://localhost:3000
