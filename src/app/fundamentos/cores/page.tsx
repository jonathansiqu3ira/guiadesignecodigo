import React from "react";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { PageLayout } from "@/components/layout/PageLayout";
import { H1, H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cores – Guia Prático",
  description: "Paleta de cores semântica, tokens de cor e sistema de temas. Acessibilidade e contraste no design system.",
};

export default function CoresPage() {
  return (
    <PageLayout>
      <header className="space-y-6">
        <H1 className="mb-4">Cores</H1>
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
          Sistema de cores baseado em tokens semânticos. Garante consistência visual, suporte automático a temas e manutenção centralizada.
        </Paragraph>
      </header>

      <section>
        <div className="flex gap-2 mb-8">
          <Badge variant="production">Design System</Badge>
          <Badge variant="stable">React + Tailwind</Badge>
        </div>

        <H2 id="conceito">Abstração e Semântica</H2>
        <Paragraph>
          Aplicação de cores segue um modelo de abstração que separa o valor visual (hexadecimal) da função no produto.
        </Paragraph>
        <List>
            <ListItem>
                <strong className="text-[var(--foreground)]">Semântica:</strong> A cor é definida pelo que ela faz (ex: <code>action</code>), não pela sua aparência (ex: <code>blue</code>).
            </ListItem>
            <ListItem>
                <strong className="text-[var(--foreground)]">Escalabilidade:</strong> Mudanças globais de marca ou tema exigem alteração apenas na definição do token, não nos componentes.
            </ListItem>
        </List>

        <Callout type="info" title="Hex vs. Tokens">
          <p className="mb-2">
            <strong>Hex (Hardcoded):</strong> <code>bg-[#ef4444]</code><br />
            Acoplamento forte. Dificulta manutenção e impede temas dinâmicos.
          </p>
          <p>
            <strong>Token (Semântico):</strong> <code>bg-semantic-danger</code><br />
            Acoplamento fraco. O componente pede uma intenção de "perigo", e o sistema resolve a cor certa pro contexto (Light/Dark).
          </p>
        </Callout>
      </section>

      <hr className="border-[var(--border)]" />

      <section>
        <H2 id="estrutura">Arquitetura de Tokens</H2>
        <Paragraph>
          O sistema organiza as cores em três camadas de especificidade.
        </Paragraph>

        <div className="space-y-8 mt-8">
          <div>
            <H3 className="mb-3">1. Base Colors (Primitivos)</H3>
            <Paragraph>
              Paleta bruta disponível no sistema. Nomes descrevem cor e luminosidade (escala 50–950). Não possuem significado semântico e nunca devem ser usados diretamente em layouts.
            </Paragraph>
            <CodeBlock 
              lang="typescript" 
              fileName="colors/primitives.ts"
              code={`export const brand = {
  50: '#f0f9ff',
  100: '#e0f2fe',
  // ...
  500: '#0ea5e9',
  600: '#0284c7',
  // ...
  900: '#0c4a6e',
};

export const neutral = {
  // Escala de cinzas para ui, bordas e texto
};`} 
            />
          </div>

          <div>
            <H3 className="mb-3">2. Semantic Tokens (Alias)</H3>
            <Paragraph>
              Mapeiam decisões de design para valores primitivos. É onde a variação de temas (Light/Dark) acontece. Componentes devem consumir exclusivamente estes tokens.
            </Paragraph>
            <CodeBlock 
              lang="css"
              fileName="globals.css"
              code={`:root {
  /* Action */
  --action-primary: var(--brand-500);
  --action-primary-hover: var(--brand-600);
  
  /* Feedback */
  --semantic-danger: var(--red-500);
  --semantic-success: var(--green-500);
  
  /* Surface */
  --surface-primary: var(--white);
  --surface-secondary: var(--neutral-50);
}

.dark {
  /* Remapeamento para modo escuro */
  --surface-primary: var(--neutral-900);
  --surface-secondary: var(--neutral-800);
}`} 
            />
          </div>

          <div>
            <H3 className="mb-3">3. Component Tokens</H3>
            <Paragraph>
              Exceções para componentes de alta complexidade que exigem um namespace isolado. Uso restrito para evitar redundância. Exemplo: <code>--button-primary-bg</code>.
            </Paragraph>
          </div>
        </div>
      </section>

      <hr className="border-[var(--border)]" />

      <section>
        <H2 id="estados">Estados Interativos</H2>
        <Paragraph>
          Componentes interativos precisam fornecer feedback visual claro pra cada estado.
        </Paragraph>
        <List>
          <ListItem><strong>Default:</strong> Estado de repouso.</ListItem>
          <ListItem><strong>Hover:</strong> Cursor sobre o elemento. Indicador de interatividade.</ListItem>
          <ListItem><strong>Active / Pressed:</strong> Confirmação visual do clique/toque.</ListItem>
          <ListItem><strong>Focus-visible:</strong> Navegação por teclado. Obrigatório indicador de foco (ring/outline) com alto contraste.</ListItem>
          <ListItem><strong>Disabled:</strong> Elemento inoperante. Visual rebaixado (opacidade ou cinza), mantendo legibilidade se houver informação crucial.</ListItem>
        </List>
      </section>

      <hr className="border-[var(--border)]" />

      <section>
        <H2 id="acessibilidade">Acessibilidade (WCAG)</H2>
        <Paragraph>
          Pares de cores (fundo e primeiro plano) devem satisfazer os critérios mínimos de contraste da WCAG 2.1.
        </Paragraph>
        <List>
          <ListItem><strong>Texto Normal:</strong> 4.5:1 (Nível AA).</ListItem>
          <ListItem><strong>Texto Grande / Ícones:</strong> 3:1 (Nível AA).</ListItem>
          <ListItem><strong>Componentes de Interface:</strong> 3:1 (Bordas de inputs, botões).</ListItem>
        </List>
         <Paragraph className="mt-4 italic">
          Nota: cor não pode ser o único meio de transmitir informação. Erros e sucessos devem ser acompanhados de ícones ou rótulos textuais pra suporte a daltônicos.
         </Paragraph>
      </section>

      <hr className="border-[var(--border)]" />

      <section>
        <H2 id="implementacao">Implementação</H2>
        <Paragraph>
          Configuração técnica pra garantir type-safety e intellisense com Tailwind CSS.
        </Paragraph>

        <H3 className="mt-6 mb-2">1. Tailwind config</H3>
        <CodeBlock 
          lang="typescript"
          fileName="tailwind.config.ts"
          code={`import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // Alias do Tailwind apontando para variáveis CSS
        action: {
          primary: {
            DEFAULT: "var(--action-primary)",
            hover: "var(--action-primary-hover)",
            active: "var(--action-primary-active)",
          }
        },
        surface: {
          DEFAULT: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
        },
      }
    }
  }
};
export default config;`} 
        />

        <H3 className="mt-6 mb-2">2. Consumo no Componente</H3>
        <CodeBlock 
          lang="typescript"
          fileName="components/Button.tsx"
          code={`export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button 
      className={cn(
        // Estrutura base
        "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors",
        
        // Foco acessível
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-primary",
        
        // Aplicação de tokens semânticos
        variant === 'primary' && "bg-action-primary text-white hover:bg-action-primary-hover",
        variant === 'secondary' && "bg-surface-secondary text-foreground hover:bg-surface-secondary-hover",
        variant === 'danger' && "bg-semantic-danger text-white hover:bg-semantic-danger-hover",
        
        // Estado desabilitado
        "disabled:opacity-50 disabled:pointer-events-none",
        
        className
      )}
      {...props} 
    />
  );
}`} 
        />
      </section>

      <hr className="border-[var(--border)]" />

      <section>
        <H2 id="boas-praticas">Boas Práticas e Decisões</H2>
        
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-[var(--foreground)]">Variáveis CSS Nativas</h3>
            <Paragraph>
              Permitem troca de temas em runtime, lidam com a cascata nativa do browser e evitam Flash of Unstyled Content (FOUC).
            </Paragraph>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-[var(--foreground)]">Abstração via Classes</h3>
            <Paragraph>
              Usar <code>bg-action-primary</code> em vez de <code>var(--action-primary)</code> centraliza a sintaxe no framework. Facilita busca e substituição no código.
            </Paragraph>
          </div>
        </div>
      </section>

      <Callout type="tip" title="Checklist de Qualidade">
        <List>
          <ListItem>Sem códigos hexadecimais hardcoded nos componentes.</ListItem>
          <ListItem>Estados de hover e focus definidos para todas as interações.</ListItem>
          <ListItem>Verificação de contraste realizada no Light e Dark mode.</ListItem>
          <ListItem>Feedback de erro/sucesso usando tokens semânticos, não primitivos.</ListItem>
        </List>
      </Callout>
    </PageLayout>
  );
}
