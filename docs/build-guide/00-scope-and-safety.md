---
layout: page
title: "00 - Scope and safety"
---

# 00 - Scope, assumptions and safety

## What this guide does

This guide covers planning and execution of Honda K-series swaps into Mazda RX-8 chassis. The common procedure is written once. Where compatibility changes by RX-8 generation/model year/market, transmission, K-series block/head family, throttle strategy or swap architecture, the relevant page shows a clearly labeled variant note.

"K-series" does not mean every Honda engine carrying a K code is interchangeable. This guide distinguishes documented RX-8-compatible combinations from partially documented and custom/experimental combinations.

## Support-state vocabulary

Use these terms consistently:

| State | Meaning |
|---|---|
| **Documented** | Current manufacturer/vendor documentation directly supports the named component plus chassis/engine relationship, or a completed build directly demonstrates it. |
| **Partially documented** | One or more major interfaces are supported, but the complete RX-8 combination is not documented end-to-end. |
| **Custom / unvalidated** | No current RX-8-specific vendor recipe was found; fabrication, electronics work or vendor confirmation is required. |

Avoid words such as "fits," "works," "bolt-in" or "supported" unless the source supports the specific interface being discussed.

## Identify the combination

Before following the prescriptive sequence, write down:

- RX-8 series/generation, model year, market, LHD/RHD and original transmission;
- selected transmission and whether the chassis is already manual;
- K-series block code, cylinder-head family, trigger/sensor package, oil pump/pan and throttle strategy;
- selected architecture: Collins retained RX-8 manual driveline, KPower NC-derived front architecture or custom/other;
- ECU, CAN, steering-assist, ABS/DSC and A/C goals.

> **RX-8 variant - automatic chassis:** Current Collins RX-8 adapter documentation is for 5-speed and 6-speed manual transmissions. An automatic donor needs a separate manual-conversion plan before the manual driveline chapters apply.
>
> **K-series variant - newer K architectures:** K20C, K24W and other newer K families are outside the validated scope of this edition. Do not inherit older K20/K24A mount, adapter, trigger, intake, exhaust or wiring assumptions without separate research.

## Worked example, not universal baseline

Much of the original research centered on a North-American-style 2009-2011 LHD S2 manual with a JDM K24A/RBB-family engine and retained RX-8 6-speed. That remains a useful worked example and a strong K24A/RBB variant, but it is not the default truth for every RX-8, every market or every K-series engine.

## Skills/equipment this swap requires

At minimum, the project needs access to:

- engine hoist and load leveler
- high-quality stands/lift
- torque wrenches
- fuel-pressure test equipment
- cooling-system pressure tester and vacuum-fill equipment if available
- multimeter and proper crimping tools
- welding and sheet-metal capability, or a competent fabrication shop
- alignment equipment/shop after steering-rack changes
- laptop and ECU calibration software
- tuner familiar with K-series engines

## Irreversible work

The following work affects structural, steering, fire-separation or braking systems:

- cutting/notching and re-welding a factory front crossmember
- firewall/cowl modification
- steering-rack relocation
- steering-shaft/joint changes
- ABS hydraulic-unit relocation

Do not use cosmetic sheet-metal work as a substitute for structural welding. Keep brake lines away from heat and abrasion. After any rack-position change, perform a professional alignment **and** check toe change through suspension travel (bump steer).

## Firewall rule

There is conflicting credible evidence:

- Current Collins RX-8 instructions describe recessing the firewall and state that their configuration can be installed without cutting through the firewall.
- KPower's newer RX-8 compatibility guide says to expect extensive firewall cutting and welding.
- Independent K24 RX-8 builds, including a JDM K24A/RBB-head build, have required significant firewall/cowl work.

Therefore this guide does **not** publish a universal cut template. The correct process is iterative mock-up: establish transmission/PPF position first, map all engine/head/sensor/coolant-neck clearance, then recess or cut only what the actual combination requires.

## Legal/emissions note

Engine-swap, emissions, inspection and road-registration requirements vary by jurisdiction. Verify the requirements **before** making irreversible changes. Many performance vendors sell these parts for motorsport/off-road use.

## Stop-work conditions

Stop and correct the issue if any of these occur:

- steering shaft binds at any point lock-to-lock or through engine movement
- brake hard line contacts engine, header or steering components
- less clearance exists at the engine/firewall than engine movement can consume
- PPF or transmission is forced into position by bolt tension
- fuel system leaks or cannot hold pressure
- cooling system cannot hold pressure
- oil pressure is not established before first firing
- the ECU has no working over-temperature / low-oil-pressure safety strategy
- ABS/DSC warning state is being hidden without understanding whether the system functions

## Sources

| Claim | Source |
| --- | --- |
| Mazda documents major RX-8 refresh changes beginning with the 2008 Japanese-market refresh, so model year must be paired with series and market. | [Mazda](https://newsroom.mazda.com/en/publicity/release/2008/200803/080310.html) |
| Collins' current RX-8 swap-kit application lists RX-8 5-speed and 6-speed manual transmissions. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/honda-k-series-to-mazda-rx-8-swap-kit) |
| KPower documents current older-K block compatibility limits and explicitly excludes newer K20C1 from its products. | [KPower Industries](https://kpower.industries/pages/faqs) |
| Collins describes firewall recessing for its retained-RX-8-transmission configuration and says its setup can be installed without cutting through the firewall. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/pages/honda-k-series-to-mazda-rx-8-install-instructions) |
| KPower's RX-8-compatible architecture should be expected to require extensive firewall cutting and welding. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| Completed K24 RX-8 builds document cowl/firewall packaging conflicts and repeated mock-up needs. | [K24RX8](https://k24rx8.com/2018/10/23/initial-fitment/) |
| A JDM K24A/RBB-head RX-8 build documents firewall, ABS, rack and subframe issues. | [K-Swapped RX-8](https://www.kswappedrx8.com/2021/03/fitting-k24-into-car-part-one.html) |
