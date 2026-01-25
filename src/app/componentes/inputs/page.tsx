import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function InputsPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Inputs
            </h1>
            <Badge variant="production">Em produção</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Campos de entrada são o principal meio de interação do usuário. 
            Inputs bem projetados previnem erros, guiam o preenchimento e reduzem fricção.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Anatomia Obrigatória
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Um input nunca deve existir sozinho. Ele precisa de rótulo (label), espaço para valor e, frequentemente, mensagens de ajuda ou erro.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Estados Críticos
            </h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Default (Descanso)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Focus (Foco ativo, ring visível)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Error (Mensagem explicativa + cor semântica)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-zinc-400">—</span>
                Disabled (Não editável)
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Acessibilidade em Formulários
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
             <p>
               Para garantir que todos possam preencher formulários:
             </p>
             <ul className="list-disc pl-5 space-y-2 mt-4">
               <li>Sempre associe o <code>label</code> ao <code>input</code> via <code>htmlFor</code>/<code>id</code>.</li>
               <li>Use <code>placeholder</code> apenas como exemplo, não como rótulo (ele desaparece).</li>
               <li>Erros devem ser descritos em texto, não apenas indicados por cor vermelha.</li>
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
