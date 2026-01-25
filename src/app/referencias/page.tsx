import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ReferenciasPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Referências
            </h1>
            <Badge variant="in_progress">Em andamento</Badge>
          </div>
          <div className="space-y-4 text-xl text-zinc-600 dark:text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            <h2 className="text-2xl font-medium text-[var(--foreground)] mb-2">Como usar esta página</h2>
            <p>
              Esta não é uma lista exaustiva nem um compilado de tendências.
            </p>
             <p className="text-lg">
              As referências aqui listadas influenciam a forma de pensar design, estruturar sistemas e a relação entre UX, UI e implementação.
            </p>
             <p className="text-lg font-medium text-[var(--foreground)]">
              São fontes para consulta recorrente, não leitura obrigatória.
            </p>
          </div>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Design & UX
            </h2>
            <ul className="space-y-4">
                <li>
                    <a href="https://m3.material.io/" target="_blank" className="block group">
                        <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                            Material Design <ExternalLink size={12} className="text-zinc-500 dark:text-zinc-400"/>
                        </span>
                        <span className="text-sm text-zinc-500 block">Princípios de interação e estados</span>
                    </a>
                </li>
                 <li>
                    <a href="https://www.nngroup.com/" target="_blank" className="block group">
                        <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                             Nielsen Norman Group <ExternalLink size={12} className="text-zinc-500 dark:text-zinc-400"/>
                        </span>
                        <span className="text-sm text-zinc-500 block">Pesquisa, usabilidade e comportamento</span>
                    </a>
                </li>
                 <li>
                    <a href="https://design-system.service.gov.uk/" target="_blank" className="block group">
                        <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                            GOV.UK Design System <ExternalLink size={12} className="text-zinc-500 dark:text-zinc-400"/>
                        </span>
                        <span className="text-sm text-zinc-500 block">Clareza, acessibilidade e decisões pragmáticas</span>
                    </a>
                </li>
            </ul>
            </section>

             <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Design Systems & Tokens
            </h2>
             <ul className="space-y-4">
                <li>
                    <span className="font-medium text-[var(--foreground)] block">
                        Design Tokens Community Group (W3C)
                    </span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        Salesforce Lightning Design System
                    </span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        IBM Carbon Design System
                    </span>
                </li>
            </ul>
            </section>

            <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Código & Front-end
            </h2>
            <ul className="space-y-4">
                <li>
                     <a href="https://developer.mozilla.org/" target="_blank" className="block group">
                         <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                            MDN Web Docs <ExternalLink size={12} className="text-zinc-500 dark:text-zinc-400"/>
                        </span>
                        <span className="text-sm text-zinc-500 block">HTML, CSS e acessibilidade</span>
                     </a>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        CSS-Tricks (arquivo)
                    </span>
                     <span className="text-sm text-zinc-500 block">Padrões e explicações práticas</span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        React Docs
                    </span>
                     <span className="text-sm text-zinc-500 block">Composição e previsibilidade</span>
                </li>
            </ul>
            </section>

             <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Acessibilidade
            </h2>
            <ul className="space-y-4">
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                       WCAG (W3C)
                    </span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        WebAIM
                    </span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        Inclusive Components (Heydon Pickering)
                    </span>
                </li>
            </ul>
            </section>
            
             <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Pensamento de Produto
            </h2>
            <ul className="space-y-4">
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                       Shape Up – Basecamp
                    </span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        Refactoring UI
                    </span>
                    <span className="text-sm text-zinc-500 block">Foco em decisões visuais aplicáveis</span>
                </li>
                 <li>
                     <span className="font-medium text-[var(--foreground)] block">
                        Artigos e talks sobre Design Technologist
                    </span>
                     <span className="text-sm text-zinc-500 block">(diversos autores)</span>
                </li>
            </ul>
            </section>
        </div>

        <section className="p-8 border border-[var(--technical-border)] bg-[var(--background)]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Critério para novas referências</h2>
          <p className="text-[var(--foreground)] mb-4 text-sm">
             Uma referência só entra aqui se:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>ajudar na tomada de decisão</li>
              <li>ter aplicação prática</li>
              <li>envelhecer bem</li>
              <li>respeitar o usuário final</li>
          </ul>
           <p className="text-[var(--foreground)] mt-4 font-medium text-sm">
             Conteúdo bom não é o mais novo. É o que continua fazendo sentido.
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
