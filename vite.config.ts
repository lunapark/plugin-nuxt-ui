import ui from "@nuxt/ui/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, type Plugin, type UserConfig } from "vite";

import packageDefinition from "./package.json";

const alias = {
    "@": path.resolve(__dirname, "src")
};

function replaceDocumentBodyPlugin(): Plugin {
    return {
        apply: "build",
        name: "replace-document-body",
        renderChunk(code) {
            return code.replaceAll(
                ".body.style.pointerEvents",
                ".querySelector('[data-root]').style.pointerEvents"
            );
        }
    };
}

export default defineConfig(() => {
    const config: UserConfig = {
        build: {
            lib: {
                entry: "src/index.ts",
                fileName: "index",
                formats: ["es"],
                name: "@luna-park/plugin-nuxt-ui"
            },
            rollupOptions: {
                external: [...Object.keys(packageDefinition.peerDependencies || {})]
            }
        },
        define: {
            "process.env.NODE_ENV": JSON.stringify("development")
        },
        plugins: [
            vue(),
            ui(),
            replaceDocumentBodyPlugin()
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
