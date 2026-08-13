import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { ThankYou } from "./components/ThankYou";
import { setLandingVersion, track } from "./lib/analytics";

export default function AppThankYou() {
  useEffect(() => {
    // === Conversión ===
    // Esta es la página a la que redirige el calendario cuando alguien
    // reserva: es EL evento de conversión de la cuenta.
    //
    // Durante meses esto fueron comentarios con placeholders (AW-XXXXXXXX),
    // esperando IDs que nunca llegaron. Meta optimizaba a un evento que no
    // recibía nunca, y por eso compraba el clic más barato en vez del que
    // agenda.
    //
    // Ahora se empuja un evento limpio al dataLayer y los tags de Meta y
    // Google Ads se cuelgan de acá desde GTM. No hace falta ningún ID en el
    // código: cuando lleguen, se configuran en GTM y esto no se toca.
    setLandingVersion("gracias");
    track("thank_you_view", { conversion_source: "calendar" });

    document.title = "Griba — Tu reunión está confirmada";
  }, []);

  return (
    <Layout>
      <ThankYou />
    </Layout>
  );
}
