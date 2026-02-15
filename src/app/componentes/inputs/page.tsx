import { PageLayout } from "@/components/layout/PageLayout";
import { PageHeader } from "@/components/layout/PageHeader";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inputs – Guia Prático",
  description: "Componentes de input: campos de texto, formulários, validação e estados.",
};

export default function InputsPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Inputs" 
        status="in_progress"
        description="Campos de entrada são onde o usuário mais precisa de clareza. Cada detalhe importa: label, placeholder, feedback."
      />

      <section className="space-y-4">
        <H2>Anatomia de um input</H2>
        <Paragraph>
          Um campo de input bem construído tem mais partes do que parece:
        </Paragraph>
        <CodeBlock
          lang="plaintext"
          fileName="Anatomia"
          code={`┌─────────────────────────────────────┐
│  Label *                     (i)   │  ← Label + indicador obrigatório + help
├─────────────────────────────────────┤
│  Placeholder text                  │  ← Input com placeholder
├─────────────────────────────────────┤
│  Helper text ou mensagem de erro   │  ← Feedback contextual
└─────────────────────────────────────┘`}
        />
      </section>

      <section className="space-y-4">
        <H2>Estados</H2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <H3 className="text-sm mt-0 text-[var(--foreground-muted)]">Default</H3>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[var(--foreground)]">Nome completo</label>
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-md text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
              />
              <p className="text-xs text-[var(--foreground-muted)]">Como aparecerá no seu perfil.</p>
            </div>
          </div>

          <div className="space-y-2">
            <H3 className="text-sm mt-0 text-[var(--foreground-muted)]">Error</H3>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[var(--foreground)]">Email</label>
              <input 
                type="email" 
                defaultValue="email-invalido" 
                className="w-full px-3 py-2 bg-[var(--background)] border border-red-500/50 rounded-md text-sm text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
              <p className="text-xs text-red-400">Formato de email inválido.</p>
            </div>
          </div>

          <div className="space-y-2">
            <H3 className="text-sm mt-0 text-[var(--foreground-muted)]">Disabled</H3>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[var(--foreground-muted)]">Campo bloqueado</label>
              <input 
                type="text" 
                disabled 
                defaultValue="Não editável" 
                className="w-full px-3 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-md text-sm text-[var(--foreground-muted)] cursor-not-allowed opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <H2>Validação</H2>
        <Paragraph>
          Validação ideal é progressiva: ajuda o usuário enquanto preenche, 
          não apenas quando submete.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">✓ Boa prática</H3>
            <List className="text-sm my-0">
              <ListItem>Validar ao sair do campo (onBlur)</ListItem>
              <ListItem>Feedback visual imediato (borda + mensagem)</ListItem>
              <ListItem>Mensagem específica ("Mínimo 8 caracteres")</ListItem>
              <ListItem>Indicador de campo obrigatório visível</ListItem>
            </List>
          </div>

          <div className="border border-[var(--border)] rounded-lg p-5 space-y-3">
            <H3 className="text-base mt-0">✗ Evitar</H3>
            <List className="text-sm my-0">
              <ListItem>Validar apenas no submit do form</ListItem>
              <ListItem>Mensagens genéricas ("Campo inválido")</ListItem>
              <ListItem>Limpar o campo após erro</ListItem>
              <ListItem>Usar apenas cor para indicar estado</ListItem>
            </List>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <H2>Implementação</H2>
        <CodeBlock
          lang="tsx"
          fileName="Input.tsx (exemplo)"
          code={`interface InputProps {
  label: string;
  error?: string;
  helper?: string;
  required?: boolean;
  // ...HTMLInputElement props
}

export function Input({ 
  label, error, helper, required, ...props 
}: InputProps) {
  const id = useId();
  
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? \`\${id}-error\` : undefined}
        className={cn(
          "w-full px-3 py-2 rounded-md border",
          error 
            ? "border-red-500 focus:ring-red-500" 
            : "border-[var(--border)] focus:ring-[var(--primary)]"
        )}
        {...props}
      />
      {error && (
        <p id={\`\${id}-error\`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
      {!error && helper && (
        <p className="text-xs text-[var(--foreground-muted)]">{helper}</p>
      )}
    </div>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <H2>Acessibilidade</H2>
        <List>
          <ListItem>Todo input deve ter uma <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">{`<label>`}</code> associada via <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">htmlFor</code></ListItem>
          <ListItem>Erros devem usar <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">aria-invalid</code> e <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">aria-describedby</code></ListItem>
          <ListItem>Placeholder nunca substitui label. Leitores de tela podem não lê-lo</ListItem>
          <ListItem>Erros devem ser comunicados com <code className="bg-[var(--surface)] px-1.5 py-0.5 rounded text-sm">role="alert"</code> para leitores de tela</ListItem>
          <ListItem>Contraste da borda de foco: mínimo 3:1</ListItem>
        </List>
      </section>

      <Callout type="warning" title="Nunca esqueça">
        Label nunca é opcional. Se o design não tem label, o design está errado.
        Não a implementação.
      </Callout>
    </PageLayout>
  );
}
