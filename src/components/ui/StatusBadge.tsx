import { cn } from "@/lib/utils";


export interface StatusBadgeProps {
  children?: React.ReactNode;
  className?: string;
}

export function StatusBadge({ children = "Em produção", className }: StatusBadgeProps) {
  const text = typeof children === 'string' ? children : "Em produção";

  return (
    <span 
      title={text}
      className={cn(
        "inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]",
        "bg-zinc-100 text-zinc-500 border border-zinc-200",
        "dark:bg-zinc-800 dark:text-zinc-500 dark:border-zinc-700",
        className
      )}
    >
      {children}
    </span>
  );
}
