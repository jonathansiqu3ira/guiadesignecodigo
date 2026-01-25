import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  {
    title: 'Visão Geral',
    items: [
      { label: 'Introdução', href: '/' },
      { label: 'Sobre', href: '/sobre' },
    ]
  },
  {
    title: 'Fundamentos',
    items: [
      { label: 'Design & Código', href: '/fundamentos/design-codigo' },
      { label: 'Tipografia', href: '/fundamentos/tipografia' },
      { label: 'Cores', href: '/fundamentos/cores' },
      { label: 'Grid & Layout', href: '/fundamentos/grid' },
    ]
  },
  {
    title: 'Componentes',
    items: [
      { label: 'Botões', href: '/componentes/botoes' },
      { label: 'Inputs', href: '/componentes/inputs' },
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
                    <Link 
                      href={item.href}
                      className="block py-1 text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
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
