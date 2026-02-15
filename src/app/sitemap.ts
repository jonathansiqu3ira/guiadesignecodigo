import type { MetadataRoute } from "next";

const BASE_URL = "https://guiadesignecodigo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/referencias",
    "/fundamentos",
    "/fundamentos/design-codigo",
    "/fundamentos/tipografia",
    "/fundamentos/cores",
    "/fundamentos/grid",
    "/fundamentos/acessibilidade",
    "/fundamentos/ux",
    "/componentes",
    "/componentes/botoes",
    "/componentes/inputs",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
