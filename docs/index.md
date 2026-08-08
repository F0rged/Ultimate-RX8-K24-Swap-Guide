---
layout: page
title: RX-8 K24 Swap Guide
permalink: /
---

# RX-8 K24 Swap Guide

This is a sequential, research-backed guide to installing a Honda K24 in a Mazda RX-8. The reference build is:

- **Chassis:** 2009–2011 Mazda RX-8 Series 2 (S2), LHD manual
- **Engine:** JDM **K24A / RBB** high-output family
- **Reference driveline:** retain the S2 RX-8 6-speed, PPF and differential using a current Collins K-to-RX-8 adapter architecture
- **Engine management:** standalone ECU, with S2 CAN integration treated as a separate validation project
- **Target:** naturally aspirated, reliable street/track-day configuration before adding power

## Read this before buying anything

A K24 RX-8 is **not** a bolt-in swap. Even with current commercial parts, the engine is tall and long for the RX-8 engine bay. Firewall/cowl clearance, ABS placement, steering clearance, cooling layout and electronics all need deliberate engineering.

The first rule of this guide is therefore:

> **Freeze the architecture before ordering adapter, mounts, steering, oil-pan, ECU or accessory-drive parts.**

There are two credible modern approaches:

| Path | Main benefit | Main cost |
|---|---|---|
| **A. Retain RX-8 driveline (reference)** | Keeps RX-8 transmission, PPF and rear driveline; current Collins instructions exist | Rack relocation, crossmember modification, tighter front packaging |
| **B. KPower / NC architecture** | Tubular subframe; no rack spacers when used with NC rack; current KPower RX-8 compatibility guidance | More system conversion; no complete RX-8 kit; rear driveline integration needs its own plan |

## Sequential build

1. [Scope, assumptions and safety](00-scope-and-safety.md)
2. [Choose the architecture](01-architecture.md)
3. [Build the BOM and budget](02-bom-budget.md)
4. [Verify and prepare the JDM K24A](03-jdm-k24a-engine-prep.md)
5. [Baseline and disassemble the RX-8](04-rx8-disassembly.md)
6. [Dry-fit and perform fabrication](05-fitment-fabrication.md)
7. [Transmission, clutch and driveline](06-transmission-driveline.md)
8. [Steering and suspension](07-steering-suspension.md)
9. [Cooling, fuel, intake and exhaust](08-cooling-fuel-intake-exhaust.md)
10. [Electrical, ECU and S2 CAN](09-electrical-ecu-can-s2.md)
11. [First start and commissioning](10-first-start-commissioning.md)
12. [Shakedown and validation](11-shakedown-validation.md)
13. [KPower / NC alternative path](12-kpower-alternative.md)
14. [Open questions and validation register](13-open-questions.md)
15. [Research references](references.md)

## Project gates

Do not advance merely because the next parts have arrived.

| Gate | Pass condition |
|---|---|
| G0 Architecture | Transmission, front subframe/rack, ECU/cluster strategy and A/C goal selected |
| G1 Engine | Correct RBB engine verified; compression/leakdown acceptable; service plan complete |
| G2 Dry fit | Engine/trans/PPF relationship fixed; steering and firewall interference mapped |
| G3 Fabrication | Crossmember/subframe, firewall and ABS work complete; service clearances verified |
| G4 Systems | Fuel pressure/leak test, cooling pressure test, clutch and steering checks passed |
| G5 First start | Oil pressure established, no leaks, stable idle, ECU safeties functioning |
| G6 Controls | Brake/ABS plan, steering assist, gauges, fans, charging and A/C strategy validated |
| G7 Chassis | Alignment and bump-steer checks completed before normal road use |
| G8 Tune | Full-load calibration completed on the fuel and hardware actually installed |

## One S2-specific warning

KPower's RX-8 compatibility guidance explicitly distinguishes the S2 electronics problem: their published guidance does **not** present S2 RX-8 CAN integration as a solved plug-and-play system. Build the car so that a functioning K24 ECU, steering strategy and instrumentation do not depend on a future CAN breakthrough.
