import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acessibilidade – Guia Prático",
  description: "Diretrizes WCAG e práticas inclusivas aplicadas ao design system.",
};

export default function AcessibilidadePage() {
  return (
    <PageLayout>
      <PageHeader
        title="Acessibilidade"
        description="Acessibilidade não é uma 'feature', é um direito. Construir para todos melhora o produto para qualquer um."
        status="production"
      />

      <section>
        <H2>Por que importa</H2>
        <Paragraph>
          Quando negligenciamos a acessibilidade, estamos decidindo ativamente (mesmo sem querer) quem pode e quem não pode usar o produto. 
          Além do aspecto ético, acessibilidade melhora a usabilidade para todos (ex: contraste alto ajuda quem usa o celular no sol).
        </Paragraph>
      </section>

      <section>
        <H2>Checklist Mínimo (Frontend)</H2>
        <Paragraph>
          Critérios indispensáveis antes de considerar uma tela pronta para produção.
        </Paragraph>

        <div className="space-y-8 mt-6">
          <div>
            <H3 className="mt-0">1. Contraste e Cor</H3>
            <List>
              <ListItem>Verifique se o texto tem contraste suficiente com o fundo (WCAG AA).</ListItem>
              <ListItem>Não use a cor como único meio de transmitir informação (erro, sucesso, status).</ListItem>
              <ListItem>Links no meio de parágrafos devem ter identificação visual além da cor (sublinhado ou peso).</ListItem>
            </List>
          </div>

          <div>
            <H3 className="mt-0">2. Navegação por Teclado</H3>
            <List>
              <ListItem>Todo elemento interativo (link, botão, input) deve ser alcançável pela tecla <code>Tab</code>.</ListItem>
              <ListItem>O foco deve ser visível. Nunca remova o outline sem fornecer uma alternativa clara.</ListItem>
              <ListItem>A ordem do foco deve seguir a leitura lógica da página.</ListItem>
            </List>
          </div>

          <div>
            <H3 className="mt-0">3. Semântica</H3>
            <List>
              <ListItem>Use botões para ações (`button`) e links para navegação (`a`). Não confunda os dois.</ListItem>
              <ListItem>Headings (H1, H2, H3) devem respeitar hierarquia, sem pular níveis.</ListItem>
              <ListItem>Inputs de formulário precisam sempre de etiquetas descritivas (`labels`).</ListItem>
            </List>
          </div>
        </div>
      </section>

      <section>
        <H2>Sobre ARIA</H2>
        <Paragraph>
          A primeira regra do ARIA é: <strong>não use ARIA se o HTML nativo resolver</strong>.
        </Paragraph>
        <Paragraph>
          Um elemento `button` já comunica ao leitor de tela que é clicável. 
          Uma `div` com `onClick` precisa de uma infraestrutura enorme de ARIA para fazer o mesmo trabalho.
          Prefira sempre elementos nativos.
        </Paragraph>
      </section>

      <section>
        <H2>Ferramentas de Validação</H2>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Navegação manual:</strong> Tente usar sua própria interface apenas com o teclado. É a validação mais honesta possível.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Lighthouse / axe DevTools:</strong> Auditorias automáticas pegam problemas estruturais óbvios.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Leitores de tela:</strong> Testes reais com VoiceOver (Mac) ou NVDA (Windows) revelam problemas que ferramentas automáticas ignoram.
          </ListItem>
        </List>
      </section>

      <Callout type="warning" title="Regra de Ouro">
        <Paragraph className="mb-0 text-sm">
          Se um componente não pode ser operado apenas com o teclado, ele está quebrado. Não importa o quão bonito seja.
        </Paragraph>
      </Callout>
    </PageLayout>
  );
}
