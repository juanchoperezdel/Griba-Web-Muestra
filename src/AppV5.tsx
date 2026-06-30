import { LayoutV5 } from './components/LayoutV5';
import { HeroV5 } from './components/HeroV5';
import { PainsV5 } from './components/v5/PainsV5';
import { FeaturesV5 } from './components/v5/FeaturesV5';
import { PlanAhorroV5 } from './components/v5/PlanAhorroV5';
import { TestimonialsV5 } from './components/v5/TestimonialsV5';
import { FAQV5 } from './components/v5/FAQV5';
import { ROICalculatorV4 } from './components/v4/ROICalculatorV4';
import { CTABand } from './components/CTABand';
import { CalendarSection } from './components/CalendarSection';

// V5: landing magra, visceral y enfocada en agendar. Totalmente AISLADA de V4:
// usa sus propios componentes (v5/) para todo lo que difiere; sólo reusa, sin
// modificar, los componentes compartidos que no cambia (ROICalculatorV4,
// CTABand, CalendarSection). Un solo camino de conversión: el calendario
// (#agendar). WhatsApp queda discreto en el footer (LayoutV5, sin FAB).
//
// Orden pensado con la data de Clarity: dolor → tu número (calculadora alta) →
// CTA → cómo lo resuelve (#solucion) → diferencial → prueba → agendar.
export default function AppV5() {
  return (
    <LayoutV5>
      <HeroV5 />

      <PainsV5 />

      {/* La calculadora va alta, justo después de nombrar las fugas: del dolor
          abstracto al número concreto de TU operación. Es el activo más fuerte
          y enterrado abajo casi nadie lo veía. */}
      <ROICalculatorV4 />
      <CTABand
        title="Ese número se repite cada mes que pasa. Frená la fuga ahora."
        variant="dark"
      />

      {/* Beat de producto: el frío quiere ver cómo funciona antes de agendar.
          Destino del CTA secundario "Ver cómo funciona" del hero. */}
      <FeaturesV5 />

      <PlanAhorroV5 />

      <TestimonialsV5 />

      <CalendarSection version="v2" />

      <FAQV5 />
    </LayoutV5>
  );
}
