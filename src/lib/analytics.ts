// Único punto de contacto con GTM (GTM-PNL8RM6S, cargado en index.html).
//
// Contexto: hasta ahora este repo tenía CERO dataLayer.push. GTM estaba
// cargado pero no recibía un solo evento, y el tracking de /gracias estaba
// comentado con placeholders (AW-XXXXXXXX/YYYYYYYY). Resultado: Meta optimizaba
// a un evento de conversión que casi nunca le llegaba.
//
// Decisión del owner: TODO se cablea vía GTM. Acá no se hardcodea ningún ID
// de Pixel ni de Google Ads — sólo se empujan eventos limpios al dataLayer y
// los tags se cuelgan del lado de GTM.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    __gribaAppReady?: boolean;
  }
}

export type GribaEvent =
  | 'cta_click'
  | 'nav_click'
  | 'whatsapp_click'
  | 'outbound_click'
  | 'calendar_section_view'
  | 'calendar_iframe_loaded'
  | 'calendar_iframe_timeout'
  | 'booking_fallback_click'
  | 'booking_submitted'
  | 'scroll_depth'
  | 'thank_you_view'
  | 'app_boot_failed';

let landingVersion = 'unknown';

export function setLandingVersion(version: string): void {
  landingVersion = version;
}

/**
 * De dónde viene la sesión. ~76% del tráfico entra por el navegador in-app de
 * Instagram/Facebook, que es donde se rompen el iframe del calendario y los
 * target="_blank". Sin este campo no se puede distinguir "la landing no
 * convence" de "la landing no se ve".
 */
function detectSurface(): 'instagram' | 'facebook' | 'webview' | 'browser' {
  if (typeof navigator === 'undefined') return 'browser';
  const ua = navigator.userAgent || '';
  if (/Instagram/i.test(ua)) return 'instagram';
  if (/FBAN|FBAV|FB_IAB/i.test(ua)) return 'facebook';
  if (/\bwv\b/i.test(ua)) return 'webview';
  return 'browser';
}

export function track(
  event: GribaEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      landing_version: landingVersion,
      page_path: window.location.pathname,
      surface: detectSurface(),
      ...params,
    });
  } catch {
    // El tracking nunca puede romper la UI.
  }
}

export {};
