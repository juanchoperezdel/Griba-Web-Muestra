import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Cada versión se carga en su propio chunk: una visita sólo descarga la
// que corresponde a su ruta, no las 6 (antes iban todas en el bundle).
const App = lazy(() => import('./App.tsx'));
const AppV2 = lazy(() => import('./AppV2.tsx'));
const AppV3 = lazy(() => import('./AppV3.tsx'));
const AppV4 = lazy(() => import('./AppV4.tsx'));
const AppV5 = lazy(() => import('./AppV5.tsx'));
const AppV6 = lazy(() => import('./AppV6.tsx'));
const AppKit40 = lazy(() => import('./AppKit40.tsx'));
const AppThankYou = lazy(() => import('./AppThankYou.tsx'));

const path = window.location.pathname.replace(/\/$/, '');

const Root =
  path === '/gracias' ? AppThankYou
  : path === '/v2' ? AppV2
  : path === '/v3' ? AppV3
  : path === '/v4' ? AppV4
  : path === '/v5' ? AppV5
  : path === '/v6' ? AppV6
  : path === '/kit40' ? AppKit40
  : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <Root />
    </Suspense>
  </StrictMode>,
);
