import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper/swiper-bundle.min.css': 'swiper/swiper-bundle.min.css',
    }
  }
})