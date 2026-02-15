import React from "react";
import { Badge, BadgeVariant } from "@/components/ui/Badge";
import { getStatusLabel } from "@/config/navigation";
import { H1, Paragraph } from "@/components/ui/Typography";

interface PageHeaderProps {
  title: string;
  description?: string;
  status?: BadgeVariant;
}

export function PageHeader({ title, description, status }: PageHeaderProps) {
  return (
    <header className="space-y-4 pb-8 mb-2 border-b border-[var(--border)]/40">
      <div className="flex items-center gap-3">
        <H1 className="mb-0">{title}</H1>
        {status && (
          <Badge variant={status}>{getStatusLabel(status)}</Badge>
        )}
      </div>
      {description && (
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
          {description}
        </Paragraph>
      )}
    </header>
  );
}
