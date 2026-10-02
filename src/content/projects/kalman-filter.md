---
title: Kalman Filter, Visualised
summary: Toggle a robot vacuum's sensors on and off and watch a 7-state EKF's estimate and uncertainty change in real time.
date: 2026-04-28
topics: [education, simulation, robotics]
stack: [TypeScript, Svelte, PixiJS]
cover: ../../assets/projects/kalman-filter.jpg
coverAlt: A robot vacuum's true path and filter estimate diverging inside a room, with an uncertainty ellipse.
preview: /previews/kalman-filter.mp4
draft: true
links: {}
---

An interactive tool for learning how Kalman filters work, using a robot vacuum as an intuitive example. Toggle sensors on and off and watch how the filter's estimate and uncertainty change in real time.

The robot navigates a rectangular room driven by a closed-loop planner that uses the filter's *own* estimate — so a poorly tuned filter visibly degrades navigation, just as it would on real hardware.

## What's modelled

- **Ground truth** — unicycle kinematics for a differential-drive robot.
- **Wheel encoders** — noisy *v* and *ω*, with wheel-diameter mismatch and slip (the prediction input).
- **IMU (MPU-6050)** — raw gyro and accelerometer with drifting biases.
- **LiDAR** — presets for RPLiDAR A1/A2, Hokuyo URG-04LX, and SICK TIM561, with realistic beam counts, range noise, and update rates.
- **7-state EKF** — `[px, py, θ, v, ω, b_a, b_g]` with online bias estimation.

The control loop runs at 200 Hz, decoupled from the ~60 Hz display, and each sensor fires at its own rate. The matrix maths is hand-rolled and kept explicit for educational clarity.
