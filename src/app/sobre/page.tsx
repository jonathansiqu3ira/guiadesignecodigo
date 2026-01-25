export default function SobrePage() {
  return (
    <div className="space-y-12 max-w-2xl pb-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
          Sobre
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Por que esse projeto existe
            </h2>
            <p>
              Eu sempre senti um descompasso entre o que é desenhado e o que é realmente construído. 
              Design muitas vezes para no Figma. Código começa tarde demais. E no meio disso, a experiência do usuário paga a conta.
            </p>
            <p>
              Este projeto nasceu para diminuir esse ruído. Para falar de design e código juntos, do jeito que eles realmente funcionam no dia a dia de produtos digitais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Como eu penso design e código
            </h2>
            <p>
              Para mim, UX não é só layout bonito e código não é só implementação técnica.
            </p>
            <p>
              Decisões de design impactam performance, acessibilidade, manutenção e escala. 
              Decisões técnicas também afetam clareza, consistência e experiência.
            </p>
            <p>
              Pensar como <em>Design Technologist</em> é entender esse meio do caminho e projetar soluções que façam sentido visualmente, tecnicamente e para quem usa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Para quem é
            </h2>
            <p>Este conteúdo é para quem:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
              <li>Trabalha com design e quer entender melhor o impacto do código</li>
              <li>Trabalha com código e quer interfaces mais bem resolvidas</li>
              <li>Atua na ponte entre produto, design e engenharia</li>
              <li>Constrói ou mantém <em>design systems</em></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              O que você vai encontrar aqui
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
              <li>Guias práticos por componente</li>
              <li>Boas práticas de UX, acessibilidade e estados</li>
              <li>Decisões explicadas, não só mostradas</li>
              <li>Conteúdo pensado para sair do papel e ir para produção</li>
              <li>Exemplos que consideram manutenção e evolução do produto</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              Como eu organizo o conteúdo
            </h2>
            <p>
              Cada material segue uma estrutura clara: <strong>contexto primeiro, decisão depois, implementação por último.</strong>
            </p>
            <p>
              Isso ajuda a entender o porquê, não só o como. 
              O objetivo é que o conteúdo funcione tanto para quem está no Figma quanto para quem está no código.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              No que eu acredito
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
              <li>UX não termina no layout</li>
              <li>Código também é experiência</li>
              <li>Clareza é mais importante que complexidade</li>
              <li>Bons sistemas são fáceis de usar e fáceis de manter</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
