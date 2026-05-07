import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function CalendarSection() {
  const benefits = [
    "Auditoría rápida de tu proceso comercial actual (ventas + plan de ahorro)",
    "Estimación de fuga operativa y comisiones perdidas",
    "Demo de Griba con marcas que ya integramos",
    "Hablás con un consultor del equipo, no con un comercial junior",
  ];

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
              Mostranos cómo manejan hoy la operación. <br className="hidden md:block" />
              <span className="serif-display italic font-normal text-brand-300">
                Te mostramos cómo cambia.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              En una llamada de 30 minutos vemos juntos dónde se está perdiendo tiempo, qué procesos pueden automatizar y cómo centralizar toda la operación en un solo sistema. <strong className="text-white">Sin compromiso, sin venta agresiva.</strong>
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
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-1 relative min-h-[650px] border-[8px] border-slate-900/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-white rounded-[20px] flex flex-col items-center justify-center p-6 text-center z-0">
                 {/* Loading/Fallback state clearly explaining to the developer */}
                 <div className="animate-pulse bg-slate-100 rounded-full h-16 w-16 mb-4"></div>
                 <p className="text-slate-500 font-medium">Cargando calendario...</p>
                 <p className="text-xs text-slate-400 mt-2 max-w-[250px]">
                    Si ves esto en producción, reemplazá el src del iframe con tu enlace real de Calendly o Hubspot.
                 </p>
              </div>

              {/* The Actual Iframe */}
              <iframe 
                src="https://calendly.com/griba/diagnostico" 
                width="100%" 
                height="650" 
                frameBorder="0"
                className="relative z-10 bg-white rounded-[20px]"
                title="Agenda tu diagnóstico"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
