---
title: Interactive PID Control
summary: Learn what P, I, and D actually do by tuning a controller on a simulated cart, with live plots and performance metrics.
date: 2026-03-07
topics: [education, simulation]
stack: [JavaScript, Canvas]
cover: ../../assets/projects/pid-control-demo.jpg
coverAlt: The PID demo with a cart on a rail, gain sliders, and an explanatory side panel.
featured: 6
links:
  demo: https://ferrolho.github.io/pid-control-demo/
  code: https://github.com/ferrolho/pid-control-demo
---

An educational web app for building intuition about PID control through interactive visualisation, rather than through equations alone.

## The system

A 1D cart slides along a bounded rail. The controller applies a single scalar force — the only control input — and the cart obeys Newton's second law with viscous friction and optional gravity (a tilted rail). The goal is to drive the cart to a target position.

## What you can do

- **Tune the gains** — adjust *K*<sub>p</sub>, *K*<sub>i</sub>, and *K*<sub>d</sub> and watch position, error, and each term's contribution update live.
- **Try preset scenarios** — well-tuned, too much P, no damping, P-only on a tilted rail (steady-state error), and aggressive D.
- **Poke it** — add disturbances, click the canvas to move the target, or let auto-step alternate setpoints.
- **Read the metrics** — rise time, settling time, overshoot, and steady-state error in real time.
- **Learn the concepts** — clickable equation terms and a side panel covering integral windup, derivative kick, and tuning methods.
