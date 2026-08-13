import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "../WhatsAppQualifierModal";
import { track } from "../../lib/analytics";
import { shouldAnimate } from "./Reveal";
import { CTAButton } from "./CTAButton";

// Layout de V7 — fork de LayoutV5.tsx. Tres diferencias, todas por el mismo
// motivo (que el ~76% del tráfico entra por el navegador in-app de Instagram):
//
// 1. SIN target="_blank". LayoutV5 tenía 7. En el WebView in-app, abrir una
//    pestaña nueva a menudo no hace nada: el usuario toca y no pasa nada.
//    Navegación en la misma pestaña es lo único confiable.
// 2. SIN nav institucional en el header. Eran 4 links a griba.com.ar en una
//    landing de paid: cuatro puertas de salida antes de agendar. Los links
//    quedan en el footer, donde ya llegó el que se iba a ir igual.
// 3. Logo con BASE_URL en vez de ruta absoluta, para que el build funcione
//    servido bajo /landing-crm/ en el server del cliente.
//
// LayoutV5 queda intacto: es el que está en producción hoy.

const GRIBA_URLS = {
  home: "https://griba.com.ar/",
  solucionesAutomotrices: "https://griba.com.ar/soluciones-automotrices/",
  servicios: "https://griba.com.ar/servicios/",
  contacto: "https://griba.com.ar/contacto/",
};

const WHATSAPP_FALLBACK_MSG =
  "Hola! Vengo de la web de Griba. Quiero reactivar la base de clientes de mi concesionaria. ¿Cómo seguimos?";

const LOGO_SRC = `${import.meta.env.BASE_URL}griba-logo.png`;

export function LayoutV7({ children }: { children: ReactNode }) {
  // Inicializador lazy: corre durante el primer render, así `js-reveal` ya está
  // en el primer paint y no hay flash de contenido que aparece y se esconde.
  const [animate] = useState(shouldAnimate);

  const trackOutbound = (url: string, location: string) => {
    track("outbound_click", { link_url: url, cta_location: location });
  };

  return (
    <div
      className={`theme-v3 theme-v7 ${animate ? "js-reveal" : ""} min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-white`}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 flex items-center justify-between gap-4">
          <img
            src={LOGO_SRC}
            alt="Griba"
            className="h-7 sm:h-8 w-auto shrink-0"
          />

          <CTAButton
            ctaId="header_agendar"
            ctaLocation="header"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 sm:px-5 py-2 text-sm font-semibold text-ink-900 hover:bg-cyan-400 transition-all shadow-sm focus:ring-4 focus:ring-cyan-500/30 outline-none shrink-0"
          >
            Analizar mi base
          </CTAButton>
        </div>
      </header>

      <main className="flex-grow pt-16">{children}</main>

      <footer className="bg-ink-900 py-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <img src={LOGO_SRC} alt="Griba" className="h-8 w-auto mb-3" />
            <p className="text-slate-400 text-sm leading-relaxed">
              El software que entiende cómo funciona una concesionaria de verdad.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 text-xs text-slate-500">
            <a
              href={buildWhatsAppUrl(WHATSAPP_FALLBACK_MSG)}
              onClick={() =>
                track("whatsapp_click", { cta_location: "footer" })
              }
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#25D366] transition-colors font-medium"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M16.04 4C9.95 4 5 8.95 5 15.04c0 2.05.55 4.05 1.6 5.81L5 28l7.34-1.92a11 11 0 0 0 3.7.64h.01c6.08 0 11.03-4.95 11.03-11.04C27.08 8.95 22.13 4 16.04 4zm0 20.16h-.01a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-3.86 1.01 1.03-3.76-.22-.39a9.06 9.06 0 0 1-1.39-4.84c0-5.03 4.1-9.12 9.13-9.12 2.44 0 4.73.95 6.45 2.68a9.06 9.06 0 0 1 2.67 6.45c0 5.03-4.1 9.12-9.13 9.12z" />
              </svg>
              ¿Preferís WhatsApp? Escribinos
            </a>

            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400 md:justify-end">
              <a
                href={GRIBA_URLS.solucionesAutomotrices}
                onClick={() =>
                  trackOutbound(GRIBA_URLS.solucionesAutomotrices, "footer_nav")
                }
                className="hover:text-white transition-colors"
              >
                Soluciones
              </a>
              <a
                href={GRIBA_URLS.servicios}
                onClick={() => trackOutbound(GRIBA_URLS.servicios, "footer_nav")}
                className="hover:text-white transition-colors"
              >
                Servicios
              </a>
              <a
                href={GRIBA_URLS.contacto}
                onClick={() => trackOutbound(GRIBA_URLS.contacto, "footer_nav")}
                className="hover:text-white transition-colors"
              >
                Contacto
              </a>
            </nav>

            <a
              href={GRIBA_URLS.home}
              onClick={() => trackOutbound(GRIBA_URLS.home, "footer_home")}
              className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-colors font-medium"
            >
              www.griba.com.ar
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <span>
              &copy; {new Date().getFullYear()} Griba S.A.S. Todos los derechos
              reservados.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
