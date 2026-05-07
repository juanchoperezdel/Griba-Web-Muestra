import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Pains } from './components/Pains';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { ROICalculator } from './components/ROICalculator';
import { CalendarSection } from './components/CalendarSection';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <Layout>
      <Hero />
      <div className="bg-white py-8 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale filter">
          {/* Logo Placeholders for Social Proof */}
          <div className="text-slate-900 font-bold text-xl tracking-tight">VOLKSWAGEN</div>
          <div className="text-slate-900 font-bold text-xl tracking-tight">RENAULT</div>
          <div className="text-slate-900 font-bold text-xl tracking-tight">STELLANTIS</div>
          <div className="text-slate-900 font-bold text-xl tracking-tight">FIAT</div>
          <div className="text-slate-900 font-bold text-xl tracking-tight">TOYOTA</div>
        </div>
      </div>
      <Pains />
      <div id="solucion">
        <Features />
      </div>
      <Testimonials />
      <ROICalculator />
      <Comparison />
      <CalendarSection />
    </Layout>
  );
}
