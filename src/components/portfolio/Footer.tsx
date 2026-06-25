"use client";

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="hairline mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Jesús Conde Barba — Diseñado y desarrollado con cuidado.</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jesuscb123" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
            <a href="mailto:jesusctech.dev@gmail.com" className="hover:text-foreground">Email</a>
            <a href="#top" className="hover:text-foreground">Volver arriba ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
