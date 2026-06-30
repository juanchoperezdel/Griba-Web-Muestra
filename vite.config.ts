import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// SPA fallback para rutas custom en dev (/v2, /v3, /gracias).
// En produccion esto lo cubre public/_redirects en Netlify.
const spaFallback = (): Plugin => ({
  name: 'spa-fallback-routes',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url || '';
      if (/^\/(v2|v3|v4|v5|kit40|gracias)\/?(\?.*)?$/.test(url)) {
        req.url = '/';
      }
      next();
    });
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
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
