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

      <footer className="bg-[#0a0a0a] pt-16 pb-8 border-t border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-white font-extrabold text-2xl tracking-tighter flex items-center gap-1 mb-4">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              GRIBA
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Software de alto rendimiento para concesionarios automotrices. Ayudamos a tu equipo a operar de forma más inteligente, escalable y con menos fricción manual.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Navegación</h4>
            <div className="flex flex-col gap-3">
              <a href="#solucion" className="text-slate-400 hover:text-white text-sm transition-colors">Características</a>
              <a href="#calculadora" className="text-slate-400 hover:text-white text-sm transition-colors">Calculadora ROI</a>
              <a href="#calendario" className="text-slate-400 hover:text-white text-sm transition-colors">Contacto Comercial</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Casos de Éxito</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacidad y Legal</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs border-t border-slate-800 pt-8 gap-4">
          <span>&copy; {new Date().getFullYear()} Griba S.A.S. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
