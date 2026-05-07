import { motion } from "motion/react";

export function Hero() {
  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#fafbfc] pt-[50px] pb-20 lg:pb-32 flex flex-col items-center text-center">
      {/* Soft Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-100/50 blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-100/40 blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-50/50 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-[78px] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.02]">
            Cada mes dejás comisiones <br className="hidden md:block" />
            en la mesa.{" "}
            <span className="serif-display italic font-normal text-brand-600">
              Y te enterás <br className="hidden md:block" />
              cuando ya es tarde.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Cuotas mal cargadas en un Excel. Suscriptores en mora que nadie detectó.
            Reportes que llegan después del cierre. Griba unifica ventas, plan de ahorro
            y cartera en una sola pantalla — para que el día 30 ya esté decidido, no improvisado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Agendar Diagnóstico Gratuito
            </button>
            <button
              onClick={() => document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all focus:ring-4 focus:ring-slate-100 shadow-sm"
            >
              Ver cómo funciona
            </button>
          </div>

          {/* Social Proof Text */}
          <div className="mt-12 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm text-slate-500 font-medium">
            <div className="flex text-amber-400 text-base tracking-tighter">★★★★★</div>
            <span className="text-slate-600">
              <strong className="text-slate-900">10 años</strong>
              <span className="mx-2 text-slate-300">·</span>
              100+ concesionarios oficiales en Argentina
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
