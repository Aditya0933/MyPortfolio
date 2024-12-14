import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3390, // Use port 3000 instead of 5173
  },
  plugins: [react()],
})
