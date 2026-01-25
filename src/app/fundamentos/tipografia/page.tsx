import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductionNotice } from "@/components/ui/ProductionNotice";

export default function TipografiaPage() {
  return (
    <div className="space-y-6">
      <ProductionNotice />
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
          Tipografia
        </h1>
        <StatusBadge />
      </div>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Um guia completo sobre hierarquia, ritmo e escalas tipográficas. Abordaremos como escolher fontes para interfaces, configurar stacks de fontes responsivas no CSS e garantir legibilidade perfeita em diferentes densidades de tela.
      </p>
    </div>
  );
}
