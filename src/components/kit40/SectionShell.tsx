import { ReactNode } from "react";
import { motion } from "motion/react";

/**
 * Layout editorial asimétrico (ADN V1/V2 de Griba):
 * columna izquierda angosta con numeral grande + título, contenido offset a la derecha.
 */
export function SectionShell({
  id,
  n,
  eyebrow,
  title,
  intro,
  children,
  dark = false,
}: {
  id?: string;
  n: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section id={id} className={dark ? "bg-ink-800 py-24 sm:py-28" : "bg-ink-900 py-24 sm:py-28"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Header izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4"
          >
            <div className="font-display text-[88px] sm:text-[110px] leading-[0.8] text-transparent mb-5 select-none"
              style={{ WebkitTextStroke: "1.5px rgba(34,211,238,0.35)" }}
            >
              {n}
            </div>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-[1.08] mb-5">
              {title}
            </h2>
            {intro && (
              <p className="text-base text-slate-400 leading-relaxed max-w-sm">{intro}</p>
            )}
          </motion.div>

          {/* Contenido derecho */}
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
