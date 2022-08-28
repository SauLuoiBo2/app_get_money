import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            emitWarning: true,
            emitError: true,
            failOnError: false,
            failOnWarning: false,
        }),
    ],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./src") },
            { find: "@config", replacement: path.resolve(__dirname, "./src/config") },
            { find: "@models", replacement: path.resolve(__dirname, "./src/models") },
            {
                find: "@components",
                replacement: path.resolve(__dirname, "./src/components"),
            },
            {
                find: "@widgets",
                replacement: path.resolve(__dirname, "./src/widgets"),
            },
            {
                find: "@utils",
                replacement: path.resolve(__dirname, "./src/utils"),
            },
            {
                find: "@theme",
                replacement: path.resolve(__dirname, "./src/theme"),
            },
            {
                find: "@libs",
                replacement: path.resolve(__dirname, "./src/libs"),
            },
            {
                find: "@api",
                replacement: path.resolve(__dirname, "./src/api"),
            },
            {
                find: "@assets",
                replacement: path.resolve(__dirname, "./src/assets"),
            },
            {
                find: "@store",
                replacement: path.resolve(__dirname, "./src/store"),
            },
            {
                find: "@hooks",
                replacement: path.resolve(__dirname, "./src/hooks"),
            },
            {
                find: "@modules",
                replacement: path.resolve(__dirname, "./src/modules"),
            },
            {
                find: "@router",
                replacement: path.resolve(__dirname, "./src/router"),
            },
            {
                find: "@app",
                replacement: path.resolve(__dirname, "./src/app"),
            },
        ],
    },
});
