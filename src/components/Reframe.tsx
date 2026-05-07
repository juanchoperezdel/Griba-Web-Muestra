import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function Reframe() {
  const hoy = [
    "Excel por todos lados",
    "Reportes manuales los domingos",
    "Objetivos que ves cuando ya es tarde",
    "Operaciones desconectadas entre sucursales",
    "Plan de ahorro manejado \"como se puede\"",
    "Cartera reactiva, no proactiva",
    "Equipo apagando incendios todo el día",
  ];

  const conGriba = [
    "Cumplimiento visible en tiempo real",
    "Cartera monitoreada automáticamente",
    "Operación centralizada en una pantalla",
    "Decisiones con datos del día, no de la semana pasada",
    "Plan de ahorro nativo, integrado con tu fábrica",
    "Scoring de riesgo antes de la caída",
    "Equipo enfocado en vender y fidelizar",
  ];

  return (
    <section className="bg-[#fafbfc] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            El sistema que hoy usás <br className="hidden md:block" />
            ya no{" "}
            <span className="serif-display italic font-normal text-slate-700">
              soporta tu operación.
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            No es tu equipo. Es la operación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* HOY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950 border border-slate-800 rounded-[32px] p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 bg-red-500/10 text-red-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                Hoy
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                Operás con lo que tenés a mano.
              </h3>
              <ul className="space-y-3">
                {hoy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CON GRIBA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white border border-brand-100 rounded-[32px] p-8 sm:p-10 relative overflow-hidden shadow-[0_8px_30px_-8px_rgba(37,99,235,0.15)]"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
                Con Griba
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                Operás con control real.
              </h3>
              <ul className="space-y-3">
                {conGriba.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <Check className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <p className="text-center mt-12 text-xl sm:text-2xl font-medium text-slate-700">
          Y mientras tanto,{" "}
          <span className="serif-display italic text-red-500">las comisiones se escapan.</span>
        </p>
      </div>
    </section>
  );
}
