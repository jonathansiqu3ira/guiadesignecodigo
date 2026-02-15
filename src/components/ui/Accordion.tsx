"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[var(--border)] rounded overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors text-left"
      >
        <span className="font-medium text-[var(--foreground)]">{title}</span>
        <ChevronDown
          size={16}
          className={cn(
            "text-zinc-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
           <div className="p-4 pt-0 border-t border-[var(--border)] bg-[var(--background)]">
            <div className="pt-4 text-zinc-600 dark:text-zinc-400">
               {children}
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
