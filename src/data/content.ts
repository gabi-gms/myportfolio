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
    description: 'O que você faz ali, em duas ou três linhas.',
    highlights: [
      'Uma entrega concreta com resultado.',
      'Outra entrega concreta.',
    ],
    techs: ['Angular', 'TypeScript', 'Java', 'Docker', 'Git', 'Spring Boot'],
  },
  {
    role: 'Chapter III',
    period: '2024 — 2025',
    current: false,
    description: 'O que você faz ali, em duas ou três linhas.',
    highlights: [
      'Uma entrega concreta com resultado.',
      'Outra entrega concreta.',
    ],
    techs: ['Python', 'Hardware', 'AI', 'Microeletronics', 'Verilog', 'UVM'],
  },
  {
    role: 'Chapter II',
    period: '2020 — 2024',
    current: false,
    description: 'O que você faz ali, em duas ou três linhas.',
    highlights: [
      'Uma entrega concreta com resultado.',
      'Outra entrega concreta.',
    ],
    techs: ['Angular', 'TypeScript', 'Node.js', 'Docker', 'Git', 'React'],
  },
  {
    role: 'Chapter I',
    period: '2017 — 2020',
    current: false,
    description: 'O que você faz ali, em duas ou três linhas.',
    highlights: [
      'Uma entrega concreta com resultado.',
      'Outra entrega concreta.',
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