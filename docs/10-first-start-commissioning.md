---
layout: page
title: "10 — First start and commissioning"
---

# 10 — First start and commissioning

Do not make first start the first time you discover whether fuel, oil, fans and DBW work.

## 10.1 Pre-power inspection

With battery disconnected:

- verify engine and chassis grounds with low-resistance paths
- verify alternator cable routing/fusing
- verify fuel-line mechanical retention
- verify coolant hoses/clamps
- verify crank pulley and accessory belt alignment
- verify engine/trans/subframe/mount fasteners marked/torqued
- verify tools/rags removed from engine bay
- verify exhaust cannot touch fuel/brake/steering lines
- verify clutch and brake fluid level

## 10.2 Key-on, engine-off tests

Power the ECU without starting.

Confirm:

- ECU connects to laptop
- correct K24 trigger configuration
- TPS/DBW pedal values plausible
- throttle performs only expected calibration movements
- coolant and air-temperature sensors read ambient plausibly
- oil-pressure sensor reads approximately zero
- MAP reads plausible barometric pressure
- wideband initializes
- fuel pump command works
- radiator fans can be commanded
- starter command does not occur unexpectedly

## 10.3 Fuel pressure and leak test

Run pump with engine off.

- set/verify base pressure for the actual injector calibration
- inspect every joint with light and dry tissue/card
- stop immediately for any seepage
- verify pressure behavior/hold appropriate to the system design

Do not use the original RX-8 54–65 psi factory specification as a K24 calibration target unless your chosen injector/fuel strategy explicitly calls for it.

## 10.4 Establish oil pressure before firing

Disable fuel and ignition.

Crank in short intervals while observing oil pressure.

If pressure does not establish:

- stop;
- verify sensor/calibration;
- verify oil level;
- verify pump/pickup installation;
- investigate mechanically.

Do not keep cranking until the starter overheats.

## 10.5 First fire

For the first start:

- fire extinguisher appropriate for automotive fuel/electrical fires immediately accessible
- helper watching engine bay
- laptop logging
- no loose clothing near belts/fans

On start, immediately observe:

- oil pressure
- AFR
- coolant temp
- fuel pressure if instrumented
- charging voltage
- mechanical noise
- fuel/coolant/oil leakage

Shut down for any abnormal oil pressure, severe lean condition, uncontrolled throttle or fluid leak.

## 10.6 First heat cycle

Do not free-rev a cold unknown engine.

Let temperature rise under controlled idle/light rpm while:

- bleeding cooling system
- confirming fan activation
- checking heater circuit
- checking alternator voltage
- watching for hose collapse/leak
- watching oil pressure as oil warms

Shut down, cool fully, then re-inspect every fluid connection and accessible fabrication area.

## 10.7 Static clutch/driveline test

With wheels safely off ground if appropriate:

- select gears
- verify clutch disengagement
- verify no abnormal driveshaft/exhaust contact
- verify reverse lights if wired
- verify vehicle speed strategy if sensor source is available

## First-start Gate G5

Pass only with repeatable:

- hot idle
- hot oil pressure
- fan control
- no fluid leaks
- stable charging
- predictable DBW
- usable instrumentation
