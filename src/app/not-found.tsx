import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export default function NotFound() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Página não encontrada
            </h1>
            <Badge variant="production">404</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A página que você tentou acessar não existe ou ainda não foi publicada.
            O guia está em evolução contínua e parte do conteúdo pode estar temporariamente indisponível.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Caminhos sugeridos
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
             <ul className="list-disc pl-5 space-y-3">
               <li>
                 <Link href="/" className="text-zinc-900 dark:text-zinc-100 hover:underline font-medium">Voltar para a Introdução</Link>
               </li>
               <li>
                 Verifique a navegação lateral para explorar os tópicos disponíveis.
               </li>
             </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
