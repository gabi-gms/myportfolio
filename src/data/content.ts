import type {
  TechItem,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  InterestItem,
  Social,
} from './types';
import { PiRocket, PiAtom, PiBooks, PiCamera, PiGithubLogo, PiLinkedinLogo, PiInstagramLogo, PiYoutubeLogo, PiCoffee, PiRepeat, PiBrain, PiGraduationCap, PiCertificate, PiCpu, PiChartLine, PiCode, PiUsers} from 'react-icons/pi';
import {
  SiAngular, SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiTailwindcss,
  SiSpringboot, SiNodedotjs, SiPython, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiNotion, SiObsidian, SiNpm
} from 'react-icons/si';


export const ui = {
  sectionTitles: {
    about: 'ABOUTME',
    tech: 'Tech & Tools',
    experience: 'My Timeline',
    projects: 'Opensource',
    education: 'Education',
    interests: 'Passions',
    contact: 'Get in Touch',
  },
  eyebrows: {
    header: 'women in tech',
    about: 'hopes1x to Gabi Leonor',
    tech: 'Architecture & Syntax',
    experience: 'Experience',
    projects: 'Selected Work',
    education: 'Qualifications',
    interests: 'Behind the Technology',
    contact: 'Let\'s build something',
  },
    nav: {
    backToTop: 'back to top',
    open: 'open menu',
    close: 'close menu',
  },
  header: {
    greating: 'Hello, ',
    name: 'Gabi here!',
    tagline: 'Junior Fullstack Developer with hands-on experience building interfaces with Angular, React, TypeScript and Java. Uses Tailwind CSS and shadcn/ui in personal projects, with Git in daily workflow.',
    ctaPrimary: 'selected projects',
    ctaSecondary: 'talk to me →',
    portraitAlt: 'Gabi Leonor',
    portraitTag: 'fullstack dev',
  },
  tech: {
    main: 'main',
    categories: {
      front: 'frontend',
      back: 'backend',
      tools: 'tools',
    },
  },
  contact: {
    intro:
      'Open to conversations about projects, opportunities, or anything that involves building something good.',
    note: 'I reply faster at night',
    resumeCta: 'download resume',
    emailCta: 'send an email',
    socialsLabel: 'socials',
  },
  projects: {
    demoLabel: 'preview site',
    repoLabel: 'view source',
    githubCta: 'all projects on github',
  },
  footer: {
    credit: 'Gabi Leonor. All Rights Reserved.',
    version: 'v1.0.0',
    tag: 'beta',
  },
};

export const about = {
  lead: `Full-stack developer. I work in Java and Angular, and I spent a year helping build a RISC-V chip, 
  which turned out to be the best way to understand what runs underneath everything else I had written.`,
  paragraphs: [
    `Most of my professional work was front-end: Angular and TypeScript, keeping production systems running. `,
    `I am building on the other side now (Spring Boot, Java, PostgreSQL), and the decisions about how services talk to each other.
    I am drawn to systems where being right matters more than being new: health, scientific computing, anything where a wrong answer costs something`
  ],
  quote: `In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. 
  You use a combination of science, art, and craft to determine what to do with them.`,
};

export const techs: TechItem[] = [
  { name: 'Angular',        category: 'front',    icon: SiAngular, main: true },
  { name: 'React',          category: 'front',    icon: SiReact },
  { name: 'Next.js',        category: 'front',    icon: SiNextdotjs },
  { name: 'TypeScript',     category: 'front',    icon: SiTypescript },
  { name: 'JavaScript',     category: 'front',    icon: SiJavascript },
  { name: 'HTML',           category: 'front',    icon: SiHtml5 },
  { name: 'CSS',            category: 'front',    icon: SiCss },
  { name: 'Tailwind CSS',   category: 'front',    icon: SiTailwindcss, main: true },

  { name: 'Java',           category: 'back',     icon: PiCoffee, main: true },
  { name: 'Spring Boot',    category: 'back',     icon: SiSpringboot, main: true },
  { name: 'Node.js',        category: 'back',     icon: SiNodedotjs },
  { name: 'Python',         category: 'back',     icon: SiPython, main: true },
  { name: 'PostgreSQL',     category: 'back',     icon: SiPostgresql, main: true },
  { name: 'MySQL',          category: 'back',     icon: SiMysql },
  { name: 'AI',             category: 'back',     icon: PiBrain },

  { name: 'Git',            category: 'tools',    icon: SiGit },
  { name: 'GitHub',         category: 'tools',    icon: SiGithub },
  { name: 'Docker',         category: 'tools',    icon: SiDocker },
  { name: 'Notion',         category: 'tools',    icon: SiNotion },
  { name: 'Obsidian',       category: 'tools',    icon: SiObsidian },
  { name: 'npm',            category: 'tools',    icon: SiNpm },
  { name: 'agile',          category: 'tools',    icon: PiRepeat },
  

];

