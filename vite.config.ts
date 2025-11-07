import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import animations from '@midudev/tailwind-animations'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), animations()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
