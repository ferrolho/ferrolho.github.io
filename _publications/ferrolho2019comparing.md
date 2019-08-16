---
date: 2019-08-15
paper_id: 'ferrolho2019comparing'
paper_link: 'https://arxiv.org/abs/1908.05380'
paper_github: 'https://github.com/ferrolho/uoe-ferrolho2019comparing'
title: "Comparing Metrics for Robustness Against External Perturbations in Dynamic Trajectory Optimization"
venue: "arXiv e-prints"
citation: >
  H. Ferrolho, W. Merkt, C. Tiseo and S. Vijayakumar, "Comparing Metrics for Robustness Against External Perturbations in Dynamic Trajectory Optimization", in <em>arXiv e-prints</em>, p. arXiv:1908.05380, Aug. 2019.
doi: arXiv:1908.05380
collection: publications
---

<link rel="stylesheet" href="{{ "/assets/css/custom/ferrolho2019comparing.css" | absolute_url }}">

> We are still updating this page to include more interactive content.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Results](#results)
  - [Simulation results showing the normalized peak torques](#simulation-results-showing-the-normalized-peak-torques)

## Abstract

Dynamic trajectory optimization is a popular approach for generating optimal and dynamically consistent trajectories. In order to deal with model errors and perturbations, the trajectories are usually tracked with feedback controllers. Their robustness thus largely depends on the margins of stability and control authority the system retains. Manipulability ellipsoids and force polytopes are well-known tools for evaluating force and motion capabilities of robot manipulators. Increased control authority can be achieved by incorporating task constraints within those tools. However, they come with an increased computational cost. Additionally, their impact on resulting trajectory quality and control authority has not yet been benchmarked and compared. In this letter, we introduce a novel robustness metric, the residual force polytope, which takes the nominal torque required to maintain a posture into account. We further detail a benchmarking protocol including evaluation criteria and visualization tools to compare robustness metrics in dynamic trajectory optimization. To foster benchmarking and allow for reproducibility, we open source a flexible framework for dynamic trajectory optimization via direct transcription along with our benchmark protocols as supplementary materials. Finally, we include - to the best of our knowledge - the first holistic comparison between traditional energy minimization metrics, kinematic manipulability maximization, and force polytope methods.

## Results

### Simulation results showing the normalized peak torques

<div class="pngcontainer1">
  <img src="{{ "/images/ferrolho2019comparing/peak-torque-s1/frame_0.svg" | absolute_url }}" />
  <img src="{{ "/images/ferrolho2019comparing/peak-torque-s1/frame_1.svg" | absolute_url }}" id="test_img1" />
</div>
<div class="slidecontainer">
  <input type="range" min="1" max="26" value="3" class="slider" id="myRange1">
</div>

<div class="pngcontainer1">
  <img src="{{ "/images/ferrolho2019comparing/peak-torque-s2/frame_0.svg" | absolute_url }}" />
  <img src="{{ "/images/ferrolho2019comparing/peak-torque-s2/frame_1.svg" | absolute_url }}" id="test_img2" />
</div>
<div class="slidecontainer">
  <input type="range" min="1" max="26" value="3" class="slider" id="myRange2">
</div>

<div class="pngcontainer1">
  <img src="{{ "/images/ferrolho2019comparing/peak-torque-s3/frame_0.svg" | absolute_url }}" />
  <img src="{{ "/images/ferrolho2019comparing/peak-torque-s3/frame_1.svg" | absolute_url }}" id="test_img3" />
</div>
<div class="slidecontainer">
  <input type="range" min="1" max="26" value="3" class="slider" id="myRange3">
</div>

<p id="demo"></p>

<script src="{{ "/assets/js/custom/ferrolho2019comparing.js" | absolute_url }}"></script>
