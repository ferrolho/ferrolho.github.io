// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Old URLs (Academic Pages / earlier sites) that are linked from READMEs,
// YouTube descriptions, and papers. Each one becomes a small redirect page.
const redirects = {
  '/about': '/',
  '/about.html': '/',
  '/other': '/projects/',
  '/portfolio': '/projects/',
  '/resume': '/cv/',
  '/research': '/publications/',
  '/research/publications/ferrolho2020optimizing': '/publications/ferrolho2020optimizing/',
  '/research/publications/ferrolho2019comparing': '/publications/',
  '/general/hello-world': '/blog/hello-world/',
  '/robotics/building-a-self-balancing-robot': '/blog/building-a-self-balancing-robot/',
  '/julia/linux/ubuntu/how-to-install-julia-on-ubuntu': '/blog/how-to-install-julia-on-ubuntu/',
  '/optimal control/trajectory optimization/space-shuttle-reentry-trajectory': '/blog/space-shuttle-reentry-trajectory/',
  '/blog/2020-05-25/space-shuttle-reentry-trajectory': '/blog/space-shuttle-reentry-trajectory/',
  '/optimization/julia/solving-a-geometry-quiz-with-jump': '/blog/solving-a-geometry-quiz-with-jump/',
  '/kdenlive/stabilizing-a-video-subject-in-kdenlive': '/blog/stabilizing-a-video-subject-in-kdenlive/',
  '/android/magisk': '/blog/magisk/',
  '/talks/2023-07-25-juliacon': '/talks/',
};

export default defineConfig({
  site: 'https://ferrolho.github.io',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  redirects,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: false,
    },
  },
  image: {
    // YouTube thumbnails are optimised at build time like local images.
    domains: ['i.ytimg.com'],
  },
});
