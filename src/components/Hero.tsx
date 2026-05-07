import { motion } from "motion/react";
import { Shapes } from "lucide-react";

export function Hero() {
  const scrollToCalendar = () => {
    document.getElementById("calendario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#fafbfc] pt-[50px] pb-20 lg:pb-32 flex flex-col items-center text-center">
      {/* Soft Mesh Background like SkillFlow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-100/50 blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-100/40 blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-50/50 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]">
            Control total de tu <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-500">operativa concesionaria.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            El único software que unifica Ventas Tradicionales y Planes de Ahorro. Dejá de usar Excels desconectados y blindá tus comisiones en una sola plataforma robusta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              onClick={scrollToCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Agendar Diagnóstico Gratuito
            </button>
            <button 
              onClick={() => document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all focus:ring-4 focus:ring-slate-100 shadow-sm"
            >
              Conocer la Plataforma
            </button>
          </div>

          {/* Social Proof Text */}
          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-slate-500 font-medium">
            <div className="flex -space-x-3">
              {[10, 12, 15, 20].map((i, idx) => (
                <div key={idx} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?img=${i}`} alt="user avatar" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start translate-y-0.5 text-left">
              <div className="flex text-amber-400 text-sm tracking-tighter">★★★★★</div>
              <span className="text-slate-600"><strong className="text-slate-900">100+ gerentes</strong> ya migraron desde Excel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
