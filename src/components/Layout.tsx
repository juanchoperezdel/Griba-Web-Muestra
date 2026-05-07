import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-brand-500/30 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-slate-900 font-extrabold text-2xl tracking-tighter flex items-center gap-1 group cursor-pointer">
              <svg className="w-6 h-6 text-brand-600 group-hover:text-brand-500 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              GRIBA
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
          </nav>

          <button 
            onClick={scrollToCalendar}
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-all shadow-sm focus:ring-4 focus:ring-brand-100 outline-none"
          >
            Agendar Demo
          </button>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-[#0a0a0a] py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-md">
            <div className="text-white font-extrabold text-2xl tracking-tighter flex items-center gap-1 mb-3">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              GRIBA
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              El software que entiende cómo funciona una concesionaria de verdad.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 text-slate-500 text-xs">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
            <span>&copy; {new Date().getFullYear()} Griba S.A.S. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
