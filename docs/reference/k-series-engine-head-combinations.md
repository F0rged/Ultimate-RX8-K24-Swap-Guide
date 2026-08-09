---
layout: page
title: "K-series engine and head/block selection"
permalink: /reference/k-series-engine-head-combinations/
---

# K-series engine and head/block selection

The reference build uses a verified JDM K24A/RBB or USDM 2004-2008 TSX K24A2-style long block. That remains the best-supported default for this guide, but other K20/K24 engines can materially change RX-8 fitment.

Do not treat "K20 head" or "K24 block" as enough detail. For an RX-8, the useful description names the block, head family, coolant neck, oil pump/pan, mount path and transmission path.

## Key packaging rules

There is no universal RX-8 K-series firewall dimension. Firewall and cowl work depend on the whole engine package at the fixed drivetrain datum.

- A full K20 can reduce engine height. KPower states the K20Z3 short-block deck is about 0.80 in lower than K24 engines.
- A K20 head on a K24 block does not make the engine K20-height. The tall K24 deck remains.
- PRB and RBC heads are not equivalent for coolant packaging. PRB/K20A2/K20Z1 uses the earlier water-neck family; RBC/K20Z3 uses the later RBB/RBC-style family.
- The final water neck matters as much as the head casting. Even a PRB head needs a RWD-appropriate neck because the normal transverse outlet can point toward the firewall.
- Rear cam sensors, valve-cover breather, wiring strain relief and valve-cover removal can still drive firewall/cowl work after the coolant outlet clears.
- KPower and Collins support different mount/transmission architectures, so block recommendations must name the path.

## Practical comparison

| Engine or combination | Head family | Packaging effect | Current guide position |
| --- | --- | --- | --- |
| K24A2 / JDM K24A RBB | RBB | Tall K24 block; later RBB/RBC rear coolant-outlet family; broad RX-8/RWD support. | Reference/default after identity check. |
| K24A2-style block + K20A2/K20Z1 head | PRB | Keeps K24 height but changes the coolant-head architecture; directly documented in one RX-8 build. | Useful advanced hybrid when the builder verifies all hybrid details. |
| K20Z3 | RBC | Lower K20 deck with later RBB/RBC coolant-neck architecture; supported by current KPower mount family. | Promising full-K20 option, but less RX-8 build-log evidence than the RBB K24 path. |
| K20A2 / K20Z1 | PRB | Lower K20 deck plus PRB coolant architecture; not supported by current KPower mount family. | Strong Collins-path option if the chosen mounts explicitly support the block. |
| K24A4 / K24A8 hybrid candidate | Economy K24 family | Cheap donor risk; stock A4/A8 pistons can contact a K20 head. | Do not use as a casual PRB-head hybrid without opening the short block. |
| K24Z3 / K24Z7 | K24Z architecture | Single-exit exhaust/newer architecture; older heads require conversion hardware. | Advanced/custom branch, not a substitute for the RBB reference engine. |

## Head families

### RBB

RBB is the reference K24A/K24A2-style head family for this guide. It has strong vendor support and the 2.4 L torque that makes the swap attractive, but the rear coolant outlet, cam sensors and valve-cover/breather area are major RX-8 packaging concerns. Use the final low-profile or intake-side coolant neck during mock-up before committing to firewall shape.

### RBC

RBC is commonly associated with the K20Z3 Civic Si. A full K20Z3 can help vertical packaging because of the lower K20 deck, but the RBC head remains in the later RBB/RBC coolant-neck family. It is not the same packaging solution as a PRB head.

### PRB

PRB is commonly associated with the RSX Type-S K20A2/K20Z1 family. It can materially change coolant packaging and is documented in a K24A2-bottom-end RX-8 build, but it is not a bolt-on shortcut. A K24/PRB hybrid still needs an 87 mm K24-bore head gasket, compatible coolant strategy, K24 timing hardware, compatible manifold/neck parts, ECU/tune planning and piston-to-valve verification.

### RSP and K24Z

RSP performance heads and K24Z-family engines can be attractive for custom builds, but they are not currently the clearest RX-8 packaging path for this guide. Treat them as advanced combinations that require engine-builder and parts-vendor confirmation before purchase.

## Mount-path cautions

KPower's current mount-family guidance supports K24A2/JDM K24A-style blocks and K20Z3, but not K20A2/K20Z1 blocks. Collins currently advertises separate RX-8 adapters for K20A2, K20Z3 and K24A2/Z3/A4 applications.

That means an engine can be a good Collins-path candidate and still be a poor KPower-path candidate. Choose the mount/transmission architecture before buying a non-reference engine.

## Assembly cautions for hybrids

For any K20/K24 hybrid:

