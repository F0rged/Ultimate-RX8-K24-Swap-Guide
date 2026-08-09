---
layout: page
title: "04 — RX-8 baseline and disassembly"
---

# 04 — Baseline and disassemble the RX-8

The goal is not simply to remove the Renesis. The goal is to preserve enough information and working hardware to distinguish swap problems from pre-existing RX-8 problems.

## 4.1 Baseline the car while it still runs

Before disassembly, record:

- all PCM, ABS/DSC, EPS, HVAC and body DTCs you can read
- whether ABS and DSC warnings are present
- EPS operation lock-to-lock
- speedometer, tachometer and coolant gauge behavior
- A/C request and compressor behavior
- cooling-fan operation
- charging voltage
- reverse lights
- brake lights
- clutch switch/start interlock
- fuel gauge
- horn and headlights

Video the cluster during key-on and start. Photograph every engine-bay harness routing and ground point.

For an S2, this baseline is particularly valuable because engine removal changes a networked system, not just an engine.

## 4.2 Preserve S2 electronics

Do not cut the RX-8 engine harness at random.

Label and store:

- factory PCM
- engine harness
- major engine-bay harness connectors
- original throttle pedal and related connectors
- MAF/airbox harness branches
- original EPS connectors/modules
- ABS connectors
- A/C pressure and request wiring
- fan wiring

Even if the first-running configuration uses a standalone dash, preserving factory wiring gives you options for later CAN integration.

## 4.3 Safe teardown order

1. Disconnect battery and wait for systems to power down.
2. Recover A/C refrigerant using proper equipment if the system is charged.
3. Drain coolant and engine oil.
4. Relieve fuel pressure and disconnect fuel feed safely.
5. Remove hood and protect painted edges.
6. Remove intake/airbox.
7. Remove radiator/fans and coolant hoses.
8. Disconnect engine electrical connectors and grounds, labeling both halves.
9. Disconnect fuel, brake-vacuum and EVAP-related lines as applicable.
10. Remove exhaust connection.
11. Remove clutch hydraulics as required by the chosen transmission removal method.
12. Support transmission/differential/PPF before loosening structural driveline fasteners.
13. Remove engine and/or engine-transmission assembly using the method appropriate to the selected architecture.
14. Bag and label RX-8 fasteners by subsystem.

## 4.4 S2 driveline preservation

On the reference path, the RX-8 S2:

- 6-speed
- PPF
- differential
- driveshaft

are retained unless inspection finds damage.

Inspect before reuse:

- input-shaft play/seal area
- output/rear seal area
- shifter mechanism
- PPF cracks/damage
- differential mounts
- driveshaft U-joints/CV elements as applicable
- clutch hydraulic master condition

The S2 gearbox is related in architecture to NC-family Mazda units, but the rotary bellhousing is not a K-series bellhousing; the K-to-RX-8 adapter/flywheel remains required.

## Donor Gate

Do not proceed to fabrication until any pre-existing ABS, steering or chassis faults that would invalidate later testing are documented and understood.

## Sources

| Claim | Source |
| --- | --- |
| Collins' K-to-RX-8 kit confirms the retained RX-8 5/6-speed transmission path and required adapter/flywheel architecture. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/honda-k-series-to-mazda-rx-8-swap-kit) |
| Collins' installation sequence preserves the RX-8 transmission/PPF relationship while fitting the K-series engine. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/pages/honda-k-series-to-mazda-rx-8-install-instructions) |
