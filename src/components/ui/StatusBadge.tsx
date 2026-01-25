import { Badge, BadgeVariant } from "./Badge";

export interface StatusBadgeProps {
  children?: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

export function StatusBadge({ children = "Em produção", className, variant = "production" }: StatusBadgeProps) {
  return (
    <Badge variant={variant} className={className}>
      {children}
    </Badge>
  );
}
