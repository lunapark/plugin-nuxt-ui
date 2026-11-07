import type { TTheme, TTokenShades } from "@/theme/settings.ts";
import { DEFAULT_PRESET_ID, getDefaultTheme } from "@/theme/settings.ts";

export type TPreset = {
    id: string;
    name: string;
    theme: Partial<Omit<TTheme, "colors" | "fonts" | "variants">> & {
        colors?: Partial<TTheme["colors"]>;
        fonts?: Partial<TTheme["fonts"]>;
        variants?: Partial<TTheme["variants"]>;
    };
};

const tintedNeutral: TTokenShades = {
    "--ui-bg": { light: 50 },
    "--ui-bg-inverted": { dark: 50 },
    "--ui-bg-muted": { light: 100 },
    "--ui-border-inverted": { dark: 50 },
    "--ui-text-highlighted": { dark: 50 },
    "--ui-text-inverted": { light: 50 }
};

export const PRESETS: Array<TPreset> = [
    {
        id: DEFAULT_PRESET_ID,
        name: "Default",
        theme: {}
    },
    {
        id: "mono",
        name: "Mono",
        theme: {
            blackAsPrimary: true,
            colors: { neutral: "neutral" },
            fonts: { mono: "Geist Mono", sans: "Geist" },
            radius: 0.5,
            tokens: {
                "--ui-bg": { dark: 950 },
                "--ui-bg-accented": { dark: 800, light: 200 },
                "--ui-bg-elevated": { dark: 900, light: 100 },
                "--ui-bg-muted": { dark: 900, light: 100 },
                "--ui-text": { dark: 100, light: 900 },
                "--ui-text-highlighted": { dark: 50, light: 950 }
            },
            variants: { inputs: "subtle" }
        }
    },
    {
        id: "sky",
        name: "Sky",
        theme: {
            colors: { neutral: "mist", primary: "sky" },
            fonts: { sans: "Figtree" },
            radius: 0.75,
            tokens: tintedNeutral,
            variants: { buttons: "soft", inputs: "soft" }
        }
    },
    {
        id: "mint",
        name: "Mint",
        theme: {
            colors: { neutral: "olive", primary: "teal" },
            fonts: { sans: "Nunito" },
            icons: "iconoir",
            radius: 0.75,
            size: "lg",
            tokens: tintedNeutral,
            variants: { inputs: "soft" }
        }
    },
    {
        id: "iris",
        name: "Iris",
        theme: {
            colors: { neutral: "mauve", primary: "violet", secondary: "fuchsia" },
            fonts: { sans: "Manrope" },
            icons: "remix",
            radius: 0.5,
            tokens: tintedNeutral,
            variants: { buttons: "outline", inputs: "subtle" }
        }
    },
    {
        id: "crimson",
        name: "Crimson",
        theme: {
            colors: { neutral: "neutral", primary: "red" },
            fonts: { sans: "Inter" },
            icons: "material",
            radius: 0,
            tokens: {
                ...tintedNeutral,
                "--ui-bg": { dark: 950, light: 50 },
                "--ui-bg-accented": { dark: 800 },
                "--ui-bg-elevated": { dark: 900 },
                "--ui-bg-muted": { dark: 900, light: 100 },
                "--ui-primary": { dark: 500, light: 600 }
            },
            variants: { inputs: "soft" }
        }
    },
    {
        id: "coral",
        name: "Coral",
        theme: {
            colors: { neutral: "stone", primary: "rose", success: "teal" },
            fonts: { sans: "Plus Jakarta Sans" },
            icons: "phosphor",
            radius: 0.5,
            tokens: tintedNeutral
        }
    },
    {
        id: "sunset",
        name: "Sunset",
        theme: {
            colors: { neutral: "taupe", primary: "orange", secondary: "yellow" },
            fonts: { sans: "Bricolage Grotesque" },
            icons: "tabler",
            radius: 0.625,
            tokens: { ...tintedNeutral, "--ui-primary": { light: 600 } },
            variants: { panels: "subtle" }
        }
    }
];

export function getPresetTheme(preset: TPreset): TTheme {
    const defaults = getDefaultTheme();

    return {
        ...defaults,
        ...preset.theme,
        colors: { ...defaults.colors, ...preset.theme.colors },
        fonts: { ...defaults.fonts, ...preset.theme.fonts },
        preset: preset.id,
        tokens: { ...preset.theme.tokens },
        variants: { ...defaults.variants, ...preset.theme.variants }
    };
}

export function isPresetModified(theme: TTheme) {
    const preset = PRESETS.find(({ id }) => id === theme.preset);
    return !preset || JSON.stringify(sortKeys(getPresetTheme(preset))) !== JSON.stringify(sortKeys(theme));
}

function sortKeys(value: unknown): unknown {
    if (value && typeof value === "object" && !Array.isArray(value)) {
        return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortKeys((value as Record<string, unknown>)[key])]));
    }

    return value;
}
