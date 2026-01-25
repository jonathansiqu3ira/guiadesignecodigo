"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ProductionNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem("has_seen_production_notice");
    if (!hasSeenNotice) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("has_seen_production_notice", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 fade-in duration-300">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-lg p-4 max-w-sm flex items-start gap-3">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
            Em construção
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Esta seção do guia ainda está sendo escrita e refinada. O conteúdo pode sofrer alterações.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          aria-label="Dispensar aviso"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
