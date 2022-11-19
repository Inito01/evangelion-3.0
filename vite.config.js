import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://inito01.github.io/evangelion-3.0/',
  plugins: [react()]
})
