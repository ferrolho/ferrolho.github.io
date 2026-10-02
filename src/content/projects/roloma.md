---
title: RoLoMa
summary: Robust loco-manipulation for quadrupeds with arms — trajectories that resist stronger disturbances, from any direction, while pulling levers and turning wheels.
date: 2023-09-30
topics: [robotics, optimisation]
stack: [Julia, Trajectory optimisation, ANYmal]
cover: ../../assets/projects/roloma.jpg
coverAlt: An ANYmal quadruped with a robot arm turning an industrial hand wheel.
youtube: 3qXNHVCagL8
links:
  paper: /publications/ferrolho2023roloma/
  video: https://youtu.be/3qXNHVCagL8
---

Real-world deployment demands robustness to model mismatch, sensor noise, and communication delays. Controllers can react to those at run time — but online execution can only ever be as robust as the motion plan allows. **RoLoMa** makes robustness a first-class objective at the *planning* stage.

We derive a metric from first principles that represents robustness against external disturbances — the **smallest unrejectable force** — and use it inside our trajectory optimisation framework to solve complex loco-manipulation tasks on an ANYmal quadruped with a robotic arm.

## Results

Trajectories generated with this approach resist a greater range of forces, originating from any direction. They solve the tasks as effectively as before, with the added benefit of counteracting stronger disturbances in worst-case scenarios — demonstrated on hardware turning a hand wheel, pulling a lever, and lifting increasingly heavy loads.

Published in *Autonomous Robots* (2023). The [paper page](/publications/ferrolho2023roloma/) has the full abstract and all the supplementary videos.
