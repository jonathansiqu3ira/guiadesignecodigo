import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grid & Layout – Guia Prático",
  description: "Sistema de grids responsivos, espaçamento e layout no design system.",
};

export default function GridPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Grid & Layout"
        description="O palco invisível onde o design acontece. Estrutura, alinhamento e consistência através de um sistema de colunas responsivo."
        status="production"
      />

      <section>
        <H2>Por que usar um grid?</H2>
        <Paragraph>
          Sem grid consistente, cada página vira uma decisão arbitrária de posicionamento. 
          O objetivo não é rigidez, é oferecer um vocabulário comum.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Previsibilidade:</strong> O usuário aprende inconscientemente onde buscar informação (padrão de leitura F ou Z).
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Ritmo:</strong> Espaçamentos consistentes criam harmonia visual e reduzem o ruído.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Responsividade:</strong> Um bom sistema define como o conteúdo se comporta quando o espaço muda, não apenas como ele parece estático.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Princípios deste sistema</H2>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Largura de leitura (Measure):</strong> Texto corrido respeita um máximo de ~65 caracteres por linha. Linhas muito longas cansam o olho; muito curtas quebram o fluxo.
          </ListItem>
          <ListItem>
             <strong className="text-[var(--foreground)]">Espaçamento relativo:</strong> Proximidade indica relação. Elementos relacionados devem estar mais próximos entre si do que de grupos diferentes.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Alinhamento ótico:</strong> O alinhamento visual é mais importante que o matemático.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Estrutura de Layout</H2>
        <Paragraph>
          Utilizamos uma estrutura de 3 painéis para interfaces desktop complexas de documentação:
        </Paragraph>
        
        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <div className="p-5 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-2 text-base">Sidebar (Navegação)</H3>
            <Paragraph className="text-sm mb-0">
               Fixa à esquerda. Contexto global do que existe no sistema.
            </Paragraph>
          </div>
          
          <div className="p-5 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-2 text-base">Conteúdo (Main)</H3>
            <Paragraph className="text-sm mb-0">
               Fluido, mas com trava de largura máxima para leitura. Onde o usuário foca.
            </Paragraph>
          </div>

          <div className="p-5 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-2 text-base">Aside (contexto)</H3>
            <Paragraph className="text-sm mb-0">
               Conteúdo de suporte (Table of Contents). Fixo à direita, desaparece em telas menores.
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <H2>Responsividade</H2>
        <Paragraph>
          O layout deve se adaptar ao dispositivo, não forçar o desktop numa tela pequena.
        </Paragraph>

        <div className="space-y-6 mt-6">
          <div>
            <H3 className="mt-0 text-base mb-2">Mobile</H3>
            <Paragraph className="text-sm text-[var(--foreground-muted)]">
              Foco total no conteúdo (coluna única). Navegação colapsa para drawer/menu. Padding lateral reduzido para aproveitar espaço.
            </Paragraph>
          </div>
          
          <div>
            <H3 className="mt-0 text-base mb-2">Tablet</H3>
            <Paragraph className="text-sm text-[var(--foreground-muted)]">
              Grids internos começam a se formar (2 colunas). Sidebar pode ou não estar visível, dependendo da densidade da aplicação.
            </Paragraph>
          </div>

          <div>
            <H3 className="mt-0 text-base mb-2">Desktop</H3>
            <Paragraph className="text-sm text-[var(--foreground-muted)]">
              Experiência completa. Espaço branco abundante é usado para respiro, não preenchido com ruído.
            </Paragraph>
          </div>
        </div>
      </section>

      <Callout type="info" title="Consistência vs. Rigidez">
        <Paragraph className="mb-0 text-sm">
          Um grid deve ajudar, não atrapalhar. Se o conteúdo pede uma quebra do grid padrão para melhor visualização (ex: uma tabela larga ou imagem full-width), a regra deve ser quebrada conscientemente.
        </Paragraph>
      </Callout>
    </PageLayout>
  );
}
