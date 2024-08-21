import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({include: ['lib']})
    ],
    build: {
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es']
        },
        rollupOptions: {
            output: {
                manualChunks: undefined, // Disables code splitting
            },
        },
    },
})