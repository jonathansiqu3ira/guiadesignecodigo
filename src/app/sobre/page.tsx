import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function SobrePage() {
  return (
    <div className="flex gap-12 items-start">
      {/* Conteúdo principal */}
      <article className="flex-1 max-w-3xl space-y-16 pb-16">

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Sobre
            </h1>
            <Badge variant="in_progress">Em andamento</Badge>
          </div>

          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            O Guia Prático – Design e Código é um projeto pessoal em formato
            de documentação. Ele existe para organizar decisões, critérios
            e boas práticas que surgem no dia a dia de quem projeta e
            implementa interfaces digitais.
          </p>

          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Não é um curso, nem um Design System corporativo.
            É um espaço para registrar como o design se sustenta
            quando o código começa.
          </p>
        </header>

        {/* Por que ele existe */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Por que ele existe
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Existe um ruído recorrente entre:
          </p>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• o que é desenhado no Figma</li>
            <li>• o que é implementado no front-end</li>
            <li>• o que o usuário realmente experimenta</li>
          </ul>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Este guia nasce para reduzir esse ruído.
            Para tratar design e código como partes da mesma decisão,
            não como etapas isoladas.
          </p>
        </section>

        {/* Para quem é */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Para quem é
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Este conteúdo é pensado para:
          </p>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• UX/UI Designers que querem decisões mais viáveis</li>
            <li>• Desenvolvedores front-end que querem interfaces mais bem resolvidas</li>
            <li>• Pessoas que atuam na interseção entre design, produto e engenharia</li>
            <li>• Quem se identifica com o papel de Design Technologist</li>
          </ul>

          <p className="text-sm text-zinc-500">
            Não é material introdutório.
            É conteúdo de consulta e reflexão aplicada.
          </p>
        </section>

        {/* Como usar este guia */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Como usar este guia
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Cada página pode ser lida de forma independente.
            O foco não é leitura linear, mas retorno constante.
          </p>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• validar decisões</li>
            <li>• revisar padrões</li>
            <li>• alinhar design e implementação</li>
            <li>• evitar retrabalho</li>
          </ul>
        </section>

        {/* Princípios */}
        <section className="border border-[var(--technical-border)] p-6 space-y-6">
          <h2 className="text-base font-medium text-[var(--foreground)]">
            Princípios que guiam o projeto
          </h2>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• UX não termina no layout</li>
            <li>• Código também comunica experiência</li>
            <li>• Clareza é mais importante que complexidade</li>
            <li>• Sistemas bons reduzem esforço cognitivo</li>
            <li>• Design precisa sobreviver à implementação</li>
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
