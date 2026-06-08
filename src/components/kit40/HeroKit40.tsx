import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const scrollToForm = () =>
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
const scrollToCalc = () =>
  document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" });

const facts = [
  { value: "Hasta 50%", label: "del costo de tu CRM y ERP lo pone el Estado" },
  { value: "ARS 20M", label: "tope máximo del beneficio por empresa" },
  { value: "Por orden", label: "el que presenta primero, cobra primero" },
];

export function HeroKit40() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-16 sm:pt-24 pb-20 lg:pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[45%] h-[55%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[15%] w-[50%] h-[60%] rounded-full bg-brand-600/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Copy — alineado a la izquierda, asimétrico (col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Programa KIT 4.0 · Griba es proveedor habilitado
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-[72px] text-white leading-[0.98] mb-8">
              El Estado pone
              <br />
              hasta el{" "}
              <span className="text-cyan-400">50%.</span>
              <br />
              <span className="text-slate-400">Vos, solo la decisión.</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-9">
              La plata ya está asignada: el Programa KIT 4.0 financia hasta la mitad de tu
              nuevo CRM y ERP. Griba pone el software y hace el trámite por vos. Pero el
              cupo se reparte por orden de presentación — cuando se agota, se terminó.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all focus:ring-4 focus:ring-cyan-500/30 shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={scrollToCalc}
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/15 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all focus:ring-4 focus:ring-white/10 backdrop-blur-sm"
              >
                Calcular cuánto cubre
              </button>
            </div>

            <div className="mt-8 flex items-center gap-2.5 text-sm text-slate-400">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              Diagnóstico de 30 minutos, sin compromiso. Te decimos si calificás.
            </div>
          </motion.div>

          {/* Ficha vertical de datos (col 5) — lista editorial, NO una card simétrica */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-7">
              El programa en números
            </p>
            <div className="divide-y divide-white/10">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="py-6 first:pt-0"
                >
                  <div className="font-display text-4xl sm:text-5xl text-white leading-none mb-2">
                    {f.value}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
