import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { BrandLogos } from './components/BrandLogos';
import { ClaimStrip } from './components/ClaimStrip';
import { Reframe } from './components/Reframe';
import { Pains } from './components/Pains';
import { PlanAhorro } from './components/PlanAhorro';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { ROICalculator } from './components/ROICalculator';
import { TechSection } from './components/TechSection';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { CalendarSection } from './components/CalendarSection';

export default function AppV2() {
  return (
    <Layout>
      <Hero />
      <BrandLogos />

      <ClaimStrip
        lineOne="Si tu operación depende de Excel,"
        lineTwo="no tenés control. Tenés suerte."
        variant="dark"
      />

      <Reframe version="v2" />
      <Pains version="v2" />
      <PlanAhorro version="v2" />

      <div id="solucion">
        <Features version="v2" />
      </div>

      <Comparison />

      <ClaimStrip
        lineOne="Operar a ciegas tiene un costo."
        lineTwo="Y lo estás pagando vos."
        variant="light"
      />

      <ROICalculator version="v2" />
      <TechSection />
      <Testimonials version="v2" />
      <Process />
      <CalendarSection version="v2" />
      <FAQ />
    </Layout>
  );
}
