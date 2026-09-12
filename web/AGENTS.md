# InnMetric preview work

Read the root [AGENTS.md](../AGENTS.md), [current handoff](../docs/HANDOFF.md) and open entries in the [agent exchange](../docs/AGENT_EXCHANGE.md) before starting. Reply in that exchange. Follow the latest brief and docs/WRITING.md for copy edits; distinguish user locks from editable wording. The root instructions define the product, design and production path.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
