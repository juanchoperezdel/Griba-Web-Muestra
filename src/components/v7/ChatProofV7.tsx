import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

// ChatProof — la pieza nueva de V7, y la de mayor valor.
//
// El ad que mejor rinde de toda la cuenta (12 leads a $13.400) es un mockup de
// chat de WhatsApp: "Hola Marta, hace rato que tu Sandero no pasa por el
// taller". La persona toca ESE creativo y hasta ahora aterrizaba en una página
// que no se le parecía en nada. El hilo se cortaba ahí.
//
// Acá se reproduce el mismo chat, con las mismas palabras, arriba de todo. Es
// la continuidad más fuerte posible: la landing confirma en un segundo que es
// la continuación de lo que acaba de ver.
//
// Se dibuja con HTML y CSS, no con una imagen. Una imagen es un request más que
// puede fallar (y en el navegador in-app de Instagram falla seguido). Un chat
// que no carga sería exactamente el mensaje contrario al que queremos dar.

type Message = {
  from: "griba" | "cliente";
  text: string;
  time: string;
};

const CONVERSATION: Message[] = [
  {
    from: "griba",
    text: "Hola Marta 👋 Hace rato que tu Sandero no pasa por el taller. ¿Te agendo una revisión?",
    time: "9:41",
  },
  { from: "cliente", text: "Ah, sí! Ni me acordaba. Buenísimo 🙌", time: "9:47" },
  { from: "griba", text: "Genial, te reservo el martes 🙂", time: "9:48" },
];

export function ChatProofV7() {
  return (
    <section className="bg-ink-800 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="mx-auto w-full max-w-sm rounded-[28px] bg-[#0b141a] border border-white/10 shadow-2xl overflow-hidden">
              {/* Cabecera del chat */}
              <div className="flex items-center gap-3 bg-[#1f2c33] px-4 py-3">
                <div className="h-9 w-9 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-semibold text-sm">
                  M
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold leading-tight">
                    Marta · Sandero
                  </p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    en línea
                  </p>
                </div>
              </div>

              {/* Mensajes */}
              <div className="p-4 space-y-3">
                {CONVERSATION.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.from === "griba" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.from === "griba"
                          ? "bg-[#005c4b] text-white rounded-br-sm"
                          : "bg-[#202c33] text-slate-100 rounded-bl-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-[10px] text-white/50 text-right mt-1">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 pb-4">
                <p className="text-[11px] text-slate-500 text-center">
                  Enviado desde el número oficial de la concesionaria
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.05] mb-6">
                Al que se fue, lo traés de vuelta.{" "}
                <span className="text-cyan-400">Sin llamar uno por uno.</span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                No es un robot escribiendo cualquier cosa. Griba sabe qué compró
                cada cliente y cuándo le toca volver, le escribe en el momento
                justo y te avisa apenas contesta, para que un asesor siga la
                conversación.
              </p>

              <CTAButton
                ctaId="chatproof_cta"
                ctaLocation="chat_proof"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-ink-900 hover:bg-cyan-400 transition-all focus:ring-4 focus:ring-cyan-500/30 shadow-md"
              >
                Quiero esto en mi concesionaria
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
