import { makePlugin } from "@luna-park/plugin";
import UApp from "@nuxt/ui/components/App.vue";
import ui from "@nuxt/ui/vue-plugin";

import { colorMode } from "@/color.ts";
import { getComponents } from "@/components";
import config from "@/config";
import baseStyle from "@/index.css?inline";
import icon from "@/logo.svg";
import LWrapper from "@/LWrapper.vue";
import nodes from "@/nodes";

export default makePlugin({
    config,
    description: "Nuxt UI is a collection of reusable components and utilities for building apps.",
    editor: {
        components: getComponents,
        nodes,
        wrapper: ({ mode }) => {
            if (mode === "build") {
                return UApp;
            }

            return LWrapper;
        }
    },
    icon,
    id: "nuxt-ui",
    inject: {
        css: ({ config, mode }) => {
            if (mode === "editor") {
                const configStyle = `:root{ --ui-radius:${ config.radius }rem; }[data-nuxt-body]{height: 100%}`;
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
            appConfig.ui.colors.neutral = config.neutral;

            colorMode.value = config.colorMode;
        }
    },
    name: "Nuxt UI"
});
