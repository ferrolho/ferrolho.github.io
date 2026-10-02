// Mirrors the PDF résumé in /files/cv-henrique-ferrolho.pdf — keep the two in sync.
export interface Role {
  org: string;
  place: string;
  href?: string;
  positions: { title: string; when: string }[];
  summary?: string;
  points?: string[];
}

export const experience: Role[] = [
  {
    org: 'ALL3',
    place: 'London, UK',
    href: 'https://all3.com/',
    positions: [
      { title: 'Technical Lead, Robotics', when: 'Sep 2025 – present' },
      { title: 'Senior Engineer, Robotics', when: 'Aug 2024 – Aug 2025' },
    ],
    points: [
      'Drove cross-functional integration across mechanical, electrical, and software teams.',
      'Coordinated high-profile demos and investor-facing milestones, including real-world testing and troubleshooting.',
      'Lead contributor to the development and testing of advanced locomotion and manipulation capabilities.',
      'Delivered core features across locomotion, manipulation, teleoperation, optimisation, and control pipelines.',
    ],
  },
  {
    org: 'Ocado Technology',
    place: 'London, UK',
    positions: [
      { title: 'Senior Robotics Engineer, Advanced Technology', when: 'Dec 2023 – Jul 2024' },
      { title: 'Robotics Engineer, Advanced Technology', when: 'Apr 2022 – Nov 2023' },
    ],
    summary:
      'Robotic manipulation for picking groceries from totes with a parallel-jaw gripper — robust to varying light, warehouse vibrations, and object diversity.',
    points: [
      'Developed and helped design a motion planning and control platform used across teams, products, and robots, and migrated a product from a legacy system onto it.',
      'Developed, tested, and integrated novel parallel-jaw grippers.',
      'Prototyped slippage detection and grasp-stability analysis with tactile sensing, and grasp-state classification with vision and machine learning.',
      'Contributed to the transition from retro-fitted picking stations to on-grid robot picking (OGRP).',
    ],
  },
  {
    org: 'The University of Edinburgh',
    place: 'Edinburgh, UK',
    positions: [{ title: 'Research Associate, SLMC Group', when: 'Nov 2021 – Mar 2022' }],
    summary:
      'Led the research and development of the motion planning framework for ANYmal Bull — a quadruped with an arm — for offshore energy asset integrity management at the ORCA Hub. Created a remote inspection and asset-interaction solution for industrial sites.',
  },
  {
    org: 'University of Porto',
    place: 'Porto, Portugal',
    positions: [
      { title: 'Research Software Engineer · DokuWeaki', when: 'Jul – Sep 2016' },
      { title: 'Full-Stack Developer · Nutriscience', when: 'Jul – Sep 2015' },
    ],
    points: [
      'Built a collaborative real-time editor plugin for DokuWiki, and maintained existing plugins.',
      'Designed and built a responsive Laravel platform used by ~1,500 households for an award-winning European nutrition project.',
    ],
  },
];

export const education = [
  { what: 'PhD, Robotics and Autonomous Systems', where: 'The University of Edinburgh', when: 'Sep 2017 – Mar 2022', note: 'Thesis: “Trajectory Optimisation for Legged Robots”, supervised by Prof. Sethu Vijayakumar. Passed with no corrections.' },
  { what: 'Erasmus exchange', where: 'The University of Edinburgh', when: 'Sep 2016 – May 2017', note: 'Bioinformatics, Extreme Computing, Robotics, Social and Technological Networks.' },
  { what: 'BSc + MSc, Informatics and Computing Engineering', where: 'University of Porto', when: 'Sep 2012 – Jul 2017' },
];

export const teaching = [
  { what: 'Lab demonstrator & marker · Robotics: Science and Systems', where: 'The University of Edinburgh', when: 'Fall 2017', note: 'Supervised 28 MSc students designing, building, and programming autonomous LEGO robots.' },
  { what: 'Teaching assistant · Computer Laboratory', where: 'University of Porto', when: 'Fall 2014, Fall 2015', note: 'OOP in C, Bash, VESA graphics, and state machines; wrote the MINIX game-development tutorials.' },
  { what: 'Teaching assistant · Computer Graphics', where: 'University of Porto', when: 'Spring 2015', note: 'Meshes, visibility, lighting, and shading; contributed to the WebCGF library.' },
];

export const skills = [
  { area: 'Robotics', items: ['Trajectory optimisation', 'Whole-body control', 'Rigid-body dynamics', 'ROS 1 & 2', 'MoveIt', 'Vicon'] },
  { area: 'Robots', items: ['NASA Valkyrie', 'TALOS', 'ANYmal B', 'Kinova Jaco', 'UR10e'] },
  { area: 'Software', items: ['C/C++', 'Julia', 'Python', 'Ipopt', 'Knitro', 'PyTorch', 'Docker', 'gRPC', 'CI/CD'] },
  { area: 'Making', items: ['Onshape', '3D printing', 'Electronics', 'LaTeX', 'Kdenlive'] },
];

export const other = [
  { what: 'Evaluator, ELLIS PhD & PostDoc Program', when: '2020' },
  { what: 'Educator, Edinburgh International Science Festival', when: '2018' },
  { what: 'Organising staff, IEEE-RAS Humanoids (Birmingham)', when: '2017' },
  { what: 'EPSRC PhD scholarship', when: '2017' },
  { what: 'Microsoft Student Partner (Porto)', when: '2016' },
];
