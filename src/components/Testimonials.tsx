import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Antes teníamos la Venta Tradicional en un CRM genérico y el Plan de Ahorro en Excels interminables. Unificar los procesos nos hizo recuperar al menos 15 horas semanales por empleado y redujimos la morosidad dramáticamente.",
      author: "Gerente Comercial",
      company: "Concesionario Oficial Multi-marca",
      avatarId: 11
    },
    {
      text: "La descarga automática de la intranet de la fábrica fue un antes y un después. Ya no tomamos decisiones con datos de la semana pasada, ahora vemos el cumplimiento de los objetivos al instante.",
      author: "Director General",
      company: "Concesionario Oficial Stellantis",
      avatarId: 68
    }
  ];

  return (
    <section className="bg-[#fafbfc] py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-100/50 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-amber-50/50 blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Los gerentes que dejaron atrás el Excel
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resultados medibles en concesionarios líderes. Así es como nuestros clientes simplifican su operación con Griba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white border border-slate-100 p-8 sm:p-10 rounded-[32px] relative shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-brand-100 rotate-180 opacity-50" />
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed font-medium mb-10 text-lg relative z-10">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?img=${test.avatarId}`} alt={test.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">{test.author}</h4>
                  <p className="text-brand-600 font-medium text-sm mt-0.5">{test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
