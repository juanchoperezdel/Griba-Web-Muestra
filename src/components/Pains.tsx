import { motion } from "motion/react";
import { Unplug, Target, ShieldAlert } from "lucide-react";

export function Pains() {
  const pains = [
    {
      icon: <Target className="h-6 w-6 text-brand-600" />,
      title: "Volando a ciegas",
      description: "Hoy llegás al día 15 sin saber si vas a cumplir el volumen de fábrica, porque tu información está dividida."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-brand-600" />,
      title: "Riesgos invisibles",
      description: "Un lead mal contactado o un suscriptor en mora cuestan dinero directo. Tus herramientas actuales no alertan a tiempo."
    },
    {
      icon: <Unplug className="h-6 w-6 text-brand-600" />,
      title: "Sistemas desconectados",
      description: "Tus asesores usan un CRM, y tu administración usa Excels interminables. El cruce manual provoca errores."
    }
  ];

  return (
    <section className="bg-[#fafbfc] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            El caos operativo te está <br className="hidden md:block"/>
            costando plata.
          </h2>
          <p className="text-lg text-slate-500">
            La fragmentación de sistemas significa que tus gerentes invierten tiempo apagando incendios en lugar de escalar la rentabilidad de las franquicias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((pain, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-10 rounded-[32px] flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
            >
              <div className="h-16 w-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 text-brand-600">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{pain.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
