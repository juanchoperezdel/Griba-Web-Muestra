import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// SPA fallback para rutas custom en dev (/v2, /v3, /gracias).
// En produccion esto lo cubre public/_redirects en Netlify.
// Incluye tambien los alias con los que el cliente sirve la landing en su
// propio server (/landing-crm), para poder reproducir esas URLs en local.
const spaFallback = (): Plugin => ({
  name: 'spa-fallback-routes',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url || '';
      if (
        /^\/(v2|v3|v4|v5|v6|v7|kit40|landing-kit40|landing-crm|landing-crm-v7|landing-crm\/v7|gracias)\/?(\?.*)?$/.test(
          url,
        )
      ) {
        req.url = '/';
      }
      next();
    });
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // Default "/" para Netlify. El build para el server del cliente (que sirve
    // la landing bajo /landing-crm/) sale con VITE_BASE=./ para que los assets
    // se resuelvan relativos a la carpeta.
    base: env.VITE_BASE || '/',
    plugins: [react(), tailwindcss(), spaFallback()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
