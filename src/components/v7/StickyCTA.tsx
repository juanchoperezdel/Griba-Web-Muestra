import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

// Barra fija de mobile.
//
// En V4 el calendario caía en la sección 15 de 16 con scroll promedio del 32%:
// dos de cada tres personas no llegaban nunca a ver el CTA principal. En V7 el
// calendario subió mucho, pero igual conviene que el camino esté siempre a
// mano en mobile, que es de donde viene la enorme mayoría del tráfico.
//
// Aparece recién pasado el 25% del scroll (antes taparía el hero, que es lo que
// tiene que leerse primero) y se esconde sola cuando el calendario ya está en
// pantalla, para no competir con el propio widget de reserva.
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const percent =
        scrollable > 0 ? ((window.scrollY || doc.scrollTop) / scrollable) * 100 : 0;

      // Si el calendario ya se ve, la barra sobra.
      const calendar = document.getElementById("agendar");
      const calendarVisible = calendar
        ? calendar.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;

      setVisible(percent > 25 && !calendarVisible);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-ink-900/95 backdrop-blur-md border-t border-white/10 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <CTAButton
        ctaId="sticky_mobile"
        ctaLocation="sticky_bar"
        className="w-full inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3.5 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-colors shadow-lg"
      >
        Reactivar mi base
      </CTAButton>
    </div>
  );
}
