import type { ReactNode } from "react";
import { track } from "../../lib/analytics";

// Botón único para todos los CTAs que llevan al calendario.
//
// Por qué existe: en V4 había 13 disparadores del mismo scroll a #agendar, con
// 9 labels distintos ("Pedir mi caso", "Reservar slot", "Mostrame cómo"...) y
// cero forma de saber cuál se tocaba. Cuando el análisis de Meta preguntó
// "¿desde dónde agenda la gente?", no había respuesta posible.
//
// Acá cada CTA declara un ctaId estable. El label puede cambiar todas las veces
// que haga falta sin romper la serie histórica del reporte.
//
// Los labels convergen a propósito en tres formulaciones, no nueve: "analizar
// mi base" (header, sticky, banda final), "ver a cuántos puedo recuperar"
// (bandas y testimonios) y el verbo del anuncio en el hero. Todas nombran lo
// que se lleva la persona, no lo que queremos que haga: "agendar una demo" es
// nuestro objetivo, "saber a cuántos puedo recuperar" es el suyo.

export type CTAId =
  | "header_agendar"
  | "hero_primary"
  | "chatproof_cta"
  | "ctaband_post_pains"
  | "ctaband_post_solucion"
  | "testimonials_cta"
  | "faq_cta"
  | "sticky_mobile";

type Props = {
  ctaId: CTAId;
  ctaLocation: string;
  children: ReactNode;
  className?: string;
  /** Destino del scroll. Por defecto el calendario. */
  target?: "agendar" | "solucion";
};

export function CTAButton({
  ctaId,
  ctaLocation,
  children,
  className = "",
  target = "agendar",
}: Props) {
  const handleClick = () => {
    const label = typeof children === "string" ? children : ctaId;

    track(target === "agendar" ? "cta_click" : "nav_click", {
      cta_id: ctaId,
      cta_location: ctaLocation,
      cta_label: label,
      cta_destination: `#${target}`,
    });

    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
