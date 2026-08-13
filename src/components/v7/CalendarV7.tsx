import { useEffect, useRef, useState } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { track } from "../../lib/analytics";
import {
  BOOKING_URL,
  BOOKING_EMBED_SCRIPT,
  BOOKING_ORIGINS,
} from "../../lib/booking";
import { Reveal } from "./Reveal";

// Fork de CalendarSection.tsx. Es el archivo más importante de V7: acá termina
// el 100% de los CTAs, y acá se rompía todo.
//
// Los cuatro problemas del original y qué se hizo con cada uno:
//
// 1. El wrapper con id="agendar" era un motion.div con initial={{opacity:0}} +
//    whileInView. Si el observer no disparaba, el destino de todos los CTAs era
//    un espacio en blanco. → Acá se renderiza plano. NUNCA se anima.
//
// 2. El placeholder "Cargando calendario..." estaba en z-0 DEBAJO de un iframe
//    con `relative z-10 bg-white`. Cuando el iframe fallaba, igual ocupaba su
//    espacio y tapaba el spinner con fondo blanco: el usuario veía un rectángulo
//    vacío, ni siquiera el "cargando". → z-index invertido y controlado por
//    estado.
//
// 3. No había plan B. Si el widget no cargaba, no quedaba forma de reservar.
//    → Link directo al booking SIEMPRE visible debajo del iframe. No sólo en
//    el caso de error: el modo de falla más común en WebView es que el iframe
//    cargue un documento vacío y onLoad dispare igual, y eso ninguna máquina de
//    estados lo detecta.
//
// 4. No emitía una sola señal. → Cada transición manda un evento. La serie
//    calendar_iframe_timeout segmentada por `surface` es el número que dice si
//    el navegador in-app está rompiendo la conversión, que hoy no existe.

const IFRAME_TIMEOUT_MS = 10_000;

const BENEFITS = [
  "Vemos tu base real: cuántos clientes tenés sin contactar hace más de un año",
  "Te mostramos cómo quedaría la primera campaña de reactivación",
  "Salís sabiendo qué se puede recuperar, trabajes con nosotros o no",
  "Hablás con alguien del equipo que implementa, no con un comercial",
];

type Status = "loading" | "ready" | "failed";

export function CalendarV7() {
  const [status, setStatus] = useState<Status>("loading");
  const mountedAt = useRef<number>(Date.now());
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewTracked = useRef(false);

  // Script de embed de LeadConnector, una sola vez.
  useEffect(() => {
    const scriptId = "msgsndr-form-embed";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = BOOKING_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Si a los 10s el iframe no cargó, se asume roto y se muestra el rescate.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus((current) => {
        if (current === "loading") {
          track("calendar_iframe_timeout", { timeout_ms: IFRAME_TIMEOUT_MS });
          return "failed";
        }
        return current;
      });
    }, IFRAME_TIMEOUT_MS);

    return () => window.clearTimeout(timer);
  }, []);

  // Cuántos llegan a ver el calendario (denominador de la conversión).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !viewTracked.current) {
          viewTracked.current = true;
          track("calendar_section_view");
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  // Confirmación de reserva desde el widget. Best-effort: LeadConnector no
  // documenta este postMessage, así que la conversión real se sigue contando
  // en /gracias. Esto sólo agrega señal más temprana si llega.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!BOOKING_ORIGINS.includes(event.origin)) return;
      const raw = typeof event.data === "string" ? event.data : "";
      if (/book|appointment|schedul/i.test(raw)) {
        track("booking_submitted", { raw_source: "postMessage" });
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleIframeLoad = () => {
    setStatus((current) => {
      if (current !== "loading") return current;
      track("calendar_iframe_loaded", {
        load_ms: Date.now() - mountedAt.current,
      });
      return "ready";
    });
  };

  const trackFallback = (location: string) => {
    track("booking_fallback_click", { cta_location: location });
  };

  return (
    <section
      id="calendario"
      className="bg-slate-950 py-24 relative overflow-hidden z-20"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* El copy sí puede animarse: si queda invisible no se pierde nada
              accionable. */}
          <Reveal className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.02] tracking-tight">
              Mostranos tu base.{" "}
              <br className="hidden md:block" />
              <span className="serif-display italic font-normal text-brand-300">
                Te decimos a cuántos podés reactivar.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Media hora, sin vueltas. Miramos cuántos clientes tenés dormidos y
              qué se puede recuperar de acá a fin de mes.
            </p>

            <ul className="mb-10 space-y-4 text-left mx-auto lg:mx-0 max-w-md">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-500 shrink-0" />
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-start gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-left">
              <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">
                  La reunión es con el equipo que implementa
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Por eso la agenda es acotada. Elegí el horario que te sirva y
                  queda reservado en el momento.
                </p>
              </div>
            </div>
          </Reveal>

          {/* #agendar — destino de TODOS los CTAs. Sin animación, sin
              condiciones: siempre presente en el DOM y siempre visible. */}
          <div
            id="agendar"
            ref={sectionRef}
            className="w-full max-w-xl mx-auto scroll-mt-24"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-1 relative min-h-[650px] border-[8px] border-slate-900/50 backdrop-blur-sm">
              {status !== "ready" && (
                <div className="absolute inset-0 bg-white rounded-[20px] flex flex-col items-center justify-center p-6 text-center z-20">
                  {status === "loading" ? (
                    <>
                      <div className="animate-pulse bg-slate-100 rounded-full h-16 w-16 mb-4"></div>
                      <p className="text-slate-500 font-medium">
                        Cargando calendario...
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-slate-900 font-semibold text-lg mb-2">
                        El calendario no cargó acá
                      </p>
                      <p className="text-slate-500 text-sm mb-6 max-w-xs">
                        A veces pasa dentro de Instagram. Abrilo directo y
                        elegí tu horario igual.
                      </p>
                      <a
                        href={BOOKING_URL}
                        onClick={() => trackFallback("calendar_failed_card")}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all"
                      >
                        Abrir el calendario
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </>
                  )}
                </div>
              )}

              <iframe
                src={BOOKING_URL}
                onLoad={handleIframeLoad}
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "650px",
                }}
                scrolling="no"
                className="relative z-10 bg-white rounded-[20px]"
                title="Agendá tu reunión"
              ></iframe>
            </div>

            {/* Siempre visible, no sólo cuando falla: el modo de falla más
                común en WebView es un iframe que carga vacío y dispara onLoad
                igual, y eso el estado no lo puede detectar. */}
            <p className="mt-4 text-center text-sm text-slate-400">
              ¿No te carga el calendario?{" "}
              <a
                href={BOOKING_URL}
                onClick={() => trackFallback("calendar_below_iframe")}
                className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
              >
                Abrilo acá
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
