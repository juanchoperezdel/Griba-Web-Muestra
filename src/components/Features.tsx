import { motion } from "motion/react";
import { LayoutDashboard, BarChart3, Zap, Wrench } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <LayoutDashboard className="h-5 w-5 text-brand-600" />,
      title: "Operación 360 unificada",
      description:
        "Ventas 0km, usados, plan de ahorro y posventa en un solo sistema. Tu equipo deja de saltar entre cinco herramientas.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-brand-600" />,
      title: "Decisiones con datos en vivo",
      description:
        "Cumplimiento, calidad de cartera, leads, conversiones. Dashboards configurables por sucursal y marca.",
    },
    {
      icon: <Zap className="h-5 w-5 text-brand-600" />,
      title: "Automatizaciones que ahorran tiempo",
      description:
        "Descargas automáticas de fábrica, alertas de riesgo en cartera, follow-up al adjudicado, integraciones con ARCA y Mercado Libre.",
    },
    {
      icon: <Wrench className="h-5 w-5 text-brand-600" />,
      title: "Implementación in-house en días",
      description:
        "Equipo propio (no freelancers). Migración asistida + paralelo de 30 días. Soporte continuo con personas reales.",
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="solucion">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            Pasá de apagar incendios <br className="hidden md:block" />
            a tener{" "}
            <span className="serif-display italic font-normal text-brand-600">
              control real.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Cuatro cosas que Griba hace por vos todos los días.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#fafbfc] border border-slate-100 shadow-sm p-10 rounded-[32px] hover:bg-white transition-colors group"
            >
              <div className="h-12 w-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
