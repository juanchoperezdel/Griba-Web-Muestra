import { useState } from "react";
import { motion } from "motion/react";
import { WhatsAppQualifierModal, QualifierOption } from "../WhatsAppQualifierModal";

// Filtro suave: en vez de preguntar elegibilidad dura (PyME industrial sí/no),
// preguntamos por la situación actual. No excluye a nadie de entrada, pero el
// curioso sin operación real no tiene qué responder, y al cliente le llega
// contexto para abrir el chat con un gancho personalizado.
const OPTIONS: QualifierOption[] = [
  {
    label: "En Excel y planillas",
    message:
      "Hola! Vengo de la web del KIT 4.0. Hoy mi operación vive en Excel y planillas. ¿Cómo me puede ayudar el KIT 4.0?",
  },
  {
    label: "En WhatsApp y papel",
    message:
      "Hola! Vengo de la web del KIT 4.0. Hoy manejo casi todo por WhatsApp y papel. ¿Cómo me puede ayudar el KIT 4.0?",
  },
  {
    label: "Un sistema que se quedó corto",
    message:
      "Hola! Vengo de la web del KIT 4.0. Tengo un sistema que se me quedó corto. ¿Cómo me puede ayudar el KIT 4.0?",
  },
  {
    label: "Ya tengo algo, busco mejorar",
    message:
      "Hola! Vengo de la web del KIT 4.0. Ya tengo algo andando pero busco mejorar. ¿Cómo me puede ayudar el KIT 4.0?",
  },
];

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Escribinos por WhatsApp"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] flex items-center gap-3"
      >
        {/* Tooltip / etiqueta (aparece en hover en desktop) */}
        <span className="hidden sm:block max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white text-ink-900 text-sm font-semibold shadow-lg opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:px-4 group-hover:py-2.5">
          ¿Calificás? Escribinos
        </span>

        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 transition-colors group-hover:bg-[#20bd5a]">
          {/* Pulso */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
          <svg
            viewBox="0 0 32 32"
            className="relative h-7 w-7 fill-white"
            aria-hidden="true"
          >
            <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.115.553 4.182 1.605 6.006L4 29l8.166-1.57a11.94 11.94 0 0 0 3.838.627h.003C22.625 28.057 28 22.674 28 16.053 28 9.43 22.625 4.047 16.004 3zm0 21.91h-.002a9.9 9.9 0 0 1-3.86-.766l-.277-.11-4.846.93.92-4.73-.18-.29a9.86 9.86 0 0 1-1.51-5.04c0-5.46 4.444-9.903 9.91-9.903 2.646 0 5.134 1.03 7.004 2.902a9.84 9.84 0 0 1 2.902 7.005c0 5.46-4.443 9.903-9.905 9.903zm5.43-7.418c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.15-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.073c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
      </motion.button>

      <WhatsAppQualifierModal
        open={open}
        onClose={() => setOpen(false)}
        title="¿Dónde vive tu operación hoy?"
        subtitle="Contanos en una línea y lo vemos en el diagnóstico, sin compromiso."
        options={OPTIONS}
        tone="dark"
      />
    </>
  );
}
