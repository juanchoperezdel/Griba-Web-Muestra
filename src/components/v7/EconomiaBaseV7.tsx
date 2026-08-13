import { Reveal } from "./Reveal";

// El argumento económico: por qué trabajar la base sale más barato que comprar
// un lead nuevo.
//
// Es la pieza que faltaba. La landing explicaba bien QUÉ hace Griba, pero no
// respondía "¿cuánto hay acá para mí?". Este bloque no lo contesta con una
// cifra —no tenemos ninguna confirmada— sino con una comparación que el gerente
// puede hacer solo, mirando los dos recorridos uno al lado del otro.
//
// Sale directo de los anuncios que corren:
//   c1-a5: "Antes de gastar en clientes nuevos, reactivá los que ya te compraron"
//   c1-a3: "El más fácil de volver a venderle no es el nuevo, es el que ya te compró"
//
// Sin números inventados a propósito. El contraste ya es evidente: uno de los
// dos caminos arranca con confianza que la concesionaria ya pagó por construir.
export function EconomiaBaseV7() {
  const nuevo = [
    "Pagás para que alguien te conozca",
    "Consulta fría, sin contexto",
    "Seguimiento hasta que confíe",
    "Recién ahí, tal vez, la venta",
  ];

  const base = [
    "Ya te conoce",
    "Ya te compró una vez",
    "Ya está cargado en tu sistema",
    "Nadie lo está trabajando",
  ];

  return (
    <section className="bg-ink-900 py-24 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            No necesitás otro lead{" "}
            <span className="text-cyan-400">para tener otra oportunidad.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Hay gente que ya te compró, que ya conoce tu concesionaria y que ya
            confió una vez. Ese trabajo ya está hecho y ya lo pagaste.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <Reveal className="rounded-[28px] border border-white/10 bg-white/[0.02] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mb-6">
              Un cliente nuevo
            </p>
            <ul className="space-y-4">
              {nuevo.map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full border border-white/10 text-[11px] font-semibold text-slate-500 flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-slate-400 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={90}
            className="rounded-[28px] border border-cyan-400/30 bg-cyan-500/[0.06] p-7 sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-400 mb-6">
              Uno que ya te compró
            </p>
            <ul className="space-y-4">
              {base.map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 h-6 w-6 shrink-0 rounded-full text-[11px] font-semibold flex items-center justify-center ${
                      idx === base.length - 1
                        ? "bg-white/5 border border-white/10 text-slate-500"
                        : "bg-cyan-500/20 border border-cyan-400/40 text-cyan-300"
                    }`}
                  >
                    {idx === base.length - 1 ? "!" : "✓"}
                  </span>
                  <span
                    className={`leading-relaxed ${
                      idx === base.length - 1
                        ? "text-white font-semibold"
                        : "text-slate-300"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
