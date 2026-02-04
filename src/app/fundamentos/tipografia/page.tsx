import { TableOfContents } from "@/components/TableOfContents";

export default function TipografiaPage() {
  return (
    <div className="flex gap-12 items-start">
      {/* Conteúdo principal */}
      <article className="flex-1 max-w-3xl space-y-16 pb-16">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
             <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Tipografia
            </h1>
          </div>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A tipografia é a infraestrutura da interface. Ela dita o ritmo de leitura, organiza a hierarquia da informação e estabelece a personalidade do produto sem que o usuário perceba.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Princípios</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Neste guia, as decisões tipográficas não são puramente estéticas. Elas seguem quatro princípios fundamentais que garantem que o conteúdo seja acessível e útil.
          </p>
          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>
              <strong className="text-[var(--foreground)]">Suporte à leitura:</strong> A função primária do texto é ser lido. Contraste, tamanho e entrelinha devem minimizar o esforço cognitivo.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Ferramenta de hierarquia:</strong> Tamanho e peso não servem para "enfeitar", mas para indicar importância e relação entre elementos.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Consistência acima de variedade:</strong> Menos estilos tipográficos, usados de forma consistente, criam interfaces mais previsíveis e fáceis de manter.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Acessibilidade como critério básico:</strong> Tamanhos mínimos e contrastes adequados não são opcionais.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Fontes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border border-[var(--technical-border)] rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-medium text-[var(--foreground)] mb-2">Fonte Primária</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Inter (Sans-serif)
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Usada em 95% da interface. Otimizada para telas, possui excelente legibilidade em tamanhos pequenos e neutralidade para não competir com o conteúdo. É a "voz" padrão da interface.
              </p>
            </div>
            <div className="p-6 border border-[var(--technical-border)] rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50">
              <h3 className="font-medium text-[var(--foreground)] mb-2">Fonte Secundária</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                JetBrains Mono (Monospace)
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Uso restrito a trechos de código, dados tabulares, IDs e elementos técnicos. Sua largura fixa ajuda no alinhamento vertical de caracteres e reforça a estética de "ferramenta técnica".
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Hierarquia tipográfica</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            A hierarquia guiam o olho do usuário. Definimos três níveis claros de informação:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Headings (Títulos)</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Conciso e direto. Usado para seções e agrupamentos. O contraste de peso (Medium/Bold) é mais eficaz que variações exageradas de tamanho.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Body (Corpo de texto)</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Onde o usuário passa mais tempo. Foco total em conforto de leitura. Evite pesos muito leves (Light/Thin) ou muito pesados (Black) em blocos de texto.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Textos funcionais</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Labels, legendas e metadados. Geralmente menores, mas exigem alto contraste para permanecerem legíveis. Frequentemente usam cores mais neutras para diminuir o ruído visual.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Tamanhos, pesos e espaçamento</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Propriedades tipográficas trabalham em conjunto. Alterar uma exige ajustar as outras.
          </p>
          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>
              <strong className="text-[var(--foreground)]">Tamanho (Size):</strong> Defina uma escala limitada. Não use valores arbitrários. Se precisa de um tamanho entre 14px e 16px, o problema provavelmente é layout, não tipografia.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Peso (Weight):</strong> Use pesos para criar ênfase sem aumentar o tamanho. <em>Regular</em> para leitura, <em>Medium</em> para estrutura, <em>Bold</em> para destaque crítico.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Line-height (Entrelinha):</strong> Títulos curtos aceitam entrelinhas menores (1.1 - 1.2). Textos longos precisam de ar (1.5 - 1.6). O aperto excessivo dificulta o retorno do olho para a próxima linha; o excesso de ar desorganiza o parágrafo.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Boas práticas de uso</h2>
          <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="text-base">Alinhe textos longos à esquerda. Justificar texto na web cria "rios" de espaço branco que prejudicam a leitura (especialmente em mobile).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="text-base">Limite o comprimento da linha (measure) entre 45 e 75 caracteres. Linhas muito longas cansam o olho; muito curtas quebram o ritmo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="text-base">Use Caixa Alta (UPPERCASE) com moderação absoluta. É mais difícil de ler e soa como "grito". Em siglas e botões, use tracking (letter-spacing) levemente aumentado.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">✓</span>
              <span className="text-base">Centralize texto apenas se forem títulos curtos ou labels isolados. Parágrafos centralizados são difíceis de ler porque cada linha começa em um lugar diferente.</span>
            </li>
          </ul>
        </section>

         <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Tipografia e implementação</h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            No código, a tipografia deve ser sistemática. Evite valores hardcoded.
          </p>
          <ul className="space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <li>
              Use <strong>Design Tokens</strong> (ex: classes do Tailwind como <code>text-sm</code>, <code>font-medium</code>). Isso garante que se a escala mudar no design system global, a interface inteira se adapta.
            </li>
            <li>
              Evite classes utilitárias arbitrárias como <code>text-[17px]</code> a menos que seja um caso de exceção extrema.
            </li>
            <li>
              Verifique o contraste automaticamente via dev tools ou linters para garantir WCAG AA ou AAA.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">O que evitar</h2>
          <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✕</span>
              <span className="text-base">Não use mais de 2 famílias tipográficas. Uma para UI e, se necessário, uma para branding/display é suficiente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✕</span>
              <span className="text-base">Não reduza o tamanho da fonte para fazer o texto "caber". Se não cabe, revise o conteúdo ou o layout. Fontes menores que 12px são inacessíveis para muitos.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 font-bold">✕</span>
              <span className="text-base">Não confie apenas na cor para hierarquia. Pessoas com daltonismo podem não perceber a diferença. Use tamanho e peso também.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">Estudos e guias aplicados</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a 
              href="https://www.nngroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-[var(--technical-border)] rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors block"
            >
              <h3 className="font-medium text-[var(--foreground)] mb-1 flex items-center gap-2">
                Nielsen Norman Group
                <span className="text-xs text-zinc-400">↗</span>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Pesquisas sobre leitura em tela, escaneabilidade e hierarquia visual.
              </p>
            </a>
            
            <a 
              href="https://m3.material.io/styles/typography" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-[var(--technical-border)] rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors block"
            >
              <h3 className="font-medium text-[var(--foreground)] mb-1 flex items-center gap-2">
                Material Design – Typography
                <span className="text-xs text-zinc-400">↗</span>
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Diretrizes práticas de escala e uso funcional da tipografia.
              </p>
            </a>
          </div>
          
          <div className="bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
            <strong className="font-medium text-[var(--foreground)]">Nota:</strong> Este guia utiliza essas referências como base conceitual, adaptando os princípios à prática diária de design e implementação front-end.
          </div>
        </section>

      </article>

      {/* TOC */}
      <aside className="hidden xl:block w-64">
        <div className="sticky top-12">
          <TableOfContents />
        </div>
      </aside>
    </div>
  );
}
