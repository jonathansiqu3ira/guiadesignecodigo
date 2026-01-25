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
          <div className="space-y-4 text-xl text-zinc-600 dark:text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            <h2 className="text-2xl font-medium text-[var(--foreground)] mb-2">Design não termina no Figma</h2>
            <p>
              O layout é apenas uma parte da decisão.
            </p>
             <p className="text-lg">
              Quando algo é desenhado sem considerar estados, variações, acessibilidade e comportamento, essas decisões não desaparecem. Elas apenas são empurradas para a implementação, normalmente sob pressão.
            </p>
             <p className="text-lg font-medium text-[var(--foreground)]">
              Design que não considera código não termina. Ele é interrompido.
            </p>
          </div>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Código também é experiência
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-500 dark:text-zinc-400">
            <p>
              Código não é neutro. Escolhas técnicas impactam:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>performance</li>
              <li>legibilidade</li>
              <li>previsibilidade</li>
              <li>manutenção</li>
              <li>consistência entre telas</li>
            </ul>
            <p className="mt-4">
              Um código difícil de manter gera exceções. Exceções viram inconsistência. Inconsistência afeta diretamente a experiência do usuário.
            </p>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Onde o ruído acontece
            </h2>
            <div className="space-y-2 text-[var(--foreground)]">
              <p className="text-sm text-zinc-500 mb-4">
                Alguns sinais comuns de desalinhamento entre design e código:
              </p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  componentes sem estados definidos
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  tokens visuais que não existem no código
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  layouts impossíveis de escalar
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  ajustes feitos “só no CSS”
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  decisões que não voltam para o design
                </li>
              </ul>
              <p className="text-sm font-medium mt-4 pt-4 border-t border-[var(--technical-border)]">
                Nada disso é falha de uma área só. É falta de visão sistêmica.
              </p>
            </div>
          </div>

           <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Pensar como Design Technologist
            </h2>
             <div className="space-y-4 text-[var(--foreground)]">
              <p className="text-sm text-zinc-500 mb-4">
                 Pensar como Design Technologist não é virar desenvolvedor. É entender o suficiente para decidir melhor. Isso envolve:
              </p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  desenhar componentes reutilizáveis
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  pensar em tokens, não em valores soltos
                </li>
                 <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  considerar limites técnicos reais
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                  facilitar implementação e manutenção
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-zinc-500 dark:text-zinc-400">—</span>
                   preservar a experiência ao longo do tempo
                </li>
              </ul>
            </div>
          </div>
        </section>

         <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Design Systems como ponte
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-500 dark:text-zinc-400">
            <p>
              Um Design System não é um arquivo bonito. Ele é uma linguagem compartilhada entre design e código.
            </p>
            <p>
               Quando bem feito, ele:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-sm">
              <li>reduz ambiguidade</li>
              <li>acelera decisões</li>
              <li>melhora consistência</li>
              <li>diminui retrabalho</li>
            </ul>
             <p className="mt-4 font-medium text-[var(--foreground)]">
               Mas só funciona se for pensado para uso real, não apresentação.
            </p>
          </div>
        </section>

        <section className="p-8 border border-[var(--technical-border)] bg-[var(--background)]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">A proposta deste guia</h2>
          <p className="text-[var(--foreground)] mb-4">
             Neste projeto, cada conteúdo tenta responder:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[var(--foreground)] font-medium">
             <div className="padding-4 border-l-2 border-zinc-300 pl-4">
               Por que essa decisão existe?
             </div>
             <div className="padding-4 border-l-2 border-zinc-300 pl-4">
               Como ela impacta a experiência?
             </div>
             <div className="padding-4 border-l-2 border-zinc-300 pl-4">
               Como ela se sustenta no código?
             </div>
          </div>
           <p className="text-[var(--foreground)] mt-6 text-sm">
             O foco não é ferramenta. É raciocínio aplicado.
          </p>
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
