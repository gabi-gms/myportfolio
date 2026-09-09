export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'Projects' },
  { id: 'tech',       label: 'Toolkit' },
  { id: 'experience', label: 'Experience' },
  { id: 'interests',  label: 'Interests' },
  { id: 'education',  label: 'Education' },
  { id: 'contact',    label: 'Contact' },
];