import { motion } from "motion/react";
import { Gauge, ShieldCheck, Plug, Workflow } from "lucide-react";

// Plan de ahorro de V5: el wedge vertical. Copy afilado con el research del
// rubro (la cuota la cobra la administradora → te enterás tarde de la mora;
// planes caídos que recomprás con tu plata; comisión que llega con la 2ª cuota).
// Sin el "mockup pendiente" de V4 (placeholder que quedaba inconcluso).
export function PlanAhorroV5() {
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
        "Detectá la mora antes de que el plan se caiga. Cada suscriptor que sostenés = comisión que no recomprás.",
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
              Y ahí es donde el mes se gana o se pierde.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              La cuota la cobra la administradora, no vos — así que te enterás tarde
              de quién está en mora. Suscriptores que se caen y terminás recomprando
              con tu propia plata. Adjudicados sin seguimiento porque la comisión
              llega con la segunda cuota. Reportes a fábrica que llegan después del
              cierre. Griba sostiene cartera, mora, adjudicaciones, scoring y
              cumplimiento en tiempo real, con integración nativa a la intranet de tu
              fábrica.
            </p>

            <div className="border-l-2 border-brand-100 pl-5 py-2">
              <p className="text-sm text-slate-500 italic leading-relaxed">
                "El día 15 ya sé si voy a cumplir el objetivo de fábrica.
                Antes esperaba al cierre y rezaba."
              </p>
              <p className="text-xs text-slate-400 mt-2">
                — Gerente Comercial Plan de Ahorro
              </p>
            </div>
          </div>

          {/* Cards derecha */}
          <div className="lg:col-span-7">
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
          </div>
        </div>
      </div>
    </section>
  );
}
