import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/LiveDuneTestTask/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg'],
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  },
  server: {
    historyApiFallback: true,
  }
})