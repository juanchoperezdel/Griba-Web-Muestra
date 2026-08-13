import { useEffect, useRef, useState, type ReactNode } from "react";

// Reveal — animación de entrada que NO puede dejar contenido invisible.
//
// El problema que resuelve: en el resto del repo las secciones usan
// `motion.div` con `initial={{ opacity: 0 }} + whileInView`. Eso apuesta a que
// el IntersectionObserver va a disparar. En el navegador in-app de Instagram
// (~76% del tráfico) la barra de direcciones colapsa y expande al scrollear, el
// viewport se recalcula y el observer puede no disparar nunca. Cuando eso pasa,
// la sección queda en opacity:0 para siempre. En CalendarSection eso significa
// que el destino de todos los CTAs es un vacío.
//
// Acá la lógica está invertida y con doble red:
//   1. El estado base en CSS es VISIBLE. Ocultar es un opt-in que hace el JS
//      (clase `js-reveal` en el root de V7). Si el JS no corre, se ve todo.
//   2. Aunque el observer nunca dispare, un timeout duro fuerza la aparición.
//
// La animación es CSS puro: saca `motion` del camino crítico de render, que
// también ayuda con el INP (492ms medido en mobile).

const HARD_TIMEOUT_MS = 1200;

type Props = {
  children: ReactNode;
  /** Retardo de la animación, en ms. También corre el timeout de rescate. */
  delay?: number;
  className?: string;
  /**
   * React consume `key` antes de llegar al componente, así que esto no se usa
   * acá adentro. Se declara porque el repo no tiene @types/react instalado y
   * sin esos tipos TS no reconoce `key` como atributo especial de JSX: lo
   * valida como una prop común y falla en cada `<Reveal key={...}>`.
   * Se puede borrar el día que se agregue @types/react al proyecto.
   */
  key?: string | number;
};

export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const show = () => setShown(true);

    // Red de seguridad: pase lo que pase con el observer, esto se ve.
    const timer = window.setTimeout(show, HARD_TIMEOUT_MS + delay);

    if (!el || typeof IntersectionObserver === "undefined") {
      show();
      return () => window.clearTimeout(timer);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);

    return () => {
      window.clearTimeout(timer);
      io.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`v7-reveal ${shown ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Decide si las animaciones de entrada se habilitan.
 *
 * Se llama con inicializador lazy de useState para que corra DURANTE el primer
 * render: así la clase `js-reveal` ya está puesta en el primer paint y no hay
 * flash de contenido que aparece y se vuelve a esconder.
 */
export function shouldAnimate(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  return !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}
