import { PageLayout } from "@/components/layout/PageLayout";
import { H1, H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tipografia – Guia Prático",
  description: "Escalas tipográficas, pesos e hierarquia textual aplicados ao design system. Inter como fonte principal, JetBrains Mono para código.",
};

export default function TipografiaPage() {
  return (
    <PageLayout>
      {/* Header */}
      <header className="space-y-6">
        <H1 className="mb-4">Tipografia</H1>
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
          Tipografia é a infraestrutura da interface. Dita o ritmo de leitura, organiza a hierarquia e define a personalidade do produto. O usuário não percebe, mas sente.
        </Paragraph>
      </header>

      <section>
        <H2>Princípios</H2>
        <Paragraph>
          Neste guia, decisões tipográficas não são puramente estéticas. Seguem quatro princípios que garantem conteúdo acessível e útil.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Suporte à leitura:</strong> A função primária do texto é ser lido. Contraste, tamanho e entrelinha devem minimizar o esforço cognitivo.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Ferramenta de hierarquia:</strong> Tamanho e peso não servem pra enfeitar. Servem pra indicar importância e relação entre elementos.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Consistência acima de variedade:</strong> Menos estilos tipográficos, usados de forma consistente, criam interfaces mais previsíveis e fáceis de manter.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Acessibilidade como critério básico:</strong> Tamanhos mínimos e contrastes adequados não são opcionais.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Fontes</H2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
            <H3 className="mt-0 mb-2">Fonte Primária</H3>
            <p className="text-sm text-[var(--foreground-muted)] mb-4">
              Inter (Sans-serif)
            </p>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              Usada em 95% da interface. Otimizada para telas, com excelente legibilidade em tamanhos pequenos e neutralidade suficiente para não competir com o conteúdo.
            </p>
          </div>
          <div className="p-6 border border-[var(--border)] rounded-lg bg-[var(--surface)]">
            <H3 className="mt-0 mb-2">Fonte Secundária</H3>
            <p className="text-sm text-[var(--foreground-muted)] mb-4">
              JetBrains Mono (Monospace)
            </p>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              Uso restrito a trechos de código, dados tabulares, IDs e elementos técnicos. A largura fixa ajuda no alinhamento de caracteres e reforça a linguagem de ferramenta.
            </p>
          </div>
        </div>
      </section>

      <section>
        <H2>Hierarquia tipográfica</H2>
        <Paragraph>
          A hierarquia guia o olho do usuário. São três níveis claros de informação:
        </Paragraph>
        
        <div className="space-y-8">
          <div>
            <H3 className="mt-0">Headings (Títulos)</H3>
            <Paragraph>
              Conciso e direto. Usado para seções e agrupamentos. Contraste de peso (Medium/Bold) é mais eficaz que variações exageradas de tamanho.
            </Paragraph>
          </div>

          <div>
            <H3 className="mt-0">Body (Corpo de texto)</H3>
            <Paragraph>
              Onde o usuário passa mais tempo. Foco em conforto de leitura. Evite pesos extremos (Light/Thin ou Black) em blocos de texto.
            </Paragraph>
          </div>

          <div>
            <H3 className="mt-0">Textos funcionais</H3>
            <Paragraph>
              Labels, legendas e metadados. Geralmente menores, mas exigem alto contraste para permanecerem legíveis. Frequentemente usam cores mais neutras para diminuir o ruído visual.
            </Paragraph>
          </div>
        </div>
      </section>

      <section>
        <H2>Tamanhos, pesos e espaçamento</H2>
        <Paragraph>
          Propriedades tipográficas trabalham em conjunto. Alterar uma exige ajustar as outras.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Tamanho (Size):</strong> Defina uma escala limitada. Não use valores arbitrários. Se precisa de um tamanho entre 14px e 16px, o problema provavelmente é layout, não tipografia.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Peso (Weight):</strong> Use pesos para criar ênfase sem aumentar o tamanho. <em>Regular</em> para leitura, <em>Medium</em> para estrutura, <em>Bold</em> para destaque crítico.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Line-height (Entrelinha):</strong> Títulos curtos aceitam entrelinhas menores (1.1 a 1.2). Textos longos precisam de ar (1.5 a 1.6). Apertar demais dificulta o retorno do olho pra próxima linha. Ar demais desorganiza o parágrafo.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Boas práticas de uso</H2>
        <List>
          <ListItem>
            Alinhe textos longos à esquerda. Justificar texto na web cria "rios" de espaço branco que prejudicam a leitura (especialmente em mobile).
          </ListItem>
          <ListItem>
            Limite o comprimento da linha (measure) entre 45 e 75 caracteres. Linhas muito longas cansam o olho; muito curtas quebram o ritmo.
          </ListItem>
          <ListItem>
            Use Caixa Alta (UPPERCASE) com moderação absoluta. É mais difícil de ler e soa como "grito". Em siglas e botões, use tracking (letter-spacing) levemente aumentado.
          </ListItem>
          <ListItem>
            Centralize texto apenas se forem títulos curtos ou labels isolados. Parágrafos centralizados são difíceis de ler porque cada linha começa em um lugar diferente.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Tipografia no código</H2>
        <Paragraph>
          Tipografia no front-end é sistema, não conjunto de valores isolados. Pra garantir manutenção e consistência, a implementação precisa refletir as decisões de design.
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">Tokens Semânticos:</strong> Use abstrações como <code>text-body</code> ou <code>font-heading</code> em vez de valores brutos. Isso desacopla a decisão de design da implementação técnica.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Escalas modulares:</strong> Defina tamanhos (t-shirt sizing: xs, sm, md, lg, xl) que crescem em progressão previsível, evitando números mágicos e ajustes arbitrários.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Manutenção centralizada:</strong> Alterar a fonte base ou a escala no arquivo de configuração deve propagar a mudança para todo o produto automaticamente, sem refatoração manual de arquivos.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Unidades relativas:</strong> Use <code>rem</code> em vez de <code>px</code> para garantir que a tipografia respeite as preferências de escala do navegador do usuário.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Como argumentar a importância da tipografia</H2>
        <Paragraph>
          Tipografia é funcionalidade, não estética. Para defender decisões tipográficas num contexto de produto, foque no impacto mensurável:
        </Paragraph>
        <List>
          <ListItem>
            <strong className="text-[var(--foreground)]">A leitura é a interface:</strong> ~90% da web é texto. Melhorar a tipografia é, na prática, melhorar a usabilidade central do produto.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Redução de custo cognitivo:</strong> Boas escolhas tipográficas organizam a informação visualmente, permitindo que o usuário complete tarefas mais rápido e com menos erros.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Acessibilidade:</strong> Contraste adequado e hierarquia clara não são bônus. São requisitos legais e éticos que ampliam o público do produto.
          </ListItem>
          <ListItem>
            <strong className="text-[var(--foreground)]">Eficiência de manutenção:</strong> Um sistema tipográfico padronizado reduz tempo de desenvolvimento e QA, eliminando discussões recorrentes sobre ajustes arbitrários.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>O que evitar</H2>
        <List>
          <ListItem>
            Não use mais de 2 famílias tipográficas. Uma para UI e, se necessário, uma para branding/display é suficiente.
          </ListItem>
          <ListItem>
            Não reduza o tamanho da fonte para fazer o texto "caber". Se não cabe, revise o conteúdo ou o layout. Fontes menores que 12px são inacessíveis para muitos.
          </ListItem>
          <ListItem>
            Não confie apenas na cor para hierarquia. Pessoas com daltonismo podem não perceber a diferença. Use tamanho e peso também.
          </ListItem>
        </List>
      </section>

      <section>
        <H2>Estudos e guias aplicados</H2>
        <div className="grid gap-4 md:grid-cols-2">
          <a 
            href="https://www.nngroup.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border border-[var(--border)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors block"
          >
            <H3 className="text-lg mt-0 mb-1 flex items-center gap-2">
              Nielsen Norman Group
              <span className="text-xs text-[var(--foreground-muted)]">↗</span>
            </H3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Pesquisas sobre leitura em tela, escaneabilidade e hierarquia visual.
            </p>
          </a>
          
          <a 
            href="https://m3.material.io/styles/typography" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border border-[var(--border)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors block"
          >
            <H3 className="text-lg mt-0 mb-1 flex items-center gap-2">
              Material Design – Typography
              <span className="text-xs text-[var(--foreground-muted)]">↗</span>
            </H3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Diretrizes práticas de escala e uso funcional da tipografia.
            </p>
          </a>
        </div>
        
        <div className="bg-[var(--surface)] p-4 rounded-lg text-sm text-[var(--foreground-muted)] border border-[var(--border)] mt-4">
          <strong className="font-medium text-[var(--foreground)]">Nota:</strong> Este guia utiliza essas referências como base conceitual, adaptando os princípios à prática diária de design e implementação front-end.
        </div>
      </section>
    </PageLayout>
  );
}
