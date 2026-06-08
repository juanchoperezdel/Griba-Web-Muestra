import { motion } from "motion/react";
import {
  LayoutDashboard,
  Boxes,
  GitMerge,
  LineChart,
  GraduationCap,
  Headset,
} from "lucide-react";

const items = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "CRM Griba",
    desc: "Pipeline de ventas, seguimiento de oportunidades, historial de cada cliente y gestión de contactos en un solo lugar.",
    span: "lg:col-span-2 lg:row-span-2",
    feature: true,
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "ERP de gestión",
    desc: "Stock, compras, facturación y administración integrados. Una sola fuente de verdad.",
    span: "lg:col-span-2",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Dashboard en vivo",
    desc: "El dueño ve avance, números y actividad del equipo en tiempo real, sin preguntar a nadie.",
    span: "",
  },
  {
    icon: <GitMerge className="h-5 w-5" />,
    title: "Migración e integraciones",
    desc: "Importamos tu data y conectamos lo que ya usás, sin que pierdas nada.",
    span: "",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Capacitación incluida",
    desc: "Entrenamos a tu equipo. La adopción empieza desde el primer día.",
    span: "lg:col-span-2",
  },
  {
    icon: <Headset className="h-5 w-5" />,
    title: "Soporte humano local",
    desc: "Consultores propios en Argentina durante el onboarding y después. No chatbots, no tercerizado.",
    span: "lg:col-span-2",
  },
];

export function IncluyeKit40() {
  return (
    <section className="bg-ink-800 py-24 sm:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 -left-[10%] w-[45%] h-[55%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header alineado a la izquierda con numeral */}
        <div className="flex items-end gap-6 mb-12">
          <span
            className="font-display text-[88px] sm:text-[110px] leading-[0.8] text-transparent select-none shrink-0"
            style={{ WebkitTextStroke: "1.5px rgba(34,211,238,0.35)" }}
          >
            04
          </span>
          <div className="pb-3">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
              Lo que te llevás
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05]">
              No es solo software. Es tu operación,{" "}
              <span className="text-cyan-400">ordenada.</span>
            </h2>
          </div>
        </div>

        {/* Bento desparejo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`${it.span} group rounded-3xl border p-7 sm:p-8 flex flex-col transition-all hover:-translate-y-1 ${
                it.feature
                  ? "bg-gradient-to-br from-cyan-500/10 to-brand-600/10 border-cyan-500/30 hover:border-cyan-500/50 justify-end"
                  : "bg-ink-900 border-white/10 hover:border-cyan-500/30"
              }`}
            >
              <div
                className={`h-11 w-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                  it.feature
                    ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-200"
                    : "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                } ${it.feature ? "mt-auto" : ""}`}
              >
                {it.icon}
              </div>
              <h3
                className={`font-bold text-white mb-2 leading-snug ${
                  it.feature ? "text-2xl" : "text-lg"
                }`}
              >
                {it.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 p-6 sm:p-7 flex items-start gap-4">
          <div className="h-2 w-2 rounded-full bg-cyan-400 mt-2 shrink-0 animate-pulse" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Cómo se acredita el beneficio:</strong> el
            subsidio se acredita como crédito tributario en la cuenta ARCA de Griba como
            proveedor habilitado, y se descuenta del costo final de implementación que
            paga tu empresa. No es una transferencia directa a tu cuenta.
          </p>
        </div>
      </div>
    </section>
  );
}
