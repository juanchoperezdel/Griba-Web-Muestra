import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      label: "01",
      time: "30 min",
      title: "Diagnóstico",
      description:
        "Mapeamos tu operativa actual, marcas que manejás y dónde está la fuga real. Salís con un plan, no con una venta.",
    },
    {
      label: "02",
      time: "Días 1–7",
      title: "Migración asistida",
      description:
        "Importamos tu data y configuramos las integraciones de fábrica. Vos no tocás nada, lo hace nuestro equipo.",
    },
    {
      label: "03",
      time: "Días 8–30",
      title: "Paralelo + onboarding",
      description:
        "Tu sistema viejo y Griba corren juntos 30 días. Tu equipo se capacita con consultores propios — no chatbot, no freelancers.",
    },
    {
      label: "04",
      time: "Día 30+",
      title: "Vivís en Griba",
      description:
        "Excel se apaga. Las comisiones que se escapaban, ahora las recuperás. Soporte continuo con personas reales del equipo.",
    },
  ];

  return (
    <section className="bg-[#fafbfc] py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
              De Excel a Griba <br className="hidden md:block" />
              <span className="serif-display italic font-normal text-slate-700">
                en treinta días.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Sin pesadilla de implementación. Equipo in-house, migración asistida
              y paralelo de 30 días para que nadie pierda nada en el camino.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-slate-200/80 rounded-[32px] overflow-hidden border border-slate-200/80">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-8 sm:p-10 group hover:bg-[#fafbfc] transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
                  <span className="serif-display italic text-6xl sm:text-7xl text-brand-500/60 leading-none">
                    {step.label}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
                    {step.time}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
