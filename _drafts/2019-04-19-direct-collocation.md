---
layout: post
title: "[WIP] Direct Collocation"
date: 2019-04-19 12:20:00 +0100
categories: julia linux ubuntu 16.04 18.04
---

> # This is a "Work in Progress."

# KUKA LWR 4 - Direct Collocation with KNITRO

<figure>
    <div id="direct-collocation/plot_1" align="center"></div>
    <figcaption><strong>Figure 1.</strong> End-effector desired trajectory. Position only. Obtained by interpolating from the initial position to the final position with a 5th-order polynomial.</figcaption>
</figure>


<figure>
    <div id="direct-collocation/plot_2" align="center"></div>
    <figcaption><strong>Figure 2.</strong> Joint-space positions obtained by running Inverse Kinematics (IK) for the desired end-effector trajectory (previous picture). Will be used for seeding the optimisation problem.</figcaption>
</figure>

<figure>
    <div id="direct-collocation/plot_3" align="center"></div>
    <figcaption><strong>Figure 3.</strong> Joint-space velocities obtained by subtracting each timestep of the seed joint positions with the previous one. Will also be used for seeding purposes.</figcaption>
</figure>

*Optimisation runs*

```
=======================================
           Academic License
       (NOT FOR COMMERCIAL USE)
         Artelys Knitro 11.1.2
=======================================

Knitro presolve eliminated 14 variables and 0 constraints.

algorithm:               1
Knitro changing bar_initpt from AUTO to 3.
Knitro changing bar_murule from AUTO to 4.
Knitro changing bar_penaltycons from AUTO to 0.
Knitro changing bar_penaltyrule from AUTO to 2.
Knitro changing bar_switchrule from AUTO to 2.
Knitro changing linesearch from AUTO to 1.
Knitro changing linsolver from AUTO to 2.
Knitro shifted start point to satisfy presolved bounds (7 variables).
Knitro fixing 14 variables eliminated from the presolve.

Problem Characteristics                                 (   Presolved)
-----------------------
Objective goal:  Minimize
Objective type:  constant
Number of variables:                               2114 (        2100)
    bounded below only:                               0 (           0)
    bounded above only:                               0 (           0)
    bounded below and above:                       2100 (        2100)
    fixed:                                           14 (           0)
    free:                                             0 (           0)
Number of constraints:                             1703 (        2006)
    linear equalities:                                0 (           0)
    quadratic equalities:                             0 (           0)
    gen. nonlinear equalities:                     1400 (        1400)
    linear one-sided inequalities:                    0 (           0)
    quadratic one-sided inequalities:                 0 (           0)
    gen. nonlinear one-sided inequalities:            0 (         606)
    linear two-sided inequalities:                    0 (           0)
    quadratic two-sided inequalities:                 0 (           0)
    gen. nonlinear two-sided inequalities:          303 (           0)
Number of nonzeros in Jacobian:                   19621 (       21679)
Number of nonzeros in Hessian:                        0 (           0)

  Iter      Objective      FeasError   OptError    ||Step||    CGits 
--------  --------------  ----------  ----------  ----------  -------
       0    0.000000e+00   3.195e-01
      10    0.000000e+00   5.929e-03   0.000e+00   3.865e+00        0
      14    0.000000e+00   3.528e-12   0.000e+00   1.864e-04        0

EXIT: Locally optimal solution found.

Final Statistics
----------------
Final objective value               =   0.00000000000000e+00
Final feasibility error (abs / rel) =   3.53e-12 / 3.53e-12
Final optimality error  (abs / rel) =   0.00e+00 / 0.00e+00
# of iterations                     =         14 
# of CG iterations                  =          0 
# of function evaluations           =         18
# of gradient evaluations           =         15
Total program time (secs)           =       0.66333 (     0.663 CPU time)
Time spent in evaluations (secs)    =       0.37870

===============================================================================
```

*Optimisation finishes*

<figure>
  <div id="direct-collocation/plot_4" align="center"></div>
  <figcaption><strong>Figure 4.</strong> Resultant joint positions.</figcaption>
</figure>

<figure>
  <div id="direct-collocation/plot_5" align="center"></div>
  <figcaption><strong>Figure 5.</strong> Resultant joint velocities.</figcaption>
</figure>

<figure>
  <div id="direct-collocation/plot_6" align="center"></div>
  <figcaption><strong>Figure 6.</strong> Resultant control history.</figcaption>
</figure>

<figure>
  <div id="direct-collocation/plot_7" align="center"></div>
  <figcaption><strong>Figure 7.</strong> Resultant end-effector trajectory.</figcaption>
