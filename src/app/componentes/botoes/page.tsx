import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductionNotice } from "@/components/ui/ProductionNotice";

export default function BotoesPage() {
  return (
    <div className="space-y-6">
      <ProductionNotice />
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
          Botões
        </h1>
        <StatusBadge />
      </div>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Muito além do clique. Vamos detalhar a anatomia de botões, variantes (primary, secondary, ghost), estados (hover, focus, disabled) e como implementar componentes de botão acessíveis e flexíveis com React e Tailwind.
      </p>
    </div>
  );
}
