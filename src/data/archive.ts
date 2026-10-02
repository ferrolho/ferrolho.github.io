// Smaller and older projects that don't need a full page, but are worth remembering.
// Projects with a page in src/content/projects are merged into the archive automatically.
export interface ArchiveItem {
  year: number;
  title: string;
  description: string;
  href: string;
  stack?: string;
  kind?: 'project' | 'blog' | 'slides' | 'work';
  stars?: number;
}

export const archive: ArchiveItem[] = [
  { year: 2022, title: 'SpanningTreeCoverage.jl', description: 'An optimal O(n) algorithm for single-robot coverage path planning.', href: 'https://github.com/ferrolho/SpanningTreeCoverage.jl', stack: 'Julia', stars: 13 },
  { year: 2018, title: 'Introduction to Robotics with Three.js', description: 'Workshop slides for ENEI, the Portuguese national meeting of informatics students.', href: 'https://ferrolho.github.io/workshop-robotics/', stack: 'Three.js', kind: 'slides' },
  { year: 2017, title: 'Full-body motion planning on uneven terrain', description: 'Dissertation-planning slides for my MSc work at Edinburgh with NASA’s Valkyrie.', href: 'https://bit.ly/pdis-final-ferrolho', kind: 'slides' },
  { year: 2017, title: 'COLLADA robots collection', description: 'A collection of robot models in the COLLADA format, started alongside the first Robot Explorer.', href: 'https://github.com/ferrolho/collada-robots-collection', stack: 'COLLADA', stars: 13 },
  { year: 2016, title: 'Away at Edinburgh', description: 'A journal of my Erasmus year in the UK, written for posterity.', href: 'https://ferrolho.github.io/away-at-edinburgh/', stack: 'Jekyll', kind: 'blog' },
  { year: 2016, title: 'DokuWeaki', description: 'Plugins for DokuWiki aimed at agile teams — I built the collaborative real-time editor.', href: 'https://dokuweaki.github.io/', stack: 'PHP', kind: 'work' },
  { year: 2016, title: 'C++11 — new features', description: 'A web presentation on C++11’s new features, with before-and-after code samples.', href: 'https://ferrolho.github.io/feup-pp/cpp11-tutorial/', stack: 'HTML', kind: 'slides' },
  { year: 2016, title: 'Hackacity 2016', description: 'A visualiser for Porto environmental datasets, built at a hackathon.', href: 'https://github.com/ferrolho/hackacity2016-web-app', stack: 'PHP' },
  { year: 2016, title: 'The Prisoners and the Light Switch', description: 'The classic prisoners-and-light-switch logic puzzle, in Scala.', href: 'https://github.com/ferrolho/the-prisoners-switch', stack: 'Scala' },
  { year: 2016, title: 'Coding challenges', description: 'My own solutions to online coding challenges, still growing.', href: 'https://github.com/ferrolho/coding-challenges', stack: 'Julia', stars: 22 },
  { year: 2015, title: 'Nutriciência', description: 'A responsive Laravel platform used by ~1,500 households in an award-winning EU nutrition project.', href: 'https://web.archive.org/web/20190124154539/https://nutriciencia.pt/', stack: 'Laravel', kind: 'work' },
  { year: 2015, title: 'WebCGF', description: 'Contributions to the WebGL library used in FEUP’s computer graphics course.', href: 'https://paginas.fe.up.pt/~ruirodrig/pub/sw/webcgf/docs/', stack: 'WebGL', kind: 'work' },
  { year: 2015, title: 'Game of Life', description: 'Conway’s Game of Life.', href: 'https://github.com/ferrolho/python-game-of-life', stack: 'Python' },
  { year: 2014, title: 'Difusal & the LCOM tutorials', description: 'My first blog, home of a tutorial series on writing a game from scratch in MINIX.', href: 'http://difusal.blogspot.com/2014/07/minix-posts-index.html', stack: 'C · MINIX', kind: 'blog' },
  { year: 2014, title: 'Solar system simulator', description: 'My first solar system simulation.', href: 'https://ferrolho.github.io/solar-system-simulator/', stack: 'JavaScript' },
  { year: 2014, title: 'Obstakles', description: 'Yet another Android game.', href: 'https://github.com/ferrolho/android-obstakles', stack: 'Android' },
  { year: 2014, title: 'Snake for Android', description: 'My first try at making a game for Android: the classic snake.', href: 'https://github.com/ferrolho/android-snake', stack: 'Android' },
  { year: 2014, title: 'Monty Hall problem', description: 'My first Android app: a simulation of the Monty Hall problem.', href: 'https://github.com/ferrolho/android-monty-hall-problem', stack: 'Android' },
  { year: 2014, title: 'Labyrinth', description: 'A maze game for the object-oriented programming course.', href: 'https://github.com/ferrolho/feup-lpoo', stack: 'Java' },
  { year: 2013, title: 'Programming contests', description: 'Students’ solutions to programming-contest problems at FEUP.', href: 'https://github.com/ferrolho/feup-contests', stack: 'C++', stars: 10 },
  { year: 2013, title: 'Allegro games', description: 'Snake, Tetris, a slide puzzle, an RPG, and a particle-wave simulator — learning C++ with Allegro 5.', href: 'https://github.com/ferrolho?tab=repositories&q=allegro', stack: 'C++ · Allegro' },
  { year: 2013, title: 'Sudoku solver', description: 'A program that solves sudoku puzzles.', href: 'https://github.com/ferrolho/sudoku-solver', stack: 'C++' },
];
