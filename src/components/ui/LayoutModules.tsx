import { cn } from "@/lib/utils";

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("space-y-6", className)}>
      {children}
    </section>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <hr className={cn("border-[var(--technical-border)]", className)} />
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "p-4 border border-[var(--technical-border)] rounded bg-zinc-50/50 dark:bg-zinc-900/30",
      className
    )}>
      {children}
    </div>
  );
}
