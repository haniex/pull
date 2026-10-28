import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site is published at https://haniex.github.io/pull/
export default defineConfig({
  base: '/pull/',
  plugins: [react()],
})
