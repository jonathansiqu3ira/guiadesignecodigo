import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductionNotice } from "@/components/ui/ProductionNotice";

export default function InputsPage() {
  return (
    <div className="space-y-6">
      <ProductionNotice />
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
          Inputs
        </h1>
        <StatusBadge />
      </div>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Campos de entrada de texto e formulários.
      </p>
    </div>
  );
}
