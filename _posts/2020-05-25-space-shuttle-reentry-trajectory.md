---
title: "Space Shuttle Reentry Trajectory"
date: 2020-05-25 22:00:00 +0100
categories:
  - optimal control
  - trajectory optimization
---

This blog post contains an interactive version of the plots shown in my video *"Calculating the Space Shuttle Reentry Trajectory."*
The video is embedded below:

{% include youtube.html id="fBY_yHkyU3A" %}

I used a [Jupyter](https://jupyter.org/) notebook to solve the reentry optimization problem with [Julia](https://julialang.org/) and [Knitro](https://www.artelys.com/solvers/knitro/).
If you are interested in trying to run this on your own machine, you can find the notebook in this [GitHub repository](https://github.com/ferrolho/space-shuttle-reentry-trajectory).

The plots included below show information about the space shuttle as it reenters Earth's atmosphere, from an altitude of `79,248 m (260,000 ft)` to `24,384 m (80,000 ft)`, and from a speed of `28,090 km/h (17,454 mph)` to `2,743 km/h (1,704 mph)`.

<figure>
  <div id="space-shuttle-reentry-trajectory/plot_1" align="center"></div>
  <figcaption><strong>Figure 1.</strong> <em>Shuttle reentry—state variables.</em></figcaption>
</figure>

<figure>
  <div id="space-shuttle-reentry-trajectory/plot_2" align="center"></div>
  <figcaption><strong>Figure 2.</strong> <em>Shuttle reentry—control variables.</em></figcaption>
</figure>

<figure>
  <div id="space-shuttle-reentry-trajectory/plot_3" align="center"></div>
  <figcaption><strong>Figure 3.</strong> <em>Shuttle reentry—position trajectory.</em></figcaption>
</figure>

I also wanted to prepare a 3D animation to scale of the shuttle executing this trajectory using [three.js](https://threejs.org/), but my free time is over. I'll keep that idea on the back of my mind.

Hopefully this was entertaining to you. Thank you for dropping by!

This is the end of the post.

<!-- Latest compiled and minified plotly.js JavaScript -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<script src="{{ "/assets/js/space-shuttle-reentry-trajectory/plot_1.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/space-shuttle-reentry-trajectory/plot_2.js" | absolute_url }}"></script>
<script src="{{ "/assets/js/space-shuttle-reentry-trajectory/plot_3.js" | absolute_url }}"></script>
