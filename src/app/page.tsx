import { TableOfContents } from "@/components/TableOfContents";
import { Compass, BookOpen, Layout, Bookmark } from "lucide-react";

export default function Home() {
  return (
    <div className="flex gap-12 items-start">
      {/* Conteúdo principal */}
      <article className="flex-1 max-w-3xl space-y-16 pb-16">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
            Guia Prático – Design e Código
          </h1>

          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Um guia pessoal em formato de documentação, onde organizo
            como penso, projeto e implemento interfaces digitais,
            conectando UX, UI e código de forma prática.
          </p>
        </header>

        {/* Sobre / Propósito */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-[var(--foreground)]">
              Sobre este projeto
            </h2>

            <p className="text-base text-zinc-600 dark:text-zinc-400">
              Este não é um produto comercial nem um Design System corporativo.
              É um guia prático, no formato de documentação, criado para
              organizar raciocínio, decisões e boas práticas aplicadas
              ao dia a dia.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium text-[var(--foreground)]">
              Propósito
            </h2>

            <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
              <li>• registrar decisões de design e implementação</li>
              <li>• conectar UX, UI e front-end de forma realista</li>
              <li>• compartilhar processos e critérios aplicáveis</li>
            </ul>
          </div>
        </section>

        {/* Formato do conteúdo (cards quadrados) */}
        <section className="border border-[var(--technical-border)] p-6 space-y-6">
          <h2 className="text-base font-medium text-[var(--foreground)]">
            Formato do conteúdo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-zinc-100/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                <Compass size={16} />
              </div>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Navegação clara e previsível
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-zinc-100/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                <BookOpen size={16} />
              </div>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Conteúdo focado em leitura
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-zinc-100/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                <Layout size={16} />
              </div>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Estrutura consistente entre páginas
              </p>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-zinc-100/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                <Bookmark size={16} />
              </div>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Organização para consulta recorrente
              </p>
            </div>
          </div>
        </section>

        {/* O que você vai encontrar */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            O que você vai encontrar aqui
          </h2>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• fundamentos de UX aplicados a interfaces</li>
            <li>• decisões de UI explicadas com contexto</li>
            <li>• componentes comuns (botões, inputs, etc.)</li>
            <li>• considerações técnicas de implementação</li>
          </ul>
        </section>

      </article>

      {/* TOC */}
      <aside className="hidden xl:block w-64">
        <div className="sticky top-12">
          <TableOfContents />
        </div>
      </aside>
    </div>
  );
}
