---
layout: page
title: "13 — Open questions / validation register"
---

# 13 — Open questions and validation register

These are not omissions to hide; they are the items a responsible RX-8 guide should refuse to guess about.

| ID | Question | Current status | How to close it |
|---|---|---|---|
| Q1 | Does the Collins/All4Swap CAN emulator fully support a 2009 S2 manual RX-8 with a generic aftermarket ECU? | Vendor product claims broad RX-8 features; S2 not explicit | Obtain written vendor confirmation and document exact wiring/config |
| Q2 | Can factory S2 EPS be retained reliably with that emulator? | Product claims an EPS option; exact S2 validation unclear | Bench/vehicle test with diagnostics and fail-state testing |
| Q3 | Can factory S2 ABS and DSC both remain *functionally* correct? | Emulator advertises ABS/DSC options; torque-reduction behavior not established here | Diagnostic + controlled dynamic validation; document limitations |
| Q4 | What is the cleanest NC-transmission → RX-8 PPF/driveshaft recipe for the KPower branch? | Front architecture supported; public KPower RX-8 article does not give full rear recipe | Vendor confirmation or documented completed S2 build with dimensions/part numbers |
| Q5 | Is KPower tubular subframe + Collins stock-S2-trans adapter geometry compatible as a hybrid? | Individually plausible, not publicly validated | Obtain engine/trans datum dimensions from both vendors or physically fixture before purchase |
| Q6 | Exact firewall pocket dimensions for JDM K24A/RBB + reference mount revision? | Build-dependent; sources conflict | Create a measured template from a completed reference car after fixing driveline datum |
| Q7 | Minimum safe crossmember notch/boxing design for Collins path? | Vendor requires notch but does not publish structural analysis | Have qualified fabricator document plate thickness/weld design; add photos/CAD after validation |
| Q8 | Best S2 A/C control strategy with standalone ECU? | Mechanical compressor mounting available; S2 CAN request path not solved here | Integrate verified CAN emulator or discrete controller and document pressure/fan logic |
| Q9 | Exact fuel-system return strategy using S2 tank module with aftermarket rail/FPR? | Factory pressure spec known; multiple viable architectures | Publish one validated schematic with pump flow/pressure logs |
| Q10 | Which S2 chassis markets (LHD/RHD) change brake/ABS/firewall clearances? | LHD reference only | Add market-specific completed builds |

## Contribution standard for closing an item

A pull request should ideally include:

- chassis year/market/transmission
- engine/head code
- exact mount/subframe/adapter revision
- photos
- measured dimensions
- wiring diagram where applicable
- observed failure behavior, not only success
- part numbers
- date and vendor links

## Sources

| Claim | Source |
| --- | --- |
| Collins' RX-8 CAN emulator claims leave S2 manual validation as an open question. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/rx-8-wiring-emulator-for-canbus) |
| All4Swap's RX-8 CAN interface asks for chassis type/model year, supporting model-year-specific validation questions. | [All4Swap](https://all4swap.ru/product/rx8) |
| KPower's RX-8 compatibility guide supports the KPower front-end path while leaving the complete S2 rear-driveline recipe and S2 CAN path unresolved. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| The 2009 RX-8 fuel-pressure service spec supports the known factory feed-pressure baseline and the unresolved aftermarket return-strategy question. | [Operation CHARM](https://charm.li/Mazda/2009/RX8%202RTR-1.3L/Repair%20and%20Diagnosis/Powertrain%20Management/Tune-up%20and%20Engine%20Performance%20Checks/Fuel%20Pressure/Testing%20and%20Inspection/) |
| Completed K24 RX-8 build logs support keeping firewall dimensions and crossmember details open until a measured reference car exists. | [K24RX8](https://k24rx8.com/2018/10/23/initial-fitment/) |
| Public RX-8 reverse-engineering work is useful CAN research input, not a closed S2 swap interface. | [GitHub](https://github.com/rnd-ash/rx8-reverse-engineering) |
