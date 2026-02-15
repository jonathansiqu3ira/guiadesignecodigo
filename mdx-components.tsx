import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map standard markdown elements to design system Typography components
    h1: (props) => (
      <h1
        className="text-4xl font-semibold tracking-tight text-[var(--foreground)] mb-6"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-2xl font-semibold tracking-tight text-[var(--foreground)] mt-12 mb-4"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-xl font-semibold tracking-tight text-[var(--foreground)] mt-8 mb-3"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-base leading-7 text-[var(--foreground-muted)] mt-4"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="list-disc pl-6 space-y-2 text-[var(--foreground-muted)] mt-4"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal pl-6 space-y-2 text-[var(--foreground-muted)] mt-4"
        {...props}
      />
    ),
    li: (props) => (
      <li className="text-base leading-7" {...props} />
    ),
    a: (props) => (
      <a
        className="text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--primary)] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    hr: () => <hr className="border-[var(--border)] my-8" />,
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-[var(--border)] pl-6 italic text-[var(--foreground-muted)] my-6"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-[var(--surface)] text-sm px-1.5 py-0.5 rounded font-mono"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="bg-[var(--surface)] p-4 rounded-lg overflow-x-auto text-sm font-mono my-6"
        {...props}
      />
    ),
    strong: (props) => (
      <strong className="font-semibold text-[var(--foreground)]" {...props} />
    ),
    ...components,
  };
}
