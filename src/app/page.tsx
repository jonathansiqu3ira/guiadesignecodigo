import { TableOfContents } from "@/components/TableOfContents";

export default function Home() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
            Guia Prático – Design e Código
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Um guia pessoal documentando como eu penso, projeto e implemento interfaces digitais.
            Conectando design, UX e código de forma prática.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Sobre este projeto</h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Este não é um produto comercial ou um Design System corporativo. É um <strong>guia prático</strong>, 
              no formato de documentação, criado para organizar raciocínio, decisões e boas práticas aplicadas ao dia a dia.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Propósito</h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Registrar decisões de design e implementação
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Conectar UX, UI e front-end de forma realista
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Compartilhar processos e critérios aplicáveis
              </li>
            </ul>
          </div>
        </section>

        <section className="p-8 border border-[var(--technical-border)] bg-[var(--background)]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Formato do conteúdo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[var(--foreground)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-[var(--technical-border)] rounded-sm text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <span>Navegação clara e previsível</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center border border-[var(--technical-border)] rounded-sm text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <span>Conteúdo focado em leitura</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center border border-[var(--technical-border)] rounded-sm text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <span>Estrutura consistente entre páginas</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 flex items-center justify-center border border-[var(--technical-border)] rounded-sm text-zinc-500">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span>Organização para consulta recorrente</span>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium">O que você vai encontrar aqui</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
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
