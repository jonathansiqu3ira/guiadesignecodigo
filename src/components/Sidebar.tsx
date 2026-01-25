import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  status?: 'available' | 'production';
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Visão Geral',
    items: [
      { label: 'Introdução', href: '/' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'Referências', href: '/referencias' },
    ]
  },
  {
    title: 'Fundamentos',
    items: [
      { label: 'Fundamentos de UX', href: '/fundamentos/ux', status: 'production' },
      { label: 'Acessibilidade', href: '/fundamentos/acessibilidade', status: 'production' },
      { label: 'Usabilidade no dia a dia', href: '/fundamentos/usabilidade', status: 'production' },
      { label: 'Performance e impacto', href: '/fundamentos/performance', status: 'production' },
    ]
  },
  {
    title: 'Design & Código',
    items: [
      { label: 'Relação entre design e implementação', href: '/fundamentos/design-codigo' },
      { label: 'Decisões orientadas ao código', href: '/fundamentos/decisoes', status: 'production' },
      { label: 'Limitações técnicas', href: '/fundamentos/limitacoes', status: 'production' },
      { label: 'Design pensando em manutenção', href: '/fundamentos/manutencao', status: 'production' },
    ]
  },
  {
    title: 'Tipografia',
    items: [
      { label: 'Hierarquia tipográfica', href: '/fundamentos/tipografia' },
      { label: 'Leitura e legibilidade', href: '/fundamentos/leitura', status: 'production' },
      { label: 'Tipografia em interfaces', href: '/fundamentos/interfaces', status: 'production' },
      { label: 'Tipografia e código', href: '/fundamentos/tipografia-codigo', status: 'production' },
    ]
  },
  {
    title: 'Cores',
    items: [
      { label: 'Uso funcional de cores', href: '/fundamentos/cores' },
      { label: 'Contraste e acessibilidade', href: '/fundamentos/contraste', status: 'production' },
      { label: 'Cores em sistemas digitais', href: '/fundamentos/sistemas', status: 'production' },
      { label: 'Cores no código', href: '/fundamentos/cores-codigo', status: 'production' },
    ]
  },
  {
    title: 'Grid & Layout',
    items: [
      { label: 'Grid como estrutura', href: '/fundamentos/grid' },
      { label: 'Layout responsivo', href: '/fundamentos/responsivo', status: 'production' },
      { label: 'Espaçamento e ritmo visual', href: '/fundamentos/espacamento', status: 'production' },
      { label: 'Layout e componentes', href: '/fundamentos/layout-componentes', status: 'production' },
    ]
  },
  {
    title: 'Componentes',
    items: [
      { label: 'Visão geral', href: '/componentes/overview', status: 'production' },
      { label: 'Estados e comportamento', href: '/componentes/estados', status: 'production' },
      { label: 'Acessibilidade', href: '/componentes/acessibilidade', status: 'production' },
      { label: 'Componentização', href: '/componentes/componentizacao', status: 'production' },
      { label: 'Documentação', href: '/componentes/documentacao', status: 'production' },
      // Subcomponentes
      { label: 'Botões', href: '/componentes/botoes' },
      { label: 'Inputs', href: '/componentes/inputs' },
      { label: 'Selects', href: '/componentes/selects', status: 'production' },
      { label: 'Textareas', href: '/componentes/textareas', status: 'production' },
      { label: 'Checkboxes & Radios', href: '/componentes/checkboxes', status: 'production' },
      { label: 'Modais', href: '/componentes/modais', status: 'production' },
      { label: 'Tooltips', href: '/componentes/tooltips', status: 'production' },
      { label: 'Tabelas', href: '/componentes/tabelas', status: 'production' },
      { label: 'Cards', href: '/componentes/cards', status: 'production' },
      { label: 'Feedback', href: '/componentes/feedback', status: 'production' },
    ]
  }
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[var(--technical-border)] bg-[var(--background)] hidden md:flex flex-col">
      <div className="p-6 border-b border-[var(--technical-border)]">
        <div className="font-medium tracking-tight">
          Guia Prático<br />
          <span className="text-zinc-500">Design e Código</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-6">
        <ul className="space-y-8">
          {navigation.map((section) => (
            <li key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    {item.status === 'production' ? (
                      <div className="flex items-center justify-between py-1 px-0 text-sm text-zinc-400 cursor-default select-none group">
                        <span>{item.label}</span>
                        <span className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded opacity-70 group-hover:opacity-100 transition-opacity">
                          Em produção
                        </span>
                      </div>
                    ) : (
                      <Link 
                        href={item.href}
                        className="block py-1 text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-6 border-t border-[var(--technical-border)] flex items-center justify-between">
        <div className="text-xs text-zinc-400">
          v0.1.1
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
}
