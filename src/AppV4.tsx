import { LayoutV3 } from './components/LayoutV3';
import { HeroV3 } from './components/HeroV3';
import { BrandLogos } from './components/BrandLogos';
import { ClaimStrip } from './components/ClaimStrip';
import { ReframeV4 } from './components/v4/ReframeV4';
import { PainsV4 } from './components/v4/PainsV4';
import { CTABand } from './components/CTABand';
import { SectionCTA } from './components/SectionCTA';
import { PlanAhorro } from './components/PlanAhorro';
import { HowGribaSolves } from './components/HowGribaSolves';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { ROICalculatorV4 } from './components/v4/ROICalculatorV4';
import { TechSection } from './components/TechSection';
import { TestimonialsV4 } from './components/v4/TestimonialsV4';
import { Process } from './components/Process';
import { FAQV4 } from './components/v4/FAQV4';
import { CalendarSection } from './components/CalendarSection';

export default function AppV4() {
  return (
    <LayoutV3>
      <HeroV3 />
      <BrandLogos />

      {/* Prueba social arriba de todo: la web es larga y el scroll promedio es
          ~31%, así que los testimonios van apenas pasado el hero + logos, no
          enterrados al final donde casi nadie llega. */}
      <TestimonialsV4 />
      <SectionCTA
        text="Tres roles distintos, el mismo resultado. Sumate."
        cta="Pedir mi caso"
        tone="dark"
      />

      <ClaimStrip
        lineOne="Si tu operación depende de Excel,"
        lineTwo="no tenés control. Tenés suerte."
        variant="dark"
      />

      <ReframeV4 />
      <SectionCTA
        text="¿Te suena? Te armamos el plano exacto de lo que hoy no estás viendo."
        cta="Agendar diagnóstico"
        tone="dark"
      />

      <PainsV4 />
      <CTABand
        title="Querés saber cuál de estos cuatro te está pegando más fuerte."
        variant="light"
      />

      <PlanAhorro version="v3" />
      <SectionCTA
        text="Si plan de ahorro es donde más se rompe, empecemos por ahí."
        cta="Mostrame cómo"
      />

      <HowGribaSolves />
      <SectionCTA
        text="Quiero ver esto funcionando con datos de mi concesionaria."
        cta="Pedir demo"
        tone="dark"
      />

      <div id="solucion">
        <Features version="v2" />
      </div>
      <CTABand
        title="Ordená la operación de tu concesionaria en 30 días."
        cta="Agendar demo"
        variant="dark"
      />

      <Comparison />
      <SectionCTA
        text="Decidí con datos, no con promesas. Te mostramos cómo cambia el día 30."
        cta="Reservar llamada"
      />

      <ClaimStrip
        lineOne="Operar a ciegas tiene un costo."
        lineTwo="Y lo estás pagando vos."
        variant="light"
      />

      <ROICalculatorV4 />
      <SectionCTA
        text="Ese número se puede recuperar. Te explicamos cómo, sin compromiso."
        cta="Auditoría gratuita"
        tone="dark"
      />

      <TechSection />
      <SectionCTA
        text="¿Cómo encaja Griba en tu stack actual? Hablalo con un consultor."
        cta="Hablar con el equipo"
      />

      <Process />
      <SectionCTA
        text="Listo para arrancar. Tomamos solo 4 implementaciones nuevas por mes."
        cta="Reservar slot"
      />

      <CalendarSection version="v2" />

      <FAQV4 />
      <SectionCTA
        text="¿Quedaron preguntas? Mejor charlamos directo y las despejamos todas."
        cta="Agendar llamada"
        tone="dark"
      />
    </LayoutV3>
  );
}
