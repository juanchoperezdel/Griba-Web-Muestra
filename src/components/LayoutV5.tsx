import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "./WhatsAppQualifierModal";

// Layout de V5: igual a LayoutV3 (header + footer + theme-v3) pero SIN el FAB
// grande de WhatsApp. El objetivo de V5 es la reunión agendada, así que el
// WhatsApp queda como fallback discreto (link chico en el footer), no como
// botón flotante que compite con "Agendar".
const GRIBA_URLS = {
  home: "https://griba.com.ar/",
  solucionesAutomotrices: "https://griba.com.ar/soluciones-automotrices/",
  servicios: "https://griba.com.ar/servicios/",
  contacto: "https://griba.com.ar/contacto/",
};

const WHATSAPP_FALLBACK_MSG =
  "Hola! Vengo de la web de Griba. Quiero coordinar un diagnóstico para mi concesionaria. ¿Cómo seguimos?";

export function LayoutV5({ children }: { children: ReactNode }) {
  const scrollToCalendar = () => {
    document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="theme-v3 min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 flex items-center justify-between gap-4">
          <a
            href={GRIBA_URLS.home}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group cursor-pointer shrink-0"
            aria-label="Ir al sitio principal de Griba"
          >
            <img
              src="/griba-logo.png"
              alt="Griba"
              className="h-7 sm:h-8 w-auto group-hover:opacity-80 transition-opacity"
            />
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href={GRIBA_URLS.home} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href={GRIBA_URLS.solucionesAutomotrices} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Soluciones
            </a>
            <a href={GRIBA_URLS.servicios} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Servicios
            </a>
            <a href={GRIBA_URLS.contacto} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <button
            onClick={scrollToCalendar}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 sm:px-5 py-2 text-sm font-semibold text-ink-900 hover:bg-cyan-400 transition-all shadow-sm focus:ring-4 focus:ring-cyan-500/30 outline-none shrink-0"
          >
            Agendar Demo
          </button>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-ink-900 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <img src="/griba-logo.png" alt="Griba" className="h-8 w-auto mb-3" />
            <p className="text-slate-400 text-sm leading-relaxed">
              El software que entiende cómo funciona una concesionaria de verdad.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 text-xs text-slate-500">
            <a
              href={buildWhatsAppUrl(WHATSAPP_FALLBACK_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#25D366] transition-colors font-medium"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M16.04 4C9.95 4 5 8.95 5 15.04c0 2.05.55 4.05 1.6 5.81L5 28l7.34-1.92a11 11 0 0 0 3.7.64h.01c6.08 0 11.03-4.95 11.03-11.04C27.08 8.95 22.13 4 16.04 4zm0 20.16h-.01a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-3.86 1.01 1.03-3.76-.22-.39a9.06 9.06 0 0 1-1.39-4.84c0-5.03 4.1-9.12 9.13-9.12 2.44 0 4.73.95 6.45 2.68a9.06 9.06 0 0 1 2.67 6.45c0 5.03-4.1 9.12-9.13 9.12z" />
              </svg>
              ¿Preferís WhatsApp? Escribinos
            </a>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
