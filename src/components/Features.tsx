import { motion } from "motion/react";
import { CheckCircle2, Zap, Settings, Activity } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Activity className="h-5 w-5 text-brand-600" />,
      title: "Dashboard en Tiempo Real",
      description: "El día 15 vas a saber si llegás al volumen de terminal. Y si no, tenés tiempo para corregir el rumbo."
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-brand-600" />,
      title: "Scoring de Cartera",
      description: "Identificá suscriptores en riesgo y protejé tus fees automatizando la fidelización."
    },
    {
      icon: <Zap className="h-5 w-5 text-brand-600" />,
      title: "Integraciones Nativas",
      description: "Conexiones probadas con Volkswagen, Renault, Stellantis. Descargas automáticas."
    },
    {
      icon: <Settings className="h-5 w-5 text-brand-600" />,
      title: "Software a tu medida",
      description: "Ajustamos Griba a tu flujo puntual. Implementación robusta en días, no en meses."
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="solucion">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Claridad. Velocidad. Resultados.
          </h2>
          <p className="text-lg text-slate-500">
            Griba unifica Ventas y Planes de Ahorro para que dejes de lado las tareas repetitivas y enfoques a tus equipos en vender.
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
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
