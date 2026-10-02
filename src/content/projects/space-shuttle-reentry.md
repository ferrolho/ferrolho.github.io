---
title: Space Shuttle Reentry
summary: Computing a 33-minute Space Shuttle reentry trajectory in under 7 seconds with direct transcription and JuMP.
date: 2020-05-25
topics: [optimisation, simulation]
stack: [Julia, JuMP, Ipopt]
cover: ../../assets/projects/space-shuttle-reentry.jpg
coverAlt: Title card reading "Space Shuttle Reentry Trajectory" over a plot of the descent.
stars: 28
views: 6.3k
youtube: fBY_yHkyU3A
links:
  code: https://github.com/ferrolho/space-shuttle-reentry-trajectory
  video: https://youtu.be/fBY_yHkyU3A
  post: /blog/space-shuttle-reentry-trajectory/
---

Computes a **33 minutes 28 seconds** reentry trajectory for the Space Shuttle in under ~7 seconds, formulated as an optimal control problem and solved with JuMP and Ipopt.

For each second of the trajectory, the result gives the full state of the vehicle and the controls to be commanded to the shuttle. The Jupyter notebooks in the repository walk through the formulation, and include a short JuMP tutorial.

The [blog post](/blog/space-shuttle-reentry-trajectory/) has interactive plots of the results, and the video above explains the whole approach.
