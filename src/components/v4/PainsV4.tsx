import { motion } from "motion/react";

export function PainsV4() {
  const pains = [
    {
      number: "01",
      title: "Operás sin visibilidad real.",
      bullets: [
        "No sabés cómo vas contra el objetivo del mes",
        "No detectás la cartera en riesgo a tiempo",
        "No ves dónde se está frenando la operación",
        "Llegás al cierre y rezás",
      ],
    },
    {
      number: "02",
      title: "El equipo pierde el día en tareas manuales.",
      bullets: [
        "Descargar archivos de la intranet de fábrica",
        "Cruzar información en Excel",
        "Actualizar planillas",
        "Responder lo mismo al adjudicado todos los días",
      ],
    },
    {
      number: "03",
      title: "Los sistemas no hablan entre sí.",
      bullets: [
        "Ventas por un lado, plan de ahorro por otro",
        "Usados aparte, posventa aparte",
        "Reportes manuales cada lunes",
        "Decisiones tarde, siempre",
      ],
    },
    {
      number: "04",
      title: "El plan de ahorro lo manejás a mano.",
      bullets: [
        "Tu módulo más rentable, dependiendo de planillas",
        "Datos cargados a mano que no reflejan la realidad de la cartera",
        "Adjudicados que se pierden entre archivos",
        "Bonos de fábrica que no se liquidan porque los reportes llegan tarde",
      ],
    },
  ];

  return (
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
              Cuatro puntos ciegos <br className="hidden md:block" />
              que te cuestan <br className="hidden md:block" />
              <span className="text-cyan-400">
                todos los meses.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl">
              Ninguno aparece en un reporte. Por eso es difícil actuar antes de que sea tarde — y por eso vuelve a pasar mes tras mes.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-[32px] overflow-hidden border border-white/10">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-ink-800 p-8 sm:p-10 group hover:bg-ink-700 transition-colors"
            >
              <div className="flex items-baseline gap-5 mb-6">
                <span className="font-display text-5xl sm:text-6xl text-cyan-400/40 leading-none">
                  {pain.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white leading-snug">
                  {pain.title}
                </h3>
              </div>
              <ul className="space-y-2.5 ml-[68px] sm:ml-[84px]">
                {pain.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="h-1 w-3 rounded-full bg-slate-600 shrink-0 mt-3"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
