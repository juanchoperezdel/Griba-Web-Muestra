import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function TestimonialsV4() {
  const testimonials = [
    {
      text: "El día 15 ya sé si voy a cumplir el objetivo de fábrica. Antes esperaba al cierre y rezaba. Recuperamos 15 horas semanales del equipo y bajamos varios puntos la morosidad de cartera.",
      author: "Gerente Comercial Plan de Ahorro",
      company: "Concesionario Oficial Multi-marca",
      avatarId: 11,
    },
    {
      text: "Tengo 3 sucursales. Antes pedía Excels los lunes a las 10 y me llegaban el miércoles. Hoy entro al dashboard 5 minutos y sé exactamente cómo va el negocio entero — ventas, plan, cartera. Cambió todo.",
      author: "Director General",
      company: "Concesionario Oficial Stellantis",
      avatarId: 68,
    },
    {
      text: "Documentación de API decente, webhooks que funcionan, export completo. Era lo que pedíamos hace años. Lo integramos a nuestro stack BI en dos semanas.",
      author: "Gerente de Sistemas",
      company: "Grupo concesionario multi-marca",
      avatarId: 33,
    },
  ];

  const stats = [
    { value: "+100", label: "concesionarios en Argentina" },
    { value: "10 años", label: "en el mercado" },
    { value: "15 provincias", label: "con presencia" },
  ];

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-amber-500/5 blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            Los que dejaron <br className="hidden md:block" />
            de{" "}
            <span className="text-cyan-400">
              perder plata todos los meses.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tres roles distintos, el mismo resultado: control real y operación que escala.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-ink-800 border border-white/10 p-8 rounded-[28px] relative shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote className="absolute top-7 right-7 h-10 w-10 text-cyan-500/20 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-200 leading-relaxed font-medium mb-8 relative z-10 flex-grow">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="h-11 w-11 rounded-full border-2 border-white/10 bg-ink-700 overflow-hidden shrink-0">
                  <img
                    src={`https://i.pravatar.cc/150?img=${test.avatarId}`}
                    alt={test.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-sm leading-tight">{test.author}</h4>
                  <p className="text-cyan-400 font-medium text-xs mt-1 truncate">{test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-ink-800 border border-white/10 rounded-[28px] p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-6 sm:gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
