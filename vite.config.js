import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Katalog wyjściowy dla zbudowanego projektu
    assetsDir: 'assets', // Katalog, w którym będą przechowywane zasoby (obrazy, pliki CSS, itp.)
  },
  server: {
    port: 3000, // Port, na którym uruchomiony będzie serwer deweloperski
  },
});