import { useEffect } from "react";
import { LayoutKit40 } from "./components/kit40/LayoutKit40";
import { HeroKit40 } from "./components/kit40/HeroKit40";
import { CalculatorKit40 } from "./components/kit40/CalculatorKit40";
import { ProblemKit40 } from "./components/kit40/ProblemKit40";
import { ProcessKit40 } from "./components/kit40/ProcessKit40";
import { RequisitosKit40 } from "./components/kit40/RequisitosKit40";
import { IncluyeKit40 } from "./components/kit40/IncluyeKit40";
import { ComparisonKit40 } from "./components/kit40/ComparisonKit40";
import { FormKit40 } from "./components/kit40/FormKit40";
import { FAQKit40 } from "./components/kit40/FAQKit40";

export default function AppKit40() {
  useEffect(() => {
    document.title = "Programa KIT 4.0 — Digitalizá tu gestión con hasta el 50% cubierto por el Estado | Griba";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Griba es proveedor habilitado del Programa KIT 4.0: digitalizá la gestión de tu empresa con hasta el 50% del costo cubierto por el Estado (tope ARS 20.000.000). Cupo limitado por orden de presentación. Diagnóstico gratuito.",
      );
  }, []);

  return (
    <LayoutKit40>
      <HeroKit40 />
      <CalculatorKit40 />
      <ProblemKit40 />
      <ProcessKit40 />
      <RequisitosKit40 />
      <IncluyeKit40 />
      <ComparisonKit40 />
      <FormKit40 />
      <FAQKit40 />
    </LayoutKit40>
  );
}
