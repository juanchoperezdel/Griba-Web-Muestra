import { motion } from "motion/react";

// Pains de V6: los 4 dolores REALES que el cliente reportó que prendieron a dos
// prospectos (mensaje 2026-07). Mapeo 1:1:
//  01 base de posventa muerta · 02 no saben hacer el masivo ·
//  03 WhatsApp oficial roto · 04 mensajes sin respuesta / sin seguimiento.
// Mismo esqueleto visual que PainsV5 (número cyan + viñetas), fondo negro.
export function PainsV6() {
  const pains = [
    {
      number: "01",
      title: "La base que ya te compró está muerta.",
      bullets: [
        "Entregás el auto y ahí se corta el contacto",
        "Clientes que no volvieron al service ni una vez",
        "No sabés a quién le toca renovar, service o recompra",
        "Cada uno es un taller, un repuesto y una venta que se enfría",
      ],
    },
    {
      number: "02",
      title: "No tenés cómo hacer el masivo.",
      bullets: [
        "Querés avisarle a cientos de clientes y lo hacés uno por uno",
        "Sin segmentar por modelo, fecha de entrega o último service",
        "Se lo cargás a alguien que ya no da abasto",
        "La campaña que sí serviría nunca sale",
      ],
    },
    {
      number: "03",
      title: "El WhatsApp oficial no te funciona.",
      bullets: [
        "El número se satura, se bloquea o directamente no conecta",
        "Mandás desde un celular personal que no escala",
        "Sin la API oficial no hay envíos masivos serios",
        "Y sin eso, no hay campaña que aguante el volumen",
      ],
    },
    {
      number: "04",
      title: "Mandás mensajes y no sabés qué pasó.",
      bullets: [
        "No ves quién abrió, quién respondió ni quién ignoró",
        "Los que sí contestan se pierden sin seguimiento",
        "Cada mensaje sin respuesta es una venta que nadie persiguió",
        "Ningún asesor tiene la conversación completa del cliente",
      ],
    },
  ];

  return (
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 sm:mb-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
              Tu mejor lista de clientes <br className="hidden md:block" />
              ya la tenés.{" "}
              <span className="text-cyan-400">
                Y la tenés parada.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl">
              No hace falta salir a comprar leads fríos. La gente que ya te confió una
              compra es la más barata de reactivar, si tuvieras cómo llegarles.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/10">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-ink-800 p-6 sm:p-10 group hover:bg-ink-700 transition-colors"
            >
              <div className="flex items-baseline gap-4 sm:gap-5 mb-5 sm:mb-6">
                <span className="font-display text-4xl sm:text-6xl text-cyan-400/40 leading-none shrink-0">
                  {pain.number}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-white leading-snug">
                  {pain.title}
                </h3>
              </div>
              <ul className="space-y-2.5 ml-0 sm:ml-[84px]">
                {pain.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="h-1 w-3 rounded-full bg-slate-600 shrink-0 mt-3"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
