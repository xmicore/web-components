import {resolve} from 'path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    build: {
        // library entry and output settings
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'web-components',
            fileName: 'main',
            formats: ['es'] // Only generate ES Modules
        },
        rollupOptions: {
            // Externalize Lit dependencies to prevent bundling them into your library build
            external: ['lit', 'lit/decorators.js'],
            output: {
                globals: {
                    lit: 'lit',
                },
            },
        }
    },
    plugins: [
        // Sync aliases for paths from tsconfig to vite
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            // Add to support 'side effect imports'
            "@xmic": "/lib/"
        }
    }
})