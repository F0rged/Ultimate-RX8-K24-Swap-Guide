---
layout: page
title: "03 - K-series engine preparation"
---

# 03 - K-series engine preparation

> Considering a different K-series engine, a K20 head, or a K20/K24 hybrid? Read the [K-series engine and head/block selection reference](../reference/k-series-engine-head-combinations/) before buying parts. Block deck height, head coolant architecture and mount-path support change RX-8 fitment.

## 3.1 Identify the engine before buying parts

Do not buy by the block stamp alone. Identify the exact block, head/casting family, trigger/sensor package, throttle strategy, accessory drive and oil pump/pan plan.

For the most documented K24A/RBB variant, Japanese-market engines are often sold simply as **K24A**. The desirable high-output **RBB-head** family is the one KPower treats as essentially equivalent to the 2004-2008 TSX K24A2 family for its swap hardware.

Before purchase, ask for:

1. clear photo of the cylinder-head casting;
2. photo under the valve cover showing the expected valvetrain / cam arrangement;
3. photos of the actual engine, not a catalog image;
4. compression and preferably leak-down results;
5. oil-cap / valvetrain photos showing sludge condition;
6. warranty/start-up terms;
7. inventory label and any donor information the importer can provide.

A current Canadian importer listing, for example, explicitly markets a JDM K24A/RBB three-lobe engine for the 2004-2008 TSX application. A current US importer lists compression/leak-down testing and actual-unit photos. Use those practices as the buying standard, regardless of seller.

<div class="variant-note"
     data-when="engine.block=k20z3|k20z4;engine.head=rbc"
     data-variant-label="K20Z / RBC engine"
     markdown="1">

> **K-series variant - K20Z/RBC:** KPower lists K20Z3/Z4 in its standard mount family and notes the K20Z3 deck is lower than K24 engines. Do not reuse K24/RBB firewall or exhaust-height assumptions.

</div>

<div class="variant-note"
     data-when="engine.block=k20a2|k20z1;engine.head=prb"
     data-variant-label="K20A2/K20Z1 PRB engine"
     markdown="1">

> **K-series variant - K20A2/PRB:** KPower's current mount family does not bolt to K20A2/K20Z1 blocks, while Collins advertises a K20A2 RX-8 adapter. PRB coolant and intake parts differ from RBB/RBC.

</div>

<div class="variant-note"
     data-when="engine.block=k24z3;engine.head=r40"
     data-variant-label="K24Z / R40 engine"
     markdown="1">

> **K-series variant - K24Z/R40:** Treat as a separate engineering branch. K24Z/R40 exhaust, trigger/wiring and manifold choices do not inherit K24A/RBB assumptions.

</div>

## 3.2 Accessory differences that matter

Accessory-drive parts can differ by engine family and market. For the JDM K24A/RBB variant, KPower specifically warns that JDM RBB engines differ from US-market K24A2s in the accessory drive. The JDM:

- water pump;
- water-pump housing;
- alternator;

can differ.

KPower's recommended K24A/RBB conversion is:

- USDM K24A water-pump housing;
- USDM TSX-style alternator;
- compatible USDM water pump;
- EP3-style idler solution.

For a North-American build, doing this on the stand is a high-value reliability choice because replacement parts are easier to source later. For non-K24A/RBB engines, freeze the accessory plan against the selected mount path before buying belts, brackets or an alternator.

## 3.3 Bench inspection before any swap fabrication

With the engine on a stand:

- remove valve cover;
- inspect lobes/rockers and sludge condition;
- inspect timing-chain guides;
- check timing-chain tensioner condition;
- inspect crank pulley/harmonic damper;
- inspect oil pan for impact damage;
- inspect rear main area;
- inspect all coolant outlets and corrosion;
- inspect crank/cam/knock sensor connectors;
- inspect injector connector type if using a pre-made harness;
- compression/leak-down test if the seller did not supply trustworthy results.

If history is unknown, replace cheap access-sensitive seals now rather than after the firewall is built tightly around the engine.

## 3.4 Recommended service baseline

At minimum, strongly consider:

- spark plugs;
- valve-cover gasket set;
- front crank seal if any evidence of seepage;
- rear main seal if evidence/history warrants it;
- water pump;
- thermostat;
- accessory belt after final pulley layout is known;
- fresh OEM-quality timing-chain tensioner if condition is suspect;
- oil/filter;
- coolant seals/O-rings disturbed during conversion.

Do **not** rebuild a healthy engine merely because it is on the stand. Spend the budget on verifying its condition.

