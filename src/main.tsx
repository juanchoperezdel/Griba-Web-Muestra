import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppV2 from './AppV2.tsx';
import AppV3 from './AppV3.tsx';
import AppV4 from './AppV4.tsx';
import AppKit40 from './AppKit40.tsx';
import AppThankYou from './AppThankYou.tsx';
import './index.css';

const path = window.location.pathname.replace(/\/$/, '');

const Root =
  path === '/gracias' ? AppThankYou
  : path === '/v2' ? AppV2
  : path === '/v3' ? AppV3
  : path === '/v4' ? AppV4
  : path === '/kit40' ? AppKit40
  : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
