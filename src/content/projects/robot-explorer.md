---
title: Robot Explorer
summary: Browse 81+ robots from 35+ brands in the browser, with real-time inverse kinematics, manipulability ellipsoids, and force polytopes.
date: 2026-06-07
years: 2017 – 2026
topics: [robotics, web, education]
stack: [TypeScript, Three.js, Vite]
cover: ../../assets/projects/robot-explorer.jpg
coverAlt: The NASA Valkyrie humanoid posed with multi-limb IK gizmos in Robot Explorer's dark theme.
featured: 3
stars: 21
links:
  demo: https://ferrolho.github.io/robot-explorer/
  code: https://github.com/ferrolho/robot-explorer
---

An interactive 3D web app for visualising and manipulating robot models with real-time forward and inverse kinematics. Robots are loaded as URDF models from a [dedicated model repository](https://github.com/ferrolho/robot-explorer-models).

## Features

- **Robot catalogue** — 81+ URDF models from 35+ brands, in a two-level brand gallery with search and category filters.
- **Forward and inverse kinematics** — drag IK gizmos to pose end-effectors; revolute and prismatic joints, multi-tip whole-body IK, null-space limit avoidance, and joint-limit locking.
- **Manipulability ellipsoids** — velocity, acceleration, and force ellipsoids computed from the Jacobian and the joint-space inertia matrix.
- **Force polytopes** — the achievable end-effector force set from the URDF effort limits.
- **Reachability clouds** — sample random configurations to visualise the workspace.
- **Motion keypoints** — record, play back, and export convex hulls as STL.
- **Educational panels** — the maths behind IK and the capability visualisations, rendered with KaTeX.
- **Three languages** — English, Japanese, and Simplified Chinese; dark and light themes.

The project started in 2017 as a Three.js experiment and was rebuilt in TypeScript in 2026.
