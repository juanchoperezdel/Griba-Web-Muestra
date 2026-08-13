import { setLandingVersion } from './lib/analytics';
import { LayoutV7 } from './components/v7/LayoutV7';
import { HeroV7 } from './components/v7/HeroV7';
import { ChatProofV7 } from './components/v7/ChatProofV7';
import { PainsV7 } from './components/v7/PainsV7';
import { CTABandV7 } from './components/v7/CTABandV7';
import { SolucionV7 } from './components/v7/SolucionV7';
import { TestimonialsV7 } from './components/v7/TestimonialsV7';
import { CalendarV7 } from './components/v7/CalendarV7';
import { FAQV7 } from './components/v7/FAQV7';
import { StickyCTA } from './components/v7/StickyCTA';
import { useScrollDepth } from './components/v7/useScrollDepth';

// V7 — mismo ángulo que V6 (reactivar la base dormida de posventa), pero
// construida alrededor de cuatro cosas que en el proyecto hermano resultaron
// ser las que mueven la aguja:
//
// 1. MESSAGE MATCH. El hero, el chat y los cuatro dolores repiten literalmente
//    lo que dicen los anuncios que están corriendo. Y el CTA usa el verbo del
//    anuncio ("reactivar tu base"), no uno propio. La regla que ordena todo
//    esto: la landing nunca promete más grande que el anuncio.
//
// 2. QUE SE VEA. Nada crítico depende de que dispare un IntersectionObserver.
//    El calendario no se anima nunca, y hay un rescate en index.html para el
//    caso de que el bundle ni siquiera ejecute.
//
// 3. QUE SE MIDA. Cada CTA tiene un id estable y emite un evento al dataLayer.
//    Hasta ahora la página no emitía ninguno, y por eso no se podía saber si
//    el problema era el mensaje o el navegador.
//
// 4. UN SOLO CAMINO. Todos los botones van al calendario. WhatsApp queda como
//    escape en el footer, no como puerta paralela.
//
// V5 sigue intacta sirviendo en griba.com.ar/landing-crm/. Esto vive en /v7.
setLandingVersion('v7');

export default function AppV7() {
  useScrollDepth();

  return (
    <LayoutV7>
      <HeroV7 />

      {/* Continuidad con el creativo que la persona acaba de tocar. */}
      <ChatProofV7 />

      <PainsV7 />

      <CTABandV7
        title="Esa lista ya la tenés cargada. Solo falta salir a buscarla."
        cta="Reactivar mi base"
        variant="dark"
        ctaId="ctaband_post_pains"
        ctaLocation="cta_band_1"
      />

      {/* Mecanismo. Destino del CTA secundario del hero (#solucion). */}
      <SolucionV7 />

      <CTABandV7
        title="Media hora y sabés a cuántos clientes podés recuperar este mes."
        cta="Agendar la reunión"
        variant="light"
        ctaId="ctaband_post_solucion"
        ctaLocation="cta_band_2"
      />

      <TestimonialsV7 />

      {/* #agendar — destino de todos los CTAs. */}
      <CalendarV7 />

      <FAQV7 />

      <StickyCTA />
    </LayoutV7>
  );
}
