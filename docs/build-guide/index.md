---
layout: page
title: Build Guide
permalink: /build-guide/
---

# Build Guide

This is the sequential, prescriptive path through an RX-8 K-series swap. Read it in order unless you are deliberately jumping back to verify a completed gate.

## Chapters

1. [Scope, identify your chassis/engine, and safety](00-scope-and-safety.html)
2. [Choose the architecture](01-architecture.html)
3. [Build the BOM and budget](02-bom-budget.html)
4. [Verify and prepare the K-series engine](03-jdm-k24a-engine-prep.html)
5. [Baseline and disassemble the RX-8](04-rx8-disassembly.html)
6. [Dry-fit and perform fabrication](05-fitment-fabrication.html)
7. [Transmission, clutch and driveline](06-transmission-driveline.html)
8. [Steering and suspension](07-steering-suspension.html)
9. [Cooling, fuel, intake and exhaust](08-cooling-fuel-intake-exhaust.html)
10. [Electrical, ECU and CAN integration](09-electrical-ecu-can-s2.html)
11. [First start and commissioning](10-first-start-commissioning.html)
12. [Shakedown and validation](11-shakedown-validation.html)

## Related references

- [KPower / NC-derived architecture]({{ '/reference/kpower-nc-architecture/' | relative_url }})
- [Open questions and validation register]({{ '/reference/open-questions/' | relative_url }})

## Project gates

Do not advance merely because the next parts have arrived.

| Gate | Pass condition |
|---|---|
| G0 Architecture | RX-8 variant, transmission, front subframe/rack, ECU/cluster strategy and A/C goal selected |
| G1 Engine | Exact block, head, trigger/sensors, accessory drive, oil pump/pan and throttle strategy identified; engine health verified |
| G2 Dry fit | Engine/trans/PPF relationship fixed; steering and firewall interference mapped |
| G3 Fabrication | Crossmember/subframe, firewall and ABS work complete; service clearances verified |
| G4 Systems | Fuel pressure/leak test, cooling pressure test, clutch and steering checks passed |
| G5 First start | Oil pressure established, no leaks, stable idle, ECU safeties functioning |
| G6 Controls | Brake/ABS plan, steering assist, gauges, fans, charging and A/C strategy validated |
| G7 Chassis | Alignment and bump-steer checks completed before normal road use |
| G8 Tune | Full-load calibration completed on the fuel and hardware actually installed |

## Sources

| Claim | Source |
| --- | --- |
| This page is a build-guide navigation and gate summary; page-specific technical claims are sourced in the individual chapters. | No external source cited. |
