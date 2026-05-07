import { motion } from "motion/react";
import { Cloud, Code2, Network, ArrowRight } from "lucide-react";

export function TechSection() {
  const pillars = [
    {
      icon: <Cloud className="h-6 w-6 text-cyan-300" />,
      title: "Cloud-nativo",
      description:
        "Backups diarios, plan DR documentado, uptime publicado. Infraestructura preparada para concesionarios con varias sucursales.",
    },
    {
      icon: <Code2 className="h-6 w-6 text-cyan-300" />,
      title: "APIs documentadas",
      description:
        "Webhooks para adjudicación, pago y cambio de estado. Integraciones con ARCA, Mercado Libre y portales del sector. Cero lock-in: export completo en formato estándar.",
    },
    {
      icon: <Network className="h-6 w-6 text-cyan-300" />,
      title: "Integraciones de fábrica probadas",
      description:
        "VW, Renault, Stellantis productivas. Otras marcas se suman como parte del onboarding, sin costo extra.",
    },
  ];

  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
            APIs reales. Integraciones probadas.{" "}
            <span className="serif-display italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-brand-300">
              Sin parches.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Si tu integración con la fábrica hoy son RPAs, scrapers o copiar-pegar,
            tenés deuda técnica. Griba tiene documentación API pública, webhooks para
            eventos críticos y arquitectura cloud-nativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/30 hover:bg-slate-900 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToCalendar}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold transition-colors group"
          >
            ¿Sos del equipo de IT? Pedí una demo técnica con nuestros ingenieros, sin comerciales.
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
