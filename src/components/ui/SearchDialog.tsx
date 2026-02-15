"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { searchData, type SearchItem } from "@/config/search-data";

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

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setSelectedIndex(0);
    if (value.trim().length === 0) {
      setResults([]);
      return;
    }
    const searchResults = fuse.search(value);
    setResults(searchResults.map((r) => r.item));
  }, []);

  const handleSelect = useCallback((item: SearchItem) => {
    router.push(item.href);
    setIsOpen(false);
    setQuery("");
    setResults([]);
  }, [router]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex]);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
        setResults([]);
      }
    },
    [results, selectedIndex, handleSelect]
  );

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[var(--foreground-muted)] bg-[var(--surface)]/50 hover:bg-[var(--surface-highlight)]/50 border border-[var(--border)]/40 rounded-md transition-colors"
      >
        <Search size={14} />
        <span className="flex-1 text-left">Buscar...</span>
        <kbd className="hidden sm:inline-flex text-[10px] font-mono bg-[var(--background)] border border-[var(--border)]/40 px-1.5 py-0.5 rounded text-[var(--foreground-muted)]">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 transition-opacity"
        onClick={() => {
          setIsOpen(false);
          setQuery("");
          setResults([]);
        }}
      />

      {/* Dialog */}
      <div className="fixed inset-x-4 top-[15%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-lg z-50">
        <div className="bg-[var(--background)] border border-[var(--border)]/60 rounded-xl shadow-2xl shadow-black/5 overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border)]">
            <Search size={16} className="text-[var(--foreground-muted)] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Buscar páginas..."
              className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] outline-none"
            />
            <button
              onClick={() => {
                setIsOpen(false);
                setQuery("");
                setResults([]);
              }}
              className="p-1 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <ul className="max-h-72 overflow-y-auto py-2">
              {results.map((item, index) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left px-4 py-3 flex flex-col gap-0.5 transition-colors ${
                      index === selectedIndex
                        ? "bg-[var(--surface)]"
                        : "hover:bg-[var(--surface)]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-[var(--foreground-muted)] bg-[var(--surface-highlight)] px-1.5 py-0.5 rounded">
                        {item.section}
                      </span>
                    </div>
                    <span className="text-xs text-[var(--foreground-muted)] line-clamp-1">
                      {item.description}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Empty state */}
          {query.trim().length > 0 && results.length === 0 && (
            <div className="py-8 text-center text-sm text-[var(--foreground-muted)]">
              Nenhum resultado para &ldquo;{query}&rdquo;
            </div>
          )}

          {/* Hint */}
          {query.trim().length === 0 && (
            <div className="py-8 text-center text-xs text-[var(--foreground-muted)]">
              Digite para buscar nas páginas do guia
            </div>
          )}
        </div>
      </div>
    </>
  );
}
