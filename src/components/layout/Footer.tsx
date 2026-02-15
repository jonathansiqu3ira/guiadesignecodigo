export function Footer() {
  return (
    <footer className="mt-20 pt-8 border-t border-[var(--border)]/40 text-sm text-[var(--foreground-muted)] flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <span className="font-medium text-[var(--foreground)]">Guia Prático</span> · Design e Código
      </div>
      
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/jonathansiqu3ira/guiadesignecodigo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--foreground)] transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/jonathansiqueira/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[var(--foreground)] transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
