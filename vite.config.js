import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Zmienia domyślną nazwę pliku wyjściowego dla zachowania kompatybilności z niektórymi serwerami
        entryFileNames: [name].js
      }
    },
    // Jeśli hostujesz aplikację w podkatalogu, np. example.com/my-app/, ustaw wartość base na '/my-app/'
    base: '/'
  }
})
