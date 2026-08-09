---
layout: page
title: RX-8 K24 Swap Guide
permalink: /
---

# RX-8 K24 Swap Guide

This site is organized into two areas: a prescriptive build sequence and supporting reference material. The reference build is:

- **Chassis:** 2009-2011 Mazda RX-8 Series 2 (S2), LHD manual
- **Engine:** JDM **K24A / RBB** high-output family
- **Reference driveline:** retain the S2 RX-8 6-speed, PPF and differential using a current Collins K-to-RX-8 adapter architecture
- **Engine management:** standalone ECU, with S2 CAN integration treated as a separate validation project
- **Target:** naturally aspirated, reliable street/track-day configuration before adding power

## Site areas

<div class="area-grid">
  {% for area in site.data.site_areas %}
    <a class="area-card" href="{{ area.url | relative_url }}">
      <span class="area-card-kicker">{{ area.kicker }}</span>
      <strong>{{ area.title }}</strong>
      <span>{{ area.description }}</span>
    </a>
  {% endfor %}
</div>

## Read this before buying anything

A K24 RX-8 is **not** a bolt-in swap. Even with current commercial parts, the engine is tall and long for the RX-8 engine bay. Firewall/cowl clearance, ABS placement, steering clearance, cooling layout and electronics all need deliberate engineering.

The first rule of this guide is therefore:

> **Freeze the architecture before ordering adapter, mounts, steering, oil-pan, ECU or accessory-drive parts.**

## Architecture choice

There are two credible modern approaches:

| Path | Main benefit | Main cost |
|---|---|---|
| **A. Retain RX-8 driveline (reference)** | Keeps RX-8 transmission, PPF and rear driveline; current Collins instructions exist | Rack relocation, crossmember modification, tighter front packaging |
| **B. KPower / NC architecture** | Tubular subframe; no rack spacers when used with NC rack; current KPower RX-8 compatibility guidance | More system conversion; no complete RX-8 kit; rear driveline integration needs its own plan |

## Project gates

The full gate list now lives in the [Build Guide](build-guide/). Do not advance merely because the next parts have arrived.

## One S2-specific warning

KPower's RX-8 compatibility guidance explicitly distinguishes the S2 electronics problem: their published guidance does **not** present S2 RX-8 CAN integration as a solved plug-and-play system. Build the car so that a functioning K24 ECU, steering strategy and instrumentation do not depend on a future CAN breakthrough.
