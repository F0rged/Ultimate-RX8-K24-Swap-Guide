---
layout: page
title: "11 — Shakedown and validation"
---

# 11 — Alignment, shakedown and validation

A car that idles is not a completed swap.

## 11.1 Before moving under its own power

- steering lock-to-lock checked
- wheel lugs torqued
- brake pedal hard
- no brake leaks
- clutch disengages
- throttle returns correctly
- coolant bled
- oil level correct
- ECU limits conservative
- front toe set close enough for a short controlled move

## 11.2 First 1–5 km / controlled lot test

Use low load.

Check:

- clutch engagement
- brake feel
- steering self-centering
- no steering bind
- drivetrain vibration
- PPF/exhaust contact
- temperature stability
- fuel pressure/AFR
- speed signal
- warning lamps

Stop and inspect after the first short loop.

## 11.3 Alignment is mandatory after rack relocation

For Collins-style rack spacers:

- four-wheel alignment
- center steering rack/wheel
- record caster/camber/toe
- inspect tie-rod operating angle

Then **measure bump steer**. Moving a rack changes tie-rod geometry; a perfect static toe setting can still produce dangerous toe change in bump/rebound.

## 11.4 ABS and DSC validation

Do this only in a controlled environment.

ABS:
- diagnostic scan first
- wheel speeds coherent
- low-speed controlled activation

DSC:
- do not assume working because ABS works
- engine torque-reduction messaging may not exist with a standalone ECU
- validate the chosen integration explicitly or document DSC as unavailable

## 11.5 Thermal validation

Perform progressively longer sessions while logging:

- coolant temperature
- oil temperature
- oil pressure vs RPM
- intake air temperature
- AFR
- battery voltage

Inspect firewall/cowl/HVAC area for heat soak. Add shielding based on measured temperature, not appearance.

## 11.6 Full-load tuning

Only after chassis and thermal systems pass:

- dyno or controlled professional road tuning
- verify injector duty cycle
- verify fuel pressure under load
- tune ignition on the actual fuel
- tune VTC limits for the actual engine
- set rev limit appropriate to valvetrain/oil-pump configuration
- re-test ECU safety limits

## 11.7 Re-torque / inspection schedule

After initial road use:

- inspect mount hardware
- inspect subframe/crossmember weld area
- inspect PPF/trans hardware
- inspect exhaust hangers
- inspect steering joint fasteners
- inspect brake/ABS lines
- inspect coolant/fuel hose abrasion
- inspect accessory belt tracking

Repeat after the first track day or other sustained high-load event.

## Completion definition

The swap is complete when it can document:

- alignment sheet
- bump-steer result or credible geometry validation
- hot oil-pressure log
- cooling log
- final tune file
- fuel pressure under load
- ABS/DSC functional status
- steering strategy
- wiring diagram
- final BOM and part numbers

## Sources

| Claim | Source |
| --- | --- |
| Collins' retained-RX-8-transmission instructions document rack relocation, making alignment and bump-steer validation mandatory after the change. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/pages/honda-k-series-to-mazda-rx-8-install-instructions) |
| Collins' RX-8 CAN emulator claims are treated as integration candidates, not proof that ABS/DSC functions are validated on a 2009 S2. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/rx-8-wiring-emulator-for-canbus) |
| All4Swap's model-year-aware RX-8 CAN interface flow supports explicit S2 validation before relying on warning-lamp or cluster behavior. | [All4Swap](https://all4swap.ru/product/rx8) |
