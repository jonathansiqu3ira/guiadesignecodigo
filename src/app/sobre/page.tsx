import { TableOfContents } from "@/components/TableOfContents";

export default function SobrePage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
            Sobre
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Este projeto nasceu para diminuir o ruído entre design e desenvolvimento. Para falar de ambos juntos, do jeito que eles realmente funcionam no dia a dia.
          </p>
        </header>

        <hr className="border-[var(--technical-border)]" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              O Problema
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Design muitas vezes para no Figma. Código começa tarde demais. E no meio disso, a experiência do usuário paga a conta.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              A Visão
            </h2>
            <p className="text-lg text-[var(--foreground)] leading-relaxed">
              Pensar como <em>Design Technologist</em> é entender esse meio do caminho e projetar soluções que façam sentido visualmente, tecnicamente e para quem usa.
            </p>
          </div>
        </section>

        <hr className="border-[var(--technical-border)]" />

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Para quem é
          </h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
             <ul className="list-disc pl-5 space-y-2">
               <li>Trabalha com design e quer entender melhor o impacto do código</li>
               <li>Trabalha com código e quer interfaces mais bem resolvidas</li>
               <li>Atua na ponte entre produto, design e engenharia</li>
               <li>Constrói ou mantém <em>design systems</em></li>
             </ul>
          </div>
        </section>

        <section className="space-y-6">
           <h2 className="text-xl font-medium text-[var(--foreground)]">
            No que eu acredito
          </h2>
           <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
             <ul className="list-disc pl-5 space-y-2">
               <li>UX não termina no layout</li>
               <li>Código também é experiência</li>
               <li>Clareza é mais importante que complexidade</li>
               <li>Bons sistemas são fáceis de usar e fáceis de manter</li>
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
