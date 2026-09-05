# Release notes

## Coordination and design review, 2026-09-05

Status: unreleased documentation candidate. No production release, tag or Netlify cutover is included. Use the current PR head as the documentation revision; use [HANDOFF.md](HANDOFF.md) for the current next action.

Branch: `codex/coordination-and-design-brief`.

Base: `1e21e26b9fc39bea5504c79e393186fd5b85b1f7` on main.

Reference evaluated without editing: preview `94978cc09e0e8dd5a9265e7765dd20b92d6471f1`.

### Why this change exists

The PC workspace, GitHub and Netlify are separate states. Previous instructions promoted local production uploads while the project moved toward GitHub integration. An interrupted conversation also left useful analysis only in local edits. This package gives agents a shared starting point, identifies what was actually checked and prevents the reference branch from being mistaken for a release candidate.

### What is included

| File | Result |
| --- | --- |
| `AGENTS.md` | Mert retains final authority; ChatGPT/Codex coordinates scoped work. Defines branch holds and resumable checkpoints. |
| `README.md` | Explains the repo structure and provides a short reading order. |
| `CHANGELOG.md` | Starts a change record without inventing past releases. |
| `docs/REPOSITORY_REVIEW.md` | Records the two source baselines, design direction and preview findings. |
| `docs/HANDOFF.md` | Separates completed work, accepted decisions, proposals and next tasks. |
| `docs/RELEASE_NOTES.md` | Records this candidate's scope and release status. |

Customer-visible behavior is unchanged by this documentation package. The proposed colour palette has not been applied to either website.

### Validation

Main's copy lint passed on ten HTML files. Preview's expanded copy lint passed on ten HTML files and seventeen web source files. Preview's Next.js production build, included TypeScript check and ESLint passed on the reviewed commit. Its production server started locally. The cloud browser blocked the localhost URL, so preview visual and interaction checks remain outstanding. These checks establish buildability of the reviewed source, not Netlify compatibility or contact delivery.

Documentation whitespace checks passed and all relative links and heading anchors resolve across the six intended Markdown files. The PR records the final diff and published commit. No production form was submitted. Main and preview refs were rechecked before publication and must be checked again before any later integration.

### Production release remains on hold

The reported production branch is main. A future website release needs working contact delivery, correct public metadata, removal of local-only UI, an inspected preview of the exact candidate and a verified Netlify build configuration. Review root-site changes separately because merging the original preview branch would also change those files. See the detailed findings in [the review](REPOSITORY_REVIEW.md#preview-findings-before-a-release).

Before the eventual cutover, record the existing Netlify site's published deploy ID and commit as the rollback target. After a release, verify the deployed commit and changed behavior. If rollback is needed, restore the known deployment and reconcile Git so the next build does not reintroduce the problem. No rollback identifier is invented here because the dashboard has not been inspected.

### Adoption by another agent

Read this task branch's `AGENTS.md` and `docs/HANDOFF.md` before implementation. Agents still on main or preview do not automatically receive these files. Carry them into a separately named implementation branch, reconciling existing branch rules by intent. Keep the original preview branch untouched. Publishing this documentation PR is not approval to merge or deploy the website.
