import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    proxy: {
      '/Admin': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
      },
      '/Admin/questions': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/Admin/participants':{
        target: 'http://localhost:3000', // Make sure this matches your backend server
        changeOrigin: true,
      },
      '/ctf/submit': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
      },
      '/Admin/questions/questionsByCategory': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
