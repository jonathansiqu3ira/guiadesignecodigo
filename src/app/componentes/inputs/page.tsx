import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { Callout } from "@/components/ui/Callout";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inputs – Guia Prático",
  description: "Formulários, campos de entrada e boas práticas de validação.",
};

export default function InputsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Inputs"
        description="Formulários são conversas. Inputs são onde o usuário fala com o sistema. Clareza e prevenção de erros são vitais."
        status="production"
      />

      <section>
        <H2>Anatomia</H2>
        <Paragraph>
          Um campo de entrada robusto é composto por quatro elementos principais que trabalham juntos:
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Label:</strong> Diz o que é o campo. Deve estar sempre visível (placeholders não substituem labels).
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Container:</strong> A área clicável onde o dado é inserido.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Placeholder:</strong> Dica ou exemplo de formato (ex: `nome@exemplo.com`). Desaparece ao digitar.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Feedback/Helper:</strong> Texto de ajuda ou mensagem de erro situada, geralmente, abaixo do campo.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Validação e Feedback</H2>
        <Paragraph>
          A validação deve ser progressiva e útil. O objetivo não é apontar erros, é ajudar o usuário a ter sucesso.
        </Paragraph>
        
        <div className="grid gap-6 md:grid-cols-2 mt-6">
           <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">Boas Práticas</H3>
            <List className="mb-0 text-sm">
              <ListItem>Validar ao sair do campo (onBlur), não enquanto digita (exceto senhas).</ListItem>
              <ListItem>Mensagens de erro explícitas ("Email inválido" vs "Erro").</ListItem>
              <ListItem>Preservar o dado preenchido se houver erro.</ListItem>
            </List>
          </div>

           <div className="p-6 border border-[var(--border)]/60 rounded-lg bg-[var(--surface)]/50">
            <H3 className="mt-0 mb-3 text-base">A Evitar</H3>
             <List className="mb-0 text-sm">
              <ListItem>Validar apenas ao enviar o formulário.</ListItem>
              <ListItem>Usar apenas cor (vermelho) para indicar erro.</ListItem>
              <ListItem>Esconder labels e confiar apenas no placeholder.</ListItem>
            </List>
          </div>
        </div>
      </section>

      <section>
        <H2>Acessibilidade em Formulários</H2>
        <List>
          <ListItem>
            Todo input precisa de um `label` programaticamente associado (via `for/htmlFor` e `id`).
          </ListItem>
          <ListItem>
            Mensagens de erro devem estar conectadas ao input via `aria-describedby` e `aria-errormessage`.
          </ListItem>
          <ListItem>
            Campos obrigatórios devem ser indicados visualmente e via código (`required` ou `aria-required`).
          </ListItem>
        </List>
      </section>

      <Callout type="info" title="Placeholder vs. Label">
        <Paragraph className="mb-0 text-sm">
          Nunca use placeholder como label. Placeholders têm baixo contraste, desaparecem quando o usuário digita (forçando o uso da memória de curto prazo) e não são lidos consistentemente por tecnologias assistivas.
        </Paragraph>
      </Callout>
    </PageLayout>
  );
}
