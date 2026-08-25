import type {
  TechItem,
  ExperienceItem,
  ProjectItem,
  EducationItem,
  InterestItem,
  ContactItem,
} from './types';

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
    role: 'Cargo',
    company: 'Empresa',
    period: '2024 — presente',
    current: true,
    description: 'O que você faz ali, em duas ou três linhas.',
    highlights: [
      'Uma entrega concreta com resultado.',
      'Outra entrega concreta.',
    ],
    techs: ['React', 'TypeScript'],
  },
  {
    role: 'Cargo',
    company: 'Empresa',
    period: '2024 — presente',
    current: true,
    description: 'O que você faz ali, em duas ou três linhas.',
    highlights: [
      'Uma entrega concreta com resultado.',
      'Outra entrega concreta.',
    ],
    techs: ['React', 'TypeScript'],
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
  { icon: '☾', label: 'Interesse', detail: 'Uma frase sobre ele.' },
  { icon: '★', label: 'Outro',      detail: 'Uma frase sobre ele.' },
];

export const contacts: ContactItem[] = [
  { label: 'email',    value: 'voce@email.com',      href: 'mailto:voce@email.com' },
  { label: 'github',   value: 'github.com/usuario',  href: 'https://github.com/usuario' },
  { label: 'linkedin', value: 'in/usuario',          href: 'https://linkedin.com/in/usuario' },
];