---
slug: VL53L5CX-BNO08X-viewer
title: Time-of-Flight 3D Scanner
summary: Turn a £5 VL53L5CX multi-zone ToF sensor and an IMU into a real-time 3D point-cloud viewer and room mapper.
date: 2026-02-03
topics: [hardware, robotics]
stack: [Python, ESP32, viser]
cover: ../../assets/projects/VL53L5CX-BNO08X-viewer.jpg
coverAlt: Laser-like rays fanning out from a small sensor breadboard into a 3D point cloud.
featured: 2
stars: 525
views: 389k
youtube: s32OUzhjf4U
links:
  code: https://github.com/ferrolho/VL53L5CX-BNO08X-viewer
  video: https://youtu.be/s32OUzhjf4U
---

A real-time 3D point-cloud viewer for the **VL53L5CX** multi-zone time-of-flight sensor, with **BNO085** IMU orientation tracking for basic room mapping. The whole setup costs about £24 in parts from AliExpress: an ESP32, the ToF sensor, and the IMU, all sharing one I²C bus.

## Features

- **64-zone 3D visualisation** — the sensor's 8×8 measurement grid drawn as rays in 3D space.
- **Real-time IMU tracking** — the BNO085 orientation rotates the virtual view to match the physical sensor.
- **Temporal filtering** — an exponential moving average smooths noisy measurements.
- **Plane fitting** — least squares and RANSAC for surface detection.
- **Mapping mode** — accumulate points over time to build a 3D map of the room.

## How it works

The ESP32 streams JSON over serial at 115200 baud: 64 perpendicular distances, 64 status flags, and the IMU quaternion. A Python viewer built on [viser](https://github.com/nerfstudio-project/viser) turns that into rays and points in the browser.

The sensor runs at 8×8 resolution and 15 Hz, over a range of 20 mm to 4 m with a 65° diagonal field of view.
