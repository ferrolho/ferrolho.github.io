---
date: 2021-01-19
paper_id: 'carlos2021direct'
paper_link: 'https://arxiv.org/abs/2010.00411'
title: "A Direct-Indirect Hybridization Approach to Control-Limited DDP"
venue: "arXiv e-prints"
citation: >
  C. Mastalli, W. Merkt, J. Marti-Saumell, H. Ferrolho, J. Sola, N. Mansard, S. Vijayakumar, "A Direct-Indirect Hybridization Approach to Control-Limited DDP", in <em>2021 arXiv e-prints</em>, p. arXiv:2010.00411, Jan. 2021.
doi: arXiv:2010.00411
collection: publications
---

## Abstract

Differential Dynamic Programming (DDP) is an indirect method for trajectory optimization. Its efficiency derives from the exploitation of temporal structure (inherent to optimal control problems) and explicit roll-out/integration of the system dynamics. However, it suffers from numerical instability and, when compared to direct methods, it has limited initialization options (allows initialization of controls, but not of states) and lacks proper handling of control constraints. These limitations are due to the fact that DDP is a single shooting algorithm. In this work, we tackle these issues with a direct-indirect hybridization approach that is primarily driven by the dynamic feasibility of the optimal control problem. Our feasibility search emulates the numerical resolution of a direct transcription problem with only dynamics constraints, namely a multiple shooting formulation. We show that our approach has better numerical convergence than BOX-DDP (a shooting method), and that its convergence rate and runtime performance are competitive with state-of-the-art direct transcription formulations solved using the interior point and active set algorithms available in KNITRO. We further show that our approach decreases the dynamic feasibility error monotonically—as in state-of-the-art nonlinear programming algorithms. We demonstrate the benefits of our hybrid approach by generating complex and athletic motions for quadruped and humanoid robots.

## Supplementary Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/gHcxBjLM9jk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
