import { motion } from "motion/react";

type ClaimStripProps = {
  lineOne: string;
  lineTwo: string;
  variant?: "dark" | "light";
};

export function ClaimStrip({ lineOne, lineTwo, variant = "dark" }: ClaimStripProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "relative bg-slate-950 py-20 sm:py-24 overflow-hidden"
          : "relative bg-white py-20 sm:py-24 overflow-hidden border-y border-slate-100"
      }
    >
      {isDark && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={
            isDark
              ? "text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
              : "text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900"
          }
        >
          {lineOne}
          <br />
          <span
            className={
              isDark
                ? "serif-display italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-brand-300 via-cyan-300 to-brand-300"
                : "serif-display italic font-normal text-brand-600"
            }
          >
            {lineTwo}
          </span>
        </motion.h3>
      </div>
    </section>
  );
}
