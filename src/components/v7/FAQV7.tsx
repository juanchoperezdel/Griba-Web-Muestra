import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

type FAQItem = {
  question: string;
  answer: string;
};

// Fork de v6/FAQV6.tsx. Las 5 preguntas del ángulo se mantienen: son buenas y
// cubren las objeciones reales (migrar la base, WhatsApp oficial, bloqueo,
// equipo chico, plazos).
//
// Se agrega una PRIMERA pregunta: "¿Qué pasa exactamente en la reunión?".
// Es la traducción directa de lo aprendido en el proyecto hermano: cuando la
// landing no dice qué hay del otro lado del botón, el tráfico frío asume que es
// una llamada de venta y no agenda. Decir el tamaño exacto de lo que se pide
// —media hora, sin costo, y qué se llevan— desactiva esa sospecha.
//
// El acordeón sigue usando AnimatePresence: es post-interacción, o sea que
// sólo corre después de que el usuario tocó algo. No puede esconder contenido
// al cargar, que es el problema que Reveal viene a resolver.
export function FAQV7() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Qué pasa exactamente en la reunión?",
      answer:
        "Media hora por videollamada. Vos nos mostrás cómo tenés la base hoy (aunque sea un Excel) y nosotros te decimos cuántos clientes tenés sin contactar y cómo sería la primera campaña de reactivación. No hay costo ni compromiso: salís con ese número, trabajes con nosotros o no.",
    },
    {
      question:
        "Mi base de clientes está en Excel / en el sistema viejo. ¿La puedo usar?",
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
        "Justamente por eso se trabaja sobre la API oficial y con plantillas aprobadas, no reenviando desde un celular. Es la forma prevista por WhatsApp para comunicación masiva de empresas, la misma que usan las marcas grandes. En la reunión te mostramos cómo queda configurado.",
    },
    {
      question: "Mi equipo es chico y no es muy técnico. ¿Van a poder usarlo?",
      answer:
        "Está pensado para que una persona arme y mande una campaña sin saber nada técnico: elegís el segmento, el mensaje y enviás. Y te acompañan consultores propios (no chatbots, no freelancers) durante todo el onboarding y después.",
    },
    {
      question: "¿Cuánto tardo en poder mandar la primera campaña?",
      answer:
        "Depende del estado de tu base y de la verificación del número oficial, que la coordinamos juntos en el onboarding. La idea es que salgas a reactivar lo antes posible; el plazo real te lo damos en la reunión, según tu caso.",
    },
  ];

  return (
    <section id="faq" className="bg-black py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            Preguntas que nos hacen <br className="hidden md:block" />
            <span className="text-cyan-400">antes de agendar.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Si tu duda no está acá, te la contestamos en la reunión, sin
            compromiso.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal
                key={faq.question}
                delay={idx * 50}
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
                      isOpen
                        ? "bg-cyan-500 text-ink-900"
                        : "bg-white/5 border border-white/10 text-slate-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
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
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <CTAButton
            ctaId="faq_cta"
            ctaLocation="faq"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            ¿Más dudas? Agendá la reunión
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
