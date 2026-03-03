import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animation': ['gsap', '@gsap/react', 'lenis'],
          'vendor-ui': ['@radix-ui/react-primitive', 'lucide-react'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
