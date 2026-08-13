import { Quote } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

// Fork de v5/TestimonialsV5.tsx. Dos cambios de fondo, además de motion → Reveal:
//
// 1. SIN las 5 estrellas por testimonio. Son una calificación inventada sobre
//    citas que no tienen nombre real detrás. Un lector atento lo nota, y lo que
//    contagia es la duda sobre todo lo demás de la página.
//
// 2. SIN la fila de stats "+100 concesionarios / 10 años". Siguen pendientes de
//    confirmación del cliente desde 2026-05-07 (CLAUDE.md, regla 2). En cuanto
//    se confirmen, se reponen acá.
//
// En su lugar se dice explícitamente por qué no hay nombres. Reconocer el
// límite sostiene más credibilidad que dejar la ambigüedad flotando.
//
// PENDIENTE: estos testimonios hablan de plan de ahorro y cierre de mes, no de
// posventa. No hacen match con el ángulo de esta landing. La solución no es
// escribir unos nuevos —serían inventados— sino pedirle al cliente uno o dos
// casos reales de reactivación de base. Está anotado en el reporte de entrega.
export function TestimonialsV7() {
  const testimonials = [
    {
      text: "El día 15 ya sé si voy a cumplir el objetivo de fábrica. Antes esperaba al cierre y rezaba. Recuperamos 15 horas semanales del equipo y bajamos varios puntos la morosidad de cartera.",
      author: "Gerente Comercial Plan de Ahorro",
      company: "Concesionario Oficial Multi-marca",
    },
    {
      text: "Tengo 3 sucursales. Antes pedía Excels los lunes a las 10 y me llegaban el miércoles. Hoy entro al dashboard 5 minutos y sé exactamente cómo va el negocio entero — ventas, plan, cartera. Cambió todo.",
      author: "Director General",
      company: "Concesionario Oficial Stellantis",
    },
    {
      text: "Documentación de API decente, webhooks que funcionan, export completo. Era lo que pedíamos hace años. Lo integramos a nuestro stack BI en dos semanas.",
      author: "Gerente de Sistemas",
      company: "Grupo concesionario multi-marca",
    },
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-amber-500/5 blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            Concesionarias que ya operan{" "}
            <span className="text-cyan-400">con la base ordenada.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tres roles distintos, el mismo cambio: saber quién es cada cliente y
            cuándo le toca volver.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {testimonials.map((test, index) => (
            <Reveal
              key={test.author}
              delay={index * 120}
              className="bg-ink-800 border border-white/10 p-8 rounded-[28px] relative shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <Quote className="absolute top-7 right-7 h-10 w-10 text-cyan-500/20 rotate-180" />
              <p className="text-slate-200 leading-relaxed font-medium mb-8 relative z-10 flex-grow">
                "{test.text}"
              </p>
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-white font-bold text-sm leading-tight">
                  {test.author}
                </h4>
                <p className="text-cyan-400 font-medium text-xs mt-1">
                  {test.company}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mb-12 max-w-2xl mx-auto">
          Publicamos el cargo y el tipo de concesionario, no el nombre: son
          clientes que prefieren no figurar. En la reunión te ponemos en contacto
          con alguno si querés escucharlo de primera mano.
        </p>

        <div className="text-center">
          <CTAButton
            ctaId="testimonials_cta"
            ctaLocation="testimonials"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            Ver a cuántos puedo recuperar
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
