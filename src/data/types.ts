export interface TechItem {
  name: string;
  category: 'front' | 'back' | 'tools' | 'learning';
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  highlights?: string[];
  techs: string[];
}

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  techs: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export interface InterestItem {
  icon: string;
  label: string;
  detail: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}