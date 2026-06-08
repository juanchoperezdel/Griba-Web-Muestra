import { motion } from "motion/react";
import { FileSpreadsheet, EyeOff, Users, Banknote } from "lucide-react";
import { SectionShell } from "./SectionShell";

const problems = [
  {
    icon: <Banknote className="h-5 w-5" />,
    title: "El costo frena la decisión",
    desc: "Modernizar la gestión cuesta, y muchas PyMEs lo postergan año tras año. El KIT 4.0 saca esa barrera del medio.",
  },
  {
    icon: <FileSpreadsheet className="h-5 w-5" />,
    title: "La operación vive en Excel",
    desc: "Ventas, stock y producción en planillas sueltas y WhatsApp. Sin trazabilidad, sin un solo lugar donde mirar.",
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "Cero visibilidad real",
    desc: "El dueño no ve el pipeline ni los números en vivo: hay que preguntar uno por uno para saber cómo viene el mes.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Todo depende de las personas",
    desc: "Cada quien gestiona a su manera. Si se va alguien, se va la información. La empresa depende de su memoria.",
  },
];

export function ProblemKit40() {
  return (
    <SectionShell
      n="01"
      eyebrow="El costo de no cambiar"
      title={
        <>
          Seguir a mano{" "}
          <span className="text-cyan-400">te cuesta plata todos los meses.</span>
        </>
      }
      intro="No es por falta de ganas: modernizar la gestión cuesta. Por eso existe el KIT 4.0 — para que el precio deje de ser la excusa para no hacerlo."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl bg-ink-800 border border-white/10 p-7 group hover:border-cyan-500/30 hover:-translate-y-1 transition-all"
          >
            <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
              {p.icon}
            </div>
            <h3 className="text-base font-bold text-white mb-2 leading-snug">{p.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
