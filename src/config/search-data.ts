export interface SearchItem {
  title: string;
  description: string;
  href: string;
  section: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Home
  {
    title: "Início",
    description: "Guia prático sobre a relação entre design e implementação.",
    href: "/",
    section: "Geral",
    keywords: ["home", "início", "guia", "design", "código"],
  },
  // Visão Geral
  {
    title: "Sobre o Projeto",
    description: "Por que este guia existe e para quem ele serve.",
    href: "/sobre",
    section: "Visão Geral",
    keywords: ["sobre", "projeto", "motivação", "objetivo"],
  },
  {
    title: "Referências",
    description: "Livros, artigos e recursos que fundamentam este guia.",
    href: "/referencias",
    section: "Visão Geral",
    keywords: ["referências", "livros", "artigos", "recursos", "links"],
  },
  // Fundamentos
  {
    title: "Relação Design e Código",
    description: "Como design e código se complementam na construção de interfaces.",
    href: "/fundamentos/design-codigo",
    section: "Fundamentos",
    keywords: ["design", "código", "relação", "interface", "handoff", "implementação"],
  },
  {
    title: "Tipografia",
    description: "Escalas tipográficas, hierarquia visual e tokens de fonte.",
    href: "/fundamentos/tipografia",
    section: "Fundamentos",
    keywords: ["tipografia", "fontes", "escala", "hierarquia", "texto", "font-size"],
  },
  {
    title: "Cores",
    description: "Paleta de cores, tokens semânticos e temas.",
    href: "/fundamentos/cores",
    section: "Fundamentos",
    keywords: ["cores", "paleta", "tokens", "tema", "dark", "light", "zinc"],
  },
  {
    title: "Grid & Layout",
    description: "Sistema de grids responsivos, espaçamento e estrutura de layout.",
    href: "/fundamentos/grid",
    section: "Fundamentos",
    keywords: ["grid", "layout", "espaçamento", "responsivo", "breakpoint", "flexbox"],
  },
  {
    title: "Acessibilidade",
    description: "Diretrizes WCAG, contraste, navegação por teclado e ARIA.",
    href: "/fundamentos/acessibilidade",
    section: "Fundamentos",
    keywords: ["acessibilidade", "a11y", "wcag", "contraste", "aria", "teclado", "leitor de tela"],
  },
  {
    title: "UX & Usabilidade",
    description: "Heurísticas de Nielsen e padrões práticos de usabilidade.",
    href: "/fundamentos/ux",
    section: "Fundamentos",
    keywords: ["ux", "usabilidade", "heurísticas", "nielsen", "feedback", "navegação"],
  },
  // Componentes
  {
    title: "Botões",
    description: "Variantes primária, secundária e ghost. Estados e acessibilidade.",
    href: "/componentes/botoes",
    section: "Componentes",
    keywords: ["botão", "button", "primary", "secondary", "ghost", "click", "ação"],
  },
  {
    title: "Inputs",
    description: "Campos de texto, validação, estados e formulários.",
    href: "/componentes/inputs",
    section: "Componentes",
    keywords: ["input", "campo", "formulário", "form", "validação", "label", "textarea"],
  },
];
