import { motion } from "motion/react";
import { Gauge, ShieldCheck, Plug, Workflow } from "lucide-react";

export function PlanAhorro() {
  const subFeatures = [
    {
      icon: <Gauge className="h-5 w-5 text-brand-600" />,
      title: "Dashboard de cumplimiento",
      description:
        "El día 15 sabés si llegás al objetivo de fábrica. No esperás al cierre para enterarte.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-brand-600" />,
      title: "Calidad de cartera",
      description:
        "Detectá suscriptores en riesgo antes de que se caigan. Cada punto recuperado = comisión protegida.",
    },
    {
      icon: <Plug className="h-5 w-5 text-brand-600" />,
      title: "Integraciones de fábrica",
      description:
        "VW, Renault, Stellantis productivas. Cero descarga manual desde intranets.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-brand-600" />,
      title: "Seguimiento operativo",
      description:
        "Adjudicaciones, licitaciones, entregas y fidelización en una sola pantalla.",
    },
  ];

  return (
    <section
      id="plan-ahorro"
      className="bg-white py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Texto izquierda */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
              Donde más se rompe <br />
              una concesionaria:{" "}
              <span className="serif-display italic font-normal text-brand-600">
                plan de ahorro.
              </span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-6">
              Y ahí es donde Griba hace la diferencia.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              No hablamos de "un módulo más" entre diez. Hablamos de la operativa
              completa: cartera, adjudicaciones, scoring, cumplimiento, suscriptores,
              cuotas, fidelización e integraciones nativas con tu intranet de fábrica.
              Todo conectado, en tiempo real.
            </p>

            <div className="hidden lg:block border-l-2 border-brand-100 pl-5 py-2">
              <p className="text-sm text-slate-500 italic leading-relaxed">
                "El día 15 ya sé si voy a cumplir el objetivo de fábrica.
                Antes esperaba al cierre y rezaba."
              </p>
              <p className="text-xs text-slate-400 mt-2">
                — Gerente Comercial Plan de Ahorro
              </p>
            </div>
          </div>

          {/* Cards + Mockup derecha */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {subFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-[#fafbfc] border border-slate-100 p-6 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Mockup placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-brand-50/30 to-cyan-50/30 p-1 shadow-xl shadow-slate-200/50 overflow-hidden"
            >
              <div className="aspect-[16/9] w-full bg-white rounded-xl flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,98,254,0.06),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.06),transparent_60%)]"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 mb-3 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
                    <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                    Mockup pendiente
                  </div>
                  <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
                    Aquí va el screenshot del dashboard de plan de ahorro:
                    cumplimiento del objetivo, calidad de cartera y suscriptores con scoring.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
