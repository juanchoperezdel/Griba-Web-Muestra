import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const GRIBA_URLS = {
  home: "https://griba.com.ar/",
  soluciones: "https://griba.com.ar/soluciones-automotrices/",
  servicios: "https://griba.com.ar/servicios/",
  contacto: "https://griba.com.ar/contacto/",
};

const scrollToForm = () => {
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
};

export function LayoutKit40({ children }: { children: ReactNode }) {
  return (
    <div className="theme-v3 min-h-screen flex flex-col antialiased bg-ink-900 selection:bg-cyan-500/30 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 flex items-center justify-between gap-4">
          <a
            href={GRIBA_URLS.home}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group cursor-pointer shrink-0"
            aria-label="Ir al sitio principal de Griba"
          >
            <img
              src="/griba-logo.png"
              alt="Griba"
              className="h-7 sm:h-8 w-auto group-hover:opacity-80 transition-opacity"
            />
            <span className="hidden sm:inline-flex items-center rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
              KIT 4.0
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#calculadora" className="hover:text-white transition-colors">Cuánto cubre</a>
            <a href="#proceso" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#requisitos" className="hover:text-white transition-colors">Requisitos</a>
            <a href="#faq" className="hover:text-white transition-colors">Preguntas</a>
          </nav>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 sm:px-5 py-2 text-sm font-semibold text-ink-900 hover:bg-cyan-400 transition-all shadow-sm focus:ring-4 focus:ring-cyan-500/30 outline-none shrink-0"
          >
            Ver si califico
          </button>
        </div>
      </header>

      <main className="flex-grow pt-16">{children}</main>

      <footer className="bg-ink-900 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <img src="/griba-logo.png" alt="Griba" className="h-8 w-auto mb-3" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Griba es proveedor habilitado del Programa KIT 4.0. Digitalizá la gestión de
              tu empresa con hasta el 50% del costo cubierto por el Estado.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 text-xs text-slate-500">
            <a
              href={GRIBA_URLS.home}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-colors font-medium"
            >
              www.griba.com.ar
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span>&copy; {new Date().getFullYear()} Griba S.A.S. Todos los derechos reservados.</span>
            <span className="text-slate-600 max-w-sm md:text-right">
              Información del programa de carácter ilustrativo. La elegibilidad y el monto
              final del beneficio los determina la convocatoria vigente del KIT 4.0.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
