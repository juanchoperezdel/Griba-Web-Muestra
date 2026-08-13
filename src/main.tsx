import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { resolveRoute } from './lib/routes';

// Cada versión se carga en su propio chunk: una visita sólo descarga la
// que corresponde a su ruta, no las 7 (antes iban todas en el bundle).
const App = lazy(() => import('./App.tsx'));
const AppV2 = lazy(() => import('./AppV2.tsx'));
const AppV3 = lazy(() => import('./AppV3.tsx'));
const AppV4 = lazy(() => import('./AppV4.tsx'));
const AppV5 = lazy(() => import('./AppV5.tsx'));
const AppV6 = lazy(() => import('./AppV6.tsx'));
const AppV7 = lazy(() => import('./AppV7.tsx'));
const AppKit40 = lazy(() => import('./AppKit40.tsx'));
const AppThankYou = lazy(() => import('./AppThankYou.tsx'));

// La resolución vive en lib/routes.ts: matchea por segmento para que la app
// funcione servida bajo un base path (el cliente la sirve en /landing-crm/).
const ROUTE_COMPONENTS = {
  home: App,
  v2: AppV2,
  v3: AppV3,
  v4: AppV4,
  v5: AppV5,
  v6: AppV6,
  v7: AppV7,
  kit40: AppKit40,
  gracias: AppThankYou,
} as const;

const Root = ROUTE_COMPONENTS[resolveRoute(window.location.pathname)];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Root />
    </Suspense>
  </StrictMode>,
);

// Señal de que el bundle ejecutó. El bloque de rescate de index.html se
// muestra sólo si esto nunca corre (bundle que no descarga o JS que explota
// en el navegador in-app de Instagram).
window.__gribaAppReady = true;
document.getElementById('boot-fallback')?.remove();
