import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../HTML/react-island',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'react-island.js',
        chunkFileNames: 'react-island-[name].js',
        assetFileNames: 'react-island.[ext]',
      },
    },
  },
})
