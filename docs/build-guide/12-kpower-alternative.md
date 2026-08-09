---
layout: page
title: "12 — KPower / NC alternative"
---

# 12 — KPower / NC front-end alternative

This path uses KPower's newer RX-8-confirmed NC-derived component ecosystem.

## Why it is attractive

The historical RX-8 K-swap solution typically:

- cuts/reinforces the stock front crossmember;
- lowers the steering rack to clear the K24;
- lengthens/changes the steering connection.

KPower's tubular NC/RX-8 subframe changes that equation. KPower states that when used with an **NC steering rack**, its subframe does **not** require steering-rack spacers.

For a handling-focused build, that is a major advantage.

## Confirmed KPower RX-8 component set

KPower's current RX-8 guidance/catalog supports or lists:

- tubular NC/RX-8 subframe
- KPower K24 engine mount kit
- factory NC rubber mounts or KPower-spec AWR mounts
- NC hydraulic steering pump mounting kit + complete NC rack concept
- standalone RX-8 EPS alternative
- NC A/C mounting kit
- RWD cast intake manifold
- Bosch 74 mm DBW throttle
- RWD intake tube
- KPower fuel rail
- RX-8-fit-confirmed 4-2-1 header
- Unit2 baffled pans for either K24 RBB balance-shaft pump or K20/PRB pump
- universal Haltech DBW electronics package
- S2-specific Koyo radiator listing
- JDM K24A/RBB-compatible engine mounts

## Recommended sequence for this branch

1. Freeze transmission choice.
2. Freeze rear PPF/driveshaft strategy.
3. Buy subframe, mounts and steering architecture.
4. Prepare JDM K24A with final pan/pump/coolant neck.
5. Install tubular subframe and NC rack (if hydraulic path).
6. Mock engine + chosen transmission.
7. Set rear driveline datum.
8. Perform firewall/cowl work based on actual clearance.
9. Install intake/header/accessories.
10. Plumb steering.
11. Plumb fuel/cooling.
12. Wire universal ECU.
13. Use standalone dash until S2 CAN integration is proven.

## KPower package pricing is a benchmark, not an RX-8 kit

KPower's NC Race package is currently about **$5,795 with the subframe**. It bundles many physical swap components for an NC.

Do not order the entire NC package assuming every hose/vehicle-side part will fit an RX-8 exactly. KPower itself says there is no complete RX-8 package. Use the package price as a budget benchmark and order the RX-8-confirmed components deliberately.

## Oil pump advantage

This branch has a clear street-friendly option: KPower explicitly calls out a Unit2 pan for the K24 RBB **balance-shaft oil pump**. Therefore a JDM K24A does not have to receive a K20 pump conversion merely to fit this subframe.

A K20 pump remains a performance choice for the intended RPM/use case.

## Steering choices

### NC hydraulic
Requires:
- NC rack
- NC-style hydraulic system components
- KPower pump mounting kit
- appropriate lines/reservoir

Benefit: removes factory S2 CAN EPS from the critical path.

### Standalone EPS
Benefit: retains electric assist without relying on the OEM S2 CAN implementation.

## A/C

KPower confirms its NC A/C mounting kit can be used, with an NC compressor and custom lines. S2 cabin-request/control logic still needs to be solved separately.

## Unresolved rear-driveline gate

Before making this branch prescriptive for an S2, the repository needs a validated recipe for one chosen transmission to:

- PPF attachment
- driveshaft length/spline
- shifter position
- rear mount geometry

Until then, this path is **front-end validated, rear-driveline design required**.

## Sources

| Claim | Source |
| --- | --- |
| KPower's RX-8-compatible NC-derived component ecosystem supports the tubular subframe, mount, NC steering, standalone EPS, A/C, intake, oil-pan, electronics, radiator and S2 CAN caveat claims on this page. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| KPower's RX-8 catalog is used for current RX-8-tagged component listings and prices. | [KPower Industries](https://kpower.industries/collections/04-11-rx8) |
| KPower's NC Race package is used as a physical-parts and cost benchmark, not as a complete RX-8 kit. | [KPower Industries](https://kpower.industries/collections/kpower-nc-mx5-swap-parts/products/kpower-nc-mx5-swap-kit-no-electronics) |
| KPower's complete NC package is used for component architecture and sensor/mount compatibility context. | [KPower Industries](https://kpower.industries/collections/items-with-lead-times/products/complete-kpower-nc-mx5-swap-package) |
| KPower's NC hydraulic steering kit is used as the hydraulic steering architecture reference. | [KPower Industries](https://kpower.industries/products/k-swap-nc-power-steering-kit) |
| KPower's NC A/C kit is the physical compressor-mounting reference for the A/C note. | [KPower Industries](https://kpower.industries/products/k-swap-nc-air-conditioning-kit) |
