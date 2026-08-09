# GitHub Pages and comments setup

This repository publishes the `docs/` guide with GitHub Actions and GitHub Pages.

## Publish the site

1. Push this repository to GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` or run the **Publish GitHub Pages** workflow manually.
5. The site will publish to:

   `http://rx8-kswap.importfanatik.com/`

The `minima` theme and `_config.yml` keep the site dependency-light. The workflow in `.github/workflows/pages.yml` builds the `docs/` directory and deploys the generated site.

## Enable giscus comments

Giscus requires GitHub Discussions and the giscus GitHub App.

Current status: the site template includes the giscus comments section on every page that uses `layout: page`, and `docs/_config.yml` has the verified repository and Announcements category IDs.

1. In the repository, go to **Settings -> General -> Features** and enable **Discussions**.
2. Install the giscus app from `https://github.com/apps/giscus` for this repository.
3. Open `https://giscus.app/` and enter `F0rged/Ultimate-RX8-K24-Swap-Guide`.
4. Use `pathname` mapping and choose `Announcements`.
5. If the category changes later, copy the generated `data-category-id` value into `docs/_config.yml`.

The shared page layout automatically adds comments to every page. The include intentionally skips the giscus script when any required value is blank, so the public site does not ship a broken comments widget.

## AI-assisted maintenance

Use `AI_MAINTENANCE.md` as the standing instruction for research updates. Future AI edits should be done on branches with pull requests, not directly on `main`.

## Public repository hardening

Use `SECURITY_HARDENING.md` as the standing checklist for repository settings. The important rule is that `main` should require a pull request, a passing `build-docs` status check and approval from `@F0rged`.

## Optional next improvements

- add photos that you own or have permission to publish
- add a measured firewall template only after a repeatable reference installation
- add wiring diagrams as SVG
- add a JavaScript BOM cost calculator that reads `docs/data/bom.csv`
- add versioned build profiles (S1, S2, LHD, RHD, Collins, KPower)
