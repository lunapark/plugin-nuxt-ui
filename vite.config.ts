import ui from "@nuxt/ui/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, type UserConfig } from "vite";

import packageDefinition from "./package.json";

const alias = {
    "@": path.resolve(__dirname, "src")
};

export default defineConfig(() => {
    const config: UserConfig = {
        build: {
            lib: {
                entry: "src/index.ts",
                fileName: "index",
                formats: ["es"],
                name: "@luna-park/plugin-tailwind"
            },
            rollupOptions: {
                external: [...Object.keys(packageDefinition.peerDependencies || {})]
            }
        },
        plugins: [
            vue(),
            ui()
        ],
        preview: {
            allowedHosts: [
                "localhost",
                "127.0.0.1",
                "https://luna-park.app"
            ],
            host: "127.0.0.1",
            port: 2084
        },
        resolve: { alias }
    };

    return config;
});
