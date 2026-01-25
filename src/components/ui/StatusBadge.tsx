import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  className?: string;
}

export function StatusBadge({ className }: StatusBadgeProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        "bg-zinc-100 text-zinc-600 border border-zinc-200",
        "dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700",
        className
      )}
    >
      Em produção
    </span>
  );
}
