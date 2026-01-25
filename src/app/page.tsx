import { TableOfContents } from "@/components/TableOfContents";
import { Compass, BookOpen, Layout, Bookmark } from "lucide-react";

export default function Home() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
            Guia Prático – Design e Código
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Um guia pessoal documentando como eu penso, projeto e implemento interfaces digitais.
            Conectando design, UX e código de forma prática.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-400">Sobre este projeto</h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Este não é um produto comercial ou um Design System corporativo. É um <strong>guia prático</strong>, 
              no formato de documentação, criado para organizar raciocínio, decisões e boas práticas aplicadas ao dia a dia.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-400">Propósito</h2>
            <ul className="space-y-3 text-[var(--foreground)]">
              <li className="flex items-start">
                <span className="mr-3 text-zinc-600 dark:text-zinc-500 font-medium">—</span>
                Registrar decisões de design e implementação
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-600 dark:text-zinc-500 font-medium">—</span>
                Conectar UX, UI e front-end de forma realista
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-600 dark:text-zinc-500 font-medium">—</span>
                Compartilhar processos e critérios aplicáveis
              </li>
            </ul>
          </div>
        </section>

        <section className="p-8 border border-[var(--technical-border)] bg-[var(--background)]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Formato do conteúdo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[var(--foreground)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-sm text-zinc-700 bg-zinc-100/50 dark:bg-zinc-800 dark:text-zinc-400">
                <Compass size={18} />
              </div>
              <span>Navegação clara e previsível</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center rounded-sm text-zinc-700 bg-zinc-100/50 dark:bg-zinc-800 dark:text-zinc-400">
                <BookOpen size={18} />
              </div>
              <span>Conteúdo focado em leitura</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center rounded-sm text-zinc-700 bg-zinc-100/50 dark:bg-zinc-800 dark:text-zinc-400">
                <Layout size={18} />
              </div>
              <span>Estrutura consistente entre páginas</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center rounded-sm text-zinc-700 bg-zinc-100/50 dark:bg-zinc-800 dark:text-zinc-400">
                 <Bookmark size={18} />
              </div>
              <span>Organização para consulta recorrente</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">O que você vai encontrar aqui</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-500 dark:text-zinc-400">
            <ul className="list-disc pl-5 space-y-2">
              <li>Fundamentos de <strong>UX aplicados</strong> a interfaces</li>
              <li>Decisões de <strong>UI explicadas</strong> com contexto</li>
              <li>Componentes comuns (botões, inputs, etc.)</li>
              <li>Considerações técnicas de implementação</li>
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
