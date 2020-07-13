---
date: 2019-08-15
paper_id: 'ferrolho2020residual'
paper_link: 'https://arxiv.org/abs/1908.05380'
title: "Residual Force Polytope: Admissible Task-Space Forces of Dynamic Trajectories"
venue: "arXiv e-prints"
citation: >
  H. Ferrolho, W. Merkt, C. Tiseo and S. Vijayakumar, "Residual Force Polytope: Admissible Task-Space Forces of Dynamic Trajectories", in <em>arXiv e-prints</em>, p. arXiv:1908.05380, Jul. 2020.
doi: arXiv:1908.05380
collection: publications
---

<link rel="stylesheet" href="{{ "/assets/css/custom/ferrolho2019comparing.css" | absolute_url }}">

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
    <img src="{{ "/images/ferrolho2019comparing/1.png" | absolute_url }}" class="ghost" />
    <img src="{{ "/images/ferrolho2019comparing/1.png" | absolute_url }}" id="layer1" />
    <img src="{{ "/images/ferrolho2019comparing/4.png" | absolute_url }}" id="layer2" />
    <img src="{{ "/images/ferrolho2019comparing/3.png" | absolute_url }}" id="layer3" />
    <img src="{{ "/images/ferrolho2019comparing/2.png" | absolute_url }}" id="layer4" />
  </div>
  Layer selector
  <div class="container">
    <div class="left"  style="width: 40%;"><input type="range" min="1" max="4" value="4" class="slider" id="myRange4"></div>
    <div class="right" style="width: 60%;"><span id="demo4">Force Polytope, $P_k$</span></div>
    <div style="clear: both"></div>
  </div>
</div>

### Turntable View of a Force Polytope

<div style="text-align: center;">
  <video width="100%" autoplay loop muted>
    <source src="{{ "/videos/ferrolho2019comparing/force_polytope.mp4" | absolute_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<script src="{{ "/assets/js/custom/ferrolho2020residual.js" | absolute_url }}"></script>
