---
slug: ModernRoboticsBook.jl
title: ModernRoboticsBook.jl
summary: A Julia port of the Modern Robotics textbook library — rigid-body motions, kinematics, dynamics, trajectory generation, and control.
date: 2026-07-01
years: 2019 – 2026
topics: [robotics, education]
stack: [Julia]
cover: ../../assets/projects/ModernRoboticsBook.jl.jpg
coverAlt: The ModernRoboticsBook.jl documentation site.
stars: 59
links:
  docs: https://ferrolho.github.io/ModernRoboticsBook.jl/stable/
  code: https://github.com/ferrolho/ModernRoboticsBook.jl
---

A Julia port of the [official Modern Robotics library](https://github.com/NxRLab/ModernRobotics), which provides Python, MATLAB, and Mathematica implementations of the algorithms from *Modern Robotics: Mechanics, Planning, and Control* by Kevin Lynch and Frank Park.

The package provides functions for rigid-body motions, forward and inverse kinematics, velocity kinematics, dynamics, trajectory generation, and robot control. It is registered in the Julia General registry:

```julia
julia> import Pkg; Pkg.add("ModernRoboticsBook")
```

## Quick start

```julia
using ModernRoboticsBook

home_ee_pose = [-1  0  0  0
                 0  1  0  6
                 0  0 -1  2
                 0  0  0  1.0]
body_screw_axes = [0 0 -1 2 0   0
                   0 0  0 0 1   0
                   0 0  1 0 0 0.1]'
joint_positions = [π/2, 3, π]

T = forward_kinematics_body(home_ee_pose, body_screw_axes, joint_positions)
```
