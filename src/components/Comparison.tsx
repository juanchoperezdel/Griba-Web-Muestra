import { Check, X, Minus } from "lucide-react";

export function Comparison() {
  const comparisonData = [
    { feature: "Plan de ahorro como foco central", griba: true, crm: false, excel: false },
    { feature: "Descarga automática intranet de fábrica", griba: true, crm: false, excel: false },
    { feature: "Reporting de cumplimiento para Auditorías", griba: true, crm: "partial", excel: false },
    { feature: "Gestión de Múltiples Marcas", griba: true, crm: true, excel: "partial" },
    { feature: "Alertas de Calidad de Cartera", griba: true, crm: false, excel: false },
    { feature: "Dashboard integrado en tiempo real", griba: true, crm: true, excel: false }
  ];

  const getIcon = (val: boolean | string) => {
    if (val === true) return <div className="mx-auto h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center"><Check className="h-5 w-5 text-emerald-600" /></div>;
    if (val === false) return <div className="mx-auto h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center"><X className="h-5 w-5 text-slate-400" /></div>;
    if (val === "partial") return <div className="mx-auto h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center"><Minus className="h-5 w-5 text-amber-500" /></div>;
  };

  return (
    <section className="bg-[#fafbfc] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            No somos un CRM genérico.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Otros sistemas venden un paquete comercial que ignora el plan de ahorro. Tu Excel ya no escala. Griba hace el trabajo pesado por vos.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-slate-100 text-slate-500 font-semibold w-1/3 text-sm tracking-wider uppercase">Características</th>
                  <th className="p-6 border-b border-brand-100 border-x border-slate-100 bg-brand-50/50 text-center font-bold text-brand-700 w-1/4 text-lg">Griba</th>
                  <th className="p-6 border-b border-slate-100 text-center text-slate-500 font-semibold w-1/4">CRM General</th>
                  <th className="p-6 border-b border-slate-100 text-center text-slate-500 font-semibold w-1/4">Excel</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 border-b border-slate-100 font-medium text-slate-700 whitespace-normal">
                      {row.feature}
                    </td>
                    <td className="p-6 border-b border-brand-100 border-x border-brand-100 bg-brand-50/30 text-center">
                      {getIcon(row.griba)}
                    </td>
                    <td className="p-6 border-b border-slate-100 text-center">
                      {getIcon(row.crm)}
                    </td>
                    <td className="p-6 border-b border-slate-100 text-center">
                      {getIcon(row.excel)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
