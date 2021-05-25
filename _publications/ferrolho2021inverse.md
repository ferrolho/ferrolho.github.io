---
date: 2021-02-28
paper_id: 'ferrolho2021inverse'
paper_link: 'https://arxiv.org/abs/2010.05359'
title: "Inverse Dynamics vs. Forward Dynamics in Direct Transcription Formulations for Trajectory Optimization"
venue: "IEEE International Conference on Robotics and Automation (ICRA)"
citation: >
  H. Ferrolho, V. Ivan, W. Merkt, I. Havoutis, S. Vijayakumar, "Inverse Dynamics vs. Forward Dynamics in Direct Transcription Formulations for Trajectory Optimization," in <em>IEEE International Conference on Robotics and Automation (ICRA)</em>, Xi'an, China, 2021.
doi: arXiv:2010.05359
collection: publications
---

## Abstract

Benchmarks of state-of-the-art rigid-body dynamics libraries report better performance solving the inverse dynamics problem than the forward alternative. Those benchmarks encouraged us to question whether that computational advantage would translate to direct transcription, where calculating rigid-body dynamics and their derivatives accounts for a significant share of computation time. In this work, we implement an optimization framework where both approaches for enforcing the system dynamics are available. We evaluate the performance of each approach for systems of varying complexity, for domains with rigid contacts. Our tests reveal that formulations using inverse dynamics converge faster, require less iterations, and are more robust to coarse problem discretization. These results indicate that inverse dynamics should be preferred to enforce the nonlinear system dynamics in simultaneous methods, such as direct transcription.

## ICRA 2021 Presentation Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/eG5XX-XjfsQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Supplementary Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/HZPKyQcwTPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
