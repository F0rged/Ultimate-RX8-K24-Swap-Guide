---
layout: page
title: "08 — Cooling, fuel, intake and exhaust"
---

# 08 — Cooling, fuel, intake and exhaust

Finish these systems **after** engine position is locked.

## 8.1 Cooling

### S2 radiator
KPower's RX-8 catalog currently lists a Koyo radiator specifically for **2009–2011 RX-8**. A healthy OEM radiator can also be used if capacity/condition are adequate; the point is to buy the S2-specific geometry, not an S1 radiator by mistake.

### Upper outlet
For a JDM K24A/RBB, use the chosen intake-side/low-profile coolant neck. It must already have been used during firewall mock-up.

### Heater
Decide before final hose routing:

- retain heater core
- heater delete (track-only style configuration)

Route hoses so they cannot rub the firewall pocket or header.

### Expansion/bleed strategy
The longitudinal conversion can create new high points. Build in a deliberate fill/bleed path. Pressure-test cold before first start.

## 8.2 Fuel

The 2009 Mazda service information specifies factory RX-8 fuel-line pressure of approximately **375–450 kPa (54.4–65.2 psi)** during its factory test.

That number is useful to evaluate the **RX-8 pump/feed**, but it is not automatically the correct base pressure for the new K24 calibration.

For a standalone K24:

1. select injector(s);
2. choose returnless or regulated-return architecture;
3. set base fuel pressure to the injector data/tune strategy;
4. configure the ECU injector calibration for that pressure;
5. measure pressure under load, not just at idle.

A KPower RWD fuel rail supports a clean custom solution. External adjustable regulators from Fuelab/Radium are examples. If converting to a return system, design a safe return path rather than improvising around the tank module.

### Minimum fuel tests

- pump primes reliably
- no leakage at every connection
- base pressure correct with engine off/pump running as applicable
- pressure responds correctly to manifold reference if using a referenced regulator
- pressure remains adequate at full load
- ECU has lean-AFR protection after wideband validation

## 8.3 Intake

A clean RWD DBW baseline is:

- KPower cast RWD intake manifold
- Bosch 74 mm DBW throttle body
- suitable throttle-body adapter
- 3-inch intake tube/filter
- IAT located where it reads incoming air, not heat-soaked stagnant air

The final intake tube should be built **after** the engine, radiator and accessory drive are fixed.

## 8.4 Exhaust

KPower's current NC 4-2-1 header product is specifically described as fit-confirmed on K24-swapped RX-8s.

After the header:

- fabricate the rest of the exhaust around the actual PPF, driveshaft and floor clearance;
- use flex accommodation;
- provide O2/wideband bungs as required by the ECU;
- heat-shield brake, steering, clutch and wiring components;
- do not let the exhaust become a rigid brace between engine and chassis.

## 8.5 PCV / crankcase ventilation

Longitudinal installation puts factory rear-facing breather features near the firewall. Older completed builds moved/redirected crankcase plumbing to avoid contact.

Design it before the firewall becomes inaccessible:

- sealed PCV path appropriate for street use, or
- properly baffled catch-can system for motorsport use

Do not cap required crankcase ventilation.

## Systems Gate G4

Before first start:

- cooling system holds pressure cold
- fuel system holds pressure with zero leaks
- throttle moves correctly in ECU calibration with engine off
- exhaust and O2 sensors are installed
- no hose/wire is within unsafe distance of header without shielding
