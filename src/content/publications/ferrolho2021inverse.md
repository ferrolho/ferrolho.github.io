---
title: "Inverse Dynamics vs. Forward Dynamics in Direct Transcription Formulations for Trajectory Optimization"
authors: ["H. Ferrolho", "V. Ivan", "W. Merkt", "I. Havoutis", "S. Vijayakumar"]
venue: "IEEE International Conference on Robotics and Automation (ICRA)"
venueShort: "ICRA 2021"
kind: conference
date: 2021-02-28
url: "https://arxiv.org/abs/2010.05359"
pdf: "/files/ferrolho2021inverse.pdf"
video: "eG5XX-XjfsQ"
thumb: ../../assets/publications/ferrolho2021inverse.jpg
---

## Abstract

Benchmarks of state-of-the-art rigid-body dynamics libraries report better performance solving the inverse dynamics problem than the forward alternative. Those benchmarks encouraged us to question whether that computational advantage would translate to direct transcription, where calculating rigid-body dynamics and their derivatives accounts for a significant share of computation time. In this work, we implement an optimization framework where both approaches for enforcing the system dynamics are available. We evaluate the performance of each approach for systems of varying complexity, for domains with rigid contacts. Our tests reveal that formulations using inverse dynamics converge faster, require less iterations, and are more robust to coarse problem discretization. These results indicate that inverse dynamics should be preferred to enforce the nonlinear system dynamics in simultaneous methods, such as direct transcription.

## ICRA 2021 Presentation Video

<iframe src="https://www.youtube-nocookie.com/embed/eG5XX-XjfsQ" title="YouTube video" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Supplementary Video

<iframe src="https://www.youtube-nocookie.com/embed/HZPKyQcwTPU" title="YouTube video" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
