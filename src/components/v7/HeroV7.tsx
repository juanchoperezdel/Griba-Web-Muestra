import { CTAButton } from "./CTAButton";

// Hero de V7 — fork de HeroV6.tsx.
//
// El H1 se mantiene: ya hace match con el ad `c1-a4-perdida-pain` ("No hubo
// queja. No hubo reclamo. Se fue con otro y no te enteraste"). Lo que cambia es
// lo que rodea a ese H1:
//
// · EYEBROW nuevo: "Concesionarias · Posventa" es literal la descripción de los
//   ads 2, 4 y 7. Es lo primero que confirma "llegué al lugar correcto".
//
// · CTA: decía "Agendar diagnóstico". Los siete ads de la línea CRM cierran con
//   "Reactivá tu base" / "Activá tu cartera". La persona llega con ese verbo en
//   la cabeza y encontraba otro. Ahora el botón lo repite.
//   Ojo con el tamaño de la promesa: el ad promete reactivación, la landing sólo
//   promete una reunión donde se ve si eso es posible. La landing NUNCA puede
//   prometer más que el anuncio — cuando pasa, se lee como truco y la persona se va.
//
// · SUBHEAD con el lenguaje textual de los ads: "desde el número oficial de tu
//   concesionaria" (ads 1 y 7) y "sin llamar uno por uno" (ad 5). Dice el
//   mecanismo, no sólo el problema: en mobile hay que entender qué hace Griba
//   antes de llegar al botón.
//   OJO con querer afinarlo más: describir esto como "detecta quién tiene más
//   chances de volver" sería inventar una capacidad. Griba segmenta por modelo,
//   fecha de entrega y último service — no hace scoring predictivo. Además
//   "lead scoring" está en la lista de lenguaje a evitar (market_intel.md:508):
//   es el claim commodity de AuraCRM, competidor directo.
//
// · H1: dice "no volviste a hablarle", no "a buscarlo". Con "buscarlo" el
//   objeto más cercano es el auto y se pierde medio segundo entendiendo que se
//   habla del cliente. Arriba del fold ese medio segundo cuesta. Se puede
//   cambiar libremente porque este H1 NO es literal de ningún anuncio: es
//   nuestro, viene de HeroV6.
//
// · Sin animación de entrada: es el LCP de la página, medido en 4,5s en mobile.
//   Nada de JS entre el usuario y el titular.
//
// · Sin ★★★★★ y sin cifras duras: las estrellas no tienen fuente y "+100
//   concesionarios / 10 años" siguen pendientes de confirmación del cliente
//   desde 2026-05-07. Ver CLAUDE.md, regla 2.
export function HeroV7() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-8 sm:pt-14 pb-20 lg:pb-28 flex flex-col items-center text-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-600/20 blur-[140px]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <div className="flex flex-col items-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-cyan-400 mb-5">
            Concesionarias · Posventa
          </p>

          <h1 className="font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[76px] text-white mb-6 sm:leading-[1.03]">
            Le entregaste el auto.{" "}
            <br className="hidden md:block" />
            <span className="serif-display italic font-normal text-cyan-400">
              Y no volviste a hablarle.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto">
            Ni para el service, ni para renovar el plan, ni para venderle el
            próximo. Griba le escribe por vos desde el número oficial de tu
            concesionaria — sin llamar uno por uno — y te muestra quién respondió.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <CTAButton
              ctaId="hero_primary"
              ctaLocation="hero"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all focus:ring-4 focus:ring-cyan-500/30 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Quiero reactivar mi base
            </CTAButton>

            <CTAButton
              ctaId="hero_primary"
              ctaLocation="hero_secondary"
              target="solucion"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/5 border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all focus:ring-4 focus:ring-white/10 backdrop-blur-sm"
            >
              Ver cómo funciona
            </CTAButton>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Reunión de 30 minutos. Te mostramos cómo quedaría con tu base.
          </p>

          <div className="mt-12 border-t border-white/10 pt-6 w-full max-w-lg">
            <p className="text-sm text-slate-400">
              Concesionarios oficiales en todo el país ya operan con Griba.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
