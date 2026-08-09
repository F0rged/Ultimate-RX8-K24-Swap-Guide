---
layout: page
title: "12 - KPower / NC-derived architecture"
---

# 12 - KPower / NC-derived architecture

This path uses KPower's RX-8-compatible NC-derived front-end component ecosystem. Treat it as an architecture branch with model-year, engine-block and electronics limits, not as a universal RX-8 K-series kit.

## Why it is attractive

The historical retained-RX-8-front-crossmember solution typically:

- cuts/reinforces the stock front crossmember;
- relocates the steering rack for engine/oil-pan clearance;
- lengthens/changes the steering connection.

KPower's tubular NC/RX-8 subframe changes that equation. KPower states that when used with an **NC steering rack**, its subframe does **not** require steering-rack spacers.

For a handling-focused build, that is a major advantage.

> **RX-8 variant - year range:** Current KPower RX-8 mount/subframe listings reviewed for this guide begin at 2006 RX-8. Early S1 cars need vendor confirmation or measured validation before purchase.
>
> **K-series variant - block support:** KPower's standard older-K mount family supports a defined block list and excludes K20A2, K20Z1 and K24A1. Do not assume every K-series block bolts to this path.

## Documented KPower RX-8 component set

KPower's current RX-8 guidance/catalog supports or lists:

- tubular NC/RX-8 subframe;
- KPower older-K engine mount kit for supported blocks;
- factory NC rubber mounts or KPower-spec AWR mounts;
- NC hydraulic steering pump mounting kit + complete NC rack concept;
- standalone RX-8 EPS alternative;
- NC A/C mounting kit;
- RWD cast intake manifold with head-family variants;
- Bosch 74 mm DBW throttle as part of its DBW branch;
- RWD intake tube;
- KPower fuel rail;
- RX-8-fit-confirmed 4-2-1 header for compatible older-K applications;
- Unit2 baffled pans for K24 RBB balance-shaft pump or K20/PRB pump paths;
- universal Haltech DBW electronics package with 2004-2008 K24A-style sensor assumptions;
- separate RX-8 radiator listings by year range.

## Recommended sequence for this branch

1. Confirm the RX-8 year range and steering side against current KPower listings.
2. Confirm the engine block is in KPower's supported mount list.
3. Freeze transmission choice.
4. Freeze rear PPF/driveshaft strategy.
5. Buy subframe, mounts and steering architecture.
6. Prepare the selected engine with final pan/pump/coolant neck.
7. Install tubular subframe and NC rack if using the hydraulic path.
8. Mock engine + chosen transmission.
9. Set rear driveline datum.
10. Perform firewall/cowl work based on actual clearance.
11. Install intake/header/accessories matched to the head family.
12. Plumb steering.
13. Plumb fuel/cooling.
14. Wire the selected ECU.
15. Use standalone critical instrumentation until RX-8-series-specific CAN integration is proven.

## KPower package pricing is a benchmark, not an RX-8 kit

KPower's NC Race package bundles many physical swap components for an NC Miata. Do not order the entire NC package assuming every hose/vehicle-side part will apply to an RX-8. KPower itself says there is no complete RX-8 package. Use the package price as a budget benchmark and order RX-8-confirmed components deliberately.

## Oil pump and pan choices

This branch has a clear K24A/RBB street-friendly option: KPower explicitly calls out a Unit2 pan for the K24 RBB **balance-shaft oil pump**. Therefore a JDM K24A/RBB does not have to receive a K20 pump conversion merely to fit this subframe.

A K20 pump remains a performance choice for the intended RPM/use case. K20Z, PRB and hybrid combinations need their own pump/pan clearance and oil-control validation.

## Steering choices

### NC hydraulic

Requires:

- NC rack;
- NC-style hydraulic system components;
- KPower pump mounting kit;
- appropriate lines/reservoir.

Benefit: removes factory RX-8 CAN EPS from the critical path.

### Standalone EPS

Benefit: retains electric assist without relying on the OEM RX-8 CAN implementation.

## A/C

KPower confirms its NC A/C mounting kit can be used, with an NC compressor and custom lines. Cabin request and control logic still need to be solved for the selected RX-8 series, market and ECU.

## Unresolved rear-driveline gate

Before making this branch prescriptive for a complete RX-8, the repository needs a validated recipe for one chosen transmission to:

- PPF attachment;
- driveshaft length/spline;
- shifter position;
- rear mount geometry.

Until then, this path is **front-end documented, rear-driveline design required**.

## Sources

| Claim | Source |
| --- | --- |
| KPower's RX-8-compatible NC-derived component ecosystem supports the tubular subframe, NC steering, standalone EPS, A/C, intake, oil-pan, electronics, radiator and CAN caveat claims on this page. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| KPower's NC/RX-8 mount listing provides current RX-8 year-range and older-K block compatibility limits. | [KPower Industries](https://kpower.industries/products/kpower-nc-mx5-engine-mount-kit) |
| KPower's RX-8 catalog is used for current RX-8-tagged component listings, separate radiator listings and prices. | [KPower Industries](https://kpower.industries/collections/rx8-k-swap-components) |
| KPower's engine guidance documents K20Z3 deck height, older-K mount-family support and K24Z3 package limits. | [KPower Industries](https://kpower.industries/blogs/news/engine-guidance-for-a-successful-project) |
| KPower's universal DBW package documents DBW-only status and 2004-2008 K24A-style sensor assumptions. | [KPower Industries](https://kpower.industries/collections/rx8-k-swap-components/products/power-universal-drive-by-wire-electronics-package) |
| KPower's NC hydraulic steering kit is used as the hydraulic steering architecture reference. | [KPower Industries](https://kpower.industries/products/k-swap-nc-power-steering-kit) |
| KPower's NC A/C kit is the physical compressor-mounting reference for the A/C note. | [KPower Industries](https://kpower.industries/products/k-swap-nc-air-conditioning-kit) |
