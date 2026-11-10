import { EInjectionKey, makePlugin } from "@luna-park/plugin";
import UApp from "@nuxt/ui/components/App.vue";
import ui from "@nuxt/ui/vue-plugin";
import { defineAsyncComponent } from "vue";

import { getComponents } from "@/components";
import { guides } from "@/guides";
import baseStyle from "@/index.css?inline";
import { interfaces } from "@/interfaces";
import llm from "@/llm.md?raw";
import { getLocaleSetup } from "@/locale.ts";
import icon from "@/logo.svg";
import LWrapper from "@/LWrapper.vue";
import nodes from "@/nodes";
import { templates } from "@/templates";
import { getBuildAppConfig, getFontsHref, getThemeCss } from "@/theme/apply.ts";
import { internals } from "@/theme/internals.ts";
import { mountTheme, unmountTheme } from "@/theme/runtime.ts";
import { resolveSettings } from "@/theme/settings.ts";
import { colorTokens } from "@/tokens/color.ts";
import { fontSizeTokens } from "@/tokens/fontSize.ts";
import { lengthTokens } from "@/tokens/length.ts";
import { workspacePreview, workspaceSections } from "@/workspace";

import packageDefinition from "../package.json";

const { dependencies } = packageDefinition;

export default makePlugin({
    build: {
        frontImports: [
            { name: "@internationalized/date", version: dependencies["@internationalized/date"] },
            { name: "@nuxt/ui", version: dependencies["@nuxt/ui"] },
            { name: "tailwindcss", version: dependencies.tailwindcss },
            { name: "vue-router", version: dependencies["vue-router"] },
            { name: "@unhead/vue", version: "^2.0.19" }
        ],
        injections: ({ config, internals }) => {
            const settings = resolveSettings(internals, config);
            const ui = { ui: getBuildAppConfig(settings.theme) };
            const fontsHref = getFontsHref(settings.theme);
            const fontsLink = fontsHref ? `\ndocument.head.insertAdjacentHTML("beforeend", ${ JSON.stringify(`<link rel="stylesheet" href="${ fontsHref }">`) });` : "";
            const themeCss = getThemeCss(settings.theme, { dark: ".dark", light: ":root:not(.dark)", root: ":root" });

            return {
                [EInjectionKey.ViteImport]: "import ui from '@nuxt/ui/vite';",
                [EInjectionKey.VitePlugin]: `ui(${ JSON.stringify(ui) }),`,
                [EInjectionKey.AppImport]: "import ui from '@nuxt/ui/vue-plugin';",
                [EInjectionKey.AppBody]: `app.use(ui);${ fontsLink }`,
                [EInjectionKey.AppSetup]: getLocaleSetup(settings.locale),
                [EInjectionKey.Style]: `@import "tailwindcss";\n@import "@nuxt/ui";\n${ themeCss }\n`
            };
        }
    },
    description: "Nuxt UI is a collection of reusable components and utilities for building apps.",
    editor: {
        components: getComponents,
        inputs: {
            icon: defineAsyncComponent(() => import("@/inputs/IconInput.vue"))
        },
        interfaces,
        nodes,
        templates,
        tokens: [
            ...colorTokens,
            ...lengthTokens,
            ...fontSizeTokens
        ],
        wrapper: ({ mode }) => {
            if (mode === "build") {
                return { attributes: { ":locale": "nuxtUiLocale" }, component: UApp, name: "UApp" };
            }

            return { component: LWrapper, name: "Wrapper" };
        }
    },
    guides,
    icon,
    id: "nuxt-ui",
    inject: {
        css: ({ config, internals, mode }) => {
            if (mode === "editor") {
                const settings = resolveSettings(internals, config);
                const themeCss = getThemeCss(settings.theme, {
                    dark: "[data-nuxt-body].dark",
                    light: "[data-nuxt-body]:not(.dark)",
                    root: "[data-nuxt-body]"
                });

                return `${ baseStyle.replace(/\bbody\b([^:;])*?{/g, "[data-nuxt-body]$1{") }[data-nuxt-body]{min-height: 100%}${ themeCss }`;
            }
        }
    },
    internals,
    lifecycle: {
        mount: ({ config }) => {
            window.__LUNA_PARK__.app.use(ui);
            mountTheme(config);
        },
        unmount: () => {
            unmountTheme();
        }
    },
    llm,
    name: "Nuxt UI",
    workspace: {
        preview: workspacePreview,
        sections: workspaceSections
    }
});
