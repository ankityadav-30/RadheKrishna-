import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        temple: resolve(__dirname, 'temple.html'),
        gita: resolve(__dirname, 'gita.html'),
      },
    },
    outDir: 'dist',
  },
  server: {
    open: true,     // Auto-open browser on dev
    port: 5173,
  },
});