export const experiences: ExperienceItem[] = [
  {
    title: 'Chapter IV',
    period: '2026 — present',
    current: true,
    description: `Coming back to software meant coming back to a different industry than the one I left. 
    AI reshaped how code gets written, and I decided that if I was going to rebuild, 
    I would rebuild wider: not just the interface, but everything behind it.`,
    highlights: [
      'Expanding into full stack development with Java and Spring Boot alongside Angular.',
      'Building ,personal projects to put the new stack into practice.',
      'Serving as an contribuitor at the He4rt Developers community and a staff at the ConexãoTI community.',
    ],
    techs: ['Angular', 'TypeScript', 'Java', 'Docker', 'Git', 'Spring Boot'],
  },
  {
    title: 'Chapter III',
    period: '2024 — 2025',
    current: false,
    description: `I spent a year in microelectronics, working with hardware architecture instead of interfaces. 
    It taught me what happens underneath the software I write, and it also made something clear: 
    what I actually want is to build systems people use.`,
    highlights: [
      'Selected for the hands-on phase of the CI Inovador Residency (UFRGS Hub).',
      'Joined a three-person team developing a SoC with a RISC-V processor and a convolutional neural network accelerator, delivered on schedule.',
      'Conducted two months of applied RISC-V research at Universidad Carlos III de Madrid, Spain',
    ],
    techs: ['Python', 'Hardware', 'AI', 'Microeletronics', 'Verilog', 'UVM'],
  },
  {
    title: 'Chapter II',
    period: '2020 — 2024',
    current: false,
    description: `My first years in the industry were spent on real systems with real users. 
    I migrated legacy screens, fixed production bugs, and learned what it takes to ship under a deadline with a small team. 
    I also learned, the hard way, that a good salary means nothing without structure to grow in.`,
    highlights: [
      'Promoted from intern to Junior Developer in 5 months in my first job.',
      'Migrated legacy system screens to Angular integrated with a Node.js back-end via REST APIs, delivering the decommissioning project on schedule.',
    ],
    techs: ['Angular', 'TypeScript', 'Node.js', 'Docker', 'Git', 'React'],
  },
  {
    title: 'Chapter I',
    period: '2017 — 2020',
    current: false,
    description: `I started out heading toward law school, passed the entrance exam, 
    and walked away from it before enrolling. After six months of searching, I found Information Systems. 
    I had been messing with HTML, CSS and JavaScript since my teens without ever considering it a career, 
    and it turned out to be exactly where I belonged.`,
    highlights: [
      'Started the Information Systems program at Universidade de Uberaba.',
      'Built foundations in programming logic, Java, SQL, front-end, and agile methodologies.',
      'Landed my first internship in early 2020.',
    ],
    techs: ['JavaScript', 'HTML', 'CSS', 'Java', 'Git', 'Agile', 'Software'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Project name',
    role: 'fullstack developer',
    year: '2026',
    category: 'fullstack',
    description:
      'The problem it solves and how you solved it. Two or three lines is the right length here.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    kind: 'code',
    repo: 'https://github.com/seu-usuario/repo',
    demo: 'https://exemplo.com',
    icon: PiCode,
  },
  {
    title: 'Talk title',
    role: 'speaker',
    year: '2026',
    category: 'community',
    description: 'What the talk was about and who it reached.',
    tags: ['He4rt Developers'],
    kind: 'community',
    demo: 'https://...',
    icon: PiUsers,
  },
];

export const github = {
  url: 'https://github.com/seu-usuario',
};

export const education: EducationItem[] = [
  {
    degree: 'Technologist in Data Science',
    institution: 'Cruzeiro do Sul Virtual',
    period: '2026 — present',
    icon: PiChartLine,
    current: true,
  },
  {
    degree: 'Microelectronics Residency',
    institution: 'CI Inovador — UFRGS / Softex',
    period: '2024 — 2025',
    icon: PiCpu,
  },
  {
    degree: 'BSc in Information Systems',
    institution: 'Universidade de Uberaba',
    period: '2017 — 2024',
    icon: PiGraduationCap,
  },
  {
    degree: 'AI Specialist Track',
    institution: 'Santander Digital Immersion',
    period: '2026',
    icon: PiCertificate,
  },
];

export const interests: InterestItem[] = [
  { icon: PiAtom,     label: 'Science & Health'},
  { icon: PiRocket,     label: 'Space Tech'},
  { icon: PiBooks,     label: 'Literature & Writing'},
  { icon: PiCamera,     label: 'Content Creation'},
  // { icon: PiRocket,     label: 'Space Tech',  detail: 'Uma frase sobre.' },

];

export const email = 'gabi.gomes.gr@gmail.com';
export const resumeUrl = '/Gabriella-Rodrigues-Software-Developer.pdf';

export const socials: Social[] = [
  { label: 'github', href: 'https://github.com/gabi-gms', icon: PiGithubLogo },
  { label: 'linkedin', href: 'https://linkedin.com/in/gabi-gms', icon: PiLinkedinLogo },
  { label: 'instagram', href: 'https://instagram.com/agabileonor', icon: PiInstagramLogo },
  { label: 'youtube', href: 'https://youtube.com/@agabileonor', icon: PiYoutubeLogo },
];