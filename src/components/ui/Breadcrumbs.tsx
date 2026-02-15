"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/config/navigation";

// Derive route labels from the centralized navigation config
function buildRouteMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const section of navigation) {
    // Add section title as label for its slug (e.g. "Fundamentos")
    const sectionSlug = section.items[0]?.href.split("/")[1];
    if (sectionSlug) map[sectionSlug] = section.title;
    
    for (const item of section.items) {
      const segments = item.href.split("/").filter(Boolean);
      const lastSegment = segments[segments.length - 1];
      if (lastSegment) map[lastSegment] = item.label;
    }
  }
  return map;
}

const routeMap = buildRouteMap();

export function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-[var(--foreground-muted)]">
        <li>
          <Link 
            href="/" 
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Home
          </Link>
        </li>
        
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const label = routeMap[path] || path;

          return (
            <li key={path} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-[var(--border)]" />
              {isLast ? (
                <span className="font-medium text-[var(--foreground)]" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link 
                  href={href} 
                  className="hover:text-[var(--foreground)] transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
