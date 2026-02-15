import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acessibilidade – Guia Prático",
  description: "Diretrizes WCAG, práticas inclusivas e acessibilidade aplicada ao design system.",
};

export default function AcessibilidadePage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Acessibilidade" 
        status="in_progress"
        description="Acessibilidade não é feature. É premissa. Critérios práticos pra interfaces que funcionam pra todos."
      />

      <section className="space-y-4">
        <H2>Por que acessibilidade importa</H2>
        <Paragraph>
          Uma interface acessível não é uma interface diferente. É a mesma interface, 
          feita direito. Quando negligenciamos acessibilidade, estamos decidindo 
          (mesmo sem querer) quem pode e quem não pode usar o que construímos.
        </Paragraph>
        <Paragraph>
          Este guia não cobre a especificação WCAG inteira. Cobre as decisões 
          mais frequentes na prática de front-end.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2>Checklist mínimo</H2>
        <Paragraph>
          Antes de qualquer componente ou página ir pra produção, passe por esses pontos:
        </Paragraph>

        <H3>Contraste</H3>
        <List>
          <ListItem>Texto normal: ratio mínimo de <strong>4.5:1</strong> (WCAG AA)</ListItem>
          <ListItem>Texto grande (≥24px ou ≥18.5px bold): ratio mínimo de <strong>3:1</strong></ListItem>
          <ListItem>Elementos interativos (bordas, ícones de ação): ratio mínimo de <strong>3:1</strong></ListItem>
        </List>

        <H3>Navegação por teclado</H3>
        <List>
          <ListItem>Todo elemento interativo deve ser <strong>focável</strong> (Tab/Shift+Tab)</ListItem>
          <ListItem>A <strong>ordem de foco</strong> deve seguir a lógica visual da página</ListItem>
          <ListItem>Foco visível obrigatório. Nunca usar <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">outline: none</code> sem substituto</ListItem>
          <ListItem>Skip Navigation pra pular direto ao conteúdo</ListItem>
        </List>

        <H3>Semântica HTML</H3>
        <List>
          <ListItem>Usar elementos semânticos: <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">{`<nav>, <main>, <article>, <aside>, <header>, <footer>`}</code></ListItem>
          <ListItem>Headings em ordem hierárquica (h1 → h2 → h3), sem pular níveis</ListItem>
          <ListItem>Links devem descrever o destino. Nada de "clique aqui"</ListItem>
          <ListItem>Imagens com alt text descritivo (ou <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">alt=""</code> se decorativas)</ListItem>
        </List>
      </section>

      <section className="space-y-4">
        <H2>ARIA: quando e como</H2>
        <Paragraph>
          A primeira regra de ARIA: <strong>não use ARIA se HTML nativo resolve</strong>. 
          Um <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">{`<button>`}</code> já é acessível. 
          Uma <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">{`<div onClick>`}</code> não é.
        </Paragraph>

        <H3>Atributos mais usados</H3>
        <CodeBlock
          lang="html"
          fileName="Exemplos de ARIA"
          code={`<!-- Labels para leitores de tela -->
<button aria-label="Fechar menu">
  <XIcon />
</button>

<!-- Estado expandido/colapsado -->
<button aria-expanded="true" aria-controls="menu">
  Menu
</button>

<!-- Regiões nomeadas -->
<nav aria-label="Navegação principal">
<nav aria-label="Breadcrumb">`}
        />
      </section>

      <section className="space-y-4">
        <H2>Ferramentas de validação</H2>
        <List>
          <ListItem><strong>Lighthouse (Chrome DevTools):</strong> auditoria rápida com score de acessibilidade</ListItem>
          <ListItem><strong>axe DevTools:</strong> extensão que encontra problemas que o Lighthouse não pega</ListItem>
          <ListItem><strong>Navegação por teclado:</strong> teste manual. Tab por toda a página e veja se faz sentido</ListItem>
          <ListItem><strong>Leitor de tela:</strong> VoiceOver (macOS) ou NVDA (Windows). Não tem substituto pra teste real</ListItem>
        </List>
      </section>

      <Callout type="warning" title="Regra de ouro">
        Se um componente não pode ser usado apenas com teclado, ele não está pronto para produção.
      </Callout>
    </PageLayout>
  );
}
