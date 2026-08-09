---
layout: page
title: "01 - Choose the architecture"
build_topics:
  - architecture
  - chassis
  - mounts
  - fitment
  - transmission
  - driveline
  - steering
---

# 01 - Choose the architecture

This decision controls the adapter, flywheel, mounts, front subframe, rack, steering shaft, oil-pan clearance and parts of the wiring strategy. Choose the architecture after identifying the RX-8 variant, transmission, engine block/head and electronics goals.

## Path A - Collins / retain RX-8 manual driveline

### What is documented

Current Collins documentation supports Honda K20/K24 applications with RX-8 5-speed and 6-speed manual transmissions. Its current parts ecosystem includes:

- K-to-RX-8 adapter plate;
- K-to-RX-8 flywheel;
- RX-8 pilot bearing;
- K-series-to-RX-8 engine mounts;
- engine-specific bracket adapters, including current K20A2, K20Z3 and K24A2/Z3/A4 listings;
- rack relocation spacers;
- Mazda 6 / Mazdaspeed 6 clutch-slave option;
- clutch options;
- a CAN emulator sold for RX-8 applications.

The installation instructions call for:

- ABS relocation;
- steering-rack relocation;
- steering-shaft solution;
- front crossmember notch for oil-pan clearance;
- cowl/firewall clearance work;
- starter/bellhousing clearancing;
- engine/trans installation with the RX-8 PPF in its stock driveline relationship.

<div class="variant-note"
     data-when="architecture.front=collins;chassis.originalTransmission=rx8_4at|rx8_6at"
     data-variant-label="Collins with automatic donor"
     markdown="1">

> **RX-8 variant - automatic chassis:** This path is documented around RX-8 manual transmissions. An automatic donor needs a separate manual-conversion plan before this chapter becomes prescriptive.

</div>

<div class="variant-note"
     data-when="architecture.front=collins;engine.block=k20a2|k20z3|k24a2|k24a4|k24z3|other"
     data-variant-label="Collins engine-specific brackets"
     markdown="1">

> **K-series variant:** Collins adapter and bracket selection is engine-specific. Do not assume a K24A bracket applies to K20A2, K20Z3, K24Z3 or an unlisted block.

</div>

### Why choose it

Choose this architecture when retaining the RX-8 manual gearbox, PPF and rear driveline is more important than preserving the stock front crossmember/rack position. It is currently the clearest commercial path for a retained-RX-8-manual-driveline build, but it still requires steering, crossmember and firewall fabrication.

### Main liabilities

- rack relocation changes steering geometry;
- factory crossmember must be modified and structurally repaired;
- packaging is tight;
- electronics still need a series/model-year-specific strategy;
- S1 and S2 ECU/CAN support should not be conflated.

---

## Path B - KPower / NC-derived front architecture

### What KPower confirms for RX-8

KPower's current RX-8 compatibility guide and mount listing document a 2006-2011 RX-8/NC-derived front architecture with:

- RX-8-compatible NC tubular subframe;
- KPower engine mounts for a defined older-K block list;
- no steering-rack spacers when paired with an NC rack;
- NC hydraulic power-steering approach or standalone EPS option;
- NC A/C mounting approach;
- RWD intake manifold ecosystem;
- RX-8-confirmed header for compatible older-K/RX-8 combinations;
- specific Unit2 oil-pan options;
- explicit 1st Gen versus 2nd Gen RX-8 CAN cautions.

KPower nevertheless says it does **not** offer a complete RX-8 package because firewall work remains required.

<div class="variant-note"
     data-when="architecture.front=kpower_nc;chassis.year=2003|2004|2005"
     data-variant-label="Early S1 KPower year range"
     markdown="1">

> **RX-8 variant - early S1:** Do not assume current KPower NC/RX-8 subframe and mount listings apply to 2003/04-2005 cars. Current public RX-8 product year ranges reviewed for this guide begin at 2006.

</div>

<div class="variant-note"
     data-when="architecture.front=kpower_nc;engine.block=k20a2|k20z1|k24a1|k20c1"
     data-variant-label="KPower excluded block family"
     markdown="1">

> **K-series variant:** KPower's standard mount family supports a defined older-K list and excludes blocks such as K20A2, K20Z1 and K24A1. Newer K20C-family engines are outside KPower's older-K product scope.

</div>

### Why choose it

Choose this architecture when avoiding rack spacers and moving to an NC-style front-end ecosystem is more important than retaining every RX-8 front/driveline interface.

### Critical unresolved interface

KPower lists NC 5/6-speed and other transmissions as options for its RX-8-compatible component set, but its public RX-8 compatibility article does not document a complete RX-8 rear-driveline recipe for an NC-trans conversion.

Do not assume that an RX-8 gearbox's Mazda family relationship to NC means bellhousing, PPF, rear mount or driveshaft interfaces are solved.

**Gate:** before buying a used NC gearbox for an RX-8, define exactly how the selected gearbox will connect to the PPF and driveshaft.

---

## Do not build an undocumented hybrid by accident

A tempting combination is:

- KPower tubular RX-8/NC subframe and engine mounts;
- Collins K-to-stock-RX-8 transmission adapter;
- stock RX-8 manual transmission and PPF.

Each component is credible independently, but the public documentation reviewed for this guide does **not** certify that the KPower engine position and Collins adapter/stock-transmission position coincide as a complete system.

If you want to develop that hybrid, treat it as an engineering branch: obtain dimensions/vendor confirmation **before** ordering the parts.

## Architecture Gate G0

Pass only when:

- RX-8 series/model year/market and LHD/RHD are recorded;
- original and selected transmission are recorded;
- exact engine block/head family is recorded;
- front subframe/rack architecture is selected;
- ECU/cluster/CAN strategy is selected at least to first-start level;
- A/C and power-steering goals are selected;
- automatic-to-manual conversion, if needed, is scoped as its own project.

## Sources

| Claim | Source |
| --- | --- |
| Collins supports K20/K24 engines with RX-8 5-speed and 6-speed manual transmissions and sells the core adapter, flywheel, mount and clutch-related components. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/products/honda-k-series-to-mazda-rx-8-swap-kit) |
| Collins advertises engine-specific RX-8 bracket adapter variants for K20A2, K20Z3 and K24A2/Z3/A4. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/collections/engine-mounts) |
| Collins' current instructions document ABS relocation, rack relocation, crossmember notching, firewall/cowl work and starter/bellhousing clearancing. | [Collins Performance Technologies](https://collinsperformancetechnologies.com/pages/honda-k-series-to-mazda-rx-8-install-instructions) |
| KPower documents its RX-8-compatible NC-derived component ecosystem, 1st Gen versus 2nd Gen CAN caveats and incomplete RX-8 package status. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| KPower's current NC/RX-8 mount listing provides RX-8 year range and older-K block compatibility/exclusion context. | [KPower Industries](https://kpower.industries/products/kpower-nc-mx5-engine-mount-kit) |
