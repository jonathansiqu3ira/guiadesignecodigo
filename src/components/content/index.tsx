import React from "react";
import { cn } from "@/lib/utils";
import { TableOfContents } from "@/components/TableOfContents";

// --- Layout Components ---

interface ContentPageProps {
  children: React.ReactNode;
  toc?: boolean;
}

export function ContentPage({ children, toc = true }: ContentPageProps) {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        {children}
      </div>
      {toc && (
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-12">
            <TableOfContents />
          </div>
        </div>
      )}
    </div>
  );
}

interface ContentHeaderProps {
  title: string;
  subtitle: React.ReactNode;
}

export function ContentHeader({ title, subtitle }: ContentHeaderProps) {
  return (
    <header className="space-y-6">
      <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
        {title}
      </h1>
      <div className="space-y-4 text-xl text-zinc-600 dark:text-zinc-500 max-w-2xl leading-relaxed">
        {subtitle}
      </div>
    </header>
  );
}

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string; // For anchor links
}

export function ContentSection({ children, className, id }: ContentSectionProps) {
  return (
    <section id={id} className={cn("space-y-6", className)}>
      {children}
    </section>
  );
}

// --- Typography Components ---

export function ContentH2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="text-2xl font-medium text-[var(--foreground)] scroll-mt-20"
    >
      {children}
    </h2>
  );
}

export function ContentText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed", className)}>
      {children}
    </div>
  );
}

export function ContentList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 text-base list-none pl-1">
      {children}
    </ul>
  );
}

export function ContentListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <span className="mr-3 text-zinc-500 dark:text-zinc-400 select-none" aria-hidden="true">—</span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

// --- Specific Content Blocks ---

// "Bloco de raciocínio" or "Destaque" - max 1 per page ideally
export function ConceptBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-8 p-8 border border-[var(--technical-border)] bg-[var(--background)] rounded-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
        {title}
      </h3>
      <div className="text-[var(--foreground)] space-y-4">
        {children}
      </div>
    </div>
  );
}

// "Fechamento editorial"
export function EditorialClose({ title = "A proposta deste guia", children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 p-8 border-t border-[var(--technical-border)] bg-[var(--background)]">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
        {title}
      </h2>
      <div className="text-[var(--foreground)] space-y-4">
        {children}
      </div>
    </section>
  );
}

export function ContentDivider() {
  return <hr className="border-[var(--technical-border)] my-12" />;
}
