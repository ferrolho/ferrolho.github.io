---
title: Hand Tracking Experiments
summary: Real-time monocular hand tracking on Apple Silicon — MediaPipe live at ~40 fps, WiLoR meshes offline — aimed at teleoperating a robot hand.
date: 2026-06-09
topics: [robotics]
stack: [Python, MediaPipe, WiLoR, viser]
cover: ../../assets/projects/hand-tracking.jpg
coverAlt: A blue 3D hand mesh overlaid on a webcam image of an open hand.
preview: /previews/hand-tracking.mp4
featured: 7
links:
  demo: https://ferrolho.github.io/hand-tracking-experiments/
  code: https://github.com/ferrolho/hand-tracking-experiments
---

Experiments in monocular hand tracking, aimed at **interactively teleoperating a 3D hand in viser** and, eventually, retargeting to a robot hand. Robotics-focused — joint positions over photorealistic meshes — and running on an Apple Silicon MacBook Air.

The **live browser demo** runs entirely on your own webcam (MediaPipe + Three.js), with nothing to install.

## Two trackers for two jobs

Both sit behind one swappable `frame → tracker → 21 keypoints → viser` pipeline.

| | Live teleop | Offline policy data |
|---|---|---|
| Tracker | MediaPipe Hands | WiLoR (via wilor-mini) |
| Speed (M2 Air) | ~40 fps | ~4 fps |
| Output | 21 keypoints | full MANO (rotations + mesh) |
| Why | a human closes the loop, so latency wins | no human in the loop, so accuracy and occlusion robustness win |

## Placing the hand in 3D

Articulation comes from MediaPipe's metric world landmarks. Global placement comes from the image landmarks, back-projected with the camera intrinsics: depth is estimated from the known metric hand size against its apparent size in pixels (`Z = fx · size / pixels`).
