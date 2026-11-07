import { watch } from "vue";

import { colorMode } from "@/color.ts";
import { locale, resolveLocale } from "@/locale.ts";
import { getComponentDefaults, getFontsHref, THEMED_COMPONENTS } from "@/theme/apply.ts";
import { getIconPack } from "@/theme/icons.ts";
import { internals } from "@/theme/internals.ts";
import { resolveSettings } from "@/theme/settings.ts";

const legacyConfigKeys = ["colorMode", "locale", "neutral", "primary", "radius", "secondary"];

let stopWatching: (() => void) | undefined;

export function mountTheme(config: unknown) {
    Object.assign(internals, resolveSettings(internals, config));

    if (config && typeof config === "object") {
        for (const key of legacyConfigKeys) {
            delete (config as Record<string, unknown>)[key];
        }
    }

    const appConfig = useAppConfig();
    const defaultIcons = { ...appConfig.ui.icons };

    stopWatching?.();

    const stopTheme = watch(() => internals.theme, (theme) => {
        Object.assign(appConfig.ui.colors, theme.colors);
        appConfig.ui.icons = { ...defaultIcons, ...getIconPack(theme.icons).icons };

        const defaults = getComponentDefaults(theme);
        const ui = appConfig.ui as Record<string, unknown>;

        for (const component of THEMED_COMPONENTS) {
            ui[component] = { ...ui[component] as object, defaultVariants: defaults[component] ?? {} };
        }

        loadFonts(getFontsHref(theme));
    }, { deep: true, immediate: true });

    const stopGeneral = watch(() => [internals.colorMode, internals.locale] as const, ([mode, code]) => {
        colorMode.value = mode;
        locale.value = resolveLocale(code);
    }, { immediate: true });

    stopWatching = () => {
        stopTheme();
        stopGeneral();
    };
}

export function unmountTheme() {
    stopWatching?.();
    stopWatching = undefined;
    loadFonts(undefined);
}

function loadFonts(href: string | undefined) {
    const existing = document.head.querySelector<HTMLLinkElement>("link[data-nuxt-ui-fonts]");

    if (!href) {
        existing?.remove();
        return;
    }

    if (existing) {
        existing.href = href;
        return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.nuxtUiFonts = "";
    document.head.append(link);
}
