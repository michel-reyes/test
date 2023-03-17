import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig((command) => ({
  plugins: [react(), reactRefresh()],
  base: command === 'serve' ? '' : '/test/',
}))
