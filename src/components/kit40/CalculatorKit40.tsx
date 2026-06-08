import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, ArrowRight } from "lucide-react";

const TOPE = 20_000_000;

const fmt = (val: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(val);

const scrollToForm = () =>
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });

export function CalculatorKit40() {
  const [costo, setCosto] = useState(24_000_000);

  const cubre = Math.min(costo * 0.5, TOPE);
  const inversion = costo - cubre;
  const superaTope = costo * 0.5 > TOPE;
  const pctCubre = costo > 0 ? (cubre / costo) * 100 : 0;

  return (
    <section id="calculadora" className="relative bg-ink-800 py-20 sm:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute -bottom-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Encabezado en línea, no centrado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Hacé el número
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05]">
              Mové el costo y mirá{" "}
              <span className="text-cyan-400">cuánto dejás de pagar.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-xs md:text-right leading-relaxed">
            Cubre el 50% del costo neto (sin IVA), con tope de{" "}
            <strong className="text-slate-300">{fmt(TOPE)}</strong>.
          </p>
        </div>

        {/* Consola full-width */}
        <div className="rounded-[32px] border border-white/10 bg-ink-900 shadow-2xl overflow-hidden">
          {/* Fila slider — cruza todo el ancho */}
          <div className="p-8 sm:p-10 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Costo estimado de implementación (neto)
              </label>
              <span className="font-display text-4xl sm:text-5xl text-white tracking-tight">
                {fmt(costo)}
              </span>
            </div>
            <input
              type="range"
              min={4_000_000}
              max={60_000_000}
              step={1_000_000}
              value={costo}
              onChange={(e) => setCosto(parseInt(e.target.value))}
              className="w-full h-3 bg-white/10 border border-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400 hover:border-cyan-500/40 transition-colors"
            />
            <div className="flex justify-between text-xs text-slate-500 font-medium mt-3">
              <span>$4M</span>
              <span>$60M+</span>
            </div>
          </div>

          {/* Fila lectura horizontal — 2 columnas grandes */}
          <motion.div
            key={costo}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          >
            <div className="p-8 sm:p-10 bg-cyan-500/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/80 mb-3">
                Lo cubre el KIT 4.0
              </p>
              <div className="font-display text-4xl sm:text-5xl text-cyan-300 tracking-tight">
                {fmt(cubre)}
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Tu inversión real
              </p>
              <div className="font-display text-4xl sm:text-5xl text-white tracking-tight">
                {fmt(inversion)}
              </div>
            </div>
          </motion.div>

          {/* Barra de reparto animada full-width */}
          <div className="px-8 sm:px-10 py-7 border-t border-white/10">
            <div className="flex h-4 w-full overflow-hidden rounded-full bg-white/5 border border-white/10">
              <motion.div
                className="h-full bg-cyan-400"
                animate={{ width: `${pctCubre}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="h-full flex-1 bg-white/15" />
            </div>
            <div className="flex justify-between mt-2.5 text-xs font-medium">
              <span className="text-cyan-300">{Math.round(pctCubre)}% lo cubre el Estado</span>
              <span className="text-slate-400">{Math.round(100 - pctCubre)}% lo ponés vos</span>
            </div>

            <AnimatePresence mode="wait">
              {superaTope && (
                <motion.div
                  key="tope"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/30 p-4">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-200/90 leading-relaxed">
                      Tu proyecto supera el tope: el programa cubre hasta{" "}
                      <strong className="text-amber-100">{fmt(TOPE)}</strong>. El excedente
                      queda a cargo de tu empresa.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pie consola con CTA */}
          <div className="px-8 sm:px-10 py-6 bg-white/[0.03] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 text-center sm:text-left">
              Estimación orientativa. Tu número exacto lo definimos en el diagnóstico.
            </p>
            <button
              onClick={scrollToForm}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-cyan-400 transition-all hover:-translate-y-0.5"
            >
              Quiero aplicar al programa
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
