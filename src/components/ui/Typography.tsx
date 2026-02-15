import React from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/ui/CopyButton";

// --- Headings ---
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  id?: string;
}

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-[var(--foreground)] mb-6",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, id, className, ...props }: HeadingProps) {
  // Auto-generate ID if not provided could be handled here or in MDX provider
  return (
    <h2
      id={id}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight text-[var(--foreground)] mt-12 mb-4 first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, id, className, ...props }: HeadingProps) {
  return (
    <h3
      id={id}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-[var(--foreground)] mt-8 mb-3",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

// --- Text ---
export function Paragraph({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "leading-7 text-[var(--foreground-muted)] [&:not(:first-child)]:mt-6 text-base",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

// --- Lists ---
export function List({ children, className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-[var(--foreground-muted)] text-base", className)} {...props}>
      {children}
    </ul>
  );
}

export function ListItem({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("pl-2", className)} {...props}>
      {children}
    </li>
  );
}

// --- Inline Code ---
export function InlineCode({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-[var(--surface-highlight)] px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-[var(--foreground)]",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
