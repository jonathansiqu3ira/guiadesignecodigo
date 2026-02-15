"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, Code } from "lucide-react";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ 
  title, 
  description, 
  code, 
  children,
  className 
}: ComponentPreviewProps) {
  const [view, setView] = useState<"preview" | "code">("preview");

  return (
    <div className={cn("border border-[var(--border)] rounded-lg overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
        <div>
          <h4 className="text-sm font-medium text-[var(--foreground)]">{title}</h4>
          {description && (
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">{description}</p>
          )}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setView("preview")}
            className={cn(
              "p-1.5 rounded text-xs transition-colors",
              view === "preview" 
                ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm" 
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            )}
            aria-label="Ver preview"
          >
            <Eye size={14} />
          </button>
          <button
            onClick={() => setView("code")}
            className={cn(
              "p-1.5 rounded text-xs transition-colors",
              view === "code" 
                ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm" 
                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            )}
            aria-label="Ver código"
          >
            <Code size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      {view === "preview" ? (
        <div className="p-6 bg-[var(--background)]">
          {children}
        </div>
      ) : (
        <div className="bg-[var(--surface)]">
          <pre className="p-4 text-sm font-mono text-[var(--foreground-muted)] overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
