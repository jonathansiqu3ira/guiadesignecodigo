"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="w-8 h-8 rounded-md bg-[var(--surface)] flex items-center justify-center"
        aria-label="Alternar tema"
        disabled
      >
        <Sun size={14} className="text-[var(--foreground-muted)]" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 rounded-md bg-[var(--surface)] hover:bg-[var(--surface-highlight)] flex items-center justify-center transition-colors"
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      {isDark ? (
        <Sun size={14} className="text-[var(--foreground-muted)]" />
      ) : (
        <Moon size={14} className="text-[var(--foreground-muted)]" />
      )}
    </button>
  );
}
