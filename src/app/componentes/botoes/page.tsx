import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Botões – Guia Prático",
  description: "Hierarquia de ação, estados e boas práticas de uso para botões.",
};

export default function BotoesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Botões"
        description="Botões comunicam ações que os usuários podem realizar. Eles são, possivelmente, o componente interativo mais importante de qualquer interface."
        status="production"
      />

      <section>
        <H2>Hierarquia</H2>
        <Paragraph>
          Uma tela com muitos botões "chamativos" cria confusão. A hierarquia visual deve guiar o usuário para a ação principal.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">Primário</H3>
            <div className="mb-4 flex justify-center">
              <div className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md text-sm font-medium">Ação Principal</div>
            </div>
            <Paragraph className="text-sm mb-0 text-[var(--foreground-muted)]">
              Destaque máximo. Deve haver (idealmente) apenas um por contexto/seção. É o "Happy Path" que queremos que o usuário siga.
            </Paragraph>
          </div>

          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">Secundário</H3>
               <div className="mb-4 flex justify-center">
              <div className="px-4 py-2 border border-[var(--border)] text-[var(--foreground)] rounded-md text-sm font-medium">Cancelar</div>
            </div>
            <Paragraph className="text-sm mb-0 text-[var(--foreground-muted)]">
              Apoio ou alternativa. Visível, mas sem competir com a ação principal. Usado para "Cancelar", "Voltar" ou ações secundárias.
            </Paragraph>
          </div>

          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">Terciário (Ghost)</H3>
             <div className="mb-4 flex justify-center">
              <div className="px-4 py-2 text-[var(--foreground-muted)] rounded-md text-sm font-medium">Ver detalhes</div>
            </div>
            <Paragraph className="text-sm mb-0 text-[var(--foreground-muted)]">
              Menor prioridade. Sem borda ou fundo até o hover. Usado para ações repetitivas ou contextuais que não devem poluir a tela.
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <H2>Estados</H2>
        <Paragraph>
          Como elemento interativo, o botão deve responder a cada gesto do usuário.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Hover:</strong> Indica "sou clicável".
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Active/Pressed:</strong> Feedback físico simulado do clique.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Focus:</strong> Anel visível para navegação via teclado.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Disabled:</strong> Inativo. Use com cuidado; às vezes é melhor ocultar o botão ou deixá-lo ativo e explicar o erro ao clicar.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Loading:</strong> Feedback imediato após o clique, prevenindo submissões duplicadas.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Boas Práticas</H2>
        <List>
          <ListItem>
             Labels devem ser verbos ou ações claras (ex: "Salvar alterações" em vez de "Sim").
          </ListItem>
          <ListItem>
             Não use botões para navegação de página (use links). Botões mudam estado ou enviam dados; Links mudam o local.
          </ListItem>
          <ListItem>
            Respeite a área de toque mínima (44px/48px) em dispositivos móveis, mesmo para botões pequenos visualmente.
          </ListItem>
        </List>
      </section>
    </PageLayout>
  );
}
