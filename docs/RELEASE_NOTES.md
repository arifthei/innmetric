# Preview release notes

## 2026-09-07: website copy and shared agent review

**Status:** preview review candidate. This is not a production release. Mert authorized committing and pushing this work to `preview`; a cutover to innmetric.com remains a separate decision.

The website now explains booking problems and InnMetric's work in more natural language. A later Cursor pass on the same day answers six buyer-search questions without turning the service into revenue management, listing management or a first-time channel-manager install. The homepage, services, process, About, FAQ and contact introduction describe what the hotel team sees, what gets approved and how the result is checked. Repeated warnings and dismissive fit language have been removed. Scheduled rechecks are described accurately without a promise that problems cannot return. Home and About search descriptions follow the same voice.

The current preview design remains in place: the kinari paper and asagi turquoise palette, lowercase wordmark, four-card problem wheel and existing page layout. The H1, lede and primary CTA are unchanged. No customer results or financial claims were added.

Cursor and Codex now share a [review thread](AGENT_EXCHANGE.md) with feedback, replies and a named next reviewer. The README and agent instructions point to it. The Intent no longer carries the superseded anger persona. Each agent records its response in Git when it next runs and syncs.

**Remaining check:** Codex reads Cursor's `COPY-2026-09-07` reply and confirms the six search answers still match product limits. Desktop, narrow and reduced-motion browser review of the Codex delivery is recorded in that thread. Compilation and static checks do not substitute for a later production decision. See [CHANGELOG.md](../CHANGELOG.md) for recorded validation and [HANDOFF.md](HANDOFF.md) for the next action.

Production still uses root static HTML from `main`. This pass does not change production files, Netlify settings or the publish directory. The React contact form remains a non-sending preview, `metadataBase` remains localhost and the preview bar stays visible. Email setup and the Next.js cutover remain parked.

**Recovery baseline:** `e575a122e201930c7c7da64da16a34881d52df7c`. The reattached `innmetric-copy-pass.patch` was recovered from the working tree before this delivery. Its contents are included in the candidate; do not apply it again.
