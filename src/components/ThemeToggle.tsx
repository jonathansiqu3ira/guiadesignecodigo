"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group h-8 w-8 rounded flex items-center justify-center border border-[var(--technical-border)] bg-[var(--background)] text-[var(--foreground)] transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Alternar tema</span>
      {/* Sun Icon - Visible in Light Mode */}
      <div className="block dark:hidden">
        <div className="w-3 h-3 rounded-full bg-current" />
      </div>
      {/* Moon Icon - Visible in Dark Mode */}
      <div className="hidden dark:block">
        <div className="w-3 h-3 rounded-full border-2 border-current" />
      </div>
    </button>
  );
}
