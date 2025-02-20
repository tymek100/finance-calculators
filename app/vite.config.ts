import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Replace with your custom IP if needed (e.g., '192.168.1.100')
    allowedHosts: ['finance-calculators.onrender.com'], // Add the allowed host here
  },
})
