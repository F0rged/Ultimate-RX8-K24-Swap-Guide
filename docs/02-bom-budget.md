---
layout: page
title: "02 — BOM, budget and buy order"
---

# 02 — BOM, budget and buy order

The full machine-readable BOM is in [`data/bom.csv`](data/bom.csv).

## Budget reality

For a **well-finished 2009 S2 + JDM K24A** using the retained-S2-transmission reference path, a realistic planning range is:

- **USD 12k–15k:** disciplined DIY, substantial fabrication done personally, economical ECU/instrument choices, no A/C restoration, used/reused parts where sensible.
- **USD 17k–21k:** the practical reference budget for a reliable NA car with current commercial swap parts, standalone DBW ECU, proper instrumentation, cooling, exhaust, alignment and tuning.
- **USD 20k–25k+:** professional fabrication, new premium components, restored A/C, extensive OEM-like electronics integration, or replacing many used subsystems.

These figures exclude the RX-8 chassis itself and assume the K24 long block does not require a rebuild.

The current additive **typical-value roll-up** of required/recommended reference-path BOM rows is approximately **$20.5k USD**. Treat that as a planning check rather than a quote: several rows are allowances and real builds will substitute, reuse or omit components.

A useful sanity check is KPower's current NC pricing: its physical NC race package is about **$5.8k** with subframe, while its complete NC package is about **$10k** before the engine and many vehicle-specific extras. An RX-8 adds firewall/fabrication and S2 electronics work.

## Buy in stages

### Buy Order 1 — prove the architecture
Buy only:

- engine
- adapter/flywheel/mount system for the selected path
- selected transmission (if not retaining S2)
- steering architecture parts
- oil-pan/pump parts needed to establish bottom clearance
- low-profile / intake-side coolant outlet

**Do not** buy a complete exhaust, final intake tube, A/C hoses, final radiator hoses or driveshaft before the engine/transmission position is physically established.

### Buy Order 2 — make the chassis fit
After the first dry-fit:

- fabrication materials
- ABS relocation materials
- steering shaft/joint parts
- header
- oil pan/baffle if final geometry changes it
- heat shielding
- replacement brake lines/fittings if routing requires it

### Buy Order 3 — make it run
After mechanical position is locked:

- ECU/harness
- DBW throttle and pedal strategy
- fuel rail/regulator/lines as required
- cooling system
- sensors
- clutch hydraulics
- charging cables/grounds

### Buy Order 4 — make it a car
After first start:

- exhaust completion
- dash / CAN interface
- A/C
- heater finishing
- undertrays/heat shields
- cosmetics
- final alignment/corner balance

## Core reference-build parts

| System | Reference choice | Typical 2026 planning figure |
|---|---|---:|
| Engine | JDM K24A RBB | $1,200–1,900 |
| JDM accessory conversion + engine service | USDM-style K24A water-pump housing, pump, alternator/idler + seals/consumables | $700–1,500 |
| K→RX-8 adapter | Collins | ~$650 |
| Flywheel | Collins K→RX-8 | ~$861 |
| Engine mounts + K24 adapter | Collins | ~$604 |
| Rack spacers | Collins | ~$227 |
| Clutch/slave/bolts/pilot | Collins / compatible | ~$550–900 |
| Intake/DBW system | RWD manifold + 74 mm DBW + adapter + tube | ~$1,100–1,400 |
| Header | RX-8-confirmed KPower 4-2-1 | ~$939 |
| Engine management | Universal KPower/Haltech DBW package | from ~$4,195 |
| Standalone dash (recommended S2 baseline) | Haltech iC-7 or equivalent | ~$1,195 |
| S2 radiator | Koyo 2009–11 example | ~$433 |
| Fabrication / exhaust / hoses / heat / misc. | highly build-specific | $2,000–5,000 |
| Tune + alignment | local service | $700–1,500 |

## Components that are alternatives, not additions

Do not double-count these:

- **K24 balance-shaft oil pump + compatible baffled pan** **OR** K20 oil-pump conversion + compatible pan.
- **Factory/converted RX-8 EPS integration** **OR** standalone EPS **OR** NC hydraulic rack/pump architecture.
- **Standalone dash** **OR** a verified S2 CAN-emulator/OEM-cluster solution.
- **Collins stock-RX-8-transmission architecture** **OR** KPower/NC-trans architecture.

## Price discipline

Every price in the BOM has a `price_basis` field:

- `vendor_current` = current public price observed during this research
- `market_snapshot` = a current example, not a universal market price
- `planning_estimate` = budget allowance, not a sourced quote
- `tbd_vendor_quote` = get a quote before committing
