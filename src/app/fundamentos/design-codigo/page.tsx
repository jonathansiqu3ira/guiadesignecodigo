import { TableOfContents } from "@/components/TableOfContents";

export default function DesignCodigoPage() {
  return (
    <div className="flex gap-12 items-start">
      {/* Conteúdo principal */}
      <article className="flex-1 max-w-3xl space-y-16 pb-16">

        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
            Relação Design e Código
          </h1>

          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Design e código não são etapas isoladas. São decisões diferentes
            sobre a mesma experiência, que precisam se sustentar juntas
            ao longo do tempo.
          </p>
        </header>

        {/* Design não termina no Figma */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Design não termina no Figma
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            O layout é apenas uma parte da decisão. Quando algo é desenhado
            sem considerar estados, variações, acessibilidade e comportamento,
            essas decisões não desaparecem. Elas apenas são empurradas para
            a implementação, normalmente sob pressão.
          </p>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Design que não considera código não termina. Ele é interrompido.
          </p>
        </section>

        {/* Responsabilidade compartilhada */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Responsabilidade compartilhada
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Design e código não são responsabilidades separadas.
            São perspectivas diferentes sobre a mesma experiência.
          </p>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Quando uma decisão não é discutida entre as duas áreas,
            alguém vai pagar esse custo depois. Normalmente o usuário.
          </p>
        </section>

        {/* Código também é experiência */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Código também é experiência
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Código não é neutro. Escolhas técnicas impactam diretamente:
          </p>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• performance</li>
            <li>• legibilidade</li>
            <li>• previsibilidade</li>
            <li>• manutenção</li>
            <li>• consistência entre telas</li>
          </ul>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Um código difícil de manter gera exceções. Exceções viram
            inconsistência. Inconsistência afeta diretamente a experiência.
          </p>
        </section>

        {/* Onde o ruído acontece */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Onde o ruído acontece
          </h2>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• componentes sem estados definidos</li>
            <li>• tokens visuais que não existem no código</li>
            <li>• layouts impossíveis de escalar</li>
            <li>• ajustes feitos apenas no CSS</li>
            <li>• decisões que não voltam para o design</li>
          </ul>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Nada disso é falha de uma área só. É falta de visão sistêmica.
          </p>
        </section>

        {/* Pensar como Design Technologist */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Pensar como Design Technologist
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Pensar como Design Technologist não é virar desenvolvedor.
            É entender o suficiente para decidir melhor.
          </p>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• desenhar componentes reutilizáveis</li>
            <li>• pensar em tokens, não em valores soltos</li>
            <li>• considerar limites técnicos reais</li>
            <li>• facilitar implementação e manutenção</li>
            <li>• preservar a experiência ao longo do tempo</li>
          </ul>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Nem toda decisão é perfeita. Algumas são possíveis.
            Bons produtos são feitos de escolhas conscientes.
          </p>
        </section>

        {/* Design Systems como ponte */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Design Systems como ponte
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Um Design System não é um arquivo bonito.
            Ele é uma linguagem compartilhada entre design e código.
          </p>

          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>• reduz ambiguidade</li>
            <li>• acelera decisões</li>
            <li>• melhora consistência</li>
            <li>• diminui retrabalho</li>
          </ul>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Só funciona quando é pensado para uso real,
            não para apresentação.
          </p>
        </section>

        {/* Fechamento */}
        <section className="border border-[var(--technical-border)] p-6 space-y-6">
          <h2 className="text-base font-medium text-[var(--foreground)]">
            Este guia não ensina telas.
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Ensina decisões que continuam fazendo sentido
            depois que o código existe.
          </p>
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
