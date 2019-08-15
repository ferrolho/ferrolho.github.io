---
date: 2019-08-15
paper_id: 'ferrolho2019comparing'
title: "Comparing Metrics for Robustness Against External Perturbations in Dynamic Trajectory Optimization"
venue: "arXiv pre-print"
# citation: >
#   Y. Yang, W. Merkt, H. Ferrolho, V. Ivan and S. Vijayakumar, "Efficient Humanoid Motion Planning on Uneven Terrain Using Paired Forward-Inverse Dynamic Reachability Maps," in <em>IEEE Robotics and Automation Letters</em>, vol. 2, no. 4, pp. 2279-2286, Oct. 2017.
# doi: 10.1109/LRA.2017.2727538
collection: publications
---

## Abstract

Dynamic trajectory optimization is a popular approach for generating optimal and dynamically consistent trajectories. In order to deal with model errors and perturbations, the trajectories are usually tracked with feedback controllers. Their robustness thus largely depends on the margins of stability and control authority the system retains. Manipulability ellipsoids and force polytopes are well-known tools for evaluating force and motion capabilities of robot manipulators. Increased control authority can be achieved by incorporating task constraints within those tools. However, they come with an increased computational cost. Additionally, their impact on resulting trajectory quality and control authority has not yet been benchmarked and compared. In this letter, we introduce a novel robustness metric, the residual force polytope, which takes the nominal torque required to maintain a posture into account. We further detail a benchmarking protocol including evaluation criteria and visualization tools to compare robustness metrics in dynamic trajectory optimization. To foster benchmarking and allow for reproducibility, we open source a flexible framework for dynamic trajectory optimization via direct transcription along with our benchmark protocols as supplementary materials. Finally, we include - to the best of our knowledge - the first holistic comparison between traditional energy minimization metrics, kinematic manipulability maximization, and force polytope methods.
