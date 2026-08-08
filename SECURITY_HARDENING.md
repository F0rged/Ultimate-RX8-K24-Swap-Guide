# Public repository hardening

The goal is that every path to published content requires `@F0rged` review before it reaches `main` or GitHub Pages.

## Controls in this repository

- `.github/CODEOWNERS` owns every path with `@F0rged`.
- `.github/workflows/pages.yml` deploys only from pushes to `main`.
- `.github/workflows/validate.yml` validates pull requests with read-only token permissions.
- `SECURITY.md` defines the workflow, third-party script and contribution policy.
- `AI_MAINTENANCE.md` requires AI-assisted updates to use branches and pull requests.

## Required GitHub settings

Enable a repository ruleset for the default branch with:

- Target: default branch or `main`
- Enforcement: active
- Restrict deletions: enabled
- Block force pushes / require non-fast-forward protection: enabled
- Require a pull request before merging: enabled
- Required approvals: `1`
- Require review from Code Owners: enabled
- Dismiss stale pull request approvals when new commits are pushed: enabled
- Require approval of the most recent reviewable push: enabled
- Require conversation resolution before merge: enabled
- Required status check: `build-docs`
- Bypass list: empty

Set Actions policy to:

- Default `GITHUB_TOKEN` workflow permissions: read-only
- Allow GitHub Actions to create/approve pull requests: disabled
- Fork pull request workflow approval: require approval for all external contributors
- Allowed actions: GitHub-owned actions only, or a more restrictive allowlist containing only the actions used by this repository

Set repository options to:

- Disable direct pushes to `main` through rulesets.
- Disable auto-merge unless you deliberately want it.
- Keep GitHub Pages source set to GitHub Actions.
- Enable Dependabot alerts and secret scanning alerts.
- Keep Discussions moderated if giscus comments are enabled.

## Threat model

| Attack | Control |
|---|---|
| Malicious PR edits a chapter to publish bad instructions | CODEOWNERS + required owner review |
| Malicious PR edits workflow to steal tokens after merge | Workflow changes require owner review before reaching `main` |
| Fork PR tries to access deployment permissions | PR validation workflow has read-only permissions and no secrets |
| Fork PR abuses `pull_request_target` | Policy forbids `pull_request_target` without security review |
| Direct push bypasses review | Ruleset requires PR and has no bypass actors |
| Review is approved, then attacker pushes new commits | Stale approvals and latest-push approval required |
| Force push rewrites published history | Non-fast-forward protection enabled |
| Remote script injection through docs | Third-party scripts are centralized and owner-reviewed |
| Untrusted comment content becomes guide advice | Comments are treated as untrusted until merged through PR |
