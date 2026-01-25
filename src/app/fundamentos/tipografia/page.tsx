import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function TipografiaPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Tipografia
            </h1>
            <Badge variant="production">Em produção</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A tipografia é a espinha dorsal da interface. Ela define ritmo, hierarquia e a voz do produto.
            Mais do que escolher fontes, é sobre criar um sistema de leitura confortável e previsível.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              O Problema
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Interfaces muitas vezes sofrem com excesso de tamanhos, falta de contraste e escalas arbitrárias. 
              Isso fadiga o usuário e quebra o fluxo de leitura.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Diretrizes
            </h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Use uma escala modular (ex: 1.250 Major Third)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Limite a quantidade de pesos (Regular, Medium, Semibold)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Line-height deve ser confortável (1.5 para texto, 1.2 para títulos)
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Escala e Hierarquia
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p>
              Em vez de definir tamanhos aleatórios, estabelecemos tokens semânticos:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-600 dark:text-zinc-400">
              <li><strong>Display</strong>: Para impacto visual (landing pages).</li>
              <li><strong>Heading</strong>: Títulos estruturais de página.</li>
              <li><strong>Body</strong>: Leitura longa e padrão.</li>
              <li><strong>Label/Meta</strong>: Informações de apoio e interface densa.</li>
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
