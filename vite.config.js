
import path from 'path';
import vue from '@vitejs/plugin-vue';

import { injectHtml } from 'vite-plugin-html';

process.env.TARGET = process.env.TARGET || 'web';
const isCordova = process.env.TARGET === 'cordova';
const isElectronWatch = process.env.ELECTRON_WATCH || false;
const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(
  __dirname,
  isCordova ? (isElectronWatch ? 'cordova/platforms/electron/www' : 'cordova/www') : './www',
);

export default {
  plugins: [
    vue(),
    injectHtml({
      injectData: {
        TARGET: process.env.TARGET,
      },
    }),
  ],
  root: SRC_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  server: {
    host: true,
  },

};
