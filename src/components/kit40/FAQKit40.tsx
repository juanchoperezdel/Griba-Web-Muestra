import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { SectionShell } from "./SectionShell";

const faqs = [
  {
    question: "¿Quién puede acceder al Programa KIT 4.0?",
    answer:
      "PyMEs industriales en Argentina, con Certificado MiPyME vigente y sin deuda fiscal ni previsional. En el diagnóstico gratuito evaluamos si tu empresa califica antes de avanzar con el trámite.",
  },
  {
    question: "¿Cuánto cubre exactamente el programa?",
    answer:
      "Hasta el 50% del costo neto de implementación (sin IVA), con un tope de ARS 20.000.000 por empresa. El cupo total del programa es limitado y se asigna por orden de presentación.",
  },
  {
    question: "¿Qué incluye la implementación con Griba?",
    answer:
      "La implementación de tu CRM y ERP: pipeline de ventas, gestión de stock, compras, facturación y administración, integrados en una sola plataforma. Incluye migración de datos, integraciones y capacitación del equipo.",
  },
  {
    question: "¿Cómo se acredita el beneficio?",
    answer:
      "El subsidio se acredita como crédito tributario en la cuenta ARCA de Griba como proveedor habilitado, y se descuenta del costo final de implementación que paga tu empresa. No es una transferencia directa a tu cuenta.",
  },
  {
    question: "¿Cómo es el trámite y quién lo hace?",
    answer:
      "La solicitud se presenta a través de Trámites a Distancia (TAD). Te acompañamos en todo el proceso: armamos la propuesta, te guiamos en la presentación y la documentación necesaria, para que vos te enfoques en tu negocio.",
  },
  {
    question: "¿Hasta cuándo puedo aplicar?",
    answer:
      "El programa asigna el beneficio por orden de presentación hasta agotar el cupo disponible. No hay una fecha fija garantizada: cuanto antes inicies, más chances de entrar dentro del cupo.",
  },
];

export function FAQKit40() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell
      id="faq"
      dark
      n="06"
      eyebrow="Preguntas frecuentes"
      title={
        <>
          Lo que nos preguntan{" "}
          <span className="text-cyan-400">antes de aplicar.</span>
        </>
      }
      intro="Si tu duda no está acá, te la contestamos en el diagnóstico — sin compromiso."
    >
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-ink-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
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
                    <div className="px-6 pb-6 pt-0 text-slate-400 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
