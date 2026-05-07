import { motion } from "motion/react";

type Version = "v1" | "v2";

const copyByVersion = {
  v1: {
    h2Line1: "Cuatro síntomas",
    h2Line2: "de que tu sistema",
    h2Line3Highlight: "ya no alcanza.",
    subhead:
      "Cada uno te cuesta horas, comisiones o tranquilidad. Si reconocés más de dos en tu operación, la pérdida no es hipotética — es mensual.",
  },
  v2: {
    h2Line1: "Cuatro fugas",
    h2Line2: "que no estás",
    h2Line3Highlight: "midiendo.",
    subhead:
      "Cada una te saca plata todos los meses. Y ninguna aparece en un reporte — porque no podés actuar sobre lo que no ves.",
  },
} as const;

export function Pains({ version = "v1" }: { version?: Version }) {
  const copy = copyByVersion[version];
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
      title: "El plan de ahorro vive en Excel.",
      bullets: [
        "El módulo más complejo, sin sistema específico",
        "Cuotas mal cargadas = calidad de cartera falseada",
        "Adjudicados sin seguimiento sistemático",
        "Comisiones de fábrica que se escapan mes a mes",
      ],
    },
  ];

  return (
    <section className="bg-[#fafbfc] py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              {copy.h2Line1} <br className="hidden md:block" />
              {copy.h2Line2} <br className="hidden md:block" />
              <span className="serif-display italic font-normal text-slate-700">
                {copy.h2Line3Highlight}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              {copy.subhead}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-slate-200/80 rounded-[32px] overflow-hidden border border-slate-200/80">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white p-8 sm:p-10 group hover:bg-[#fafbfc] transition-colors"
            >
              <div className="flex items-baseline gap-5 mb-6">
                <span className="serif-display italic text-5xl sm:text-6xl text-brand-500/60 leading-none">
                  {pain.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                  {pain.title}
                </h3>
              </div>
              <ul className="space-y-2.5 ml-[68px] sm:ml-[84px]">
                {pain.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="h-1 w-3 rounded-full bg-slate-300 shrink-0 mt-3"></span>
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
