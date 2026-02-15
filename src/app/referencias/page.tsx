import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { H1, H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referências – Guia Prático",
  description: "Referências de design, UX, design systems, código e acessibilidade que influenciam o Guia Prático.",
};


export default function ReferenciasPage() {
  return (
    <PageLayout>
      <header className="space-y-6">
        <div className="flex items-center gap-3">
          <H1 className="mb-0">Referências</H1>
          <Badge variant="in_progress">Em andamento</Badge>
        </div>
        <div className="space-y-4">
          <H2 className="text-2xl mt-0">Como usar esta página</H2>
          <Paragraph>
            Esta não é uma lista exaustiva nem um compilado de tendências.
          </Paragraph>
          <Paragraph className="text-lg">
            As referências aqui listadas influenciam como pensar design, estruturar sistemas e conectar UX, UI e implementação.
          </Paragraph>
          <Paragraph className="text-lg font-medium text-[var(--foreground)]">
            São fontes para consulta recorrente, não leitura obrigatória.
          </Paragraph>
        </div>
      </header>

      <hr className="border-[var(--border)]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <H3 className="text-sm mt-0 uppercase tracking-wider font-semibold text-[var(--foreground-muted)]">
            Design & UX
          </H3>
          <ul className="space-y-4">
            <li>
              <a href="https://m3.material.io/" target="_blank" className="block group">
                <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                  Material Design <ExternalLink size={12} className="text-[var(--foreground-muted)]" />
                </span>
                <span className="text-sm text-[var(--foreground-muted)] block">Princípios de interação e estados</span>
              </a>
            </li>
            <li>
              <a href="https://www.nngroup.com/" target="_blank" className="block group">
                <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                  Nielsen Norman Group <ExternalLink size={12} className="text-[var(--foreground-muted)]" />
                </span>
                <span className="text-sm text-[var(--foreground-muted)] block">Pesquisa, usabilidade e comportamento</span>
              </a>
            </li>
            <li>
              <a href="https://design-system.service.gov.uk/" target="_blank" className="block group">
                <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                  GOV.UK Design System <ExternalLink size={12} className="text-[var(--foreground-muted)]" />
                </span>
                <span className="text-sm text-[var(--foreground-muted)] block">Clareza, acessibilidade e decisões pragmáticas</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <H3 className="text-sm mt-0 uppercase tracking-wider font-semibold text-[var(--foreground-muted)]">
            Design Systems & Tokens
          </H3>
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
          <H3 className="text-sm mt-0 uppercase tracking-wider font-semibold text-[var(--foreground-muted)]">
            Código & Front-end
          </H3>
          <ul className="space-y-4">
            <li>
              <a href="https://developer.mozilla.org/" target="_blank" className="block group">
                <span className="font-medium text-[var(--foreground)] flex items-center gap-2 group-hover:underline">
                  MDN Web Docs <ExternalLink size={12} className="text-[var(--foreground-muted)]" />
                </span>
                <span className="text-sm text-[var(--foreground-muted)] block">HTML, CSS e acessibilidade</span>
              </a>
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)] block">
                CSS-Tricks (arquivo)
              </span>
              <span className="text-sm text-[var(--foreground-muted)] block">Padrões e explicações práticas</span>
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)] block">
                React Docs
              </span>
              <span className="text-sm text-[var(--foreground-muted)] block">Composição e previsibilidade</span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <H3 className="text-sm mt-0 uppercase tracking-wider font-semibold text-[var(--foreground-muted)]">
            Acessibilidade
          </H3>
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
          <H3 className="text-sm mt-0 uppercase tracking-wider font-semibold text-[var(--foreground-muted)]">
            Pensamento de Produto
          </H3>
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
              <span className="text-sm text-[var(--foreground-muted)] block">Foco em decisões visuais aplicáveis</span>
            </li>
            <li>
              <span className="font-medium text-[var(--foreground)] block">
                Artigos e talks sobre Design Technologist
              </span>
              <span className="text-sm text-[var(--foreground-muted)] block">(diversos autores)</span>
            </li>
          </ul>
        </section>
      </div>

      <section className="p-8 border border-[var(--border)] bg-[var(--surface)] rounded-lg">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground-muted)] mb-4">Critério para novas referências</h2>
        <Paragraph className="mb-4 text-sm">
          Uma referência só entra aqui se:
        </Paragraph>
        <List className="text-sm">
          <ListItem>ajudar na tomada de decisão</ListItem>
          <ListItem>ter aplicação prática</ListItem>
          <ListItem>envelhecer bem</ListItem>
          <ListItem>respeitar o usuário final</ListItem>
        </List>
        <Paragraph className="mt-4 font-medium text-sm">
          Conteúdo bom não é o mais novo. É o que continua fazendo sentido.
        </Paragraph>
      </section>
    </PageLayout>
  );
}
