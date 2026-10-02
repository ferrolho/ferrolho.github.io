---
title: TORA.jl
summary: Trajectory Optimisation for Robot Arms — describe a task at a high level and get a full, dynamically consistent trajectory back.
date: 2020-10-31
years: 2020 – 2023
topics: [robotics, optimisation]
stack: [Julia, Ipopt, Knitro, MeshCat]
cover: ../../assets/projects/tora-jl.jpg
coverAlt: A Kinova Gen3 Lite arm tracing a circle in the MeshCat visualiser.
preview: /previews/tora-jl.mp4
featured: 5
stars: 56
youtube: 5uF3VqgjiVE
links:
  docs: https://juliarobotics.org/TORA.jl/stable/
  code: https://github.com/JuliaRobotics/TORA.jl
  video: https://youtu.be/5uF3VqgjiVE
---

**TORA** stands for **T**rajectory **O**ptimization for **R**obot **A**rms. You define tasks for robot manipulators with simple high-level descriptions, and TORA.jl does the heavy lifting: it converts them into numerical optimisation problems and hands those to state-of-the-art solvers.

The result is a full trajectory — joint positions, velocities, and torques — that accounts for the whole-body dynamics of the robot, ready to be commanded in simulation or on real hardware.

## Highlights

- A simple interface for constrained motion-planning problems.
- The optimal control problem formulated with **direct transcription**.
- NLPs solved with **Ipopt** and **Knitro**.
- Full system dynamics enforced with either forward or inverse dynamics (RigidBodyDynamics.jl).
- Automatic differentiation of sparse Jacobians, with automatic sparsity detection.

The package lives in the JuliaRobotics organisation. The video above is my JuliaCon 2023 talk at MIT, *Using Julia to Optimise Trajectories for Robots with Legs*, which is linked from the TORA.jl README.
