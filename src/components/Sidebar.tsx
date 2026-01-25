"use client";

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { StatusBadge } from './ui/StatusBadge';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    ]
  },
  {
    title: 'Fundamentos',
    items: [
      { label: 'UX básico aplicado', href: '/fundamentos/ux', status: 'production' },
      { label: 'Acessibilidade', href: '/fundamentos/acessibilidade', status: 'production' },
      { label: 'Usabilidade', href: '/fundamentos/usabilidade', status: 'production' },
    ]
  },
  {
    title: 'Design & Código',
    items: [
      { label: 'Relação entre design e implementação', href: '/fundamentos/design-codigo' },
      { label: 'Decisões orientadas ao código', href: '/fundamentos/decisoes', status: 'production' },
    ]
  },
  {
    title: 'Tipografia',
    items: [
      { label: 'Hierarquia', href: '/fundamentos/tipografia' },
      { label: 'Legibilidade', href: '/fundamentos/legibilidade', status: 'production' },
    ]
  },
  {
    title: 'Cores',
    items: [
      { label: 'Uso funcional', href: '/fundamentos/cores' },
      { label: 'Contraste', href: '/fundamentos/contraste', status: 'production' },
    ]
  },
  {
    title: 'Grid & Layout',
    items: [
      { label: 'Estrutura e responsividade', href: '/fundamentos/grid' },
    ]
  },
  {
    title: 'Componentes',
    items: [
      { label: 'Visão geral', href: '/componentes/overview', status: 'production' },
      { label: 'Botões', href: '/componentes/botoes' },
      { label: 'Inputs', href: '/componentes/inputs' },
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

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-[var(--technical-border)] bg-[var(--background)] hidden md:flex flex-col">
      <div className="p-6 border-b border-[var(--technical-border)]">
        <div className="font-medium tracking-tight">
          Guia Prático<br />
          <span className="text-zinc-500">Design e Código</span>
        </div>
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
                        {item.status === 'production' ? (
                          <div className="flex items-center justify-between py-1 px-0 text-sm text-zinc-400 cursor-default select-none group/item">
                            <span className="truncate mr-2">{item.label}</span>
                            <StatusBadge className="opacity-70 group-hover/item:opacity-100 transition-opacity" />
                          </div>
                        ) : (
                          <Link 
                            href={item.href}
                            className="block py-1.5 px-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50 transition-colors rounded-md focus-ring"
                          >
                            {item.label}
                          </Link>
                        )}
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
