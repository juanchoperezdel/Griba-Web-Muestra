import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { ThankYou } from "./components/ThankYou";

export default function AppThankYou() {
  useEffect(() => {
    // === Tracking de conversión ===
    // Esta es la página donde se confirma que el lead reservó la demo.
    // El equipo de tracking puede meter acá los disparos de conversión:
    //
    // Meta Pixel:
    //   if (typeof window.fbq === "function") {
    //     window.fbq("track", "Schedule");
    //   }
    //
    // Google Ads conversion:
    //   if (typeof window.gtag === "function") {
    //     window.gtag("event", "conversion", {
    //       send_to: "AW-XXXXXXXX/YYYYYYYY",
    //     });
    //   }
    //
    // GA4 event:
    //   if (typeof window.gtag === "function") {
    //     window.gtag("event", "demo_scheduled");
    //   }
    //
    // Una vez que estén los IDs reales (Meta Pixel ID, Google Ads conversion ID),
    // reemplazar este comentario por las llamadas reales.

    document.title = "Griba — Tu reunión está confirmada";
  }, []);

  return (
    <Layout>
      <ThankYou />
    </Layout>
  );
}
