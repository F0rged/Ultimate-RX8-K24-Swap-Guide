---
layout: page
title: "00 — Scope and safety"
---

# 00 — Scope, assumptions and safety

## What this guide does

This guide converts research into a build sequence. It intentionally separates:

- **confirmed compatibility** — a manufacturer or completed build directly supports the claim;
- **strong inference** — components belong to the same documented architecture but the exact S2 combination is not manufacturer-certified;
- **vehicle-specific fabrication** — the correct answer can only be established by measuring the actual car/engine.

## Reference configuration

Unless stated otherwise:

- 2009–2011 North-American-style LHD RX-8 S2 manual chassis
- stock S2 6-speed retained
- JDM K24A with RBB cylinder head
- naturally aspirated
- drive-by-wire
- standalone ECU
- stock differential and PPF retained
- power steering retained in some form
- heater desirable; A/C optional and treated as phase 2
- ABS/DSC is not assumed functional until explicitly validated

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
