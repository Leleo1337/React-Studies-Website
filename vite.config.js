import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-Studies-Website/',
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size limit to 1000KB (1MB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Automatically create chunks for dependencies
          if (id.includes('node_modules')) {
            return 'vendor'; // Create a vendor chunk for libraries
          }
        },
      },
    },
  },
})
