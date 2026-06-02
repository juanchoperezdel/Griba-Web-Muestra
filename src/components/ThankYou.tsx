import { motion } from "motion/react";
import { AlertCircle, Mail, Calendar, MessageCircle, ArrowRight } from "lucide-react";

export function ThankYou() {
  const afterConfirm = [
    {
      icon: <Mail className="h-5 w-5 text-brand-600" />,
      title: "Recibís el link de la reunión",
      description:
        "Te llega por mail la confirmación con el link y el resumen de lo que vamos a ver.",
    },
    {
      icon: <Calendar className="h-5 w-5 text-brand-600" />,
      title: "Queda en tu agenda",
      description:
        "Bloqueamos los 30 minutos en el horario que elegiste. No hace falta que prepares nada.",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-brand-600" />,
      title: "Tu consultor se contacta",
      description:
        "Si surge algún imprevisto, te avisamos por el mismo WhatsApp con el que confirmaste.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafbfc] pt-[50px] pb-24 lg:pb-32 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-100/40 blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-emerald-100/30 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Icono de paso pendiente — naranja, con pulse */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping"></div>
            <div className="relative h-20 w-20 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm">
              <AlertCircle className="h-10 w-10 text-amber-600" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Eyebrow de paso pendiente */}
          <div className="inline-flex items-center gap-2 mb-5 bg-amber-100 border border-amber-200 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em]">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Falta un paso
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.05]">
            Casi listo.{" "}
            <span className="serif-display italic font-normal text-amber-600">
              Te queda un último paso.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Tu lugar quedó reservado en agenda, pero <strong className="text-slate-900">la reunión queda confirmada cuando nos avisás por WhatsApp</strong>. Es el último paso, te toma 10 segundos.
          </p>

          {/* CTA principal — WhatsApp con pulse glow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative w-full max-w-md mb-4"
          >
            {/* Glow pulse animado */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 blur-2xl animate-pulse"></div>

            <a
              href="https://wa.link/en2aaz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white hover:bg-[#1ebe57] transition-all shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:-translate-y-0.5 focus:ring-4 focus:ring-emerald-200 outline-none"
            >
              <MessageCircle className="h-6 w-6 shrink-0" fill="currentColor" />
              <span>Confirmar mi reunión</span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <p className="text-sm text-slate-500 mb-14 flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" fill="currentColor" />
            Te abre WhatsApp con el mensaje listo
          </p>

          {/* Separador con título */}
          <div className="w-full flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Después de confirmar
            </span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <div className="w-full grid gap-4 sm:gap-5">
            {afterConfirm.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 sm:p-6 flex items-start gap-4 text-left"
              >
                <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-50 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}