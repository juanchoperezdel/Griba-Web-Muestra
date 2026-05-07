import { useState } from "react";
import { motion } from "motion/react";

export function ROICalculator() {
  const [volumen, setVolumen] = useState(500);

  const fugaEstimada = Math.floor(volumen * 0.08); /* 8% */
  const ahorroComisiones = fugaEstimada * 350000; 
  const horasAhorradas = Math.floor(volumen / 50) + 10;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculadora" className="bg-white py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Descubrí cuánto dinero <br className="hidden md:block"/>
            dejás en la mesa.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center bg-[#fafbfc] border border-slate-100 shadow-xl shadow-slate-200/40 rounded-[40px] p-8 md:p-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="text-slate-500 font-semibold text-sm uppercase tracking-wider">Volumen Mensual (0km + Susc.)</label>
                <span className="text-3xl font-extrabold text-slate-900">{volumen.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="3000" 
                step="50"
                value={volumen} 
                onChange={(e) => setVolumen(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 border border-slate-200 hover:border-brand-300 rounded-full appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium mt-3">
                <span>50</span>
                <span>3000+</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Basado en un 8% promedio de operaciones y carteras de planes en riesgo por falta de seguimiento oportuno y automatización.
            </p>
          </div>

          <motion.div 
            key={volumen}
            initial={{ opacity: 0.8, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
          >
            <div className="bg-brand-50 border border-brand-100 rounded-3xl p-8 flex flex-col justify-center">
              <h4 className="text-brand-800 font-semibold text-sm mb-3">Fuga Operativa Protegida</h4>
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-600 tracking-tight">
                {formatCurrency(ahorroComisiones)}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 flex flex-col justify-center">
              <h4 className="text-amber-800 font-semibold text-sm mb-3">Horas Recuperadas</h4>
              <div className="text-3xl lg:text-4xl font-extrabold text-amber-600 tracking-tight">
                {horasAhorradas} hs <span className="text-lg text-amber-600/70 font-medium">/ mes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
