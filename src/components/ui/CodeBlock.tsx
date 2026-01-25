import { codeToHtml } from "shiki";
import { CopyButton } from "./CopyButton";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  lang?: string;
  fileName?: string;
  className?: string;
}

export async function CodeBlock({ code, lang = "typescript", fileName, className }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
     defaultColor: false,
  });

  return (
    <div className={cn("group rounded-lg border border-[var(--technical-border)] bg-[var(--surface)] overflow-hidden text-sm my-6", className)}>
      {(fileName) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--technical-border)] bg-zinc-50/50 dark:bg-zinc-900/50">
          <span className="text-xs font-medium text-zinc-500">{fileName}</span>
          <CopyButton text={code} className="-mr-2" />
        </div>
      )}
      
      {!fileName && (
        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <CopyButton text={code} className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm" />
        </div>
      )}

      <div 
        className="relative overflow-x-auto p-4 [&>pre]:!bg-transparent [&>pre]:!m-0 [&_code]:!font-mono [&_code]:!text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
