export default function DesignCodigoPage() {
  return (
    <div className="space-y-12 max-w-2xl pb-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
          Relação entre design e implementação
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Por que essa relação importa
            </h2>
            <p>
              Um bom design pode falhar na implementação. Um código bem escrito pode entregar uma experiência ruim.
            </p>
            <p>
              Quando design e implementação caminham separados, surgem problemas conhecidos: layouts que não escalam, componentes difíceis de manter, decisões visuais que quebram no código e experiências inconsistentes para quem usa.
            </p>
            <p>
              Essa página existe para deixar claro um ponto simples: <strong>design e implementação são partes da mesma decisão.</strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Design não termina no layout
            </h2>
            <p>
              O layout é só o começo.
            </p>
            <p>
              Quando um componente é desenhado, ele já deveria considerar estados, variações, comportamento, acessibilidade e performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Implementação também é experiência
            </h2>
            <p>
              Código não é neutro.
            </p>
            <p>
              Decisões técnicas influenciam performance, clareza, consistência e manutenção.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Onde os problemas costumam surgir
            </h2>
            <p>
              Componentes sem estados claros, layouts impossíveis de adaptar, tokens inexistentes no código, estilos duplicados e ajustes que não retornam para o design.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Pensar como Design Technologist
            </h2>
            <p>
              Projetar considerando implementação, reutilização, tokens, limitações técnicas e manutenção.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Design Systems como ponto de encontro
            </h2>
            <p>
              Um Design System bem feito documenta decisões, reduz ambiguidades, acelera implementação e mantém consistência.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Como este projeto aborda essa relação
            </h2>
            <p>
              Cada conteúdo responde: por que a decisão existe, como impacta a experiência e como se sustenta no código.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              No que acreditar
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
              <li>UX não termina no Figma</li>
              <li>Código também comunica</li>
              <li>Clareza é mais importante que complexidade</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
