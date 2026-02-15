import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";

interface NavCardProps {
  title: string;
  description: string;
  href: string;
  status?: BadgeVariant;
}

export function NavCard({ title, description, href, status = "production" }: NavCardProps) {
  const isPlanned = status === "planned";

  if (isPlanned) {
    return (
      <div className="group relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-all opacity-60 cursor-not-allowed">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
          <Badge variant="planned">Em breve</Badge>
        </div>
        <p className="text-sm text-[var(--foreground-muted)]">{description}</p>
      </div>
    );
  }

  return (
    <Link 
      href={href}
      className="group relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:bg-[var(--surface-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h3>
        {status && status !== "production" && <Badge variant={status}>{status}</Badge>}
        <ArrowRight className="h-5 w-5 text-[var(--foreground-muted)] opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
      </div>
      <p className="text-sm text-[var(--foreground-muted)]">{description}</p>
    </Link>
  );
}
