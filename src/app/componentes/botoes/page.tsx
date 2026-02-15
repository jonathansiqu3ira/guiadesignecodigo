import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Botões – Guia Prático",
  description: "Componentes de botão: ação primária, secundária e ghost. Estados, variantes e acessibilidade.",
};

export default function BotoesPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Botões" 
        status="in_progress"
        description="O componente mais básico e o mais revelador. Como um botão é construído diz muito sobre a maturidade do sistema."
      />

      <section className="space-y-4">
        <H2>Variantes</H2>
        <Paragraph>
          Cada variante comunica um nível diferente de importância na hierarquia de ações.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Primary</H3>
            <div className="flex justify-center py-4">
              <button className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Confirmar
              </button>
            </div>
            <Paragraph className="text-sm mt-2">
              Ação principal da tela. Só deve existir <strong>uma por contexto</strong>.
            </Paragraph>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Secondary</H3>
            <div className="flex justify-center py-4">
              <button className="px-4 py-2 border border-[var(--border)] text-[var(--foreground)] rounded-md text-sm font-medium hover:bg-[var(--surface)] transition-colors">
                Cancelar
              </button>
            </div>
            <Paragraph className="text-sm mt-2">
              Ação alternativa ou complementar. Menos destaque visual.
            </Paragraph>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">Ghost</H3>
            <div className="flex justify-center py-4">
              <button className="px-4 py-2 text-[var(--foreground-muted)] rounded-md text-sm font-medium hover:bg-[var(--surface)] transition-colors">
                Ver mais
              </button>
            </div>
            <Paragraph className="text-sm mt-2">
              Ação terciária. Sem borda, sem fundo. Usada para ações discretas.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <H2>Estados</H2>
        <Paragraph>
          Todo botão precisa comunicar claramente seu estado atual.
        </Paragraph>
        <List>
          <ListItem><strong>Default:</strong> estado de repouso, pronto para interação</ListItem>
          <ListItem><strong>Hover:</strong> indica que o elemento é interativo (cursor + mudança visual)</ListItem>
          <ListItem><strong>Focus:</strong> indicador visível para navegação por teclado (ring ou outline)</ListItem>
          <ListItem><strong>Active/Pressed:</strong> feedback imediato ao clique (escala ou opacidade)</ListItem>
          <ListItem><strong>Disabled:</strong> visualmente muted, sem interação, com cursor not-allowed</ListItem>
          <ListItem><strong>Loading:</strong> spinner substitui o conteúdo, botão fica desabilitado</ListItem>
        </List>
      </section>

      <section className="space-y-4">
        <H2>Implementação</H2>
        <CodeBlock
          lang="tsx"
          fileName="Button.tsx (exemplo)"
          code={`interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = "primary", 
  size = "md",
  disabled,
  loading,
  children,
  onClick 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "rounded-md font-medium transition-all",
        "focus-visible:ring-2 focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <H2>Acessibilidade</H2>
        <List>
          <ListItem>Usar <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">{`<button>`}</code> nativo, nunca <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">{`<div onClick>`}</code></ListItem>
          <ListItem>Botões com apenas ícone devem ter <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">aria-label</code></ListItem>
          <ListItem>Focus ring visível obrigatório (mínimo 2px)</ListItem>
          <ListItem>Contraste mínimo de 4.5:1 para texto do botão</ListItem>
          <ListItem>Área de toque mínima de 44×44px em mobile</ListItem>
        </List>
      </section>

      <Callout type="info" title="Regra prática">
        Se você tem 3+ botões primários na mesma tela, a hierarquia está errada. 
        Revise a arquitetura de informação antes de mexer no visual.
      </Callout>
    </PageLayout>
  );
}
