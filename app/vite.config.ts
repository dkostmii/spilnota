import path from 'path';
import dotenv from 'dotenv';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config({ path: './.env' });
dotenv.config({ path: './.env.local', override: true });

const strapiUrl = process.env.STRAPI_URL || 'http://localhost:1337';
const apiToken = process.env.STRAPI_API_READ_TOKEN;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: strapiUrl,
        secure: false,
        configure(proxy, options) {
          proxy.on('error', (err, req, res) => {
            console.log('Proxy error:', err);
          });

          if (!apiToken) {
            return;
          }

          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Authorization', `Bearer ${apiToken}`);
          });
        },
      },
      '/uploads': {
        target: strapiUrl,
        secure: false,
        configure(proxy, options) {
          proxy.on('error', (err, req, res) => {
            console.log('Proxy error:', err);
          });

          if (!apiToken) {
            return;
          }

          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Authorization', `Bearer ${apiToken}`);
          });
        },
      },
      '/admin': {
        target: strapiUrl,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/img'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@store': path.resolve(__dirname, './src/store'),
      '@resources': path.resolve(__dirname, './src/styles/resources'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
      '@rfs': path.resolve(__dirname, 'node_modules/rfs/scss'),
    },
  },
});
