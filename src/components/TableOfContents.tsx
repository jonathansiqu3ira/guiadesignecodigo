"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ShareButtons } from "./ShareButtons";
import { ChevronRight } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // 1. Find all H2 and H3 elements in the main content area (ignore sidebar/nav)
    const main = document.querySelector("main");
    if (!main) return;
    
    const elements = Array.from(main.querySelectorAll("h2, h3"));
    
    // 2. Generate IDs for them if they don't have one
    const seenIds = new Map<string, number>();
    
    const items: Heading[] = elements.map((element) => {
      let id = element.id;
      if (!id) {
        id = element.textContent
          ?.toLowerCase()
          .replace(/[^\w\s-]/g, "") // remove special chars
          .replace(/\s+/g, "-") // replace spaces with dashes
          .replace(/^-+|-+$/g, "") // remove leading/trailing dashes
           || "heading";
      }

      // Deduplicate IDs
      const count = seenIds.get(id) || 0;
      if (count > 0) {
        const originalId = id;
        id = `${id}-${count}`;
        // Update the element's id in DOM so anchors work
        element.id = id; 
      }
      seenIds.set(id.replace(/-\d+$/, ''), count + 1); // Increment count for base ID

      return {
        id,
        text: element.textContent || "",
        level: Number(element.tagName.substring(1)),
      };
    });

    setHeadings(items);

    // 3. Setup Intersection Observer for Active State
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" } // trigger when element is near top
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav>
      <div className="mb-4">
         <ShareButtons />
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="flex items-center gap-2 group w-full text-left"
      >
         <div className={cn(
           "text-zinc-500 dark:text-zinc-400 transition-transform duration-200",
           isExpanded ? "rotate-90" : ""
         )}>
           <ChevronRight size={14} />
         </div>
         <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
          Nesta página
        </h4>
      </button>

      <div className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-in-out",
        isExpanded ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
      )}>
        <div className="overflow-hidden">
          <ul className="space-y-3 text-sm border-l border-[var(--technical-border)] ml-[6px] pl-4">
            {headings.map((heading) => (
              <li 
                key={heading.id}
                style={{ paddingLeft: heading.level === 3 ? "0.5rem" : "0" }}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setActiveId(heading.id);
                  }}
                  className={cn(
                    "block transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100",
                    activeId === heading.id
                      ? "text-zinc-900 dark:text-white font-medium"
                      : "text-zinc-500 dark:text-zinc-400"
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
