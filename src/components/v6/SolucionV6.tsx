import { motion } from "motion/react";
import { Megaphone, MessageCircle, Users, Activity } from "lucide-react";

// Sección "cómo lo resuelve" de V6 (#solucion, destino del CTA secundario del
// hero). Es el MECANISMO del ángulo de reactivación, con capacidades reales del
// producto (tomadas de HowGribaSolves): masivos multicanal, WhatsApp oficial
// Cloud API, CRM de posventa y seguimiento de quién respondió. Sección clara
// (como FeaturesV5) para contraste con los Pains negros. Cards ícono-izquierda.
export function SolucionV6() {
  const steps = [
    {
      icon: <Megaphone className="h-5 w-5 text-brand-600" />,
      title: "Campañas masivas segmentadas",
      description:
        "Email + WhatsApp en bloque a toda tu base. Segmentás por modelo, fecha de entrega, último service o plan, y le hablás a cada grupo con el mensaje justo. Lo que hoy hacés uno por uno, en minutos.",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-brand-600" />,
      title: "El WhatsApp oficial, andando",
      description:
        "El número oficial de tu concesionaria conectado por la API (Cloud API), estable y preparado para volumen. Sin celulares personales, sin bloqueos que te cortan la campaña a la mitad.",
    },
    {
      icon: <Users className="h-5 w-5 text-brand-600" />,
      title: "CRM 360° de posventa",
      description:
        "Cada cliente con su historial completo: qué compró, cuándo fue el último service y cuándo le toca volver. Tu equipo sabe exactamente a quién llamar hoy, y por qué.",
    },
    {
      icon: <Activity className="h-5 w-5 text-brand-600" />,
      title: "Quién abrió, quién respondió",
      description:
        "Mandás y ves el resultado en vivo: entregados, abiertos, respondidos. Los que contestan no se pierden: quedan asignados a un asesor con la conversación entera a la vista.",
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="solucion">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            De una base dormida a{" "}
            <span className="serif-display italic font-normal text-brand-600">
              clientes que vuelven.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Cuatro piezas que trabajan juntas para reactivar a quien ya te compró.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#fafbfc] border border-slate-100 shadow-sm p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] hover:bg-white transition-colors group flex items-start gap-4 sm:gap-5"
            >
              <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
