---
layout: page
title: "09 — Electrical, ECU and S2 CAN"
---

# 09 — Electrical, ECU and 2009 S2 CAN strategy

This is the area where an S2 differs most from the older RX-8 swap documentation online.

## 9.1 The key fact

KPower's RX-8 compatibility article says its S2 RX-8 CAN solution is **not sorted** in the same way as its established integrations in other chassis. That means the first-running engine should not depend on the stock S2 cluster, factory EPS or HVAC logic being magically satisfied by a K24 ECU.

## 9.2 Reference electronics architecture

For the lowest-risk reference build:

- K24 runs entirely from a modern standalone ECU
- dedicated K-series engine harness
- DBW throttle
- wideband O2
- oil pressure + oil temperature sensors
- coolant temperature
- standalone dash or ECU-compatible display
- explicit relay/fuse strategy for fuel pump and fans
- factory S2 harness/modules preserved where practical
- OEM CAN integration treated as a second-phase project

KPower currently sells a universal RWD K-swap DBW electronics package based on Haltech hardware, and publishes universal K24 basemaps/harness information.

## 9.3 First-start functions that must not depend on S2 CAN

Before worrying about the OEM cluster, the swap must have independent, verified control of:

- ignition/injectors
- DBW pedal/throttle
- fuel-pump command
- radiator fans
- alternator/charging
- coolant temperature
- oil pressure
- wideband AFR
- starter interlock/start command
- tach/RPM visible to the operator
- vehicle-speed source if the ECU needs it for strategies

## 9.4 ECU safety configuration

At minimum configure and test:

- coolant over-temperature warning/limp
- low oil-pressure warning and, where appropriate, RPM/load protection
- lean AFR protection at meaningful load
- DBW pedal/throttle plausibility
- rev limiter
- fan on/off temperatures
- sensor-failure defaults

Do not enable aggressive launch/flat-shift/traction features during initial commissioning.

## 9.5 S2 OEM-cluster / CAN options

### Option 1 — standalone dash **(reference)**
Most predictable. The factory cluster may remain physically present, but critical engine data is shown on the standalone display.

### Option 2 — commercial RX-8 CAN emulator **(verify 2009 S2 before purchase)**
Collins sells an RX-8 CAN emulator sourced around the All4Swap ecosystem. The public description claims support for functions such as RPM, temperature, speed/trip, ABS/DSC choices, EPS choices, A/C requests and fan control.

However, the product page reviewed here does **not** explicitly state that a 2009 S2 manual has been validated. The underlying All4Swap order form asks for chassis type and model year.

**Action:** obtain written vendor confirmation for a 2009 S2 + aftermarket ECU + manual-transmission configuration before making this the primary instrumentation/safety plan.

### Option 3 — custom CAN engineering
There is public RX-8 CAN reverse-engineering work (including open-source repositories) that can help an advanced builder. Treat it as protocol engineering, not a plug-and-play harness.

## 9.6 Factory EPS

Do not assume factory EPS will continue to assist normally once the Renesis PCM is removed.

Choose deliberately:

- validated CAN/emulator strategy for factory EPS;
- standalone EPS;
- KPower tubular-subframe + NC hydraulic steering conversion.

Verify steering assist behavior before driving.

## 9.7 ABS/DSC

This is safety-critical.

A CAN emulator's ability to clear a warning lamp is **not the same thing** as proving ABS and DSC function.

Validation should include:

- no hydraulic leaks
- correct wheel-speed signals
- diagnostic communication
- controlled low-speed ABS activation test where safe/legal
- DSC testing only after engine torque/CAN signaling is understood

Until proven, document the car as **ABS/DSC status unknown or disabled**, not "working."

## 9.8 A/C on S2

Physical compressor mounting is separable from control integration.

KPower says its NC A/C kit can be used on the RX-8 with an NC compressor and custom lines. On an S2, you still need a control path for:

- cabin A/C request
- compressor enable
- fan request
- idle/torque compensation
- pressure protection

Make A/C a phase-2 task unless the chosen CAN/controller strategy is already verified.

## Electrical Gate G6

The car does not graduate from stationary commissioning until:

- steering assist strategy is known
- driver can see RPM, coolant temp, oil pressure and AFR
- fans are ECU-controlled and tested
- charging voltage is stable
- brake/ABS warning state is understood
- no safety-critical function is being inferred from a dark warning lamp
