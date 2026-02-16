import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['66e6-187-25-152-251.ngrok-free.app']
  },
  plugins: [react(), tailwindcss()],
})
