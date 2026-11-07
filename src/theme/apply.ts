import { getIconPack } from "@/theme/icons.ts";
import type { TFontCategory, TVariantGroup } from "@/theme/options.ts";
import { FONT_FALLBACKS, FONTS, SIZED_COMPONENTS, VARIANT_GROUPS } from "@/theme/options.ts";
import type { TTheme } from "@/theme/settings.ts";
import { getDefaultTheme } from "@/theme/settings.ts";

type TDefaultVariants = Record<string, string>;

export type TThemeSelectors = {
    dark: string;
    light: string;
    root: string;
};

export const THEMED_COMPONENTS = [...new Set([...SIZED_COMPONENTS, ...Object.values(VARIANT_GROUPS).flatMap(({ components }) => components)])];

export function getComponentDefaults(theme: TTheme) {
    const defaults = getDefaultTheme();
    const result: Record<string, TDefaultVariants> = {};

    if (theme.size !== defaults.size) {
        for (const component of SIZED_COMPONENTS) {
            result[component] = { size: theme.size };
        }
    }

    for (const [group, { components }] of Object.entries(VARIANT_GROUPS)) {
        const variant = theme.variants[group as TVariantGroup];

        if (variant !== defaults.variants[group as TVariantGroup]) {
            for (const component of components) {
                result[component] = { ...result[component], variant };
            }
        }
    }

    return result;
}

export function getBuildAppConfig(theme: TTheme) {
    const components = Object.fromEntries(Object.entries(getComponentDefaults(theme)).map(([component, defaultVariants]) => [component, { defaultVariants }]));
    const icons = getIconPack(theme.icons).icons;

    return {
        colors: { ...theme.colors },
        ...icons ? { icons } : {},
        ...components
    };
}

export function getFontsHref(theme: TTheme) {
    const families = Object.values(theme.fonts)
        .map((name) => FONTS.find((font) => font.name === name))
        .filter((font) => !!font)
        .map(({ name, weights }) => `family=${ name.replaceAll(" ", "+") }:wght@${ weights }`);

    if (families.length) {
        return `https://fonts.googleapis.com/css2?${ families.join("&") }&display=swap`;
    }
}

function getFontVariables(theme: TTheme) {
    return Object.entries(theme.fonts)
        .filter(([, name]) => !!name)
        .map(([category, name]) => `--font-${ category }: "${ name }", ${ FONT_FALLBACKS[category as TFontCategory] };`)
        .join("");
}

function getTokenDeclarations(theme: TTheme, mode: "dark" | "light") {
    const declarations = Object.entries(theme.tokens)
        .filter(([, shades]) => shades[mode] !== undefined)
        .map(([token, shades]) => `${ token }: var(--ui-color-${ token === "--ui-primary" ? "primary" : "neutral" }-${ shades[mode] });`);

    if (theme.blackAsPrimary && !theme.tokens["--ui-primary"]?.[mode]) {
        declarations.unshift(`--ui-primary: ${ mode === "light" ? "black" : "white" };`);
    }

    return declarations.join("");
}

export function getThemeCss(theme: TTheme, selectors: TThemeSelectors) {
    const fontVariables = getFontVariables(theme);
    const light = getTokenDeclarations(theme, "light");
    const dark = getTokenDeclarations(theme, "dark");

    return [
        `${ selectors.root }{--ui-radius:${ theme.radius }rem;${ fontVariables }${ theme.fonts.sans ? "font-family:var(--font-sans);" : "" }}`,
        light && `${ selectors.light }{${ light }}`,
        dark && `${ selectors.dark }{${ dark }}`
    ].filter(Boolean).join("\n");
}
