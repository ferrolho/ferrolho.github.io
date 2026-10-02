export const site = {
  name: 'Henrique Ferrolho',
  title: 'Henrique Ferrolho — Robotics engineer',
  description:
    'Robotics Technical Lead at ALL3 with a PhD in trajectory optimisation for legged robots. Projects, research, and writing.',
  role: 'Robotics Technical Lead',
  employer: { name: 'ALL3', url: 'https://all3.com/' },
  location: 'London, UK',
  email: 'henrique.ferrolho@gmail.com',
  cv: '/files/cv-henrique-ferrolho.pdf',
};

export const nav = [
  { href: '/projects/', label: 'Projects' },
  { href: '/publications/', label: 'Research' },
  { href: '/talks/', label: 'Talks' },
  { href: '/blog/', label: 'Writing' },
  { href: '/cv/', label: 'CV' },
];

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/ferrolho' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@HenriqueFerrolho' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/henrique-ferrolho' },
  { id: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=Bn4_9pkAAAAJ' },
  { id: 'orcid', label: 'ORCID', href: 'https://orcid.org/0000-0003-4307-0028' },
  { id: 'x', label: 'X', href: 'https://x.com/hferrolho' },
] as const;
