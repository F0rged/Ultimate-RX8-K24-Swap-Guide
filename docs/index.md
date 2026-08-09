---
layout: page
title: RX-8 K-Series Swap Guide
permalink: /
---

# RX-8 K-Series Swap Guide

This site is organized into two areas: a prescriptive build sequence and supporting reference material. The guide covers Honda K-series swaps into Mazda RX-8 chassis by writing the common procedure once and adding variant notes where RX-8 generation, market, transmission, engine family, head casting, electronics or architecture change the answer.

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

## Before you start: identify your combination

Record this before ordering parts:

| Area | Identify |
|---|---|
| RX-8 | Series, model year, market, LHD/RHD, original transmission |
| K engine | Block code, head/casting family, oil pump, trigger/sensor family, cable throttle or DBW |
| Architecture | Collins + retained RX-8 manual transmission, KPower NC-derived front architecture or custom/other |

A K-series RX-8 is **not** a bolt-in swap. Even with current commercial parts, the engine package can conflict with the RX-8 firewall/cowl, ABS placement, steering, cooling layout and electronics. A product being listed for an RX-8 does not mean it applies to every RX-8 year, and a product being listed for a K-series engine does not mean it applies to every K block/head.

The first rule of this guide is therefore:

> **Freeze the architecture before ordering adapter, mounts, steering, oil-pan, ECU or accessory-drive parts.**

## Architecture choice

There are two credible modern approaches:

| Path | Main benefit | Main cost |
|---|---|---|
| **A. Retain RX-8 manual driveline** | Keeps RX-8 5MT/6MT, PPF and rear driveline; current Collins instructions exist | Rack relocation, crossmember modification, tighter front packaging; automatic chassis need a separate manual-conversion plan |
| **B. KPower / NC architecture** | Tubular subframe; no rack spacers when used with NC rack; current KPower RX-8 compatibility guidance | More system conversion; no complete RX-8 kit; current RX-8 listings start at 2006 and block support is limited |

## Compatibility snapshot

| Combination | Evidence level | Main cautions |
|---|---|---|
| RX-8 manual + K24A/RBB + Collins | Documented component path | Rack relocation, crossmember/firewall/cowl work; do not copy another build's cut dimensions |
| RX-8 manual + K20A2/PRB + Collins | Documented mount-adapter path | PRB coolant/intake differences; do not apply K24/RBB packaging assumptions |
| RX-8 manual + K20Z3/RBC + Collins | Documented mount-adapter path | Lower K20 deck changes packaging; RBC remains in the RBB/RBC coolant-neck family |
| RX-8 manual + K24Z3/R40 + Collins | Partially documented | Collins bracket exists, but R40 exhaust, trigger, cooling and oil-pan path need dedicated validation |
| 2006-2011 RX-8 + supported older-K block + KPower NC architecture | Documented at major component level | Firewall work; no complete RX-8 package; CAN/rear-driveline integration must be engineered |
| Early S1 + KPower NC architecture | Custom / unvalidated by current KPower RX-8 year listing | Verify subframe, mount and steering fit before purchase |
| Automatic RX-8 donor | Partially documented / outside current prescriptive path | Manual-conversion and electrical/interlock details must be solved before following manual driveline chapters |

## Project gates

The full gate list now lives in the [Build Guide](build-guide/). Do not advance merely because the next parts have arrived.

## Electronics warning

S1 and S2 electronics are not the same problem. KPower distinguishes 1st Gen RX-8 CAN integration from 2nd Gen, and Haltech documents a specific S1 manual-car integration with ABS-module limits. Build the car so the first-running engine, steering strategy and instrumentation do not depend on an unverified CAN breakthrough.

## Sources

| Claim | Source |
| --- | --- |
| Collins documents a retained-RX-8-manual-transmission path and sells engine-specific RX-8 K-series bracket variants. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/honda-k-series-to-mazda-rx-8-swap-kit) |
| KPower's RX-8-compatible mount/subframe path has model-year and engine-block limits and does not present a complete RX-8 package or solved S2 CAN path. | [KPower Industries](https://kpower.industries/products/kpower-nc-mx5-engine-mount-kit) and [compatibility guide](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| Haltech documents a specific RX-8 S1 manual integration with ABS-module limitations. | [Haltech](https://support.haltech.com/portal/en/kb/articles/nexus-plug-in-ecu-mazda-rx-8-series-1) |
