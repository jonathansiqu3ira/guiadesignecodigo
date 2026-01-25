"use client";

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Badge, BadgeVariant } from './ui/Badge';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  status?: BadgeVariant;
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
      { label: 'Design & Código', href: '/fundamentos/design-codigo', status: 'in_progress' },
      { label: 'Referências', href: '/referencias', status: 'production' },
    ]
  },
  {
    title: 'Fundamentos',
    items: [
      { label: 'Tipografia', href: '/fundamentos/tipografia', status: 'production' },
      { label: 'Cores', href: '/fundamentos/cores', status: 'production' },
      { label: 'Grid & Layout', href: '/fundamentos/grid', status: 'production' },
      { label: 'Acessibilidade', href: '/fundamentos/acessibilidade', status: 'production' },
      { label: 'UX & Usabilidade', href: '/fundamentos/ux', status: 'production' },
    ]
  },
  {
    title: 'Componentes',
    items: [
      { label: 'Botões', href: '/componentes/botoes', status: 'in_progress' },
      { label: 'Inputs', href: '/componentes/inputs', status: 'production' },
    ]
  }
];

export function Sidebar() {
  const [openSections, setOpenSections] = useState<string[]>(['Visão Geral']);

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const getStatusLabel = (status: BadgeVariant) => {
    switch (status) {
      case 'available': return 'Disponível';
      case 'in_progress': return 'Em andamento';
      default: return 'Em produção';
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[var(--technical-border)] bg-[var(--background)] hidden md:flex flex-col">
      <div className="p-6 border-b border-[var(--technical-border)]">
        <Link 
          href="/" 
          className="block font-medium tracking-tight hover:opacity-70 transition-opacity focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-sm outline-none"
          aria-label="Voltar para a página inicial"
        >
          Guia Prático<br />
          <span className="text-zinc-500">Design e Código</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-6">
        <ul className="space-y-6">
          {navigation.map((section) => {
            const isOpen = openSections.includes(section.title);
            const sectionId = `section-${section.title.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <li key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  aria-expanded={isOpen}
                  aria-controls={sectionId}
                  className="flex items-center justify-between w-full text-left group mb-1 rounded-md py-1.5 px-2 -ml-2 focus-ring hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                    {section.title}
                  </h3>
                  <ChevronRight 
                    size={14} 
                    className={cn(
                      "text-zinc-400 transition-transform duration-200",
                      isOpen && "rotate-90"
                    )} 
                  />
                </button>
                
                <div 
                  id={sectionId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <ul className="overflow-hidden space-y-2 pl-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link 
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between py-1.5 px-2 text-sm rounded-md transition-colors focus-ring group",
                            "text-zinc-600 hover:text-black hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50"
                          )}
                        >
                          <span>{item.label}</span>
                          {item.status && (
                            <Badge 
                              variant={item.status} 
                              className="ml-2 px-1.5 py-0.5 text-[9px] h-5 pointer-events-none"
                            >
                              {getStatusLabel(item.status)}
                            </Badge>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
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
