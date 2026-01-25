import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/ui/Badge";

export default function BotoesPage() {
  return (
    <div className="flex gap-12 relative items-start">
      <div className="flex-1 min-w-0 max-w-3xl space-y-12 pb-12">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-medium tracking-tight text-[var(--foreground)]">
              Botões
            </h1>
            <Badge variant="in_progress">Em andamento</Badge>
          </div>
        </header>

        <div className="space-y-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {/* ... content remains the same ... */}
            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                O papel do botão na interface
              </h2>
              <p>
                Um botão representa uma ação explícita.
              </p>
              <p>
                Quando um botão aparece, o usuário espera que algo aconteça imediatamente. 
                Por isso, botões precisam ser claros, previsíveis e consistentes.
              </p>
              <p className="font-medium text-[var(--foreground)]">
                Se tudo parece botão, nada é botão.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-[var(--foreground)]">Quando usar um botão</h3>
                <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400 text-base">
                  <li>Há uma ação clara (salvar, enviar, confirmar)</li>
                  <li>O usuário inicia algo ativamente</li>
                  <li>É necessário feedback imediato</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-[var(--foreground)]">Evite botão quando</h3>
                <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400 text-base">
                  <li>A ação é apenas navegação (use link)</li>
                  <li>Não existe ação real associada</li>
                  <li>O elemento serve apenas como destaque visual</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Tipos de botão
              </h2>
              <p>
                Em interfaces reais, poucos tipos bem definidos funcionam melhor do que muitas variações.
              </p>
              <p className="text-base font-medium">Tipos comuns:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
                <li>Primário</li>
                <li>Secundário</li>
                <li>Destrutivo</li>
                <li>Ghost / Text</li>
              </ul>
              <p>
                O tipo define prioridade, não estética.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Estados obrigatórios
              </h2>
              <p>
                Todo botão que vai para produção precisa considerar, no mínimo:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
                <li>Default</li>
                <li>Hover</li>
                <li>Focus (visível via teclado)</li>
                <li>Disabled</li>
                <li>Loading (quando aplicável)</li>
              </ul>
              <p>
                Se algum desses estados não foi pensado no design, ele vai aparecer “errado” no código.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Acessibilidade
              </h2>
              <p>
                Botões precisam funcionar para todos os usuários, não apenas no mouse.
              </p>
              <p className="text-base font-medium">Boas práticas:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
                <li>Elemento semântico (<code>&lt;button&gt;</code>)</li>
                <li>Foco visível (<code>focus-visible</code>)</li>
                <li>Contraste suficiente</li>
                <li>Não depender apenas de cor para estado</li>
                <li><code>disabled</code> realmente desabilita interação</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Erros comuns
              </h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-zinc-400">
                <li>Botão usado como link</li>
                <li>Estados inexistentes no design</li>
                <li><code>div</code> com <code>onClick</code></li>
                <li>Texto longo quebrando layout</li>
                <li>Variações sem critério</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Referência de Design
              </h2>
              <ul className="space-y-2">
                <li><span className="text-[var(--foreground)] font-medium">Figma</span> – Botões</li>
                <li><span className="text-[var(--foreground)] font-medium">Penpot</span> – Botões</li>
              </ul>
              <p className="text-sm">Esses arquivos devem ser tratados como documentação viva.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Implementação simples (exemplo)
              </h2>
              
              <div className="rounded-lg border border-[var(--technical-border)] bg-[var(--surface)] overflow-hidden text-sm">
 <pre className="p-4 overflow-x-auto">
<code className="text-zinc-800 dark:text-zinc-300 font-mono">{`<!-- HTML Structure -->
<button class="btn btn-primary">Ação principal</button>
<button class="btn btn-secondary">Ação secundária</button>
<button class="btn btn-primary" disabled>Desabilitado</button>

/* CSS Structure */
.btn {
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`}</code>
                </pre>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-medium text-[var(--foreground)]">
                Relação entre design e código
              </h2>
              <p>
                Botões bem definidos no design geram código simples, previsível e sustentável.
              </p>
            </section>
          </div>
      </div>
      
      {/* Table of Contents Sidebar */}
      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-12">
           <TableOfContents />
        </div>
      </div>
    </div>
  );
}
