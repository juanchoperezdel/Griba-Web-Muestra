import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

// FAQ de V6: objeciones específicas del ángulo de reactivación (importar la base,
// WhatsApp oficial, riesgo de bloqueo, qué pasa si el equipo es chico). Mismo
// estilo que FAQV5. Sin pregunta de precio (decisión del cliente).
export function FAQV6() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Mi base de clientes está en Excel / en el sistema viejo. ¿La puedo usar?",
      answer:
        "Sí. En el onboarding migramos tu base y la ordenamos: cada cliente con su modelo, fecha de entrega e historial de service. A partir de ahí ya podés segmentar y salir a reactivar. No arrancás de cero.",
    },
    {
      question: "¿Es el WhatsApp oficial de verdad o un número común?",
      answer:
        "Es el número oficial de tu concesionaria conectado por la API oficial de WhatsApp (Cloud API), a nombre de tu cuenta. Eso es lo que permite mandar en volumen de forma estable, sin depender de un celular personal que se satura o se bloquea.",
    },
    {
      question: "¿No me van a bloquear el número por mandar masivos?",
      answer:
        "Justamente por eso se trabaja sobre la API oficial y con plantillas aprobadas, no reenviando desde un celular. Es la forma prevista por WhatsApp para comunicación masiva de empresas, la misma que usan las marcas grandes. En el diagnóstico te mostramos cómo queda configurado.",
    },
    {
      question: "Mi equipo es chico y no es muy técnico. ¿Van a poder usarlo?",
      answer:
        "Está pensado para que una persona arme y mande una campaña sin saber nada técnico: elegís el segmento, el mensaje y enviás. Y te acompañan consultores propios (no chatbots, no freelancers) durante todo el onboarding y después.",
    },
    {
      question: "¿Cuánto tardo en poder mandar la primera campaña?",
      answer:
        "Depende del estado de tu base y de la verificación del número oficial, que la coordinamos juntos en el onboarding. La idea es que salgas a reactivar lo antes posible; el plazo real te lo damos en el diagnóstico, según tu caso.",
    },
  ];

  return (
    <section id="faq" className="bg-black py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            Preguntas que nos hacen <br className="hidden md:block" />
            <span className="text-cyan-400">
              antes de agendar.
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Si tu duda no está acá, te la contestamos en el diagnóstico, sin compromiso.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-ink-800 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="font-semibold text-white text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-cyan-500 text-ink-900" : "bg-white/5 border border-white/10 text-slate-400"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            ¿Más dudas? Agendá el diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
}
