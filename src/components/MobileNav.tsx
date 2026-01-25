"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge, BadgeVariant } from "./ui/Badge";
import { ThemeToggle } from "./ThemeToggle";

// Duplicating config for now strictly to avoid export issues, 
// normally would extract to a shared config file.
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
      { label: 'Referências', href: '/referencias', status: 'in_progress' },
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
      { label: 'Botões', href: '/componentes/botoes', status: 'production' },
      { label: 'Inputs', href: '/componentes/inputs', status: 'production' },
    ]
  }
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Status map (duplicating to match sidebar logic)
  const getStatusLabel = (status: BadgeVariant) => {
    switch (status) {
      case 'available': return 'Disponível';
      case 'in_progress': return 'Em andamento';
      default: return 'Em produção';
    }
  };

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-[var(--background)] border-b border-[var(--technical-border)] flex items-center justify-between px-4 z-40">
        <Link href="/" className="font-medium tracking-tight text-sm">
          Guia Prático
        </Link>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-14" />

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-[1px] animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={cn(
        "fixed inset-y-0 right-0 w-[80%] max-w-sm bg-[var(--background)] z-50 border-l border-[var(--technical-border)] transform transition-transform duration-300 ease-out flex flex-col shadow-xl",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-[var(--technical-border)]">
          <span className="font-medium text-zinc-500">Navegação</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-2 px-2 text-sm text-zinc-600 hover:text-black hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50 rounded-md transition-colors"
                    >
                      {item.label}
                      {item.status && (
                        <Badge 
                          variant={item.status} 
                          className="ml-2 py-0.5 px-1.5 text-[9px] h-5 pointer-events-none"
                        >
                          {getStatusLabel(item.status)}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--technical-border)] flex items-center justify-between">
          <div className="text-xs text-zinc-400">v0.1.1</div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
