import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { H1, H2, Paragraph, List, ListItem } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <H1 className="mb-0">Página não encontrada</H1>
            <Badge variant="production">404</Badge>
          </div>
          <Paragraph className="text-xl">
            A página que você tentou acessar não existe ou ainda não foi publicada.
            O guia está em evolução contínua e parte do conteúdo pode estar temporariamente indisponível.
          </Paragraph>
        </header>

        <hr className="border-[var(--border)]" />

        <section className="space-y-6">
          <H2 className="mt-0">Caminhos sugeridos</H2>
          <List>
            <ListItem>
              <Link href="/" className="text-[var(--foreground)] hover:underline font-medium">Voltar para a Introdução</Link>
            </ListItem>
            <ListItem>
              Verifique a navegação lateral para explorar os tópicos disponíveis.
            </ListItem>
          </List>
        </section>
      </div>
    </div>
  );
}
