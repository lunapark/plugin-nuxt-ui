import { EInjectionKey, makePlugin } from "@luna-park/plugin";
import UApp from "@nuxt/ui/components/App.vue";
import ui from "@nuxt/ui/vue-plugin";

import { colorMode } from "@/color.ts";
import { getComponents } from "@/components";
import config from "@/config";
import baseStyle from "@/index.css?inline";
import icon from "@/logo.svg";
import LWrapper from "@/LWrapper.vue";
import nodes from "@/nodes";
import { templates } from "@/templates";
import { colorTokens } from "@/tokens/color.ts";
import { fontSizeTokens } from "@/tokens/fontSize.ts";
import { lengthTokens } from "@/tokens/length.ts";

export default makePlugin({
    build: {
        frontImports: [
            { name: "@nuxt/ui", version: "^4.2.1" },
            { name: "tailwindcss", version: "^4.1.18" },
            { name: "vue-router", version: "^4.6.4" },
            { name: "@unhead/vue", version: "^2.0.19" }
        ],
        injections: ({ config }) => {
            const ui = {
                ui: {
                    colors: {
                        neutral: config.neutral,
                        primary: config.primary,
                        secondary: config.secondary
                    }
                }
            };

            return {
                [EInjectionKey.ViteImport]: "import ui from '@nuxt/ui/vite';",
                [EInjectionKey.VitePlugin]: `ui(${ JSON.stringify(ui) }),`,
                [EInjectionKey.AppImport]: "import ui from '@nuxt/ui/vue-plugin';",
                [EInjectionKey.AppBody]: "app.use(ui);",
                [EInjectionKey.Style]: "@import \"tailwindcss\";\n@import \"@nuxt/ui\";\n"
            };
        }
    },
    config,
    description: "Nuxt UI is a collection of reusable components and utilities for building apps.",
    editor: {
        components: getComponents,
        nodes,
        templates,
        tokens: [
            ...colorTokens,
            ...lengthTokens,
            ...fontSizeTokens
        ],
        wrapper: ({ mode }) => {
            if (mode === "build") {
                return { component: UApp, name: "UApp" };
            }

            return { component: LWrapper, name: "Wrapper" };
        }
    },
    icon,
    id: "nuxt-ui",
    inject: {
        css: ({ config, mode }) => {
            if (mode === "editor") {
                const configStyle = `:root{ --ui-radius:${ config.radius }rem; }[data-nuxt-body]{min-height: 100%}`;
                return baseStyle.replace(/\bbody\b([^:;])*?{/g, "[data-nuxt-body]$1{") + configStyle;
            }
        }
    },
    lifecycle: {
        mount: () => {
            window.__LUNA_PARK__.app.use(ui);
        },
        update({ config }) {
            const appConfig = useAppConfig();

            appConfig.ui.colors.primary = config.primary;
            appConfig.ui.colors.secondary = config.secondary;
            appConfig.ui.colors.neutral = config.neutral;

            colorMode.value = config.colorMode;
        }
    },
    name: "Nuxt UI"
});
