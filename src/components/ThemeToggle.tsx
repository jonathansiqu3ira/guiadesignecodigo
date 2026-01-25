"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ThemeTransitionModal } from "./ThemeTransitionModal";
import { useToast } from "./ui/use-toast";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [hasWarned, setHasWarned] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen the warning
    const warned = localStorage.getItem("vampire_warning_dismissed");
    if (warned === "true") {
      setHasWarned(true);
    }
  }, []);

  const handleToggle = () => {
    if (resolvedTheme === "light") {
      // Light -> Dark (Safe & Cozy)
      setTheme("dark");
      
      // Optional: Logic to show toast only once or always? User said "Persistência: Opcional (não exibir novamente)". 
      // Let's check a new key for this toast to keep it subtle and not annoying.
      const welcomeBackSeen = localStorage.getItem("dark_mode_welcome_seen");
      if (!welcomeBackSeen) {
         // Tiny delay to feel organic
         setTimeout(() => {
            toast({
              description: "Bem-vindo de volta ao conforto do escuro.",
              duration: 4000
            });
         }, 100);
         localStorage.setItem("dark_mode_welcome_seen", "true");
      }
      
    } else {
      // Dark -> Light (Warning!)
      if (hasWarned) {
        setTheme("light");
      } else {
        setShowModal(true);
      }
    }
  };

  const confirmSwitch = () => {
    setTheme("light");
    setShowModal(false);
    setHasWarned(true);
    localStorage.setItem("vampire_warning_dismissed", "true");
  };

  return (
    <>
      <button
        onClick={handleToggle}
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

      <ThemeTransitionModal 
        isOpen={showModal}
        onConfirm={confirmSwitch}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
}
