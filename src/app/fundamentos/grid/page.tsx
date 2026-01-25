import { Badge } from "@/components/ui/Badge";

export default function GridPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Grid & Layout
            </h1>
            <Badge variant="production">Em produção</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Conteúdo em desenvolvimento.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />
      </div>
    </div>
  );
}
