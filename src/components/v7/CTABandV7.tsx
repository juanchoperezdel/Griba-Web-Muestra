import { CTAButton, type CTAId } from "./CTAButton";
import { Reveal } from "./Reveal";

// Fork de CTABand.tsx: motion → Reveal, y el CTA pasa por CTAButton para que
// cada banda sea distinguible en el reporte (antes las dos instancias eran
// indistinguibles entre sí y del resto de los botones de la página).
type Variant = "light" | "dark";

export function CTABandV7({
  title,
  cta = "Reactivar mi base",
  variant = "light",
  ctaId,
  ctaLocation,
}: {
  title: string;
  cta?: string;
  variant?: Variant;
  ctaId: CTAId;
  ctaLocation: string;
}) {
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

      <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <h3
          className={`font-display text-2xl sm:text-3xl leading-tight max-w-2xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h3>

        <CTAButton
          ctaId={ctaId}
          ctaLocation={ctaLocation}
          className={`shrink-0 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all shadow-md hover:-translate-y-0.5 ${
            isDark
              ? "bg-cyan-500 text-ink-900 hover:bg-cyan-400 hover:shadow-cyan-500/20 focus:ring-4 focus:ring-cyan-500/30"
              : "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl focus:ring-4 focus:ring-slate-200"
          }`}
        >
          {cta}
        </CTAButton>
      </Reveal>
    </section>
  );
}
