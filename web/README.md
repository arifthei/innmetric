# InnMetric local preview

This Next.js app is the website candidate on `preview`. innmetric.com follows `main` until Mert authorizes the cutover.

The branch already contains the Next Netlify configuration. Copy work does not merge or deploy it. Ordinary preview builds keep the form off; production mode requires both `CONTEXT=production` and `INNMETRIC_FORMS_ENABLED=true`.

Start with the root [agent rules](../AGENTS.md), [current handoff](../docs/HANDOFF.md) and [agent exchange](../docs/AGENT_EXCHANGE.md). Current copy decisions live in [Intent](../docs/INTENT.md) and [Writing](../docs/WRITING.md). Preserve the palette and follow the specific review scope in the handoff. See [preview release notes](../docs/RELEASE_NOTES.md) for the candidate's changes.

From the repo root:

```
npm run dev
```

Then open http://localhost:3000
