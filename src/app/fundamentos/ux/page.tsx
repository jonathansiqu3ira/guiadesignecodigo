import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX & Usabilidade – Guia Prático",
  description: "Princípios de interação, usabilidade e experiência do usuário aplicados ao design system.",
};

export default function UXPage() {
  return (
    <PageLayout>
      <PageHeader
        title="UX & Usabilidade"
        description="Decisões de interface que tornam o produto previsível, eficiente e confortável. UX não é só wireframe, é a qualidade final da interação."
        status="production"
      />

      <section>
        <H2>Heurísticas (Nielsen) Aplicadas</H2>
        <Paragraph>
          Framework rápido para avaliar se sua interface está "quebrada" ou fluida.
        </Paragraph>

        <div className="space-y-8 mt-6">
          <div>
            <H3 className="mt-0">1. Feedback do Sistema</H3>
            <Paragraph className="text-sm text-[var(--foreground-muted)]">
              O usuário precisa saber o que está acontecendo. Se clicou, algo deve mudar. Se carregou, deve haver indicador.
            </Paragraph>
          </div>

          <div>
            <H3 className="mt-0">2. Prevenção de Erros</H3>
            <Paragraph className="text-sm text-[var(--foreground-muted)]">
              Melhor que uma boa mensagem de erro é um design que evita o erro. (Ex: input de data formatado evita erro de digitação).
            </Paragraph>
          </div>

          <div>
            <H3 className="mt-0">3. Reconhecimento vs. Memorização</H3>
            <Paragraph className="text-sm text-[var(--foreground-muted)]">
              Não obrigue o usuário a lembrar de nada. Mostre as opções. (Ex: Menu visível é melhor que atalhos ocultos).
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <H2>Padrões de Interação</H2>
        
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">Feedback Imediato</H3>
            <List className="mb-0 text-sm">
              <ListItem>Hover states em tudo que é clicável.</ListItem>
              <ListItem>Active states para feedback tátil.</ListItem>
              <ListItem>Loading spinners próximos à ação (dentro do botão).</ListItem>
            </List>
          </div>

          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">Navegação Segura</H3>
            <List className="mb-0 text-sm">
              <ListItem>Breadcrumbs para orientação.</ListItem>
              <ListItem>Menu ativo indicando onde estou.</ListItem>
              <ListItem>Botão "Voltar" não destrutivo.</ListItem>
            </List>
          </div>
        </div>
      </section>

      <Callout type="info" title="UX é sobre Confiança">
        <Paragraph className="mb-0 text-sm">
          A cada clique não respondido ou estado confuso, o usuário perde um pouco de confiança no sistema. A soma dessas micro-frustrações é o que chamamos de "UX ruim".
        </Paragraph>
      </Callout>
    </PageLayout>
  );
}
