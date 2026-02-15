import { PageLayout } from "@/components/layout/PageLayout";
import { H1, Paragraph } from "@/components/ui/Typography";
import { NavCard } from "@/components/ui/NavCard";
import { getStatusByHref } from "@/config/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Componentes – Guia Prático",
  description: "Componentes de interface reutilizáveis e acessíveis: botões, inputs, modais e tabs.",
};

const pages = [
  { title: "Botões", description: "Elementos de ação primária, secundária e ghost.", href: "/componentes/botoes" },
  { title: "Inputs", description: "Campos de entrada de texto e formulários.", href: "/componentes/inputs" },
  { title: "Modais", description: "Janelas de diálogo sobrepostas.", href: "/componentes/modais" },
  { title: "Tabs", description: "Navegação em abas para conteúdo segmentado.", href: "/componentes/tabs" },
];

export default function ComponentesPage() {
  return (
    <PageLayout toc={false}>
      <header className="space-y-6 mb-12">
        <H1>Componentes</H1>
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
          Elementos de interface reutilizáveis, testados e acessíveis. Prontos para uso em produção.
        </Paragraph>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {pages.map((page) => (
          <NavCard
            key={page.href}
            title={page.title}
            description={page.description}
            href={page.href}
            status={getStatusByHref(page.href)}
          />
        ))}
      </div>
    </PageLayout>
  );
}
