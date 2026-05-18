import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppV2 from './AppV2.tsx';
import AppThankYou from './AppThankYou.tsx';
import './index.css';

const path = window.location.pathname.replace(/\/$/, '');

const Root = path === '/gracias' ? AppThankYou : path === '/v2' ? AppV2 : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
