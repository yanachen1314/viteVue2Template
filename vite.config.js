import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  server: {
    port: 8070
  },
  plugins: [vue()],
  define: {
    'process.env': process.env,
  },
})