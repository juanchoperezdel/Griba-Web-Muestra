import { LayoutV3 } from './components/LayoutV3';
import { HeroV3 } from './components/HeroV3';
import { BrandLogos } from './components/BrandLogos';
import { ClaimStrip } from './components/ClaimStrip';
import { Reframe } from './components/Reframe';
import { Pains } from './components/Pains';
import { CTABand } from './components/CTABand';
import { SectionCTA } from './components/SectionCTA';
import { PlanAhorro } from './components/PlanAhorro';
import { HowGribaSolves } from './components/HowGribaSolves';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { ROICalculator } from './components/ROICalculator';
import { TechSection } from './components/TechSection';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { CalendarSection } from './components/CalendarSection';

export default function AppV3() {
  return (
    <LayoutV3>
      <HeroV3 />
      <BrandLogos />

      <ClaimStrip
        lineOne="Si tu operación depende de Excel,"
        lineTwo="no tenés control. Tenés suerte."
        variant="dark"
      />

      <Reframe version="v3" />
      <SectionCTA
        text="¿Te suena? Te armamos el plano exacto de lo que hoy no estás viendo."
        cta="Agendar diagnóstico"
      />

      <Pains version="v3" />
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

      <ROICalculator version="v2" />
      <SectionCTA
        text="Ese número se puede recuperar. Te explicamos cómo, sin compromiso."
        cta="Auditoría gratuita"
      />

      <TechSection />
      <SectionCTA
        text="¿Cómo encaja Griba en tu stack actual? Hablalo con un consultor."
        cta="Hablar con el equipo"
      />

      <Testimonials version="v2" />
      <SectionCTA
        text="Tres roles distintos, el mismo resultado. Sumate."
        cta="Pedir mi caso"
      />

      <Process />
      <SectionCTA
        text="Listo para arrancar. Tomamos solo 4 implementaciones nuevas por mes."
        cta="Reservar slot"
      />

      <CalendarSection version="v2" />

      <FAQ />
      <SectionCTA
        text="¿Quedaron preguntas? Mejor charlamos directo y las despejamos todas."
        cta="Agendar llamada"
      />
    </LayoutV3>
  );
}
