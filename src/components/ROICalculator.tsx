import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Clock } from "lucide-react";

type Version = "v1" | "v2";

const copyByVersion = {
  v1: {
    h2Line1: "¿Cuánto te está costando",
    h2Line2Pre: "seguir",
    h2Line2Highlight: "operando manualmente?",
  },
  v2: {
    h2Line1: "¿Cuánta plata se te",
    h2Line2Pre: "está yendo",
    h2Line2Highlight: "este mes?",
  },
} as const;

export function ROICalculator({ version = "v1" }: { version?: Version }) {
  const copy = copyByVersion[version];
  const [volumen, setVolumen] = useState(500);

  // Estimaciones del sector:
  // - 8% de cartera en riesgo no detectada a tiempo
  // - Comisión promedio recuperable por suscriptor protegido: ARS 30.000/mes
  // - Anualizado: volumen * 0.08 * 30000 * 12
  const comisionesAnuales = volumen * 0.08 * 30000 * 12;
  // Horas/semana recuperadas con descarga automática + dashboards: ~volumen/40 + 8
  const horasSemanales = Math.floor(volumen / 40) + 8;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="calculadora" className="bg-white py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            {copy.h2Line1} <br className="hidden md:block" />
            {copy.h2Line2Pre}{" "}
            <span className="serif-display italic font-normal text-slate-700">
              {copy.h2Line2Highlight}
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Mové el slider con el volumen mensual de tu operación. La cifra de la derecha es lo que dejás en la mesa por trabajar con Excel y sistemas desconectados.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center bg-[#fafbfc] border border-slate-100 shadow-xl shadow-slate-200/40 rounded-[40px] p-8 md:p-12">
          {/* Slider */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="text-slate-500 font-semibold text-sm uppercase tracking-wider">
                  Volumen mensual <span className="text-slate-400 normal-case font-medium">(suscriptores + 0km)</span>
                </label>
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
              Estimación basada en el promedio del sector: 8% de morosidad no detectada a tiempo + 12 horas/semana en descargas manuales y consolidación de Excel + comisiones perdidas por falta de seguimiento. Tus números reales los vemos juntos en el diagnóstico.
            </p>
          </div>

          {/* Outputs */}
          <motion.div
            key={volumen}
            initial={{ opacity: 0.8, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Big number — recuperable anual */}
            <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-brand-300" />
                  <h4 className="text-brand-300 font-semibold text-xs uppercase tracking-wider">
                    Recuperable por año
                  </h4>
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-2">
                  +{formatCurrency(comisionesAnuales)}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  Comisiones de fábrica que dejás de perder + horas operativas recuperadas, calculado sobre tu volumen actual.
                </p>
              </div>
            </div>

            {/* Horas semanales */}
            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6 sm:p-8 flex items-center gap-5">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-amber-100/60 flex items-center justify-center">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-amber-800 font-semibold text-xs uppercase tracking-wider mb-1">
                  Horas recuperadas
                </h4>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight">
                  +{horasSemanales} hs <span className="text-base font-medium text-amber-600/80">/ semana por equipo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
