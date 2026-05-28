import { motion } from "motion/react";
import {
  Database,
  Wallet,
  Megaphone,
  MessageSquare,
  Users,
  Activity,
} from "lucide-react";

export function HowGribaSolves() {
  const items = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Datos de fábrica centralizados",
      desc: "Suscripciones, agrupados, ofertas, ganadores, cartera, mora, stock y pedidos de unidad. Todo lo que hoy bajás a mano de la intranet de fábrica, en una sola pantalla.",
    },
    {
      icon: <Wallet className="h-5 w-5" />,
      title: "Gestión de Plan de Ahorro",
      desc: "Todas las etapas integradas: scoring crediticio automático, seguimiento de mora, actos de adjudicación y trámites digitales. El módulo más complejo, sin Excel.",
    },
    {
      icon: <Megaphone className="h-5 w-5" />,
      title: "Campañas masivas multicanal",
      desc: "Email + WhatsApp Cloud API para actos de adjudicación, mora, licitaciones, turnos de taller y notificaciones a clientes. Lo que hoy hacés uno por uno, en bloque.",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Omnicanal en un solo lugar",
      desc: "WhatsApp, web, email, Facebook, Instagram y call center centralizados. Tus asesores dejan de saltar entre cinco apps y los clientes dejan de quedar sin respuesta.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "CRM 360°",
      desc: "Postventa, oportunidades y clientes en una sola vista. Cada contacto con su historial completo: qué compró, qué consultó, cuándo viene la próxima cuota.",
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Indicadores en vivo",
      desc: "Visibilidad real de conversaciones, asesores y operadores. Sabés quién está atendiendo, cuánto tarda y qué se está cayendo — antes de que sea un problema.",
    },
  ];

  return (
    <section className="bg-ink-900 py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[50%] rounded-full bg-brand-600/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-5">
            Cómo Griba lo resuelve
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            Una sola plataforma para ordenar{" "}
            <span className="serif-display italic font-normal text-cyan-400">
              toda la operación
            </span>{" "}
            de tu concesionaria.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Datos de fábrica, ventas, plan de ahorro, posventa y atención al cliente — integrados de punta a punta.
            Sin Excel, sin sistemas que no se hablan, sin reportes que llegan tarde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-[32px] overflow-hidden border border-white/10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="bg-ink-800 p-8 group hover:bg-ink-700 transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-300 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10 max-w-2xl mx-auto">
          Conectamos concesionarios, fábricas y clientes en todo el país — con procesos
          estandarizados y centralizados.
        </p>
      </div>
    </section>
  );
}
