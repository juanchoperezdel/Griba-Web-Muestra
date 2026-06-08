import { motion } from "motion/react";
import { Factory, BadgeCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";

const requisitos = [
  {
    icon: <Factory className="h-5 w-5" />,
    title: "Ser PyME industrial",
    desc: "La empresa debe estar categorizada como PyME y desarrollar actividad industrial en Argentina.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Certificado MiPyME vigente",
    desc: "Requisito obligatorio. Su tramitación lleva tiempo, por eso conviene iniciarlo cuanto antes.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Sin deuda fiscal ni previsional",
    desc: "Sin deuda exigible ante ARCA ni la Seguridad Social al momento de presentar la solicitud.",
  },
];

const scrollToForm = () =>
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });

export function RequisitosKit40() {
  return (
    <SectionShell
      id="requisitos"
      n="03"
      eyebrow="¿Calificás?"
      title={
        <>
          Tres condiciones te separan de{" "}
          <span className="text-cyan-400">la mitad del costo.</span>
        </>
      }
      intro="Si tu empresa las cumple, ya estás en condiciones de pedir el beneficio. Si tenés dudas con alguna, lo resolvemos en el diagnóstico."
    >
      {/* Lista editorial numerada (no cards parejas) */}
      <div className="divide-y divide-white/10">
        {requisitos.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex items-start gap-6 py-7 first:pt-0"
          >
            <span className="font-display text-2xl text-cyan-400/40 leading-none pt-1 w-8 shrink-0">
              0{i + 1}
            </span>
            <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-105 transition-transform">
              {r.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">{r.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-slate-300 text-sm">
          ¿No estás seguro si calificás? Te lo decimos en 30 minutos, sin compromiso.
        </p>
        <button
          onClick={scrollToForm}
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-cyan-400 transition-all hover:-translate-y-0.5"
        >
          Verificar elegibilidad
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </SectionShell>
  );
}