- verify the exact block and head castings;
- use an 87 mm K24-bore head gasket where the K24 bore requires it;
- verify coolant-diverter strategy for the head family;
- use K24-length timing-chain hardware where required;
- confirm intake-manifold and water-neck flange compatibility;
- confirm cam, VTC and piston-to-valve limits with the final ECU calibration;
- do not put a K20 head on a stock K24A4/A8 short block without a piston strategy.

## Open research gaps

This site does not yet have a controlled same-chassis measurement set comparing K24A2/RBB, K24A2/PRB, K20Z3/RBC and K20A2/PRB at the same drivetrain datum. Until that exists, do not convert one builder's firewall recess or access-panel dimensions into a universal cut template.

Future build submissions should record chassis year, S1/S2, LHD/RHD, mount path, transmission, block, head, water neck, oil pan/pump, firewall/cowl modification and whether the valve cover and rear sensors remain serviceable in the car.

## Sources

| Claim | Source |
| --- | --- |
| KPower documents K20Z3/K24A2/K24Z3 guidance, the lower K20Z3 deck height and current KPower block-support limits. | [KPower Industries](https://kpower.industries/blogs/news/engine-guidance-for-a-successful-project) |
| KPower documents RX-8 swap architecture, RBB coolant-neck planning, oil-pan options and expected firewall cutting for its path. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| KPower's FAQ distinguishes the K24A2 default, K20Z3 support, K20A2/K20Z1 exclusion and PRB-head requirements for its packages. | [KPower Industries](https://kpower.industries/pages/faqs) |
| Collins documents retained-RX-8-transmission installation guidance and configuration-specific firewall/rack/crossmember work. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/pages/honda-k-series-to-mazda-rx-8-install-instructions) |
| Collins currently advertises RX-8 engine adapters for K20A2, K20Z3 and K24A2/Z3/A4 applications. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/collections/engine-mounts) |
| K24RX8 documents K24 cowl/firewall, rear cam-sensor and breather conflicts in a completed build. | [K24RX8](https://k24rx8.com/2018/10/23/initial-fitment/) |
| K24RX8 documents a 2006 K24A2 bottom end with K20Z1 head selected for RX-8 coolant/firewall packaging. | [K24RX8](https://k24rx8.com/2019/04/08/some-assembly-required/) |
| A JDM K24A/RBB RX-8 build documents low-profile rear outlet use, firewall/tunnel interference and eventual firewall cut/reseal. | [K-Swapped RX-8](https://www.kswappedrx8.com/2021/03/fitting-k24-into-car-part-one.html) and [part 2](https://www.kswappedrx8.com/2021/04/fitting-k24-part-2.html) |
| A documented turbo K20 RX-8 used Collins hardware and a removable firewall access panel for rear engine serviceability. | [MotorTrend](https://www.motortrend.com/features/mazda-rx-8-honda-engine-swap-keep-gunnin) |
| Hybrid Racing documents K24A1/A2/A4/A8 differences, A4/A8 piston-to-K20-head interference and K24 hybrid gasket/timing requirements. | [Hybrid Racing](https://www.hybrid-racing.com/blogs/hybrid-racing/k20-k24-hybrid-engine-build-guide) |
| Hybrid Racing's gasket catalog distinguishes 86 mm K20 and 87 mm K24 head-gasket applications. | [Hybrid Racing](https://www.hybrid-racing.com/products/oem-honda-head-gasket-for-k-series-engines) |
| FFS TECHNET distinguishes PRB, RBC, RBB and RSP hybrid architecture and coolant-diverter considerations. | [FFS TECHNET](https://ff-squad.com/technet2/k20-head-on-k24-block/) |
| KPower's RWD intake manifold documentation distinguishes RBB, PRB and R40 manifold/coolant configurations. | [KPower Industries](https://kpower.industries/collections/12-21-86-frs-brz/products/kmiata-rwd-intake-manifold) |
| TracTuff documents RBB/RBC low-profile and extreme-clearance coolant-neck packaging requirements. | [TracTuff RBB/RBC V2](https://tractuff.com/product/tractuff-rbb-rbc-water-neck-flange-v2/) and [extreme-clearance kit](https://tractuff.com/product/tractuff-extreme-clearance-k-water-neck-kit-an/) |
| TracTuff documents PRB/PRC water-neck flange applications. | [TracTuff](https://tractuff.com/product/tractuff-prb-prc-water-neck-flange-v1/) |
| Haltech and Hondata document K-series crank/cam trigger and crank-sensor pinout considerations. | [Haltech](https://support.haltech.com/portal/en/kb/articles/thomas-te) and [Hondata](https://www.hondata.com/forum/viewtopic.php?t=18339) |
