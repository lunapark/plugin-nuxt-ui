import { LogicType, makePlugin } from "@luna-park/plugin";
import UApp from "@nuxt/ui/components/App.vue";
import { useColorMode } from "@nuxt/ui/composables/color-mode/useColorMode";
import ui from "@nuxt/ui/vue-plugin";
import { h } from "vue";

import { components, getComponents } from "@/components";
import baseStyle from "@/index.css?inline";
import icon from "@/logo.svg";

export default makePlugin({
    config: LogicType.object({
        colorMode: LogicType.string({
            default: "system",
            enum: ["light", "dark", "system"]
        }),
        neutral: LogicType.string({
            default: "slate",
            enum: ["slate", "gray", "zinc", "neutral", "stone"]
        }),
        primary: LogicType.string({
            default: "green",
            enum: ["black", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
        }),
        radius: LogicType.number({
            default: 0.25,
            options: { clamp: true, max: 1, min: 0, step: 0.125 }
        })
    }),
    description: "",
    editor: {
        components: getComponents,
        wrapper: ({ config }) => h("div", { "class": config.colorMode, "nuxt-body": "" }, UApp)
    },
    icon,
    id: "nuxt-ui",
    inject: {
        css: ({ config, mode }) => {
            const configStyle = `:root{ --ui-radius:${ config.radius }rem; }[nuxt-body]{height: 100%}`;

            if (mode === "editor") {
                return baseStyle.replace(/\bbody\b([^:;])*?{/g, "[nuxt-body]$1{") + configStyle;
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

            const colorMode = useColorMode();

            colorMode.preference = config.colorMode;
        }
    },
    name: "Nuxt UI"
});
