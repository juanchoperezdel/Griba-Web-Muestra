// Datos del calendario (LeadConnector / GoHighLevel), en un solo lugar.
//
// Antes vivían hardcodeados adentro de CalendarSection.tsx. Se extraen porque
// V7 los necesita en tres lados: el iframe, el link de fallback (cuando el
// iframe no carga en el navegador in-app de Instagram) y el bloque de rescate
// de index.html que aparece si el bundle nunca ejecuta.

export const BOOKING_URL =
  'https://api.leadconnectorhq.com/widget/booking/ZZBJGS0BBT56DEyRM5t5';

export const BOOKING_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

// Orígenes válidos para el postMessage de confirmación de reserva.
// Se filtra por acá antes de creer que alguien agendó.
export const BOOKING_ORIGINS = [
  'https://api.leadconnectorhq.com',
  'https://link.msgsndr.com',
];
