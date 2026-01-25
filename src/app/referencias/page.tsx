import { ExternalLink } from "lucide-react";
import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function ReferenciasPage() {
  const references = [
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org",
      description: "Documentação oficial e referência para padrões web (HTML, CSS, JavaScript)."
    },
    {
      name: "W3Schools",
      url: "https://www.w3schools.com",
      description: "Tutoriais e referências práticas para desenvolvimento web."
    },
    {
      name: "Smashing Magazine",
      url: "https://www.smashingmagazine.com",
      description: "Artigos de alta qualidade sobre design, codificação e UX."
    }
  ];

  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
           <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Referências
            </h1>
            <Badge variant="production">Em produção</Badge>
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Fontes externas confiáveis que servem como base de aprendizado e aprofundamento para o conteúdo deste guia.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
             Fontes Recomendadas
          </h2>
          <div className="grid gap-4 max-w-2xl">
            {references.map((ref) => (
              <a
                key={ref.name}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                id={ref.name.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {ref.name}
                  </h3>
                  <ExternalLink size={16} className="text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {ref.description}
                </p>
              </a>
            ))}
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
