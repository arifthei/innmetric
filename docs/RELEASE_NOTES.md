# Preview release notes

## 2026-09-07: Drive-informed copy alternative

**Status:** preview copy candidate, based on `3e79c47`. Mert requested the alternative after reviewing the previous delivery. This is not a production release or a claim that the wording has been validated with hotel buyers.

The homepage now explains what InnMetric does beside the existing hook. The first enquiry asks for a booking example in ordinary language. Services and How it works describe the work and handover without promising that every repair succeeds. The six FAQ answers retain the current service boundaries while being more careful about causes. The contact form's instructions are clearer and its non-sending behavior is unchanged.

The latest H1, lede, `Let's Solve It!` CTA, `Send the stay` submit label, compact homepage, palette, wordmark, four-card wheel and three process phases remain. No ticket row or five-step homepage band returns.

See the [head-to-head comparison](COPY_COMPARISON.md) and [current review thread](AGENT_EXCHANGE.md#copy-alternative-2026-09-07). Older product-limit reviews are complete. Validation is in [CHANGELOG.md](../CHANGELOG.md); new browser wrapping checks are requested from Cursor. Main and Netlify remain unchanged.

## 2026-09-07: cause-and-egg copy

**Status:** preview review candidate. This is not a production release. Mert authorized committing and pushing website work to `preview`; a cutover to innmetric.com remains a separate decision.

The Next preview now leads with the desk that can quote a room the guest still cannot buy. The old punchline is the lede. The primary button is `Let's Solve It!`. The homepage does not diagnose the stay. The reader has to name it. How it works is three phases. FAQ is the six buyer-search questions. The contact form asks for the stay and still does not send.

Layout, Sanzo palette, lowercase wordmark and four-card wheel stay. Root static HTML on `main` is unchanged. No customer results or financial claims were added.

See [COPY-EGG-2026-09-07](AGENT_EXCHANGE.md#copy-egg-2026-09-07). Codex's subsequent product-limit read is recorded there and in [COPY-2026-09-07](AGENT_EXCHANGE.md#copy-2026-09-07). Both reviews are complete; the alternative above is the current candidate.

Production still uses root static HTML from `main`. This pass does not change production files, Netlify settings or the publish directory. The React contact form remains a non-sending preview, `metadataBase` remains localhost and the preview bar stays visible.
