import type {
  TechItem,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  InterestItem,
  ContactItem,
} from './types';
import { PiRocket, PiAtom, PiBooks } from 'react-icons/pi';

export const ui = {
  sectionTitles: {
    about: 'ABOUTME',
    tech: 'Technical Toolkit',
    experience: 'My Timeline',
    projects: 'Opensource',
    education: 'Education',
    interests: 'Behind the Technology',
    contact: 'Let\'s build something',
  },
  eyebrows: {
    header: 'ready player one',
    about: 'Who I am',
    tech: 'Architecture & Syntax',
    experience: 'Experience',
    projects: 'Selected Work',
    education: 'Qualifications',
    interests: 'Behind the Technology',
    contact: 'Get in Touch',
  },
  header: {
    name: 'Hello, Gabi here!',
    tagline: 'Junior Fullstack Developer with hands-on experience building interfaces with Angular, React, TypeScript and Java. Uses Tailwind CSS and shadcn/ui in personal projects, with Git in daily workflow.',
    ctaPrimary: 'Selected Projects',
    ctaSecondary: 'Talk to me →',
    role: 'Desenvolvedora Front-end',
  },
  about: {
    statusLabel: 'status',
    statusItems: [
      'disponível para novos projetos',
      'produtividade noturna',
      'baseada em Minas Gerais',
    ],
  },
  tech: {
    categories: {
      front: 'front-end',
      back: 'back-end',
      tools: 'ferramentas',
      learning: 'aprendendo',
    },
  },
  contact: {
    intro:
      'Aberta a conversas sobre projetos, oportunidades ou qualquer coisa que envolva construir algo bom.',
    note: 'respondo mais rápido à noite',
  },
  footer: {
    credit: 'Gabi Safira. All Rights Reserved.',
  },
};

export const about = {
  intro: 'Um parágrafo sobre quem você é profissionalmente.',
  detail: 'Um segundo parágrafo — o que te move, como você trabalha.',
};

export const techs: TechItem[] = [
  { name: 'React',      category: 'front' },
  { name: 'TypeScript', category: 'front' },
  { name: 'Tailwind',   category: 'front' },
  { name: 'Node.js',    category: 'back' },
  { name: 'Git',        category: 'tools' },
  { name: 'Figma',      category: 'tools' },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Chapter III',
    period: '2026 — present',
    current: true,
    description: `Coming back to software meant coming back to a different industry than the one I left. 
    AI reshaped how code gets written, and I decided that if I was going to rebuild, 
    I would rebuild wider: not just the interface, but everything behind it.`,
    highlights: [
      'Expanding into full stack development with Java and Spring Boot alongside Angular.',
      'Building personal projects to put the new stack into practice.',
      'Serving as an contribuitor at the He4rt Developers community and a staff at the ConexãoTI community.',
    ],
    techs: ['Angular', 'TypeScript', 'Java', 'Docker', 'Git', 'Spring Boot'],
  },
  {
    role: 'Chapter III',
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
    role: 'Chapter II',
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
    role: 'Chapter I',
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
    name: 'Nome do projeto',
    tagline: 'Uma linha do que ele faz.',
    description: 'O problema que resolve e como você resolveu.',
    techs: ['React', 'Tailwind'],
    repoUrl: 'https://github.com/usuario/repo',
    featured: true,
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Curso',
    institution: 'Instituição',
    period: '2020 — 2024',
  },
];

export const interests: InterestItem[] = [
  { icon: PiAtom,     label: 'Science & Health'},
  { icon: PiRocket,     label: 'Space Tech'},
  { icon: PiBooks,     label: 'Literature & Writing'},
  { icon: PiBooks,     label: 'Content Creation'},
  // { icon: PiRocket,     label: 'Space Tech',  detail: 'Uma frase sobre.' },

];

export const contacts: ContactItem[] = [
  { label: 'email',    value: 'voce@email.com',      href: 'mailto:voce@email.com' },
  { label: 'github',   value: 'github.com/usuario',  href: 'https://github.com/usuario' },
  { label: 'linkedin', value: 'in/usuario',          href: 'https://linkedin.com/in/usuario' },
];