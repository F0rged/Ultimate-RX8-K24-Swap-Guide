# AI maintenance workflow

This repository is intended to be maintainable through AI-assisted research updates.

## Standard update loop

1. Open a new ChatGPT/Codex task against this repository.
2. Ask for one focused research update, for example:

   > Research S2 RX-8 EPS/CAN integration options for a K24 swap. Update the electrical chapter, references, sources CSV and research matrix. Create a branch and PR for review.

3. Require the agent to create a branch instead of committing directly to `main`.
4. Review the PR for source quality, safety implications and whether the prescribed sequence still makes sense.
5. Merge only after the GitHub Pages build passes.

Do not ask an AI agent to bypass branch protection, push directly to `main`, approve its own pull request or weaken the repository ruleset.

## Research rules for agents

- Prefer manufacturer, vendor, service manual and completed-build evidence.
- Do not turn forum consensus into a hard instruction unless it is labeled and cross-checked.
- Preserve the chapter-by-chapter build flow.
- Update `docs/references.md` when adding a human-readable source.
- Update `docs/data/sources.csv` when adding a cataloged source.
- Update `docs/data/research-matrix.csv` when changing a major technical claim.
- Keep safety-critical guidance prescriptive, conservative and clearly scoped to S1/S2, LHD/RHD and driveline path when those differences matter.
- Do not introduce new workflows, scripts, third-party embeds or remote assets unless they are directly needed and called out in the PR body.

## Suggested branch names

- `research/s2-can-integration`
- `research/kpower-nc-driveline`
- `docs/bom-refresh-YYYY-MM`
- `docs/chapter-05-fitment-update`

## PR review checklist

- The affected chapter still has a clear milestone outcome.
- New parts recommendations include compatibility limits.
- Prices and vendor claims include a checked date.
- Open questions move to `docs/13-open-questions.md` instead of being hidden in prose.
- Any irreversible fabrication instruction has a measurement or validation step before cutting, drilling or welding.
- Any workflow, layout, include or config change has been reviewed as a security-sensitive change.
