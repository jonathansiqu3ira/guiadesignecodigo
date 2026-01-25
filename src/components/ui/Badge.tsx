import { cn } from "@/lib/utils";

export type BadgeVariant = 
  | 'production' 
  | 'stable' 
  | 'experimental' 
  | 'accessible' 
  | 'attention' 
  | 'standard'
  | 'in_progress';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  production: "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700",
  stable: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800",
  experimental: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800",
  accessible: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800",
  attention: "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-800",
  standard: "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800",
  in_progress: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400 dark:border-amber-500/30",
};

export function Badge({ children, variant = "production", className }: BadgeProps) {
  const text = typeof children === 'string' ? children : undefined;

  return (
    <span 
      title={text}
      className={cn(
        "inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
