---
date: 2020-10-11
paper_id: 'ferrolho2020inverse'
paper_link: 'https://arxiv.org/abs/2010.05359'
title: "Inverse Dynamics vs. Forward Dynamics in Direct Transcription Formulations for Trajectory Optimization"
venue: "arXiv e-prints"
citation: >
  H. Ferrolho, V. Ivan, W. Merkt, I. Havoutis, S. Vijayakumar, "Inverse Dynamics vs. Forward Dynamics in Direct Transcription Formulations for Trajectory Optimization", in <em>arXiv e-prints</em>, p. arXiv:2010.05359, Oct. 2020.
doi: arXiv:2010.05359
collection: publications
---

## Abstract

Benchmarks of state-of-the-art rigid-body dynamics libraries have reported better performance for solving the inverse dynamics problem than the forward alternative. Those benchmarks encouraged us to question whether this computational advantage translates to direct transcription formulations, where calculating the rigid-body dynamics and their derivatives often accounts for a significant share of computation time. In this work, we implement an optimization framework where both approaches for enforcing the system dynamics are available. We evaluate the performance of each approach for systems of varying complexity, and for domains with rigid contacts. Our tests revealed that formulations employing inverse dynamics converge faster, require less iterations, and are more robust to coarse problem discretization. These results suggest that inverse dynamics should be the preferred approach to enforce nonlinear system dynamics in simultaneous methods, such as direct transcription.

## Supplementary Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/HZPKyQcwTPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
