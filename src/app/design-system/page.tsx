import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { H1, H2, H3, Paragraph, List, ListItem, InlineCode } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ComponentPreview } from "@/components/ui/ComponentPreview";

// Color swatch helper
function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="flex items-center gap-3">
      <div 
        className="w-10 h-10 rounded-md border border-[var(--border)] shrink-0" 
        style={{ backgroundColor: `var(${variable})` }} 
      />
      <div>
        <p className="text-sm font-medium text-[var(--foreground)]">{name}</p>
        <p className="text-xs text-[var(--foreground-muted)] font-mono">{variable}</p>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <PageLayout toc={true}>
        <Badge variant="experimental">Internal Preview</Badge>
        <H1>Component Showcase</H1>
        <Paragraph>
          Catálogo interativo de todos os componentes do design system. 
          Cada item mostra preview e código de uso.
        </Paragraph>

        {/* === TOKENS === */}
        <section id="tokens">
          <H2>Design Tokens</H2>

          <H3>Cores</H3>
          <div className="border border-[var(--border)] rounded-lg p-6 space-y-8">
            <div>
              <p className="text-xs font-medium text-[var(--foreground-muted)] mb-4 uppercase tracking-wider">Superfícies</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ColorSwatch name="Background" variable="--background" />
                <ColorSwatch name="Surface" variable="--surface" />
                <ColorSwatch name="Surface Highlight" variable="--surface-highlight" />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--foreground-muted)] mb-4 uppercase tracking-wider">Texto</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ColorSwatch name="Foreground" variable="--foreground" />
                <ColorSwatch name="Foreground Muted" variable="--foreground-muted" />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-[var(--foreground-muted)] mb-4 uppercase tracking-wider">Bordas & Ação</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ColorSwatch name="Border" variable="--border" />
                <ColorSwatch name="Border Highlight" variable="--border-highlight" />
                <ColorSwatch name="Primary" variable="--primary" />
                <ColorSwatch name="Primary Foreground" variable="--primary-foreground" />
              </div>
            </div>
          </div>

          <H3>Tipografia</H3>
          <div className="border border-[var(--border)] rounded-lg p-6 space-y-6">
            <div>
              <span className="text-xs text-[var(--foreground-muted)] block mb-1">H1 — Page Title</span>
              <H1 className="mt-0 mb-0">The quick brown fox</H1>
            </div>
            <div>
              <span className="text-xs text-[var(--foreground-muted)] block mb-1">H2 — Section Title</span>
              <H2 className="mt-0 mb-0">Jumps over the lazy dog</H2>
            </div>
            <div>
              <span className="text-xs text-[var(--foreground-muted)] block mb-1">H3 — Subsection</span>
              <H3 className="mt-0 mb-0">Pack my box with five dozen liquor jugs</H3>
            </div>
            <div>
              <span className="text-xs text-[var(--foreground-muted)] block mb-1">Paragraph + InlineCode</span>
              <Paragraph className="mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                With <InlineCode>inline code</InlineCode> in the middle.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* === COMPONENTS === */}
        <section id="components">
          <H2>Components</H2>
          
          {/* Badge */}
          <ComponentPreview
            title="Badge"
            description="Status labels com 8 variantes semânticas."
            code={`import { Badge } from "@/components/ui/Badge";

<Badge variant="stable">Stable</Badge>
<Badge variant="experimental">Experimental</Badge>
<Badge variant="in_progress">Em progresso</Badge>
<Badge variant="planned">Planejado</Badge>
<Badge variant="production">Production</Badge>
<Badge variant="accessible">Accessible</Badge>
<Badge variant="attention">Attention</Badge>
<Badge variant="standard">Standard</Badge>`}
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="stable">Stable</Badge>
              <Badge variant="experimental">Experimental</Badge>
              <Badge variant="in_progress">Em progresso</Badge>
              <Badge variant="planned">Planejado</Badge>
              <Badge variant="production">Production</Badge>
              <Badge variant="accessible">Accessible</Badge>
              <Badge variant="attention">Attention</Badge>
              <Badge variant="standard">Standard</Badge>
            </div>
          </ComponentPreview>

          {/* Callout */}
          <ComponentPreview
            title="Callout"
            description="Alertas contextuais com 5 variantes."
            code={`import { Callout } from "@/components/ui/Callout";

<Callout type="info" title="Informação">
  Contexto ou explicação adicional.
</Callout>

<Callout type="warning" title="Atenção">
  Algo que requer cuidado.
</Callout>

<Callout type="danger" title="Perigo">
  Ação com consequências irreversíveis.
</Callout>

<Callout type="success" title="Sucesso">
  Operação completada.
</Callout>

<Callout type="tip" title="Dica">
  Sugestão de otimização.
</Callout>`}
          >
            <div className="space-y-3">
              <Callout type="info" title="Informação" className="my-0">
                <p>Contexto ou explicação adicional.</p>
              </Callout>
              <Callout type="warning" title="Atenção" className="my-0">
                <p>Algo que requer cuidado.</p>
              </Callout>
              <Callout type="danger" title="Perigo" className="my-0">
                <p>Ação com consequências irreversíveis.</p>
              </Callout>
              <Callout type="success" title="Sucesso" className="my-0">
                <p>Operação completada.</p>
              </Callout>
              <Callout type="tip" title="Dica" className="my-0">
                <p>Sugestão de otimização.</p>
              </Callout>
            </div>
          </ComponentPreview>

          {/* Accordion */}
          <ComponentPreview
            title="Accordion"
            description="Conteúdo colapsável com animação CSS grid."
            code={`import { Accordion } from "@/components/ui/Accordion";

<Accordion title="Como funciona?">
  Conteúdo expandido do acordeão.
</Accordion>

<Accordion title="Aberto por padrão" defaultOpen>
  Este começa aberto.
</Accordion>`}
          >
            <div className="space-y-2">
              <Accordion title="Como funciona o Accordion?">
                O componente Accordion usa CSS Grid com <code className="bg-[var(--surface)] px-1 py-0.5 rounded text-sm">grid-template-rows</code> para 
                animar a abertura do conteúdo sem altura fixa. Isso garante uma transição suave independente do tamanho do conteúdo.
              </Accordion>
              <Accordion title="Quando usar?" defaultOpen>
                Use para conteúdo secundário que não precisa estar visível por padrão. 
                FAQs, detalhes técnicos, configurações avançadas.
              </Accordion>
            </div>
          </ComponentPreview>

          {/* Lists */}
          <ComponentPreview
            title="List / ListItem"
            description="Listas estilizadas com espaçamento consistente."
            code={`import { List, ListItem } from "@/components/ui/Typography";

<List>
  <ListItem>Primeiro item da lista</ListItem>
  <ListItem>Segundo item</ListItem>
  <ListItem>Terceiro item</ListItem>
</List>`}
          >
            <List>
              <ListItem>Tokens de design padronizados</ListItem>
              <ListItem>Componentes reutilizáveis</ListItem>
              <ListItem>Documentação integrada ao código</ListItem>
            </List>
          </ComponentPreview>

          {/* CodeBlock */}
          <ComponentPreview
            title="CodeBlock"
            description="Bloco de código com syntax highlighting (Shiki) e botão de copiar."
            code={`import { CodeBlock } from "@/components/ui/CodeBlock";

<CodeBlock 
  lang="typescript"
  fileName="example.ts"
  code={\`function greet(name: string) {
  return \\\`Hello, \\\${name}!\\\`;
}\`} 
/>`}
          >
            <CodeBlock 
              lang="typescript"
              fileName="example.ts"
              code={`function greet(name: string) {
  return \`Hello, \${name}!\`;
}`} 
            />
          </ComponentPreview>
        </section>

        {/* === LAYOUT === */}
        <section id="layout">
          <H2>Layout Components</H2>

          <ComponentPreview
            title="PageLayout"
            description="Container principal com Breadcrumbs, área de conteúdo e aside opcional."
            code={`import { PageLayout } from "@/components/layout/PageLayout";

// Básico
<PageLayout>
  <H1>Título</H1>
  <Paragraph>Conteúdo...</Paragraph>
</PageLayout>

// Com Table of Contents
<PageLayout toc={true}>
  {children}
</PageLayout>

// Com aside customizado
<PageLayout aside={<CustomWidget />}>
  {children}
</PageLayout>`}
          >
            <div className="text-sm text-[var(--foreground-muted)] space-y-2">
              <p><strong className="text-[var(--foreground)]">Props:</strong></p>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs font-mono">
                <span className="text-[var(--foreground)]">children</span>
                <span>Conteúdo da página</span>
                <span className="text-[var(--foreground)]">toc?</span>
                <span>Exibe Table of Contents (default: true)</span>
                <span className="text-[var(--foreground)]">aside?</span>
                <span>Conteúdo custom no aside</span>
                <span className="text-[var(--foreground)]">className?</span>
                <span>Classes adicionais</span>
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="PageHeader"
            description="Header padronizado com título, status badge e descrição."
            code={`import { PageHeader } from "@/components/layout/PageHeader";

<PageHeader 
  title="Grid & Layout" 
  status="in_progress"
  description="Como organizar conteúdo."
/>

// Status: undefined | "in_progress" | "planned"`}
          >
            <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--surface)]">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="in_progress">Em produção</Badge>
              </div>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">Grid & Layout</h2>
              <p className="text-sm text-[var(--foreground-muted)] mt-1">Como organizar conteúdo de forma previsível.</p>
            </div>
          </ComponentPreview>
        </section>

        {/* === SPACING === */}
        <section id="spacing">
          <H2>Spacing Tokens</H2>
          <div className="border border-[var(--border)] rounded-lg p-6 space-y-4">
            {[
              { name: "section-sm", value: "2rem (32px)", width: "w-8" },
              { name: "section-md", value: "4rem (64px)", width: "w-16" },
              { name: "section-lg", value: "6rem (96px)", width: "w-24" },
              { name: "container-reading", value: "65ch", width: "w-48" },
            ].map(({ name, value, width }) => (
              <div key={name} className="flex items-center gap-4">
                <div className={`${width} h-6 rounded bg-[var(--primary)] opacity-20`} />
                <div>
                  <p className="text-sm font-mono text-[var(--foreground)]">--spacing-{name}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    </PageLayout>
  );
}
