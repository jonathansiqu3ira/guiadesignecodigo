import { LatestUpdates } from "@/components/LatestUpdates";
import { Compass, BookOpen, Layout, Bookmark } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { H1, H2, Paragraph, List, ListItem } from "@/components/ui/Typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia Prático – Design e Código",
  description: "Um guia pessoal em formato de documentação sobre como pensar, projetar e implementar interfaces digitais conectando UX, UI e código.",
};

export default function Home() {
  return (
    <PageLayout aside={<LatestUpdates />}>
      {/* Header */}
      <header className="space-y-6">
        <H1 className="mb-4">Guia Prático – Design e Código</H1>
        <Paragraph className="text-xl">
           Um guia pessoal onde organizo como penso, projeto e implemento
           interfaces digitais. UX, UI e código em um lugar só.
        </Paragraph>
      </header>

      {/* Sobre / Propósito */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <H2 className="text-lg mt-0">Sobre este projeto</H2>
          <Paragraph className="text-base mt-2">
             Não é um produto comercial nem um Design System corporativo.
             É um espaço pra organizar raciocínio, decisões e boas práticas
             do dia a dia.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <H2 className="text-lg mt-0">Propósito</H2>
          <List className="my-2 text-base">
            <ListItem>registrar decisões de design e implementação</ListItem>
            <ListItem>conectar UX, UI e front-end de forma realista</ListItem>
            <ListItem>compartilhar processos e critérios aplicáveis</ListItem>
          </List>
        </div>
      </section>

      {/* Formato do conteúdo */}
      <section className="border border-[var(--border)] p-6 rounded-lg space-y-6">
        <H2 className="text-base mt-0">Formato do conteúdo</H2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--surface)] text-[var(--foreground-muted)]">
              <Compass size={16} />
            </div>
            <Paragraph className="text-base mt-0">Navegação clara e previsível</Paragraph>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--surface)] text-[var(--foreground-muted)]">
              <BookOpen size={16} />
            </div>
            <Paragraph className="text-base mt-0">Conteúdo focado em leitura</Paragraph>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--surface)] text-[var(--foreground-muted)]">
              <Layout size={16} />
            </div>
            <Paragraph className="text-base mt-0">Estrutura consistente entre páginas</Paragraph>
          </div>

          <div className="flex gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[var(--surface)] text-[var(--foreground-muted)]">
              <Bookmark size={16} />
            </div>
            <Paragraph className="text-base mt-0">Organização para consulta recorrente</Paragraph>
          </div>
        </div>
      </section>

      {/* O que você vai encontrar */}
      <section>
        <H2 className="text-xl">O que você vai encontrar aqui</H2>
        <List>
          <ListItem>fundamentos de UX aplicados a interfaces</ListItem>
          <ListItem>decisões de UI explicadas com contexto</ListItem>
          <ListItem>componentes comuns: botões, inputs etc.</ListItem>
          <ListItem>considerações técnicas de implementação</ListItem>
        </List>
      </section>
    </PageLayout>
  );
}
