// A snapshot of the YouTube channel (views as of September 2026).
export interface Video {
  id: string;
  title: string;
  views: string;
  duration: string;
  group: 'build' | 'research' | 'puzzle' | 'music';
}

export const channel = 'https://www.youtube.com/@HenriqueFerrolho';

export const videos: Video[] = [
  { id: 's32OUzhjf4U', title: 'Turn a Time-of-Flight Sensor into a 3D Scanner', views: '380k', duration: '11:18', group: 'build' },
  { id: 'cMfH6UuYFqc', title: 'Can you solve the Knight’s Swap puzzle?', views: '214k', duration: '3:22', group: 'puzzle' },
  { id: 'H1hXaWupCDU', title: 'How to Download ChatGPT’s Text-to-Speech Audio Output', views: '52k', duration: '5:07', group: 'build' },
  { id: 'rKChjuuR7K8', title: 'I built this £4,500 pendulum for £20', views: '30k', duration: '9:01', group: 'build' },
  { id: 'BGRCpWgbxA8', title: 'How would YOU solve the Grecian Computer?', views: '12k', duration: '9:21', group: 'puzzle' },
  { id: 'fBY_yHkyU3A', title: 'Calculating the Space Shuttle Reentry Trajectory', views: '6.3k', duration: '12:26', group: 'research' },
  { id: '2poAOtDFiBs', title: 'Flashing Firmware to SteadyWin GIM6010-8 via SWD', views: '3.4k', duration: '14:29', group: 'build' },
  { id: 'iCXW6fyR2rQ', title: 'IROS 2020 · Dynamic Trajectories Robust to Disturbances', views: '1.6k', duration: '13:38', group: 'research' },
  { id: '3qXNHVCagL8', title: 'Robust Loco-Manipulation for Quadruped Robots with Arms', views: '1.4k', duration: '2:30', group: 'research' },
  { id: 'eG5XX-XjfsQ', title: 'ICRA 2021 · Inverse vs. Forward Dynamics in Direct Transcription', views: '644', duration: '11:44', group: 'research' },
  { id: 'Jo9Wn7xuDsg', title: 'How does this pendulum stay upright?', views: '1.6k', duration: '1:01', group: 'research' },
  { id: 'BrHc_viA-fA', title: 'Ultraleve — A Chata (piano cover)', views: '2.3k', duration: '2:55', group: 'music' },
  { id: 'dbD0gzTdy30', title: 'Joe Hisaishi — Summer (piano and drums cover)', views: '2.1k', duration: '1:51', group: 'music' },
  { id: 'ayqVXxoeuwg', title: 'Chopin — Nocturne cover', views: '1.1k', duration: '4:27', group: 'music' },
];