</figure>

<figure>
  <div id="direct-collocation/plot_8" align="center"></div>
  <figcaption><strong>Figure 8.</strong> Resultant end-effector error (compared to the initial desired trajectory).</figcaption>
</figure>

## Problem Sparsity

<figure>
  <img src="{{ "/images/direct-collocation/sparsity_5hz.svg" | absolute_url }}" alt="To do">
  <figcaption><strong>Figure 9.</strong> Sparsity structure of the problem's Jacobian for a 1 second trajectory at 5 Hz.</figcaption>
</figure>

<figure>
  <img src="{{ "/images/direct-collocation/sparsity_20hz.svg" | absolute_url }}" alt="To do">
  <figcaption><strong>Figure 10.</strong> Sparsity structure of the problem's Jacobian for a 1 second trajectory at 20 Hz.</figcaption>
</figure>

<figure>
  <img src="{{ "/images/direct-collocation/sparsity_100hz.png" | absolute_url }}" alt="To do">
  <figcaption><strong>Figure 11.</strong> Sparsity structure of the problem's Jacobian for a 1 second trajectory at 100 Hz.</figcaption>
</figure>

## Seeds vs. Outputs

<div><h4 style="width: 50%; display: inline-block; text-align: center;">Kinematic motion</h4><h4 style="width: 50%; display: inline-block; text-align: center;">Dynamic motion</h4></div>

<div class="clearfix" style="margin-bottom: 20px;">
  <video width="50%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/tasks/task_1_kin.av1.mp4"  | absolute_url }}" type="video/mp4; codecs=av01.0.05M.08,opus">
    <source src="{{ "/videos/tasks/task_1_kin.vp9.webm" | absolute_url }}" type="video/webm; codecs=vp9">
    <source src="{{ "/videos/tasks/task_1_kin.x264.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
  <video width="50%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/tasks/task_1_dyn.av1.mp4"  | absolute_url }}" type="video/mp4; codecs=av01.0.05M.08,opus">
    <source src="{{ "/videos/tasks/task_1_dyn.vp9.webm" | absolute_url }}" type="video/webm; codecs=vp9">
    <source src="{{ "/videos/tasks/task_1_dyn.x264.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
</div>

<div class="clearfix" style="margin-bottom: 20px;">
  <video width="50%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/tasks/task_2_kin.av1.mp4"  | absolute_url }}" type="video/mp4; codecs=av01.0.05M.08,opus">
    <source src="{{ "/videos/tasks/task_2_kin.vp9.webm" | absolute_url }}" type="video/webm; codecs=vp9">
    <source src="{{ "/videos/tasks/task_2_kin.x264.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
  <video width="50%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/tasks/task_2_dyn.av1.mp4"  | absolute_url }}" type="video/mp4; codecs=av01.0.05M.08,opus">
    <source src="{{ "/videos/tasks/task_2_dyn.vp9.webm" | absolute_url }}" type="video/webm; codecs=vp9">
    <source src="{{ "/videos/tasks/task_2_dyn.x264.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
</div>

<div class="clearfix" style="margin-bottom: 20px;">
  <video width="50%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/tasks/task_3_kin.av1.mp4"  | absolute_url }}" type="video/mp4; codecs=av01.0.05M.08,opus">
    <source src="{{ "/videos/tasks/task_3_kin.vp9.webm" | absolute_url }}" type="video/webm; codecs=vp9">
    <source src="{{ "/videos/tasks/task_3_kin.x264.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
  <video width="50%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/tasks/task_3_dyn.av1.mp4"  | absolute_url }}" type="video/mp4; codecs=av01.0.05M.08,opus">
    <source src="{{ "/videos/tasks/task_3_dyn.vp9.webm" | absolute_url }}" type="video/webm; codecs=vp9">
    <source src="{{ "/videos/tasks/task_3_dyn.x264.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
</div>

<div class="clearfix" style="margin-bottom: 20px;">
  <video width="100%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/22-05-2019-final-1.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
</div>

<div class="clearfix" style="margin-bottom: 20px;">
  <video width="100%" style="float: left" autoplay loop muted playsinline>
    <source src="{{ "/videos/22-05-2019-final-2.mp4" | absolute_url }}" type="video/mp4; codecs=avc1.4D401E,mp4a.40.2">
  </video>
</div>

<!-- Latest compiled and minified plotly.js JavaScript -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<script src="{{ "/assets/js/direct-collocation/plot_1.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_2.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_3.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_4.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_5.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_6.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_7.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/direct-collocation/plot_8.js" | absolute_url }}"></script>
