import { Check, X, Minus } from "lucide-react";

export function Comparison() {
  const comparisonData: {
    feature: string;
    griba: boolean | string;
    crm: boolean | string;
    suite: boolean | string;
    excel: boolean | string;
  }[] = [
    { feature: "Gestión operativa real (no solo leads)", griba: true, crm: "partial", suite: "partial", excel: false },
    { feature: "Plan de ahorro como pilar central", griba: true, crm: false, suite: "partial", excel: false },
    { feature: "Integraciones probadas con intranet de fábrica", griba: true, crm: false, suite: "partial", excel: false },
    { feature: "Calidad de cartera + alertas de riesgo", griba: true, crm: false, suite: "partial", excel: false },
    { feature: "Dashboard de cumplimiento en tiempo real", griba: true, crm: "partial", suite: "partial", excel: false },
    { feature: "Operación centralizada (ventas + plan + posventa)", griba: true, crm: false, suite: "partial", excel: false },
    { feature: "Implementación in-house, soporte humano", griba: true, crm: false, suite: "partial", excel: "neutral" },
  ];

  const getIcon = (val: boolean | string) => {
    if (val === true)
      return (
        <div className="mx-auto h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
          <Check className="h-5 w-5 text-emerald-600" />
        </div>
      );
    if (val === false)
      return (
        <div className="mx-auto h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
          <X className="h-5 w-5 text-slate-400" />
        </div>
      );
    if (val === "partial")
      return (
        <div className="mx-auto h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
          <Minus className="h-5 w-5 text-amber-500" />
        </div>
      );
    return <span className="text-slate-300 text-sm">—</span>;
  };

  return (
    <section className="bg-[#fafbfc] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.05]">
            Un CRM general administra contactos. <br className="hidden md:block" />
            Griba administra la{" "}
            <span className="serif-display italic font-normal text-brand-600">
              operación completa.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Comparativa honesta. Si lo único que necesitás es un CRM de leads, hay opciones más baratas. Si tu concesionaria depende de la operativa entera, hay una sola.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap border-collapse min-w-[720px]">
              <thead>
                <tr>
                  <th className="p-5 sm:p-6 border-b border-slate-100 text-slate-500 font-semibold w-[34%] text-xs sm:text-sm tracking-wider uppercase">
                    Característica
                  </th>
                  <th className="p-5 sm:p-6 border-b border-brand-100 border-x border-slate-100 bg-brand-50/50 text-center font-bold text-brand-700 w-[16%] text-base sm:text-lg">
                    Griba
                  </th>
                  <th className="p-5 sm:p-6 border-b border-slate-100 text-center text-slate-500 font-semibold w-[16%] text-xs sm:text-sm">
                    CRM general
                  </th>
                  <th className="p-5 sm:p-6 border-b border-slate-100 text-center text-slate-500 font-semibold w-[18%] text-xs sm:text-sm">
                    Suite genérica
                  </th>
                  <th className="p-5 sm:p-6 border-b border-slate-100 text-center text-slate-500 font-semibold w-[16%] text-xs sm:text-sm">
                    Excel
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 sm:p-6 border-b border-slate-100 font-medium text-slate-700 whitespace-normal text-sm sm:text-base">
                      {row.feature}
                    </td>
                    <td className="p-5 sm:p-6 border-b border-brand-100 border-x border-brand-100 bg-brand-50/30 text-center">
                      {getIcon(row.griba)}
                    </td>
                    <td className="p-5 sm:p-6 border-b border-slate-100 text-center">{getIcon(row.crm)}</td>
                    <td className="p-5 sm:p-6 border-b border-slate-100 text-center">{getIcon(row.suite)}</td>
                    <td className="p-5 sm:p-6 border-b border-slate-100 text-center">{getIcon(row.excel)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <Check className="h-3 w-3 text-emerald-600" />
            </div>
            Cubierto
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-amber-50 flex items-center justify-center">
              <Minus className="h-3 w-3 text-amber-500" />
            </div>
            Parcial
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center">
              <X className="h-3 w-3 text-slate-400" />
            </div>
            No cubierto
          </div>
        </div>
      </div>
    </section>
  );
}
