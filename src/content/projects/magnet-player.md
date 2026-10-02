---
title: Magnet Player
summary: Stream torrents directly in the browser. Paste a magnet link and watch — peer-to-peer over WebRTC, with nothing to install.
date: 2016-09-16
years: 2016 – 2026
topics: [web]
stack: [JavaScript, WebTorrent, Jekyll]
cover: ../../assets/projects/magnet-player.jpg
coverAlt: The yellow Magnet Player landing page with a magnet-link input box.
stars: 583
links:
  demo: https://ferrolho.github.io/magnet-player/
  code: https://github.com/ferrolho/magnet-player
---

**Magnet Player** is a site where anyone can stream torrents directly from their browser. It uses [WebTorrent](https://webtorrent.io/) — the first torrent client that works in the browser — which in turn uses [WebRTC](https://webrtc.org/) for true peer-to-peer transport. No plugin, extension, or installation required.

## The catch

In the browser, WebTorrent can only download torrents seeded by a WebRTC-capable client. Most people use native clients that speak TCP/uTP instead, so not every torrent works — yet. More clients support WebTorrent every year, including Vuze, Brave, and clients built on libtorrent.

It is my most-starred repository, and I still maintain it a decade later.
