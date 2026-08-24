export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'about',      label: 'Sobre' },
  { id: 'tech',       label: 'Tech stack' },
  { id: 'projects',   label: 'Projetos' },
  { id: 'experience', label: 'Experiência' },
  { id: 'education',  label: 'Educação' },
  { id: 'interests',  label: 'Interesses' },
  { id: 'contact',    label: 'Contato' },
];