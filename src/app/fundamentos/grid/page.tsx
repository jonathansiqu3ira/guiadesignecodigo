import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
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
        status="in_progress"
        description="Como organizar conteúdo de forma previsível, responsiva e escalável."
      />

      <section className="space-y-4">
        <H2>Por que um sistema de grid</H2>
        <Paragraph>
          Sem grid consistente, cada página vira uma decisão isolada. 
          Um sistema de layout define onde o conteúdo pode existir. Cria 
          previsibilidade pra quem navega e pra quem implementa.
        </Paragraph>
        <Paragraph>
          O objetivo não é rigidez. É dar um vocabulário comum pra decisões de 
          posicionamento, espaçamento e responsividade.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2>Princípios aplicados</H2>
        <List>
          <ListItem><strong>Largura de leitura limitada:</strong> conteúdo textual respeita um máximo de ~65 caracteres por linha (65ch) para garantir legibilidade</ListItem>
          <ListItem><strong>Espaçamento por contexto:</strong> seções usam espaçamento vertical proporcional ao peso visual do bloco</ListItem>
          <ListItem><strong>Responsividade progressiva:</strong> o layout se adapta sem quebrar. Sidebar esconde em mobile, grid colapsa de 2 pra 1 coluna</ListItem>
          <ListItem><strong>Hierarquia visual:</strong> sidebar fixo + área de conteúdo + aside opcional criam uma estrutura de 3 painéis</ListItem>
        </List>
      </section>

      <section className="space-y-4">
        <H2>Estrutura de layout</H2>
        <Paragraph>
          Este projeto usa uma estrutura de 3 painéis com Flexbox:
        </Paragraph>
        <CodeBlock
          lang="plaintext"
          fileName="Layout Structure"
          code={`┌──────────┬─────────────────────────┬──────────┐
│          │                         │          │
│ Sidebar  │    Conteúdo (article)   │  Aside   │
│  (nav)   │      max-w: 65ch        │  (ToC)   │
│  w: 256  │                         │  w: 256  │
│          │                         │          │
└──────────┴─────────────────────────┴──────────┘`}
        />

        <H3>Tokens de espaçamento</H3>
        <CodeBlock
          lang="css"
          fileName="globals.css"
          code={`/* Spacing tokens */
--spacing-container-reading: 65ch;
--spacing-section-sm: 2rem;   /* 32px */
--spacing-section-md: 4rem;   /* 64px */
--spacing-section-lg: 6rem;   /* 96px */`}
        />
      </section>

      <section className="space-y-4">
        <H2>Breakpoints</H2>
        <Paragraph>
          O projeto usa os breakpoints nativos do Tailwind CSS. As mudanças 
          principais acontecem em dois pontos:
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[var(--border)] rounded-lg p-4 space-y-2">
            <H3 className="text-base mt-0">Mobile → Tablet (md: 768px)</H3>
            <List className="text-sm my-0">
              <ListItem>Sidebar esconde, MobileNav aparece</ListItem>
              <ListItem>Grid de cards colapsa para 1 coluna</ListItem>
              <ListItem>Padding reduz de p-12 para p-8</ListItem>
            </List>
          </div>
          <div className="border border-[var(--border)] rounded-lg p-4 space-y-2">
            <H3 className="text-base mt-0">Tablet → Desktop (xl: 1280px)</H3>
            <List className="text-sm my-0">
              <ListItem>Aside (Table of Contents) aparece</ListItem>
              <ListItem>Layout de 3 painéis completo</ListItem>
              <ListItem>Conteúdo centralizado com reading width</ListItem>
            </List>
          </div>
        </div>
      </section>

      <Callout type="info" title="Decisão de projeto">
        O sidebar é fixo em desktop e o conteúdo rola independentemente.
        Navegação sempre acessível sem consumir espaço de leitura.
      </Callout>
    </PageLayout>
  );
}
