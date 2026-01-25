import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function SobrePage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Sobre
            </h1>
            <Badge variant="in_progress">Em andamento</Badge>
          </div>
          <div className="space-y-4 text-xl text-zinc-600 dark:text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            <p>
              O Guia Prático – Design e Código é um projeto pessoal em formato de documentação.
              Ele existe para organizar decisões, critérios e boas práticas que surgem no dia a dia de quem projeta e implementa interfaces digitais.
            </p>
            <p className="text-lg">
              Não é um curso, nem um Design System corporativo.
              É um espaço para registrar como o design se sustenta quando o código começa.
            </p>
          </div>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Por que ele existe
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-500 dark:text-zinc-400">
            <p>
              Existe um ruído recorrente entre:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>o que é desenhado no Figma</li>
              <li>o que é implementado no front-end</li>
              <li>o que o usuário realmente experimenta</li>
            </ul>
            <p className="mt-4">
              Este guia nasce para reduzir esse ruído. Para tratar design e código como partes da mesma decisão, não como etapas isoladas.
            </p>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Para quem é
            </h2>
            <div className="space-y-4 text-[var(--foreground)]">
              <p>Este conteúdo é pensado para:</p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  UX/UI Designers que querem decisões mais viáveis
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  Desenvolvedores front-end que querem interfaces mais bem resolvidas
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  Pessoas que atuam na interseção entre design, produto e engenharia
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  Quem se identifica com o papel de Design Technologist
                </li>
              </ul>
              <p className="text-sm text-zinc-500 italic">
                Não é material introdutório. É conteúdo de consulta e reflexão aplicada.
              </p>
            </div>
          </div>
          
           <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Como usar este guia
            </h2>
             <div className="space-y-4 text-[var(--foreground)]">
              <p>
                Cada página pode ser lida de forma independente. O foco não é leitura linear, mas retorno constante.
              </p>
              <p className="font-medium text-sm">Use este guia para:</p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  validar decisões
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  revisar padrões
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  alinhar design e implementação
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  evitar retrabalho
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-8 border border-[var(--technical-border)] bg-[var(--background)]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">Princípios que guiam o projeto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-[var(--foreground)]">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
              <span>UX não termina no layout</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
              <span>Código também comunica experiência</span>
            </div>
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
              <span>Clareza é mais importante que complexidade</span>
            </div>
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
              <span>Sistemas bons reduzem esforço cognitivo</span>
            </div>
            <div className="flex items-center gap-3 col-span-1 sm:col-span-2">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
              <span>Design precisa sobreviver à implementação</span>
            </div>
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
