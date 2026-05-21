import { motion } from "motion/react";
import { CheckCircle2, Mail, Calendar, MessageCircle } from "lucide-react";

export function ThankYou() {
  const nextSteps = [
    {
      icon: <Mail className="h-5 w-5 text-brand-600" />,
      title: "Revisá tu mail",
      description:
        "Te enviamos la confirmación con el link de la reunión y el resumen de lo que vamos a ver.",
    },
    {
      icon: <Calendar className="h-5 w-5 text-brand-600" />,
      title: "Reservá 30 minutos en tu agenda",
      description:
        "La llamada dura 30 minutos. No hace falta que prepares nada — mostranos cómo operan hoy y partimos de ahí.",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-brand-600" />,
      title: "Estamos en contacto",
      description:
        "Si surge cualquier inconveniente o necesitás reprogramar, nuestro equipo se pone en contacto con vos.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafbfc] pt-[50px] pb-24 lg:pb-32 min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-100/40 blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-emerald-100/30 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="h-20 w-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 shadow-sm"
          >
            <CheckCircle2 className="h-10 w-10 text-emerald-600" strokeWidth={2} />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 mb-5 leading-[1.05]">
            Tu reunión{" "}
            <span className="serif-display italic font-normal text-brand-600">
              está confirmada.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
            Te enviamos un mail con el link y el resumen de la reunión.
            Por cualquier inconveniente o si necesitás reprogramar,
            nuestro equipo se pone en contacto con vos.
          </p>

          <div className="w-full grid gap-4 sm:gap-5">
            {nextSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
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
