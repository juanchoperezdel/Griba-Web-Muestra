import { Reveal } from "./Reveal";

// Pains de V7 — fork de v6/PainsV6.tsx.
//
// El cambio de fondo: en V6 los 4 dolores salían de una charla con el cliente.
// Acá salen de los anuncios que están corriendo. Uno por ángulo, para que quien
// tocó cualquiera de los 7 creativos de la línea CRM se vea reflejado en los
// primeros segundos.
//
//   01 ← c1-a4-perdida-pain  ("No hubo queja. Se fue con otro y no te enteraste")
//   02 ← c1-a3 / c1-a5       ("Salís a buscar nuevos, los que ya te compraron juntando polvo")
//   03 ← c1-a2 / c1-a5       ("¿A cuántos les hablaste este mes?" / "sin llamar uno por uno")
//   04 ← c1-a6 + seguimiento ("Mientras atendés el salón, tu base trabaja sola")
//
// El dolor técnico de V6 ("el WhatsApp oficial no te funciona") sale de acá: no
// es el gancho de ningún ad y es más frío que los otros tres. Vive en
// SolucionV7 y en el FAQ, que es donde corresponde una objeción de plataforma.
export function PainsV7() {
  const pains = [
    {
      number: "01",
      title: "No se enojó. Dejó de volver.",
      bullets: [
        "No hubo queja ni reclamo: simplemente no apareció más",
        "Entregás el auto y ahí se corta el contacto",
        "Al que no seguís vos, lo sigue tu competencia",
        "Te enterás cuando ya compró en otro lado",
      ],
    },
    {
      number: "02",
      title: "Salís a buscar nuevos. Los tuyos, juntando polvo.",
      bullets: [
        "Pagás por leads fríos mientras tu base espera sin que nadie la toque",
        "El más fácil de volver a venderle es el que ya te compró",
        "Service, recompra y renovación de plan, todos sin seguimiento",
        "La próxima venta ya está cargada en tu sistema",
      ],
    },
    {
      number: "03",
      title: "Uno por uno no escala.",
      bullets: [
        "Tenés la base llena. ¿A cuántos les hablaste este mes?",
        "Querés avisarle a cientos y lo hacés contacto por contacto",
        "Sin segmentar por modelo, fecha de entrega o último service",
        "La campaña que sí serviría nunca sale",
      ],
    },
    {
      number: "04",
      title: "Mandás y no sabés qué pasó.",
      bullets: [
        "No ves quién abrió, quién respondió ni quién ignoró",
        "Los que sí contestan se pierden sin que nadie los siga",
        "Ningún asesor tiene la conversación completa del cliente",
        "Cada respuesta sin seguimiento es una venta que se enfría",
      ],
    },
  ];

  return (
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
              Tu mejor lista de clientes <br className="hidden md:block" />
              ya la tenés.{" "}
              <span className="text-cyan-400">Y la tenés parada.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl">
              No hace falta salir a comprar leads fríos. La gente que ya te
              confió una compra es la más barata de reactivar, si tuvieras cómo
              llegarles.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/10">
          {pains.map((pain, index) => (
            <Reveal
              key={pain.number}
              delay={index * 80}
              className="bg-ink-800 p-6 sm:p-10 group hover:bg-ink-700 transition-colors"
            >
              <div className="flex items-baseline gap-4 sm:gap-5 mb-5 sm:mb-6">
                <span className="font-display text-4xl sm:text-6xl text-cyan-400/40 leading-none shrink-0">
                  {pain.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white leading-snug">
                  {pain.title}
                </h3>
              </div>
              <ul className="space-y-2.5 ml-0 sm:ml-[84px]">
                {pain.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="h-1 w-3 rounded-full bg-slate-600 shrink-0 mt-3"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
