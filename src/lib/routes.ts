// Resolución de ruta → versión de landing.
//
// Por qué no alcanza con comparar el pathname completo (lo que hacía main.tsx):
// el cliente NO sirve esto en la raíz de un dominio. Lo sirve en su propio
// server, bajo griba.com.ar/landing-crm/. Ahí el pathname es "/landing-crm",
// que no matcheaba ninguna rama del ternario y caía al else → servía V1.
//
// El bundle que hoy está en producción tiene un caso especial para
// "/landing-crm" que NUNCA se commiteó acá. O sea: un rebuild desde este repo
// habría degradado la landing de paid a V1 sin que nadie se entere. Este
// archivo existe para que eso no pueda volver a pasar.
//
// Se matchea por segmento, de derecha a izquierda, así la app funciona bajo
// cualquier base path (/landing-crm/, /promo/x/v7/, /).

export type RouteKey =
  | 'home'
  | 'v2'
  | 'v3'
  | 'v4'
  | 'v5'
  | 'v6'
  | 'v7'
  | 'kit40'
  | 'gracias';

// Alias de segmento → versión. REGLA: sólo se agregan entradas, nunca se
// borran ni se reapuntan. Cada una puede ser una URL viva en el server del
// cliente o en un anuncio ya publicado.
const ROUTE_ALIASES: Record<string, RouteKey> = {
  v2: 'v2',
  v3: 'v3',
  v4: 'v4',
  v5: 'v5',
  v6: 'v6',
  v7: 'v7',

  kit40: 'kit40',
  'landing-kit40': 'kit40',

  // Lo que sirve producción HOY (verificado contra el bundle vivo). No tocar.
  'landing-crm': 'v5',
  // Slot reservado para cuando el cliente deploye V7 en su server.
  'landing-crm-v7': 'v7',

  gracias: 'gracias',
  'thank-you': 'gracias',
};

export function resolveRoute(pathname: string): RouteKey {
  const segments = pathname
    .split('/')
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s.length > 0 && !s.endsWith('.html'));

  // De derecha a izquierda: "/landing-crm/v7" → v7, "/landing-crm" → v5.
  for (let i = segments.length - 1; i >= 0; i--) {
    const hit = ROUTE_ALIASES[segments[i]];
    if (hit) return hit;
  }

  return 'home';
}
