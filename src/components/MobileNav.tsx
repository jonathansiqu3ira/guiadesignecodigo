"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { navigation, getStatusLabel, APP_VERSION } from "@/config/navigation";
import { ThemeToggle } from "./ui/ThemeToggle";
import { SearchDialog } from "./ui/SearchDialog";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-[var(--background)] border-b border-[var(--border)]/40 flex items-center justify-between px-4 z-40">
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
        "fixed inset-y-0 right-0 w-[80%] max-w-sm bg-[var(--background)] z-50 border-l border-[var(--border)]/60 transform transition-transform duration-300 ease-out flex flex-col shadow-lg",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]/40">
          <span className="font-medium text-zinc-500">Navegação</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pt-4">
          <SearchDialog />
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
                      onClick={(e) => {
                        if (item.status === 'planned') {
                          e.preventDefault();
                          return;
                        }
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between py-2 px-2 text-sm rounded-md transition-colors",
                         item.status === 'planned' 
                          ? "text-zinc-400 dark:text-zinc-600 cursor-not-allowed" 
                          : "text-zinc-600 hover:text-black hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50"
                      )}
                      aria-disabled={item.status === 'planned'}
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

        <div className="p-4 border-t border-[var(--border)]/40 flex items-center justify-between">
          <div className="text-xs text-zinc-400">v{APP_VERSION}</div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
