import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { PageHeader } from "@/components/layout/PageHeader";
import { Callout } from "@/components/ui/Callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cores – Guia Prático",
  description: "Paleta de cores semântica e sistema de temas. Acessibilidade e contraste no design system.",
};

export default function CoresPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Cores"
        description="Sistema de cores baseado em função, não em valor. Garante consistência visual, suporte automático a temas e manutenção centralizada."
        status="production"
      />

      <section>
        <H2 id="conceito">Abstração e Semântica</H2>
        <Paragraph>
          A aplicação de cor segue um modelo de abstração que separa o valor visual (a cor em si) da função que ela exerce no produto.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Semântica:</strong> A cor é definida pelo que ela faz (ex: <em>ação</em>, <em>perigo</em>), não pela sua aparência (ex: <em>azul</em>, <em>vermelho</em>).
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Escalabilidade:</strong> Mudanças globais de marca ou tema exigem alteração apenas na definição, não em cada componente espalhado pelo sistema.
          </ListItem>
        </List>

        <Callout type="info" title="Por que usar tokens semânticos?">
          <Paragraph className="mb-0 text-sm">
            Ao usar um valor fixo (<code>#ef4444</code>), você cria um vínculo rígido difícil de manter.
            Ao usar um token semântico (<em>Danger</em>), você declara uma intenção. O sistema decide qual a melhor cor para representar essa intenção em cada contexto (claro ou escuro).
          </Paragraph>
        </Callout>
      </section>

      <section>
        <H2 id="estrutura">Camadas de Cores</H2>
        <Paragraph>
          O sistema organiza as cores em níveis de especificidade para garantir flexibilidade e controle.
        </Paragraph>

        <div className="space-y-8 mt-8">
          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-2">Base (Primitivos)</H3>
            <Paragraph className="text-sm mb-0">
              A paleta bruta. Todas as tonalidades disponíveis (ex: Zinc 50-950, Blue 50-950).
              São os ingredientes brutos, mas raramente devem ser usados diretamente na interface.
            </Paragraph>
          </div>

          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-2">Semântica (Alias)</H3>
            <Paragraph className="text-sm mb-0">
              Mapeiam decisões de design. É aqui que definimos que a "Ação Primária" usa a cor "Zinc 900".
              É onde a mágica dos temas (Light/Dark) acontece.
            </Paragraph>
          </div>

          <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-2">Componente</H3>
            <Paragraph className="text-sm mb-0">
              Exceções específicas. Usado quando um componente precisa de uma cor única que não se encaixa nas regras semânticas globais.
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <H2 id="estados">Estados Interativos</H2>
        <Paragraph>
          Cores comunicam estado. Cada interação deve ter feedback visual claro.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Default:</strong> O estado de repouso do elemento.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Hover:</strong> Indica interatividade ao passar o cursor. Deve ter contraste suficiente para ser perceptível.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Active/Pressed:</strong> Confirmação visual imediata do clique ou toque.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Disabled:</strong> Elementos inoperantes. Geralmente com opacidade reduzida ou tons de cinza, mas mantendo legibilidade se a informação for importante.
          </ListItem>
        </List>
      </section>

      <section>
        <H2 id="acessibilidade">Acessibilidade e Contraste</H2>
        <Paragraph>
          A relação entre cor de fundo e cor de texto deve garantir leitura confortável para todos.
        </Paragraph>
        <List>
          <ListItem>
            Textos normais exigem contraste mínimo de <strong>4.5:1</strong>.
          </ListItem>
          <ListItem>
            Textos grandes (títulos) e ícones funcionais exigem mínimo de <strong>3:1</strong>.
          </ListItem>
          <ListItem>
            Nunca confie <em>apenas</em> na cor para transmitir informação (ex: erro em formulário). Use ícones e texto de suporte para garantir que daltônicos compreendam o estado.
          </ListItem>
        </List>
      </section>

      <section>
        <H2 id="boas-praticas">Boas Práticas</H2>
        <List>
          <ListItem>
             Evite usar cores "hardcoded" (valores manuais). Sempre prefira o token mais semântico disponível.
          </ListItem>
          <ListItem>
            Use cores de "Sucesso" e "Perigo" com parcimônia. Se tudo chama atenção, nada chama atenção.
          </ListItem>
          <ListItem>
            Em interfaces densas, prefira tons neutros (cinzas) para a estrutura e deixe a cor apenas para as ações principais. Isso reduz a carga cognitiva.
          </ListItem>
        </List>
      </section>
    </PageLayout>
  );
}
