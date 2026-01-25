import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function DesignCodigoPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Relação Design e Código
            </h1>
            <Badge variant="in_progress">Em andamento</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Um bom design pode falhar na implementação. Um código bem escrito pode entregar uma experiência ruim. 
            Essa página existe para conectar esses dois mundos.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              O Elo Perdido
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Quando design e implementação caminham separados, surgem problemas conhecidos: layouts que não escalam, componentes difíceis de manter e decisões visuais que quebram no código.
            </p>
          </div>
          <div className="space-y-4">
             <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              A Realidade
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              <strong>Design e implementação são partes da mesma decisão.</strong> 
              O layout é só o começo; a implementação é onde a experiência acontece de fato.
            </p>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Design não termina no layout
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
            <p>
              Quando um componente é desenhado, ele já deveria considerar estados, variações, comportamento, acessibilidade e performance.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Implementação também é experiência
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
            <p>
              Código não é neutro. Decisões técnicas influenciam performance, clareza, consistência e manutenção.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Design Systems como ponto de encontro
          </h2>
           <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
            <p>
              Um Design System bem feito documenta decisões, reduz ambiguidades, acelera implementação e mantém consistência.
            </p>
          </div>
        </section>
      </div>
      
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-12">
            <TableOfContents />
        </div>
      </div>
    </div>
  );
}
