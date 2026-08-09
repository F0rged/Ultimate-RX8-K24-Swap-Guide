# RX-8 K24 Swap Guide

A research-backed, prescriptive guide for installing a Honda K24 into a Mazda RX-8, with a reference configuration focused on a **2009-2011 Series 2 (S2) manual RX-8** and a **JDM K24A with an RBB cylinder head**.

> **Status:** research / first-edition build guide. This is not a factory service manual and it is not a bolt-in swap.

## Start here

The rendered GitHub Pages site begins at [`docs/index.md`](docs/index.md).

The most important decision is made before buying swap hardware:

1. **RX-8-driveline / Collins path** - retain the RX-8 5/6-speed, PPF and rear driveline. Better documented end-to-end for an RX-8, but requires steering-rack relocation and front crossmember work.
2. **KPower / NC-architecture path** - use KPower's RX-8-compatible tubular subframe, KPower mounts and NC steering architecture. It avoids rack spacers with an NC rack, but KPower does not offer a complete RX-8 kit and the rear driveline/transmission integration must be planned as an NC-style conversion.

For the **2009 S2 + JDM K24A reference build**, this guide uses the **Collins / retained S2 6-speed path as the prescriptive baseline** because it has the fewest unresolved driveline interfaces. The KPower path is documented as a strong alternative, especially where steering geometry is prioritized.

## Repository contents

- `docs/build-guide/` - sequential, prescriptive chapter-based build guide
- `docs/reference/` - source notes, deep dives and supporting material
- `docs/data/bom.csv` - machine-readable BOM
- `docs/data/research-matrix.csv` - major claims, evidence and confidence
- `docs/data/sources.csv` - source catalog

## GitHub Pages

This repo publishes with GitHub Pages and the workflow in `.github/workflows/pages.yml`.

1. In **Settings -> Pages**, choose **GitHub Actions** as the build source.
2. Push to `main` or run the **Publish GitHub Pages** workflow manually.
3. GitHub Pages will build the Jekyll site from `docs/`.

Expected URL:

`http://rx8-kswap.importfanatik.com/`

See `PAGES_SETUP.md` for the one-time giscus comments setup. See `AI_MAINTENANCE.md` for the branch-and-PR workflow future AI research updates should follow.

## Research standard

Manufacturer/vendor documentation is preferred for fitment and product compatibility. Independent completed-build logs are used to capture real-world conflicts and failure modes. Forum/Reddit material is only used where it adds useful context and is labeled accordingly.

Prices are snapshots or estimates, not quotes. The source catalog records the date checked.
