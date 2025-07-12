import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // <-- Tambahkan ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Tambahkan blok 'resolve' di bawah ini
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})