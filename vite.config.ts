import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        banner: '#!/usr/bin/env node',
      },
      external: ['commander', 'inquirer', 'execa']
    },
    sourcemap: true,
  },
  plugins: [dts()]
})
