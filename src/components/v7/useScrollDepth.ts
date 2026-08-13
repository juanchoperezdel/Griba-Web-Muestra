import { useEffect, useRef } from "react";
import { track } from "../../lib/analytics";

// Profundidad de scroll, un evento por umbral.
//
// Es el diagnóstico que faltaba: Clarity mide scroll promedio 32% pero es una
// herramienta aparte, con su propio muestreo, y no se puede cruzar contra el
// ángulo del anuncio ni contra `surface`. Con esto la caída queda en el mismo
// dataLayer que los CTAs, y se puede preguntar "de los que entran por
// Instagram, ¿cuántos llegan al calendario?".

const THRESHOLDS = [25, 50, 75, 90] as const;

export function useScrollDepth() {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = ((window.scrollY || doc.scrollTop) / scrollable) * 100;

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          track("scroll_depth", { percent: threshold });
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure(); // por si la página entra ya scrolleada (deep link a #agendar)

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
