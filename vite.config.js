import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // <-- Set this if serving from a subdirectory
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
});
