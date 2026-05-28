import { ArrowRight } from "lucide-react";

type Tone = "light" | "dark";

export function SectionCTA({
  text,
  cta,
  tone = "light",
}: {
  text: string;
  cta: string;
  tone?: Tone;
}) {
  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = tone === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-ink-900 border-t border-white/5" : "bg-[#fafbfc] border-t border-slate-200/70"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
        <p className={`text-sm sm:text-base ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
        <button
          onClick={scrollToCalendar}
          className={`group shrink-0 inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            isDark
              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-ink-900"
              : "bg-white text-slate-900 border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          }`}
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
