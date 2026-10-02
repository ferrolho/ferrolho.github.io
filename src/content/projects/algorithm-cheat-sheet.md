---
title: Algorithm Cheat Sheet
summary: A two-sided A4 sheet mapping problem clues to algorithms, with a minimal template for each — generated from editable YAML.
date: 2026-06-30
topics: [education]
stack: [Python, SVG, cairo]
cover: ../../assets/projects/algorithm-cheat-sheet.jpg
coverAlt: The front of the cheat sheet — a colour-coded selection flow of algorithm techniques.
coverPosition: 50% 0%
links:
  code: https://github.com/ferrolho/algorithm-cheat-sheet
  docs: https://github.com/ferrolho/algorithm-cheat-sheet/blob/main/algorithm-cheat-sheet.pdf
---

A **two-sided A4 landscape PDF** that prints with no scaling:

- **Front — selection flow.** Maps "clue in the problem statement" → "technique to reach for", inspired by the AlgoMonster flowchart.
- **Back — how they work.** A minimal Python-ish template for each technique on the front — the mechanism, not a full implementation — with its typical time complexity.

## Built from data

Both pages are generated from editable YAML. The front comes from a decision-flow file where each section is a titled box of yes/no steps; the back comes from a list of pattern cards, each with a colour family, a Big-O badge, a one-line idea, and a code template.

Each page has its own renderer, text is measured with Helvetica metrics, boxes are balanced across four columns automatically, and a shared palette keeps both sides colour-matched. `cairosvg` assembles the result into the final PDF.
