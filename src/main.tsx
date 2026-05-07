import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppV2 from './AppV2.tsx';
import './index.css';

const isV2 = window.location.pathname.replace(/\/$/, '') === '/v2';
const Root = isV2 ? AppV2 : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
