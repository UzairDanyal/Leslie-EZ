import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Or '/your-sub-directory/' if hosted under a subfolder
  plugins: [react()],
});
