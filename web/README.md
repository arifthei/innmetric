# InnMetric local preview

This Next.js app is a local rebuild of innmetric.com. It is not the live site.

Production stays the root static HTML. Do not point Netlify at this folder until a cutover is approved.

Start with the root [agent rules](../AGENTS.md), [current handoff](../docs/HANDOFF.md) and [agent exchange](../docs/AGENT_EXCHANGE.md). The copy review and Cursor/Codex replies live in that exchange. Preserve the current layout and palette while checking the new prose. See [preview release notes](../docs/RELEASE_NOTES.md) for the candidate's scope.

From the repo root:

```
npm run dev
```

Then open http://localhost:3000
