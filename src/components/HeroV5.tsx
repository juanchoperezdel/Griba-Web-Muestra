import { motion } from "motion/react";

// Hero de V5 (landing magra enfocada en agendar). Mismo lenguaje visual que
// HeroV3 (fondo ink + acento cyan), pero copy más visceral elegido con el
// cliente y CTA primario único "Agendar diagnóstico" + secundario discreto
// "Ver cómo funciona" (Clarity: el tráfico frío quiere ver antes de agendar).
export function HeroV5() {
  const scrollToCalendar = () => {
    document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSolucion = () => {
    document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" });
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
            Cada cierre de mes <br className="hidden md:block" />
            es una sorpresa.{" "}
            <span className="serif-display italic font-normal text-cyan-400">
              Y casi nunca <br className="hidden md:block" />
              es buena.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Operás con planillas que mienten y reportes que llegan tarde. Griba te
            muestra dónde se frena la operación —ventas, plan de ahorro, cartera y
            posventa— antes de que sea un problema.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all focus:ring-4 focus:ring-cyan-500/30 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Agendar diagnóstico
            </button>
            <button
              onClick={scrollToSolucion}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/5 border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all focus:ring-4 focus:ring-white/10 backdrop-blur-sm"
            >
              Ver cómo funciona
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="flex text-amber-400 text-base tracking-tighter">★★★★★</div>
            <div className="grid grid-cols-3 gap-5 sm:gap-12 border-t border-white/10 pt-6 w-full max-w-lg">
              {[
                { value: "+100", label: "concesionarios oficiales" },
                { value: "10 años", label: "en el mercado" },
                { value: "Todo el país", label: "con presencia" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl sm:text-3xl text-white mb-1 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
