import { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock } from "lucide-react";

const benefits = [
  "Evaluamos si tu empresa califica para el KIT 4.0",
  "Te decimos cuánto cubriría el programa en tu caso concreto",
  "Te mostramos cómo quedaría tu CRM + ERP implementado con Griba",
  "Hablás con un consultor del equipo, no con un comercial junior",
];

export function FormKit40() {
  // Cargar el script de embed de LeadConnector una sola vez (mismo que el resto del sitio)
  useEffect(() => {
    const scriptId = "msgsndr-form-embed";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contacto" className="bg-black py-24 sm:py-28 relative overflow-hidden z-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-5">
              Último paso
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-[1.04]">
              Pedí tu diagnóstico — y{" "}
              <span className="text-cyan-400">tu lugar en el cupo.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Evaluamos si calificás y te decimos cuánto cubriría el KIT 4.0 en tu caso.
              30 minutos, sin compromiso. Y si avanzás, el trámite lo hacemos nosotros.
            </p>

            <ul className="mb-10 space-y-4 text-left mx-auto lg:mx-0 max-w-md">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 shrink-0" />
                  <span className="text-slate-300 font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
              <Clock className="h-8 w-8 text-amber-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Cupo limitado</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  El programa asigna el beneficio{" "}
                  <strong className="text-slate-200">por orden de presentación</strong>.
                  Cuanto antes apliques, más chances de entrar dentro del cupo.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Calendario embed (mismo integración LeadConnector del sitio) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-1 relative min-h-[650px] border-[8px] border-white/10 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-[20px] flex flex-col items-center justify-center p-6 text-center z-0">
                <div className="animate-pulse bg-slate-100 rounded-full h-16 w-16 mb-4" />
                <p className="text-slate-500 font-medium">Cargando calendario...</p>
              </div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/VzYSosC1B8dZBxZUMlG7"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
                scrolling="no"
                id="VzYSosC1B8dZBxZUMlG7_kit40"
                className="relative z-10 bg-white rounded-[20px]"
                title="Agendá tu diagnóstico KIT 4.0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
