import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

type CalloutType = "info" | "warning" | "danger" | "success" | "tip";

interface CalloutProps {
  children: React.ReactNode;
  type?: CalloutType;
  title?: string;
  className?: string;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  danger: AlertCircle,
  success: CheckCircle,
  tip: Info,
};

const styles = {
  info: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/30 dark:text-blue-200 dark:border-blue-900",
  warning: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-900",
  danger: "bg-red-50 text-red-900 border-red-200 dark:bg-red-950/30 dark:text-red-200 dark:border-red-900",
  success: "bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-200 dark:border-emerald-900",
  tip: "bg-zinc-50 text-zinc-900 border-zinc-200 dark:bg-zinc-900/50 dark:text-zinc-200 dark:border-zinc-800",
};

export function Callout({ children, type = "info", title, className }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "my-8 flex gap-3 border-l-4 rounded-r-md p-4 text-sm",
        styles[type],
        className
      )}
      role="alert"
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
      <div className="flex-1">
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        <div className="[&>p]:leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
}
