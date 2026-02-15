import { PageLayout } from "@/components/layout/PageLayout";
import { H1, Paragraph } from "@/components/ui/Typography";
import { NavCard } from "@/components/ui/NavCard";
import { getStatusByHref } from "@/config/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundamentos – Guia Prático",
  description: "Blocos de construção do design system: tipografia, cores, grid, acessibilidade e UX.",
};

const pages = [
  { title: "Tipografia", description: "Escalas, pesos e hierarquia textual.", href: "/fundamentos/tipografia" },
  { title: "Cores", description: "Paleta semântica, temas e acessibilidade.", href: "/fundamentos/cores" },
  { title: "Grid & Layout", description: "Sistema de grids responsivos e espaçamento.", href: "/fundamentos/grid" },
  { title: "Acessibilidade", description: "Diretrizes WCAG e práticas inclusivas.", href: "/fundamentos/acessibilidade" },
  { title: "UX & Usabilidade", description: "Princípios de interação e experiência do usuário.", href: "/fundamentos/ux" },
  { title: "Design & Código", description: "A filosofia de integração entre as disciplinas.", href: "/fundamentos/design-codigo" },
];

export default function FundamentosPage() {
  return (
    <PageLayout toc={false}>
      <header className="space-y-6 mb-12">
        <H1>Fundamentos</H1>
        <Paragraph className="text-xl text-[var(--foreground-muted)]">
          Os blocos de construção essenciais do design system. Decisões de base que garantem consistência e escalabilidade.
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
