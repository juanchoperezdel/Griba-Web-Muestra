// Modal de calificación previo a WhatsApp — compartido por la landing de CRM
// (LayoutV3 → /v3 y /v4) y la de KIT 4.0 (LayoutKit40 → /kit40).
//
// Por qué existe: el cliente recibía mensajes de "interesados" que después no
// contestaban. Una micro-pregunta antes de abrir el chat (a) saca al curioso,
// (b) crea micro-compromiso, y sobre todo (c) le pasa contexto al cliente para
// que su PRIMER mensaje sea personalizado — que es lo que corta el ghosting.
//
// Cada opción es un <a href="wa.me/..."> real (no window.open): es lo más
// robusto en los navegadores in-app de Instagram/Facebook, que son ~51% del
// tráfico. El mensaje viaja en el ?text= ya codificado.
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";

// Mismo número detrás de los wa.link actuales (+54 9 381 463-6568, Tucumán).
export const WHATSAPP_NUMBER = "5493814636568";

export type QualifierOption = {
  label: string;
  hint?: string;
  message: string;
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  options: QualifierOption[];
  tone?: "light" | "dark";
};

export function WhatsAppQualifierModal({
  open,
  onClose,
  title,
  subtitle,
  options,
  tone = "light",
}: Props) {
  // Cerrar con Escape + bloquear el scroll del body mientras está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const dark = tone === "dark";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className={[
              "relative w-full rounded-t-3xl p-6 shadow-2xl sm:max-w-md sm:rounded-3xl sm:p-7",
              dark
                ? "bg-ink-800 border border-white/10 text-white"
                : "bg-white text-slate-900",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className={[
                "absolute right-4 top-4 rounded-full p-1.5 transition-colors",
                dark
                  ? "text-slate-400 hover:bg-white/10 hover:text-white"
                  : "text-slate-400 hover:bg-slate-100 hover:text-slate-700",
              ].join(" ")}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]/15">
              <svg
                viewBox="0 0 32 32"
                className="h-6 w-6 fill-[#25D366]"
                aria-hidden="true"
              >
                <path d="M16.04 4C9.95 4 5 8.95 5 15.04c0 2.05.55 4.05 1.6 5.81L5 28l7.34-1.92a11 11 0 0 0 3.7.64h.01c6.08 0 11.03-4.95 11.03-11.04C27.08 8.95 22.13 4 16.04 4zm0 20.16h-.01a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-3.86 1.01 1.03-3.76-.22-.39a9.06 9.06 0 0 1-1.39-4.84c0-5.03 4.1-9.12 9.13-9.12 2.44 0 4.73.95 6.45 2.68a9.06 9.06 0 0 1 2.67 6.45c0 5.03-4.1 9.12-9.13 9.12z" />
              </svg>
            </div>

            <h2 className="font-display pr-8 text-xl font-bold leading-tight sm:text-2xl">
              {title}
            </h2>
            {subtitle && (
              <p
                className={[
                  "mt-2 text-sm leading-relaxed",
                  dark ? "text-slate-400" : "text-slate-500",
                ].join(" ")}
              >
                {subtitle}
              </p>
            )}

            <div className="mt-5 flex flex-col gap-2.5">
              {options.map((opt) => (
                <a
                  key={opt.label}
                  href={buildWhatsAppUrl(opt.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className={[
                    "group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-all",
                    dark
                      ? "border-white/10 bg-white/[0.03] hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
                      : "border-slate-200 hover:border-[#25D366]/60 hover:bg-[#25D366]/5",
                  ].join(" ")}
                >
                  <span className="flex flex-col">
                    <span>{opt.label}</span>
                    {opt.hint && (
                      <span
                        className={[
                          "text-xs font-normal",
                          dark ? "text-slate-500" : "text-slate-400",
                        ].join(" ")}
                      >
                        {opt.hint}
                      </span>
                    )}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 text-[#25D366] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
