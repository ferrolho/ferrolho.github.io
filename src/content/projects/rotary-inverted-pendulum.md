---
title: Rotary Inverted Pendulum
summary: A £20 open-source Furuta pendulum that balances itself with a 689-parameter neural network running standalone on an Arduino Nano.
date: 2026-05-15
years: 2024 – 2026
topics: [robotics, hardware, simulation]
stack: [Python, MuJoCo, Arduino, Astro]
cover: ../../assets/projects/rotary-inverted-pendulum.jpg
coverAlt: A commercial £4,500 lab pendulum next to the white 3D-printed £20 build.
featured: 1
stars: 98
views: 31k
youtube: rKChjuuR7K8
links:
  demo: https://ferrolho.github.io/rotary-inverted-pendulum/
  docs: https://ferrolho.github.io/rotary-inverted-pendulum/build/bom/
  code: https://github.com/ferrolho/rotary-inverted-pendulum
  video: https://www.youtube.com/watch?v=rKChjuuR7K8
---

A DIY rotary inverted pendulum you can print, solder, and train at home for about **£20** in parts — an open, hackable take on the rigs you would usually buy from a lab-equipment vendor (Quanser's QUBE Servo 2 lists at around £4,500).

The pendulum balances itself with a **reinforcement-learning policy** trained in simulation, fine-tuned on the real hardware, and distilled into a 689-parameter network small enough to run standalone on an Arduino Nano.

## The pipeline

The repository follows the pipeline end to end: measure the rig, train a policy, shrink it, flash it.

- **Policy** — a MuJoCo simulation environment, SAC training, system identification, a bridge to the real rig, distillation, and weight export.
- **Firmware** — the standalone RL controller, the low-level server used for fine-tuning, and the bring-up tests.
- **Model** — the URDF and the 3D-printable STLs it references, the single source of truth for the geometry.
- **Documentation** — an Astro Starlight site with a guided build and training path, plus an interactive 3D demo that runs the deployed network in your browser.

## Where to start

- **Build one** — bill of materials → print → wire → first power-on.
- **Train a policy** — the end-to-end pipeline, step 0 through step 4.
- **Understand the RL stack** — the transition contract, domain randomisation, and transport delay.
