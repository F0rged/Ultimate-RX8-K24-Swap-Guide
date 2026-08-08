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
