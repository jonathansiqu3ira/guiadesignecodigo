export type UpdateType = "new" | "update" | "revision";

export interface UpdateItem {
  title: string;
  slug: string;
  type: UpdateType;
  date: string; // ISO 8601 format: YYYY-MM-DD
}

export const updates: UpdateItem[] = [
  {
    title: "Funcionalidade: Últimos updates",
    slug: "/",
    type: "new",
    date: "2026-02-03",
  },
  {
    title: "Conteúdo: Tipografia",
    slug: "/fundamentos/tipografia",
    type: "new",
    date: "2026-02-03",
  },
  {
    title: "Revisão: Status das páginas",
    slug: "/sobre",
    type: "revision",
    date: "2026-02-03",
  },
  {
    title: "Estrutura do projeto e rotas",
    slug: "/fundamentos",
    type: "new",
    date: "2026-01-25",
  },
];
