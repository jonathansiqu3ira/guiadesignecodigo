import { describe, it, expect } from "vitest";
import { searchData } from "@/config/search-data";
import Fuse from "fuse.js";

/**
 * Smoke tests to verify the application's core data and search functionality.
 * These do not test React rendering (which requires a full Next.js setup),
 * but verify the search index integrity and Fuse.js integration.
 */

// All routes that should exist
const expectedRoutes = [
  "/",
  "/sobre",
  "/referencias",
  "/fundamentos/design-codigo",
  "/fundamentos/tipografia",
  "/fundamentos/cores",
  "/fundamentos/grid",
  "/fundamentos/acessibilidade",
  "/fundamentos/ux",
  "/componentes/botoes",
  "/componentes/inputs",
];

describe("Search Index", () => {
  it("should contain all expected routes", () => {
    const indexedRoutes = searchData.map((item) => item.href);
    for (const route of expectedRoutes) {
      expect(indexedRoutes).toContain(route);
    }
  });

  it("all items should have required fields", () => {
    for (const item of searchData) {
      expect(item.title).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.href).toBeTruthy();
      expect(item.section).toBeTruthy();
      expect(item.keywords.length).toBeGreaterThan(0);
    }
  });

  it("should not have duplicate routes", () => {
    const routes = searchData.map((item) => item.href);
    const unique = new Set(routes);
    expect(routes.length).toBe(unique.size);
  });
});

describe("Fuse.js Search", () => {
  const fuse = new Fuse(searchData, {
    keys: [
      { name: "title", weight: 0.4 },
      { name: "keywords", weight: 0.3 },
      { name: "description", weight: 0.2 },
      { name: "section", weight: 0.1 },
    ],
    threshold: 0.4,
    includeScore: true,
  });

  it("should find pages by title", () => {
    const results = fuse.search("Tipografia");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].item.href).toBe("/fundamentos/tipografia");
  });

  it("should find pages by keyword", () => {
    const results = fuse.search("wcag");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].item.href).toBe("/fundamentos/acessibilidade");
  });

  it("should find pages by section", () => {
    const results = fuse.search("Componentes");
    expect(results.length).toBeGreaterThan(0);
    const sections = results.map((r) => r.item.section);
    expect(sections).toContain("Componentes");
  });

  it("should handle fuzzy matching", () => {
    const results = fuse.search("botao"); // intentionally without accent
    expect(results.length).toBeGreaterThan(0);
  });

  it("should return empty for nonsense queries", () => {
    const results = fuse.search("xyzzy123nonsense");
    expect(results.length).toBe(0);
  });
});
