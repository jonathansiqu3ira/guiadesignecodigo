"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        "p-2 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-zinc-400 outline-none",
        "hover:bg-zinc-100 dark:hover:bg-zinc-800",
        "text-zinc-500 dark:text-zinc-400",
        className
      )}
      aria-label={isCopied ? "Copiado" : "Copiar código"}
    >
      {isCopied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
    </button>
  );
}
