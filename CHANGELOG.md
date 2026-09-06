# Changelog

Record project changes here. A commit or draft PR is not a production release. Keep entries under Unreleased until the deployed commit and release date are verified. Link future released entries to their Git commit and release notes; do not infer release history from commit messages.

## Unreleased

### Coordination and design review, 2026-09-05

- Updated `AGENTS.md` with Mert's coordinating-agent assignment, safe branch ownership and a resume/checkpoint protocol.
- Updated the README with the main/preview distinction and the reading order for agents.
- Added a source-based review of main `1e21e26` and preview `94978cc`, including the turquoise and light-green proposal.
- Recorded the preview form, metadata, hosting and presentation work that remains before release.
- Added the current handoff and release notes with completed checks, remaining unknowns and the next task owner.
- Replaced stale guidance that treated the local Cursor folder and direct production deployment as the normal shared workflow with GitHub branch and PR handoffs.

This entry covers six Markdown files on `codex/coordination-and-design-brief`. No application code, styles, dependency versions or deployment settings are changed by this package. Main and preview are reference inputs and are not updated by this task.

## Baselines reviewed

| Baseline | Meaning |
| --- | --- |
| [`1e21e26`](https://github.com/arifthei/innmetric/commit/1e21e26b9fc39bea5504c79e393186fd5b85b1f7) | Main's static company website at review time |
| [`94978cc`](https://github.com/arifthei/innmetric/commit/94978cc09e0e8dd5a9265e7765dd20b92d6471f1) | Next.js reference site plus root-site changes, one commit ahead of main |

These are Git baselines, not independently verified production release records.
