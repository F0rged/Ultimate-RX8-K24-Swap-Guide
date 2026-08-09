# RX-8 K-Series Swap Guide

A research-backed, prescriptive guide for installing older/common Honda K-series engines into Mazda RX-8 chassis. The common procedure is written once; RX-8 series, model year, market, transmission, engine family, cylinder-head, electronics and swap-architecture differences are called out where they change parts selection or procedure.

> **Status:** research / first-edition build guide. This is not a factory service manual and it is not a bolt-in swap.

## Start here

The rendered GitHub Pages site begins at [`docs/index.md`](docs/index.md).

Before buying swap hardware, identify the actual combination:

1. **RX-8 variant** - Series 1 or Series 2, model year, market, steering side and original transmission.
2. **K-series engine** - block code, head/casting family, trigger/sensor package, throttle strategy and oil pump/pan plan.
3. **Swap architecture** - retained RX-8 manual driveline, KPower NC-derived front architecture or a custom path.

The two most documented current architectures are:

1. **RX-8-driveline / Collins path** - retain the RX-8 5/6-speed, PPF and rear driveline. Better documented end-to-end for an RX-8, but requires steering-rack relocation and front crossmember work.
2. **KPower / NC-architecture path** - use KPower's RX-8-compatible tubular subframe, KPower mounts and NC steering architecture. Current public listings begin at 2006 RX-8 and use a limited older-K block list, so early S1 and unsupported block families need vendor confirmation or custom work.

The former **2009 S2 + JDM K24A/RBB** research remains a worked example and a well-documented K24A/RBB variant, not the universal baseline for every RX-8 or every K-series engine.

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
