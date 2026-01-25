import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function CoresPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Cores
            </h1>
            <Badge variant="production">Em produção</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Cor não é decoração, é função. O sistema de cores do projeto prioriza contraste, semântica e suporte nativo a temas (claro/escuro).
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Abordagem
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Evitamos cores saturadas em grandes áreas para reduzir fadiga visual. 
              Usamos cores apenas para chamar atenção para ações (azul/violeta) ou estados (verde/vermelho/âmbar).
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Princípios
            </h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Fundo neutro (Zinc) para destacar o conteúdo
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Contraste acessível (WCAG AA no mínimo)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Significado consistente (ex: vermelho é sempre erro)
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Paleta Semântica
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
            <p>
              Em vez de usar hexcodes hexadecimais diretamente (`#000000`), usamos variáveis semânticas:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><code>--background</code>: Fundo da página (branco ou quase preto).</li>
              <li><code>--foreground</code>: Texto principal.</li>
              <li><code>--technical-border</code>: Linhas estruturais sutis.</li>
              <li><code>--primary</code>: Ação principal.</li>
            </ul>
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
