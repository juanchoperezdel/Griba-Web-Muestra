import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
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

      {/* Logos bar — integraciones de fábrica */}
      <div className="bg-white py-10 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-14 gap-y-6">
            {[
              { name: "Volkswagen", domain: "volkswagen.com" },
              { name: "Renault", domain: "renault.com" },
              { name: "Stellantis", domain: "stellantis.com" },
              { name: "Fiat", domain: "fiat.com" },
              { name: "Toyota", domain: "toyota.com" },
              { name: "Nissan", domain: "nissan.com" },
              { name: "Chevrolet", domain: "chevrolet.com" },
              { name: "Ford", domain: "ford.com" },
            ].map((brand) => (
              <img
                key={brand.domain}
                src={`https://logo.clearbit.com/${brand.domain}?size=128`}
                alt={brand.name}
                title={brand.name}
                className="h-9 sm:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

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
