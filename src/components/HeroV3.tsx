import { motion } from "motion/react";

export function HeroV3() {
  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-ink-900 pt-16 sm:pt-20 pb-20 lg:pb-32 flex flex-col items-center text-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-600/20 blur-[140px]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[78px] text-white mb-6 leading-[1.02]">
            Cada mes dejás comisiones <br className="hidden md:block" />
            en la mesa.{" "}
            <span className="serif-display italic font-normal text-cyan-400">
              Y te enterás <br className="hidden md:block" />
              cuando ya es tarde.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Ventas, plan de ahorro, posventa y cartera operando cada uno por su lado.
            Reportes que llegan después del cierre. Griba lo une en una sola pantalla —
            para que el día 30 ya esté decidido, no improvisado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all focus:ring-4 focus:ring-cyan-500/30 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Agendar Diagnóstico Gratuito
            </button>
            <button
              onClick={() => document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/5 border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all focus:ring-4 focus:ring-white/10 backdrop-blur-sm"
            >
              Ver cómo funciona
            </button>
          </div>

          <div className="mt-12 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm font-medium">
            <div className="flex text-amber-400 text-base tracking-tighter">★★★★★</div>
            <span className="text-slate-400">
              <strong className="text-white">10 años</strong>
              <span className="mx-2 text-slate-600">·</span>
              100+ concesionarios oficiales en Argentina
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
