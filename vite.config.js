import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/LiveDuneTestTask/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true, 
  },
  server: {
    historyApiFallback: true 
}
})