import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    tailwindcss(),
    react()],
    base: process.env.NODE_ENV === "production" ? "/myluxzenClient/" : "/",
    build: {
      outDir: 'docs', // 指定输出目录为 docs
    }
})
