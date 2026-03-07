import { defineConfig } from 'vite'

export default defineConfig({
  // SPA fallback: any 404 is served index.html so History API routes work on refresh
  appType: 'spa',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
