import { BadgeVariant } from "@/components/ui/Badge";

export interface NavItem {
  label: string;
  href: string;
  status?: BadgeVariant;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: 'Visão Geral',
    items: [
      { label: 'Introdução', href: '/' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'Design & Código', href: '/fundamentos/design-codigo' },
      { label: 'Referências', href: '/referencias', status: 'in_progress' },
    ]
  },
  {
    title: 'Fundamentos',
    items: [
      { label: 'Tipografia', href: '/fundamentos/tipografia' },
      { label: 'Cores', href: '/fundamentos/cores', status: 'production' },
      { label: 'Grid & Layout', href: '/fundamentos/grid', status: 'production' },
      { label: 'Acessibilidade', href: '/fundamentos/acessibilidade', status: 'production' },
      { label: 'UX & Usabilidade', href: '/fundamentos/ux', status: 'production' },
    ]
  },
  {
    title: 'Componentes',
    items: [
      { label: 'Botões', href: '/componentes/botoes', status: 'production' },
      { label: 'Inputs', href: '/componentes/inputs', status: 'production' },
      { label: 'Modais', href: '/componentes/modais', status: 'planned' },
      { label: 'Tabs', href: '/componentes/tabs', status: 'planned' },
    ]
  }
];

export function getStatusLabel(status: BadgeVariant): string {
  switch (status) {
    case 'in_progress': return 'Em andamento';
    case 'planned': return 'Em breve';
    default: return 'Em produção';
  }
}

export const APP_VERSION = '0.1.1';

/** Look up a page's badge status from the navigation config by its href. */
export function getStatusByHref(href: string): BadgeVariant | undefined {
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === href) return item.status;
    }
  }
  return undefined;
}
