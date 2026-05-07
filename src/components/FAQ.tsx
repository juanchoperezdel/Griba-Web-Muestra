import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Ya tenemos sistema (Tecnom, Asofix o uno propio). ¿Por qué cambiarme?",
      answer:
        "Tecnom es un CRM general que apunta al vendedor. Asofix incluye plan de ahorro como un módulo más entre varios. Griba está hecho para operar la concesionaria entera, con plan de ahorro como pilar central. Hacemos casos de migración con paralelo, así no perdés nada en el camino.",
    },
    {
      question: "Mi fábrica no está en su lista de integradas. ¿Qué pasa?",
      answer:
        "Volkswagen, Renault y Stellantis ya están productivas. El resto de las marcas se integran como parte del onboarding y lo coordinamos juntos según el caso.",
    },
    {
      question: "¿Cuánto cuesta?",
      answer:
        "El pricing es escalonado según volumen de operación y marcas que manejás — no es un precio único. La calculadora de arriba te da una idea del impacto sobre tu cifra. El número exacto te lo pasamos en el diagnóstico, contra los datos reales de tu concesionaria.",
    },
    {
      question: "Mi equipo no es muy técnico. ¿Van a poder usarlo?",
      answer:
        "Te acompañan consultores propios (no chatbots, no freelancers) durante todo el onboarding y después. Si fuera difícil de usar, no tendríamos la retención que tenemos en 10 años.",
    },
    {
      question: "Ya probé un sistema antes y fue una desilusión. ¿Por qué este sería distinto?",
      answer:
        "Equipo propio en Argentina, no soporte tercerizado. 10 años en el sector, más de 100 concesionarios oficiales activos. Tenemos casos de migración desde malas experiencias previas — los podemos compartir en el diagnóstico.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            Preguntas que nos hacen <br className="hidden md:block" />
            <span className="serif-display italic font-normal text-slate-700">
              antes de agendar.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Si tu duda no está acá, te la contestamos en el diagnóstico — sin compromiso.
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
                className="bg-[#fafbfc] border border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-brand-600 text-white" : "bg-white border border-slate-200 text-slate-500"
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
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed">
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
            onClick={() => document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            ¿Más dudas? Agendá el diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
}
