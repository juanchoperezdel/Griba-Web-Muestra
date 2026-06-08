import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { SectionShell } from "./SectionShell";

const rows = [
  { sin: "La operación vive en Excel y WhatsApp", con: "CRM y ERP integrados: una sola fuente de verdad" },
  { sin: "Hay que preguntar uno por uno cómo viene el mes", con: "Dashboard en tiempo real, sin depender de nadie" },
  { sin: "Cada quien gestiona a su manera", con: "Procesos estandarizados para todo el equipo" },
  { sin: "Si se va alguien, se va la información", con: "La información queda en el sistema, no en las personas" },
  { sin: "Pagás el 100% del costo de modernizarte", con: "Hasta el 50% cubierto por el KIT 4.0" },
];

export function ComparisonKit40() {
  return (
    <SectionShell
      n="05"
      eyebrow="Antes y después"
      title={
        <>
          Lo que cambia el día que{" "}
          <span className="text-cyan-400">prendés Griba.</span>
        </>
      }
      intro="La misma empresa, dos realidades. A la izquierda lo que dejás atrás; a la derecha, con el costo a la mitad."
    >
      {/* Filas enfrentadas, no dos paneles separados */}
      <div className="rounded-[28px] border border-white/10 overflow-hidden divide-y divide-white/10">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          >
            <div className="flex items-start gap-3 p-5 sm:p-6 bg-ink-800/60">
              <span className="mt-0.5 h-5 w-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <X className="h-3 w-3 text-slate-500" />
              </span>
              <span className="text-sm text-slate-400 leading-relaxed line-through decoration-slate-700">
                {r.sin}
              </span>
            </div>
            <div className="flex items-start gap-3 p-5 sm:p-6 bg-cyan-500/[0.05]">
              <span className="mt-0.5 h-5 w-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-cyan-300" />
              </span>
              <span className="text-sm text-white font-medium leading-relaxed">{r.con}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
