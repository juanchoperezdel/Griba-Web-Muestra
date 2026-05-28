import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Variant = "light" | "dark";

export function CTABand({
  title,
  cta = "Agendar Diagnóstico Gratuito",
  variant = "light",
}: {
  title: string;
  cta?: string;
  variant?: Variant;
}) {
  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden py-14 sm:py-16 ${
        isDark ? "bg-ink-900" : "bg-[#fafbfc] border-y border-slate-200/80"
      }`}
    >
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[100px]"></div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <h3
          className={`font-display text-2xl sm:text-3xl leading-tight max-w-2xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>
        <button
          onClick={scrollToCalendar}
          className={`shrink-0 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all shadow-md hover:-translate-y-0.5 ${
            isDark
              ? "bg-cyan-500 text-ink-900 hover:bg-cyan-400 hover:shadow-cyan-500/20 focus:ring-4 focus:ring-cyan-500/30"
              : "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl focus:ring-4 focus:ring-slate-200"
          }`}
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  );
}
