import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductionNotice } from "@/components/ui/ProductionNotice";

export default function CoresPage() {
  return (
    <div className="space-y-6">
      <ProductionNotice />
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
          Cores
        </h1>
        <StatusBadge />
      </div>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        O sistema de cores abordará o uso semântico de tokens, garantindo consistência e acessibilidade. Veremos como criar paletas escaláveis, entender o papel das cores funcionais (sucesso, erro, alerta) e como implementar suporte a dark mode via variáveis CSS.
      </p>
    </div>
  );
}
