---
layout: page
title: "13 - Open questions / validation register"
build_topics:
  - research
  - validation
  - architecture
  - engine
  - electrical
  - can
---

# 13 - Open questions and validation register

These are not omissions to hide; they are the items a responsible RX-8 K-series guide should refuse to guess about.

| ID | Question | Current status | How to close it |
|---|---|---|---|
| Q1 | Which S1 ABS modules work with Haltech's RX-8 S1 integration, by market and year? | Haltech documents CAN-based ABS-module limitations | Document exact ABS module IDs, diagnostics and functional tests |
| Q2 | Which S2 CAN emulator strategy is validated by year/market/transmission/ECU? | KPower says 2nd Gen CAN is not sorted; vendor emulator claims need exact validation | Obtain written vendor confirmation plus in-car diagnostic and function tests |
| Q3 | Can factory EPS be retained reliably on each S1/S2 electronics path? | Product claims and KPower alternatives exist, but exact behavior varies | Bench/vehicle test with diagnostics, fail-state testing and steering-load checks |
| Q4 | Can factory ABS and DSC remain functionally correct with each emulator/ECU path? | Warning-lamp behavior is not enough | Diagnostic + controlled dynamic validation; document limitations |
| Q5 | What is the cleanest NC-transmission to RX-8 PPF/driveshaft recipe by RX-8 series? | KPower front architecture is supported; public RX-8 article does not give full rear recipe | Vendor confirmation or documented completed build with dimensions and part numbers |
| Q6 | Which Collins K-series mount adapter is correct for K20Z1, K24A8, K24A1, K20A3 and other engines not explicitly named on current RX-8 adapter pages? | Current pages name only selected families | Vendor confirmation or measured fabricated solution |
| Q7 | What is a fully documented K24Z3/R40 RX-8 exhaust, coolant, oil-pan and trigger solution? | Collins bracket exists; complete RX-8 recipe not documented | Document a complete parts list, wiring/trigger setup and fabrication result |
| Q8 | Which auto-to-manual RX-8 chassis conversions are validated as a basis for this swap? | Manual paths are better documented | Add sourced manual-conversion sequence and interlock/electrical details |
| Q9 | Which LHD/RHD combinations change steering-shaft, ABS and header clearance? | Current completed-build evidence is sparse | Add market-specific completed builds with photos and measurements |
| Q10 | What firewall pocket/recess dimensions have been measured for each major engine/head + architecture combination? | Build-dependent; sources conflict | Create a measured table after fixing drivetrain datum and service-clearance targets |
| Q11 | Which oil pan/pump solutions are proven for K20 vs K24 in each front-subframe architecture? | Several options exist but are architecture-sensitive | Add logged oil pressure and clearance data by engine/subframe |
| Q12 | Which later K-series families, if any, have a validated RX-8 adapter/mount/electronics path? | K20C/K24W are outside this edition's validated scope | Add a dedicated research update before including them in procedure |

## Contribution standard for closing an item

A pull request should ideally include:

- RX-8 series/year/market;
- LHD/RHD;
- original transmission and selected transmission;
- engine block and head/casting family;
- oil pump and pan;
- throttle strategy;
- ECU and CAN strategy;
- exact mount/subframe/adapter revision;
- photos;
- measured dimensions;
- wiring diagram where applicable;
- observed failure behavior, not only success;
- part numbers;
- date and vendor links.

## Sources

| Claim | Source |
| --- | --- |
| Haltech documents RX-8 Series 1 manual support with ABS-module limitations. | [Haltech](https://support.haltech.com/portal/en/kb/articles/nexus-plug-in-ecu-mazda-rx-8-series-1) |
| Collins' RX-8 CAN emulator claims require exact model-year and ECU validation before being treated as a safety-system solution. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/rx-8-wiring-emulator-for-canbus) |
| All4Swap's RX-8 CAN interface asks for chassis type/model year, supporting model-year-specific validation questions. | [All4Swap](https://all4swap.ru/product/rx8) |
| KPower's RX-8 compatibility guide supports the KPower front-end path while leaving the complete rear-driveline recipe and S2 CAN path unresolved. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| Collins' current RX-8 mount-adapter catalog names specific engine families rather than every K-series block. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/collections/engine-mounts) |
| KPower documents K24Z3/R40 architecture differences that require a dedicated RX-8 validation path. | [KPower Industries](https://kpower.industries/blogs/news/game-changer-the-new-k24z3-swap-is-here) |
| Completed K24 RX-8 build logs support keeping firewall dimensions and crossmember details open until measured combinations exist. | [K24RX8](https://k24rx8.com/2018/10/23/initial-fitment/) |
| Public RX-8 reverse-engineering work is useful CAN research input, not a closed swap interface. | [GitHub](https://github.com/rnd-ash/rx8-reverse-engineering) |
