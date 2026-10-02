---
title: Thermal Master Viewer
summary: A browser-based viewer for Thermal Master P3/P1 USB thermal cameras. Plug in, open the page, no install — driven directly over WebUSB.
date: 2026-08-16
topics: [hardware, web]
stack: [JavaScript, WebUSB]
cover: ../../assets/projects/thermal-master-viewer.jpg
coverAlt: A thermal image of a sleeping dog in the viewer, with temperature controls on the right.
featured: 4
links:
  demo: https://ferrolho.github.io/thermal-master-viewer/
  code: https://github.com/ferrolho/thermal-master-viewer
---

An unofficial browser-based viewer for the **Thermal Master P3 / P1** USB thermal camera. Plug the camera in, open the viewer, and click *Connect camera* — no install, no driver, no local server. The page talks to the camera directly over **WebUSB**.

## Features

- **Live thermal image** at 25 fps, 256×192 (P3) or 160×120 (P1).
- **Hover** for per-pixel temperature, with live max, min, centre, and average.
- **7 palettes**; thermal, IR-brightness, or blended view.
- **Emissivity** and reflected-temperature correction (Stefan–Boltzmann).
- **Freeze**, and one-click **PNG** and **CSV** export of every pixel's temperature.
- **Works on a phone** — plug the camera straight into an Android phone and open the page.

## Why this works

The camera is not a UVC webcam and does not pretend to be one: its interfaces are vendor-specific (class `0xFF`). WebUSB refuses to claim *protected* interface classes such as video or HID, but `0xFF` is not one of them — so the browser may claim the camera directly. It is also why no OS driver binds to it.
