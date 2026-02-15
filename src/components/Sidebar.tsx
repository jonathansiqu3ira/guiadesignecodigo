"use client";

import Link from 'next/link';
import { Badge } from './ui/Badge';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation, getStatusLabel, APP_VERSION } from '@/config/navigation';
import { ThemeToggle } from './ui/ThemeToggle';
import { SearchDialog } from './ui/SearchDialog';

export function Sidebar() {
  const [openSections, setOpenSections] = useState<string[]>(
    navigation.map(s => s.title)
  );

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-[var(--border)]/60 bg-[var(--surface)]/40 hidden md:flex flex-col">
      <div className="p-6 border-b border-[var(--border)]/40">
        <Link 
          href="/" 
          className="block font-medium tracking-tight hover:opacity-70 transition-opacity focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-sm outline-none"
          aria-label="Voltar para a página inicial"
        >
          Guia Prático<br />
          <span className="text-zinc-500">Design e Código</span>
        </Link>
      </div>

      <div className="px-4 pt-4">
        <SearchDialog />
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
                  className="flex items-center justify-between w-full text-left group mb-1 rounded-md py-1.5 px-2 -ml-2 focus-ring hover:bg-[var(--surface-highlight)]/50 transition-colors"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                    {section.title}
                  </h3>
                  <ChevronRight 
                    size={14} 
                    className={cn(
                      "text-zinc-500 dark:text-zinc-400 transition-transform duration-200",
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
                            "flex items-center justify-between py-2 px-3 text-sm rounded-md transition-colors focus-ring group border-l-2",
                            item.status === 'planned' 
                              ? "text-zinc-400 dark:text-zinc-600 cursor-not-allowed border-transparent" 
                              : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-highlight)]/40 border-transparent hover:border-[var(--border-highlight)]"
                          )}
                          aria-disabled={item.status === 'planned'}
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
      
      <div className="p-6 border-t border-[var(--border)]/40 flex items-center justify-between">
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          v{APP_VERSION}
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
}
