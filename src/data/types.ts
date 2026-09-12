import type { IconType } from 'react-icons';
import type { Icon } from '@phosphor-icons/react';
export interface TechItem {
  name: string;
  category: 'front' | 'back' | 'tools';
  icon: IconType;
  main?: boolean;
}

export interface ExperienceItem {
  title: string;
  period: string;
  current?: boolean;
  description: string;
  highlights?: string[];
  techs: string[];
}

export interface ProjectItem {
  title: string;
  role: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  kind: 'code' | 'community';
  icon: IconType;
  repo?: string;
  demo?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  icon: IconType;
  current?: boolean;
  note?: string;
}

export interface InterestItem {
  icon: IconType;
  label: string;
  // detail: string;
}

export interface Social {
  label: string;
  href: string;
  icon: IconType | Icon;
}