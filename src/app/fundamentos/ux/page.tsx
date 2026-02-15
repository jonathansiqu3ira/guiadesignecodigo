import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
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
        status="in_progress"
        description="Princípios de usabilidade que orientam decisões de interface. Do conceito à implementação."
      />

      <section className="space-y-4">
        <H2>O que é UX no contexto deste guia</H2>
        <Paragraph>
          UX aqui não é sobre pesquisa com usuários ou métricas de conversão. 
          É sobre as decisões de interface que tornam o produto <strong>previsível, 
          eficiente e confortável</strong> de usar. Princípios que guiam a 
          implementação, não só o wireframe.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2>Heurísticas de Nielsen aplicadas</H2>
        <Paragraph>
          As 10 heurísticas de Nielsen são um framework atemporal para avaliar interfaces. 
          Aqui estão as mais relevantes para quem constrói com código:
        </Paragraph>

        <H3>1. Visibilidade do status do sistema</H3>
        <Paragraph>
          O usuário precisa saber o que está acontecendo. Loading states, 
          feedback de ação (toast, badge de status) e indicadores de progresso 
          não são extras. São obrigatórios.
        </Paragraph>

        <H3>2. Correspondência com o mundo real</H3>
        <Paragraph>
          Use linguagem que o usuário reconhece. Evite jargão técnico em 
          labels e mensagens. "Confirmar envio" é melhor que "Submit".
        </Paragraph>

        <H3>3. Controle e liberdade do usuário</H3>
        <Paragraph>
          Erros acontecem. Ofereça saídas de emergência: desfazer, cancelar, 
          voltar. Nunca force um caminho sem retorno.
        </Paragraph>

        <H3>4. Consistência e padrões</H3>
        <Paragraph>
          Comportamentos similares devem ter aparência similar. Se um card é 
          clicável em uma seção, deve ser clicável em todas. Design Systems 
          existem pra resolver exatamente isso.
        </Paragraph>

        <H3>5. Prevenção de erros</H3>
        <Paragraph>
          Melhor que uma boa mensagem de erro é evitar que ele aconteça. 
          Validação em tempo real no campo de email é mais eficiente 
          que validação após submit.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2>Padrões práticos</H2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Feedback imediato</H3>
            <List className="text-sm my-0">
              <ListItem>Hover states em elementos clicáveis</ListItem>
              <ListItem>Loading spinners durante processamento</ListItem>
              <ListItem>Toast de confirmação após ações</ListItem>
              <ListItem>Animações suaves (máx. 200ms)</ListItem>
            </List>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Hierarquia de atenção</H3>
            <List className="text-sm my-0">
              <ListItem>Ação primária visualmente dominante</ListItem>
              <ListItem>Ações secundárias mais discretas</ListItem>
              <ListItem>Ações destrutivas em vermelho ou com confirmação</ListItem>
              <ListItem>Informação menos importante com cor muted</ListItem>
            </List>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Formulários</H3>
            <List className="text-sm my-0">
              <ListItem>Labels sempre visíveis, nunca só placeholder</ListItem>
              <ListItem>Mensagens de erro junto ao campo</ListItem>
              <ListItem>Tab order lógico e previsível</ListItem>
              <ListItem>Autocomplete quando possível</ListItem>
            </List>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Navegação</H3>
            <List className="text-sm my-0">
              <ListItem>Breadcrumbs para orientação</ListItem>
              <ListItem>Estado ativo visível no menu</ListItem>
              <ListItem>Destinos previsíveis (label = página)</ListItem>
              <ListItem>Voltar nunca deve surpreender</ListItem>
            </List>
          </div>
        </div>
      </section>

      <Callout type="info" title="Referência">
        Estas heurísticas foram definidas por Jakob Nielsen em 1994. 
        Mais de 30 anos depois, continuam sendo o checklist mais prático 
        para avaliar usabilidade.
      </Callout>
    </PageLayout>
  );
}
