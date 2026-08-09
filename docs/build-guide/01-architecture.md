---
layout: page
title: "01 — Choose the architecture"
---

This decision controls the adapter, flywheel, mounts, front subframe, rack, steering shaft, oil-pan clearance and parts of the wiring strategy.

## Path A — Collins / retain RX-8 driveline **(reference path)**

### What is documented

Current Collins documentation supports K20/K24 engines with RX-8 5- and 6-speed transmissions. Its current parts ecosystem includes:

- K-to-RX-8 adapter plate
- K-to-RX-8 flywheel
- RX-8 pilot bearing
- K-series-to-RX-8 engine mounts and K24 mount adapter
- rack relocation spacers
- Mazda 6 / Mazdaspeed 6 clutch-slave option
- clutch options
- a CAN emulator sold for RX-8 applications

The installation instructions call for:

- ABS relocation
- steering-rack relocation
- steering-shaft solution (Collins references a Lexus IS250 joint)
- front crossmember notch for oil-pan clearance
- cowl/firewall clearance work
- starter/bellhousing clearancing
- engine/trans installation with the RX-8 PPF in its stock driveline relationship

### Why this is the reference for a 2009 S2

The S2 already has a usable 6-speed and PPF/rear driveline. Retaining them removes a major set of unknowns from the rear half of the swap.

### Main liabilities

- rack relocation changes steering geometry
- factory crossmember must be modified and structurally repaired
- packaging is tight
- S2 CAN/electronics still need a separate strategy
- the vendor's linked Adaptronic recommendation points to an **S1** RX-8 product; do not assume it applies to a 2009 S2

---

## Path B — KPower / NC architecture

### What KPower confirms for RX-8

KPower's current RX-8 compatibility guide confirms that:

- its NC tubular subframe is a direct replacement in the 2006–2011 RX-8 chassis;
- the KPower K24 mount kit can position the engine on that subframe;
- the subframe does not require steering-rack spacers when paired with an NC rack;
- its NC hydraulic power-steering approach or standalone EPS can be used;
- its NC A/C mounting approach can be used;
- its RWD intake manifold/DBW ecosystem, RX-8-confirmed header, and specific Unit2 oil pans are compatible;
- a JDM K24A/RBB is in the supported mount family.

KPower nevertheless explicitly says it does **not** offer a complete RX-8 package because of the firewall work.

### Why choose it

Choose this architecture when avoiding rack spacers / preserving a cleaner steering geometry is more important than retaining the entire stock RX-8 front/driveline arrangement.

### Critical unresolved interface

KPower lists NC 5/6-speed and other transmissions as options for its RX-8-compatible component set, but its public RX-8 compatibility article does not document a complete S2 RX-8 rear-driveline recipe (PPF, transmission rear mount relationship and driveshaft) for an NC-trans conversion.

Do not assume that "S2 gearbox is related to NC" means the rotary bellhousing is compatible. Community transmission documentation notes that the S2 RX-8 and NC units share family architecture, but the bellhousings differ.

**Gate:** before buying a used NC gearbox for an RX-8, define exactly how the selected gearbox will connect to the PPF and driveshaft.

---

## Do not build an undocumented hybrid by accident

A tempting combination is:

- KPower tubular RX-8/NC subframe and engine mounts
- Collins K-to-stock-RX-8 transmission adapter
- stock S2 transmission and PPF

Each component is credible independently, but the public documentation reviewed for this guide does **not** certify that the KPower engine position and Collins adapter/stock-transmission position coincide as a complete system.

If you want to develop that hybrid, treat it as an engineering branch: obtain dimensions/vendor confirmation **before** ordering the parts.

## Reference-build decision record

For this edition:

**Reference = JDM K24A/RBB + Collins K-to-RX-8 adapter + stock 2009 S2 6-speed/PPF/diff + standalone ECU.**

The KPower tubular-subframe path remains the preferred alternative for a builder prepared to solve the NC-style rear-driveline interface.
