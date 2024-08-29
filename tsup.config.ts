import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["lib"],
    format: ["esm"],
    dts: true,
    outDir: "dist",
    clean: true,
    splitting: false
})