---
title: "Residual Force Polytope: Admissible Task-Space Forces of Dynamic Trajectories"
authors: ["H. Ferrolho", "W. Merkt", "C. Tiseo", "S. Vijayakumar"]
venue: "Robotics and Autonomous Systems (RAS)"
venueShort: "RAS 2021"
kind: journal
date: 2021-05-24
doi: "10.1016/j.robot.2021.103814"
url: "https://doi.org/10.1016/j.robot.2021.103814"
pdf: "/files/ferrolho2021residual.pdf"
thumb: ../../assets/publications/ferrolho2021residual.jpg
---

<link rel="stylesheet" href="/assets/css/custom/ferrolho2021residual.css">
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

## Abstract

We propose a representation for the set of forces a robot can counteract using full system dynamics: the <em>residual force polytope</em>.
Given the nominal torques required by a dynamic motion, this representation models the forces which can be sustained without interfering with that motion.
The residual force polytope can be used to analyze and compare the set of admissible forces of different trajectories, but it can also be used to define metrics for solving optimization problems, such as in trajectory optimization or system design.
We demonstrate how such a metric can be applied to trajectory optimization and compare it against other objective functions typically used.
Our results show that the trajectories computed by optimizing objectives defined as functions of the residual force polytope are more robust to unknown external disturbances.
The computational cost of these metrics is relatively high and not compatible with the short planning times required by online methods, but they are acceptable for planning motions offline.

## Results

### Force Polytopes and Force Cone Visualization

<div style="margin-bottom: 1.3em">
  <div class="imageContainer">
    <img src="/images/ferrolho2021residual/1.png" class="ghost" />
    <img src="/images/ferrolho2021residual/1.png" id="layer1" />
    <img src="/images/ferrolho2021residual/4.png" id="layer2" />
    <img src="/images/ferrolho2021residual/3.png" id="layer3" />
    <img src="/images/ferrolho2021residual/2.png" id="layer4" />
  </div>
  Layer selector
  <div class="container">
    <div class="left"  style="width: 40%;"><input type="range" min="1" max="4" value="4" class="slider" id="myRange4"></div>
    <div class="right" style="width: 60%;"><span id="demo4">Force Polytope, \(P_k\)</span></div>
    <div style="clear: both"></div>
  </div>
</div>

### Turntable View of a Force Polytope

<div style="text-align: center;">
  <video width="100%" autoplay loop muted>
    <source src="/videos/ferrolho2021residual/force_polytope.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<script src="/assets/js/custom/ferrolho2021residual.js"></script>
