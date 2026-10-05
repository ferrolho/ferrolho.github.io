---
title: myCobot 280 Lab
summary: Custom firmware and a browser control page for the myCobot 280 arm — a 500 Hz loop on the arm's own controller, measured from the servo bus up.
date: 2026-10-05
years: 2024 – 2026
topics: [robotics, hardware, web]
stack: [C++, ESP32, Julia, Python, TypeScript, Astro, three.js]
cover: ../../assets/projects/mycobot-280-lab.jpg
coverAlt: The myCobot 280 Lab home page, with a 3D model of the arm and its see-through goal pose.
featured: 7
links:
  demo: https://ferrolho.github.io/mycobot-280-lab/
  docs: https://ferrolho.github.io/mycobot-280-lab/start/overview/
  code: https://github.com/ferrolho/mycobot-280-lab
---

Fast, direct control of the Elephant Robotics **myCobot 280 (for Arduino)** — a small six-axis desktop arm — with every result measured and documented.

It started from a known complaint: with the stock firmware, reading the joint angles takes about **20 ms**, so a control loop on the computer cannot run much faster than 50 Hz. The project traced that delay to its causes, went straight to the servo bus, and then replaced the firmware on the arm's ESP32 controller (the M5Stack ATOM) with its own.

## What the custom firmware changes

| | Stock firmware | Custom controller firmware |
| --- | --- | --- |
| Read the joints | `get_angles` over USB: 20 ms | All six servos in 1.26 ms, 500 times a second |
| Move the arm | One goal per command; the servos move by themselves | Smooth trajectories on the ATOM at 500 Hz |
| Connect | USB cable and a Python library | WiFi: a browser, nothing to install |
| Servo gains | The stock gains | Tuned gains: half the error on the test circle |

## Results

- **Latency** — a bus read of all six servos in **1.26 ms** on the ATOM, against 20 ms for the stock `get_angles`.
- **Onboard loop** — a fixed **500 Hz** control loop that plays trajectories next to the servos, so WiFi delays do not change the path.
- **Tracking** — on a 100 mm circle, lag compensation and three runs of iterative learning control reduce the error from **12.5 mm to 0.8–1.0 mm RMS**.
- **Live mode** — the joints follow the browser's faders at up to **90 °/s**, as fast as a planned move, with a 200 ms deadman.

## In the browser

- **Setup** — install the firmware from Chrome or Edge over USB, then set up WiFi with Improv. The public build carries no WiFi credentials.
- **Control** — a WebSocket straight to the arm: a 3D model with the goal pose, vertical faders and typed goals, Live mode, six live plots, and an optional camera. One client has control at a time; others can watch.

## Under the hood

- **Firmware** — C++ on the ESP32: a 500 Hz loop on one core, WiFi, the WebSocket API and over-the-air updates on the other, with host-side property tests for the motion code.
- **Julia package `MyCobot`** — kinematics with RigidBodyDynamics.jl, planners, trajectory players, iterative learning control and the link to the ATOM.
- **Documentation** — an Astro Starlight site covering the hardware, the protocols, the firmware and every measured result, with its method.
