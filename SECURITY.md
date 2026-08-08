# Security policy

## Supported surface

This is a public static documentation site. There is no server-side application, database or private user data in this repository.

The sensitive surfaces are:

- GitHub Actions workflows and repository settings
- GitHub Pages deployment
- Jekyll layouts, includes and site configuration
- Third-party scripts, currently limited to giscus comments when enabled
- Source material merged into the public guide

## Contribution policy

All changes to `main` must go through a pull request and receive approval from `@F0rged`.

Do not grant broad write access to collaborators or bots. AI-assisted research updates should create branches and pull requests for review.

## Workflow policy

- Do not use `pull_request_target` unless a separate security review proves it is necessary.
- Do not add repository secrets to documentation build workflows.
- Keep `GITHUB_TOKEN` permissions read-only by default.
- Grant `pages: write` and `id-token: write` only to the Pages deployment workflow.
- Do not execute artifacts or scripts from forked pull requests in a privileged workflow.
- Do not add self-hosted runners for this repository.

## Third-party content policy

- Do not add arbitrary script tags, iframes or remote assets to guide chapters.
- Keep third-party scripts centralized in Jekyll includes so they are easy to review.
- Giscus comments must use this repository's generated `repo_id` and `category_id`, not values copied from another repository.
- Treat comments and community notes as untrusted input until reviewed and incorporated into the guide through a pull request.

## Reporting a vulnerability

Open a private security advisory on GitHub if available. If not, contact the repository owner directly before publishing details.
