import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function GridPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
           <div className="flex items-center gap-3">
            <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Grid & Layout
            </h1>
            <Badge variant="production">Em produção</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Estrutura invisível, resultado visível. O grid garante alinhamento e consistência entre telas.
            Neste projeto, usamos um sistema flexível que se adapta, não um grid rígido de colunas fixas.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Conceito
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              O layout é definido por espaçamento (padding/gap) e máxima largura (max-width), não por "número de colunas".
              Isso facilita a responsividade sem matemática complexa.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Regras Básicas
            </h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Espaçamento base de 4px (escala linear: 4, 8, 12, 16...)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Container centralizado com padding lateral
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Colunas fluidas com <code>gap</code> consistente
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Responsividade
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
             <p>
               Em vez de criar layouts diferentes para cada dispositivo, criamos componentes que fluem:
             </p>
             <ul className="list-disc pl-5 space-y-2 mt-4">
               <li><strong>Mobile First</strong>: O layout começa em coluna única (`block` ou `flex-col`).</li>
               <li><strong>Tablet/Desktop</strong>: Expande para colunas (`md:grid-cols-2`, `xl:flex-row`).</li>
               <li><strong>Restrição</strong>: O conteúdo de leitura é travado em `max-w-3xl` para não alongar as linhas de texto (60-80 caracteres por linha).</li>
             </ul>
          </div>
        </section>
      </div>
      
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-12">
            <TableOfContents />
        </div>
      </div>
    </div>
  );
}
