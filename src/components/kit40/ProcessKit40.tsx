import { motion } from "motion/react";
import { SectionShell } from "./SectionShell";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    time: "30 min · gratis",
    desc: "Vemos tu operación, qué necesitás implementar y si tu empresa califica. Salís con un plan, no con una venta.",
  },
  {
    n: "02",
    title: "Propuesta y presupuesto",
    time: "Días 1–5",
    desc: "Armamos la propuesta técnica y económica de tu CRM + ERP, con el monto estimado que cubriría el KIT 4.0 en tu caso.",
  },
  {
    n: "03",
    title: "Solicitud vía TAD",
    time: "Trámite",
    desc: "Te acompañamos en la presentación ante el organismo por Trámites a Distancia (TAD) y armamos la documentación.",
  },
  {
    n: "04",
    title: "Implementación Griba",
    time: "Puesta en marcha",
    desc: "Configuramos y ponemos en marcha tu CRM y ERP. Migración de datos, integraciones y capacitación del equipo incluidas.",
  },
];

export function ProcessKit40() {
  return (
    <SectionShell
      id="proceso"
      dark
      n="02"
      eyebrow="Cómo lo hacemos juntos"
      title={
        <>
          Vos decidís.{" "}
          <span className="text-cyan-400">Del trámite nos ocupamos nosotros.</span>
        </>
      }
      intro="Cuatro pasos. Te guiamos en la presentación por TAD y dejamos tu CRM y ERP funcionando. El papeleo no es tu problema."
    >
      {/* Timeline VERTICAL */}
      <div className="relative pl-10 sm:pl-14">
        {/* Línea vertical */}
        <div className="absolute left-[18px] sm:left-[26px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-500/60 via-white/15 to-transparent" />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Nodo */}
              <div className="absolute -left-10 sm:-left-14 top-0 h-9 w-9 sm:h-[52px] sm:w-[52px] rounded-2xl bg-cyan-500 text-ink-900 flex items-center justify-center font-display text-sm sm:text-lg shadow-lg shadow-cyan-500/20">
                {s.n}
              </div>
              <div className="rounded-2xl bg-ink-900 border border-white/10 p-6 sm:p-7 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-white leading-snug">{s.title}</h3>
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-cyan-300/80">
                    {s.time}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