## 3.5 Coolant outlet - critical RX-8 packaging item

In transverse orientation, the upper coolant outlet is often at the end of the cylinder head that becomes the **rear** in a longitudinal/RWD install. The exact problem depends on head family.

For the K24A/RBB and K20Z/RBC family, the later RBB/RBC-style four-bolt upper-water-neck layout points at the RX-8 firewall/transmission tunnel area unless a RWD intake-side or low-profile solution is used. A PRB head changes the coolant architecture but still needs RWD-specific coolant-neck planning.

Use the final coolant neck early in mock-up. Do not finalize firewall shape using a stock transverse outlet if you do not intend to run it.

## 3.6 Oil pump decision

For the KPower tubular-subframe architecture, KPower recognizes a Unit2 baffled steel pan made for the **K24 RBB balance-shaft oil pump**, so a K20 pump conversion is not automatically required on that K24A/RBB path.

For the Collins/modified-stock-crossmember architecture, oil-pan and pump selection is primarily a **clearance + oil-control** decision. Older documented builds converted to a K20 pump both for packaging and higher-rpm use.

A K20/PRB-style pump conversion can be appropriate for a sustained-high-rpm build, but it adds cost and changes the required pickup/pan/baffle combination. Do not buy the oil pan before the pump decision is frozen.

## 3.7 VTC, throttle and trigger strategy

KPower's general K24A guidance notes that a stock K24A2 with supporting swap parts and a 50-degree VTC gear commonly produces low-220s wheel horsepower. Treat a 50-degree gear as a **tuned performance option**, not a prerequisite for the swap.

For any engine:

- confirm piston-to-valve and cam/tune constraints;
- set ECU VTC limits;
- match crank/cam sensors to the ECU and harness;
- match cable throttle or DBW hardware to the chosen ECU package;
- do not assume a generic basemap's limits are safe for an unknown engine.

## Engine Gate G1

Pass only when:

- exact block and head identity are credible;
- compression/leak-down are acceptable;
- no severe sludge or mechanical damage is present;
- accessory-drive plan is frozen;
- coolant-neck choice is installed for mock-up;
- oil-pump/pan choice is at least defined;
- trigger/sensor package and throttle strategy match the ECU/harness plan;
- required sensors match the intended harness or adapters are planned.

## Sources

| Claim | Source |
| --- | --- |
| KPower's engine guidance and FAQ distinguish K24A2/JDM K24A, K20Z3, K24Z3 and K20A2/K20Z1 block support. | [KPower Industries](https://kpower.industries/blogs/news/engine-guidance-for-a-successful-project) and [KPower FAQ](https://kpower.industries/pages/faqs) |
| JDM K24A/RBB importer listings are used as examples of three-lobe/RBB identity and seller-verification practices. | [Japan Motor Import](https://japanmotorimport.ca/products/jdm-hondaacura-tsx-k24a-k24a2-rbb-3-lobe-engine) |
| A current US JDM K24A/RBB listing is used as an engine-market and actual-unit verification snapshot. | [JDM Alliance](https://www.jdm-online.com/products/jdm-04-08-honda-k24a-2-4l-dohc-i-vtec-rbb-200hp-engine-k24a2-acura-tsx-33) |
| KPower documents JDM K24A/RBB accessory-drive differences and recommends a USDM-style water-pump housing conversion. | [KPower Industries](https://kpower.industries/products/usdm-k24a-water-pump-housing) |
| KPower's RBB/K20Z intake-side coolant neck is used as the RX-8-relevant low-profile coolant-outlet reference for RBB/RBC heads. | [KPower Industries](https://kpower.industries/products/k24a2-upper-coolant-neck-for-nc-mx5) |
| KPower/TracTuff documents PRB/K20A2-style RWD coolant-neck planning. | [KPower Industries](https://kpower.industries/products/k20a2-style-upper-coolant-neck) |
| KPower documents RBB, PRB and R40 intake-manifold variants. | [KPower Industries](https://kpower.industries/collections/12-21-86-frs-brz/products/kmiata-rwd-intake-manifold) |
| KPower's RX-8 guidance recognizes JDM K24A/RBB support, Unit2 pan options and general K24A swap hardware compatibility. | [KPower Industries](https://kpower.industries/blogs/news/rx8-compatible-k-swap-components-now-available-from-kpower-industries) |
| Completed K24RX8 build notes document coolant-outlet and oil-pump choices in a custom architecture. | [K24RX8](https://k24rx8.com/2019/04/08/some-assembly-required/) |
