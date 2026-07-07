import { LayoutV5 } from './components/LayoutV5';
import { HeroV6 } from './components/HeroV6';
import { PainsV6 } from './components/v6/PainsV6';
import { SolucionV6 } from './components/v6/SolucionV6';
import { FAQV6 } from './components/v6/FAQV6';
import { TestimonialsV5 } from './components/v5/TestimonialsV5';
import { CTABand } from './components/CTABand';
import { CalendarSection } from './components/CalendarSection';

// V6: landing de ÁNGULO (message match con la campaña de reactivación).
// Nace de evidencia de campo del cliente (mensaje 2026-07): lo que prendió a
// dos prospectos reales fue reactivar la base de posventa que compró y no
// volvió, hacer campañas masivas, tener el WhatsApp oficial andando y saber
// quién respondió. NO es plan de ahorro (ese es el wedge de V5) — es un wedge
// distinto, más universal para el gerente frío.
//
// Reusa el chasis de V5 (LayoutV5 sin FAB, TestimonialsV5, CalendarSection,
// CTABand) y aísla lo específico del ángulo en componentes v6/ + HeroV6.
// V5 queda intacta como landing amplia / control. Un solo camino de
// conversión: el calendario (#agendar).
//
// Orden: dolor (base muerta) → CTA → mecanismo (#solucion) → prueba → agendar → FAQ.
export default function AppV6() {
  return (
    <LayoutV5>
      <HeroV6 />

      <PainsV6 />

      <CTABand
        title="Esa lista ya la tenés cargada. Solo falta salir a buscarla."
        variant="dark"
      />

      {/* Mecanismo: cómo Griba reactiva la base. Destino del CTA secundario
          "Ver cómo funciona" del hero (#solucion). */}
      <SolucionV6 />

      <TestimonialsV5 />

      <CalendarSection version="v2" />

      <FAQV6 />
    </LayoutV5>
  );
}
