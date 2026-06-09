import { useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

type Version = "v1" | "v2";

const copyByVersion = {
  v1: {
    h2Line1: "Mostranos cómo manejan hoy la operación.",
    h2Line2Highlight: "Te mostramos cómo cambia.",
    subhead:
      "En una llamada de 30 minutos vemos juntos dónde se está perdiendo tiempo, qué procesos pueden automatizar y cómo centralizar toda la operación en un solo sistema. Sin compromiso, sin venta agresiva.",
    benefits: [
      "Auditoría rápida de tu proceso comercial actual (ventas + plan de ahorro)",
      "Estimación de fuga operativa y comisiones perdidas",
      "Demo de Griba con marcas que ya integramos",
      "Hablás con un consultor del equipo, no con un comercial junior",
    ],
  },
  v2: {
    h2Line1: "Mostranos cómo operan hoy.",
    h2Line2Highlight: "Te decimos cuánta plata se va.",
    subhead:
      "En 30 minutos detectamos las fugas reales de tu operación: cartera, comisiones y horas de equipo. Salís con un número, no con una venta.",
    benefits: [
      "Auditoría rápida de tu proceso comercial (ventas + plan de ahorro)",
      "Número estimado de plata que se está fugando este mes",
      "Demo de Griba con marcas que ya integramos",
      "Hablás con un consultor del equipo, no con un comercial junior",
    ],
  },
} as const;

export function CalendarSection({ version = "v1" }: { version?: Version }) {
  const copy = copyByVersion[version];
  const benefits = copy.benefits;

  // Cargar el script de embed de LeadConnector una sola vez
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
    <section id="calendario" className="bg-slate-950 py-24 relative overflow-hidden z-20">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.02] tracking-tight">
              {copy.h2Line1} <br className="hidden md:block" />
              <span className="serif-display italic font-normal text-brand-300">
                {copy.h2Line2Highlight}
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              {copy.subhead}
            </p>

            <ul className="mb-10 space-y-4 text-left mx-auto lg:mx-0 max-w-md">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-500 shrink-0" />
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="inline-flex items-start gap-4 bg-slate-900/50 p-6 gap-3 rounded-2xl border border-slate-800 text-left">
              <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Capacidad limitada</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Onboarding in-house = solo tomamos <strong className="text-slate-200">4 nuevas implementaciones</strong> por mes. Si querés que el del próximo mes seas vos, agendá ahora.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Calendar Iframe */}
          {/* id="agendar" + scroll-mt-24: los CTAs scrollean acá directo (no al título),
              para que en mobile la gente caiga sobre el selector de fecha. */}
          <motion.div
            id="agendar"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl mx-auto scroll-mt-24"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-1 relative min-h-[650px] border-[8px] border-slate-900/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-[20px] flex flex-col items-center justify-center p-6 text-center z-0">
                <div className="animate-pulse bg-slate-100 rounded-full h-16 w-16 mb-4"></div>
                <p className="text-slate-500 font-medium">Cargando calendario...</p>
              </div>

              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/ZZBJGS0BBT56DEyRM5t5"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
                scrolling="no"
                id="ZZBJGS0BBT56DEyRM5t5_1779121777783"
                className="relative z-10 bg-white rounded-[20px]"
                title="Agendá tu diagnóstico"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
