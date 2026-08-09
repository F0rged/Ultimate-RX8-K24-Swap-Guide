---
layout: page
title: "07 — Steering and suspension"
---

# 07 — Steering and suspension

Steering is not a packaging afterthought. The two main swap architectures solve crank-pulley/oil-pan interference differently.

## 7.1 Collins / stock crossmember: rack relocation

Current Collins instructions require rack relocation and a longer steering connection. Collins specifically references a **Lexus IS250 steering-column knuckle/U-joint, part number 45206-30112**, with modification to fit its arrangement.

Independent builds report that lowering the rack significantly changes toe and can create bump-steer concerns.

### Required checks

After the rack and shaft are installed:

1. front wheels off the ground;
2. turn lock-to-lock slowly;
3. verify no U-joint bind or tight spot;
4. verify shaft slip/engagement is adequate;
5. verify shaft cannot contact header, engine or body through engine movement;
6. verify rack boots and tie rods clear the sump;
7. check that steering wheel/rack are centered.

After the car is complete:

- professional four-wheel alignment
- set ride height first
- measure toe change through meaningful bump/rebound travel
- correct excessive bump steer before high-speed use

A static alignment does not prove correct steering geometry after moving the rack.

## 7.2 Power steering by RX-8 variant

The RX-8's factory electric steering is part of the networked vehicle, and S1/S2 integration details should not be assumed identical. KPower's current RX-8 guidance offers two routes that avoid making factory CAN operation a prerequisite:

### Standalone EPS
KPower offers a standalone electric-power-steering solution for RX-8 applications. This is attractive if retaining electric assist without solving factory RX-8 CAN is the priority.

### NC hydraulic rack
With the KPower tubular subframe, KPower says a complete NC rack/hydraulic system can be used, allowing the CAN-dependent RX-8 EPS system to be removed from the engine-swap dependency chain.

## 7.3 Do not mix rack solutions casually

The Collins rack spacer solution belongs to the modified stock-crossmember architecture.

The no-spacer claim from KPower applies to its **tubular subframe with an NC rack**. Do not read it as proof that a stock RX-8 rack in an arbitrary hybrid position will clear.

## 7.4 Suspension inspection opportunity

With the subframe/rack apart, inspect:

- front lower ball joints
- control-arm bushings
- tie-rod ends
- sway-bar links/bushings
- wheel bearings
- engine-bay chassis pickup points

Do not mask worn steering components with an alignment.

## Steering Gate

Do not road-test until:

- shaft retention is mechanically secure
- no bind exists lock-to-lock
- power assist is predictable
- front toe is set safely
- brake lines and steering lines are clear of all moving/hot parts

## Sources

| Claim | Source |
| --- | --- |
| Collins' instructions require rack relocation and reference a Lexus IS250 steering-column joint for its arrangement. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/pages/honda-k-series-to-mazda-rx-8-install-instructions) |
| KPower's RX-8 guidance distinguishes standalone EPS and NC hydraulic steering options for its tubular-subframe architecture. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| KPower's NC hydraulic power-steering kit is used as a hydraulic steering architecture reference. | [KPower Industries](https://kpower.industries/products/k-swap-nc-power-steering-kit) |
| Independent K24 RX-8 fitment notes document rack and steering-clearance issues that make bump-steer checks important. | [K24RX8](https://k24rx8.com/2018/10/23/initial-fitment/) |
