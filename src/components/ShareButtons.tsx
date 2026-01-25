"use client";

import { Linkedin, Link2, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ShareButtons() {
  const [copied, setCopied] = useState<string | null>(null);

  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const handleCopy = async (platform: string) => {
    const url = getCurrentUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(platform);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const shareLinkedIn = () => {
    const url = encodeURIComponent(getCurrentUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <div className="flex items-center gap-1 mb-6">
      <h5 className="sr-only">Compartilhar</h5>
      
      {/* LinkedIn */}
      <button
        onClick={shareLinkedIn}
        className="p-2 text-zinc-400 hover:text-[#0077b5] hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
        title="Compartilhar no LinkedIn"
        aria-label="Compartilhar no LinkedIn"
      >
        <Linkedin size={16} />
      </button>

      {/* Slack (Simulated via Copy) */}
      <button
        onClick={() => handleCopy("slack")}
        className={cn(
          "p-2 rounded-md transition-colors relative group",
          copied === "slack" 
            ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30" 
            : "text-zinc-400 hover:text-[#4A154B] hover:bg-zinc-100 dark:hover:bg-zinc-800"
        )}
        title="Copiar link para Slack"
        aria-label="Copiar link para Slack"
      >
        {copied === "slack" ? <Check size={16} /> : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-slack"
            >
              <rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/>
            </svg>
        )}
      </button>

       {/* Generic Copy */}
       <button
        onClick={() => handleCopy("link")}
        className={cn(
          "p-2 rounded-md transition-colors",
          copied === "link"
            ? "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
            : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        )}
        title="Copiar link"
        aria-label="Copiar link"
      >
        {copied === "link" ? <Check size={16} /> : <Link2 size={16} />}
      </button>

    </div>
  );
}
