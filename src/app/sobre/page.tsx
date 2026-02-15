import { PageLayout } from "@/components/layout/PageLayout";
import { H1, H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre – Guia Prático",
  description: "Sobre o Guia Prático de Design e Código: um projeto pessoal e autoral que documenta como projetar e implementar interfaces digitais.",
};


export default function SobrePage() {
  return (
    <PageLayout>
      {/* Header */}
      <header className="space-y-4">
        <H1 className="mb-4">Sobre</H1>
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
           O Guia Prático é um projeto pessoal em formato de documentação.
           Uso pra organizar decisões, critérios e boas práticas
           que surgem no dia a dia de quem projeta e implementa
           interfaces digitais.
        </Paragraph>
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
          Não é um curso, nem um Design System corporativo.
          É um espaço para registrar como o design se sustenta
          quando o código começa.
        </Paragraph>
      </header>

      {/* Por que ele existe */}
      <section>
        <H2>Por que ele existe</H2>
         <Paragraph>
           Existe um ruído recorrente entre:
         </Paragraph>
        <List>
          <ListItem>o que é desenhado no Figma</ListItem>
          <ListItem>o que é implementado no front-end</ListItem>
          <ListItem>o que o usuário realmente experimenta</ListItem>
        </List>
        <Paragraph>
           Este guia nasce pra reduzir esse ruído.
           Tratar design e código como partes da mesma decisão,
           não como etapas separadas.
        </Paragraph>
      </section>

      {/* Para quem é */}
      <section>
        <H2>Para quem é</H2>
        <Paragraph>
          Este conteúdo é pensado para:
        </Paragraph>
        <List>
          <ListItem>UX/UI Designers que querem decisões mais viáveis</ListItem>
          <ListItem>Devs front-end que querem interfaces mais bem resolvidas</ListItem>
          <ListItem>Pessoas que atuam na interseção entre design, produto e engenharia</ListItem>
          <ListItem>Quem se identifica com o papel de Design Technologist</ListItem>
        </List>
        <Paragraph className="text-sm text-[var(--foreground-muted)] italic">
          Não é material introdutório.
          É conteúdo de consulta e reflexão aplicada.
        </Paragraph>
      </section>

      {/* Como usar este guia */}
      <section>
        <H2>Como usar este guia</H2>
        <Paragraph>
           Cada página pode ser lida de forma independente.
           O foco não é leitura linear. É retorno constante.
        </Paragraph>
        <List>
          <ListItem>validar decisões</ListItem>
          <ListItem>revisar padrões</ListItem>
          <ListItem>alinhar design e implementação</ListItem>
          <ListItem>evitar retrabalho</ListItem>
        </List>
      </section>

      {/* Princípios */}
      <section className="border border-[var(--border)] p-6 rounded-lg bg-[var(--surface)]">
        <H3 className="text-base mt-0 mb-4">
          Princípios que guiam o projeto
        </H3>
        <List>
          <ListItem>UX não termina no layout</ListItem>
          <ListItem>Código também comunica experiência</ListItem>
          <ListItem>Clareza é mais importante que complexidade</ListItem>
          <ListItem>Sistemas bons reduzem esforço cognitivo</ListItem>
          <ListItem>Design precisa sobreviver à implementação</ListItem>
        </List>
      </section>
    </PageLayout>
  );
}
