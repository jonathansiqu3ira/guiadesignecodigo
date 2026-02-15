import React from "react";
import { cn } from "@/lib/utils";
import { TableOfContents } from "@/components/TableOfContents";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  toc?: boolean;
  aside?: React.ReactNode;
}

export function PageLayout({ children, className, toc = true, aside }: PageLayoutProps) {
  return (
    <div className={cn("relative flex gap-10 items-start", className)}>
      {/* Main Content Area */}
      <article className="flex-1 min-w-0">
        <div className="max-w-[65ch] w-full pb-16">
          <Breadcrumbs />
          <div className="space-y-10">
            {children}
          </div>
        </div>
      </article>

      {/* Right Sidebar */}
      {(toc || aside) && (
        <aside className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-16 space-y-10">
            {aside}
            {toc && <TableOfContents />}
          </div>
        </aside>
      )}
    </div>
  );
}
