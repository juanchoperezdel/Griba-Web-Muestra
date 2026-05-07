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

export default function App() {
  return (
    <Layout>
      <Hero />
      <BrandLogos />

      <ClaimStrip
        lineOne="Si tu operación depende de Excel,"
        lineTwo="no tenés control. Tenés suerte."
        variant="dark"
      />

      <Reframe />
      <Pains />
      <PlanAhorro />

      <div id="solucion">
        <Features />
      </div>

      <Comparison />

      <ClaimStrip
        lineOne="Pasá de operar a ciegas"
        lineTwo="a controlar toda la concesionaria en tiempo real."
        variant="light"
      />

      <ROICalculator />
      <TechSection />
      <Testimonials />
      <Process />
      <CalendarSection />
      <FAQ />
    </Layout>
  );
}
