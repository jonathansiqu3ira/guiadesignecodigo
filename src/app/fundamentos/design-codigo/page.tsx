import { PageLayout } from "@/components/layout/PageLayout";
import { H2, H3, Paragraph, List, ListItem } from "@/components/ui/Typography";
import { PageHeader } from "@/components/layout/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relação Design e Código – Guia Prático",
  description: "Como design e código se sustentam juntos ao longo do tempo. Responsabilidade compartilhada, visão sistêmica e Design Systems como ponte.",
};


export default function DesignCodigoPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Relação Design e Código"
        description="Design e código não são etapas isoladas. São decisões diferentes sobre a mesma experiência. E precisam se sustentar juntas ao longo do tempo."
      />

      {/* Design não termina no Figma */}
      <section>
        <H2>Design não termina no Figma</H2>
        <Paragraph>
          O layout é apenas parte da decisão. Quando algo é desenhado
          sem considerar estados, variações, acessibilidade e comportamento,
          essas decisões não desaparecem. São empurradas para
          a implementação, normalmente sob pressão.
        </Paragraph>
        <Paragraph>
          Design que não considera código não termina. Ele é interrompido.
        </Paragraph>
      </section>

      {/* Responsabilidade compartilhada */}
      <section>
        <H2>Responsabilidade compartilhada</H2>
        <Paragraph>
           Design e código não são responsabilidades separadas.
           São perspectivas diferentes sobre a mesma experiência.
        </Paragraph>
        <Paragraph>
          Quando uma decisão não é discutida entre as duas áreas,
          alguém vai pagar esse custo depois. Normalmente o usuário.
        </Paragraph>
      </section>

      {/* Código também é experiência */}
      <section>
        <H2>Código também é experiência</H2>
        <Paragraph>
          Código não é neutro. Escolhas técnicas impactam diretamente:
        </Paragraph>
        <List>
          <ListItem>performance</ListItem>
          <ListItem>legibilidade</ListItem>
          <ListItem>previsibilidade</ListItem>
          <ListItem>manutenção</ListItem>
          <ListItem>consistência entre telas</ListItem>
        </List>
        <Paragraph>
          Código difícil de manter gera exceções. Exceções viram
          inconsistência. Inconsistência afeta diretamente a experiência.
        </Paragraph>
      </section>

      {/* Onde o ruído acontece */}
      <section>
        <H2>Onde o ruído acontece</H2>
        <List>
          <ListItem>componentes sem estados definidos</ListItem>
          <ListItem>tokens visuais que não existem no código</ListItem>
          <ListItem>layouts impossíveis de escalar</ListItem>
          <ListItem>ajustes feitos apenas no CSS</ListItem>
          <ListItem>decisões que não voltam para o design</ListItem>
        </List>
        <Paragraph>
          Nada disso é falha de uma área só. É falta de visão sistêmica.
        </Paragraph>
      </section>

      {/* Pensar como Design Technologist */}
      <section>
        <H2>Pensar como Design Technologist</H2>
        <Paragraph>
          Pensar como Design Technologist não é virar desenvolvedor.
          É entender o suficiente pra decidir melhor.
        </Paragraph>
        <List>
          <ListItem>desenhar componentes reutilizáveis</ListItem>
          <ListItem>pensar em tokens, não em valores soltos</ListItem>
          <ListItem>considerar limites técnicos reais</ListItem>
          <ListItem>facilitar implementação e manutenção</ListItem>
          <ListItem>preservar a experiência ao longo do tempo</ListItem>
        </List>
        <Paragraph>
          Nem toda decisão é perfeita. Algumas são possíveis.
          Bons produtos são feitos de escolhas conscientes.
        </Paragraph>
      </section>

      {/* Design Systems como ponte */}
      <section>
        <H2>Design Systems como ponte</H2>
        <Paragraph>
           Um Design System não é um arquivo bonito.
           É uma linguagem compartilhada entre design e código.
        </Paragraph>
        <List>
          <ListItem>reduz ambiguidade</ListItem>
          <ListItem>acelera decisões</ListItem>
          <ListItem>melhora consistência</ListItem>
          <ListItem>diminui retrabalho</ListItem>
        </List>
        <Paragraph>
          Só funciona quando é pensado para uso real,
          não para apresentação.
        </Paragraph>
      </section>

      {/* Fechamento */}
      <section className="border border-[var(--border)] p-6 rounded-lg bg-[var(--surface)]">
        <H3 className="text-base mt-0 mb-2">
          Este guia não ensina telas.
        </H3>
        <Paragraph className="mt-0 text-base">
          Ensina decisões que continuam fazendo sentido
          depois que o código existe.
        </Paragraph>
      </section>
    </PageLayout>
  );
}
