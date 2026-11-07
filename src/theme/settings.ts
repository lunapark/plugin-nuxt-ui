import { NAVIGATOR_LOCALE } from "@/locale.ts";
import type { TColorKey, TFontCategory, TSize, TVariantGroup } from "@/theme/options.ts";
import { COLOR_KEYS } from "@/theme/options.ts";

export type TColorMode = "auto" | "dark" | "light";

export type TTokenShades = Record<string, { dark?: number; light?: number; }>;

export type TTheme = {
    blackAsPrimary: boolean;
    colors: Record<TColorKey | "neutral", string>;
    fonts: Record<TFontCategory, string>;
    icons: string;
    preset: string;
    radius: number;
    size: TSize;
    tokens: TTokenShades;
    variants: Record<TVariantGroup, string>;
};

export type TSettings = {
    colorMode: TColorMode;
    locale: string;
    theme: TTheme;
};

type TLegacyConfig = {
    colorMode?: TColorMode;
    locale?: string;
    neutral?: string;
    primary?: string;
    radius?: number;
    secondary?: string;
};

export const DEFAULT_PRESET_ID = "default";

export function getDefaultTheme(): TTheme {
    return {
        blackAsPrimary: false,
        colors: {
            error: "red",
            info: "blue",
            neutral: "slate",
            primary: "green",
            secondary: "blue",
            success: "green",
            warning: "yellow"
        },
        fonts: { mono: "", sans: "", serif: "" },
        icons: "lucide",
        preset: DEFAULT_PRESET_ID,
        radius: 0.25,
        size: "md",
        tokens: {},
        variants: { buttons: "solid", inputs: "outline", panels: "outline" }
    };
}

export function getDefaultSettings(): TSettings {
    return {
        colorMode: "auto",
        locale: NAVIGATOR_LOCALE,
        theme: getDefaultTheme()
    };
}

export function resolveSettings(internals: Partial<TSettings> | undefined, config: unknown): TSettings {
    const defaults = getDefaultSettings();
    const saved = internals?.theme;
    const legacy = (config ?? {}) as TLegacyConfig;

    const theme: TTheme = {
        ...defaults.theme,
        ...saved,
        colors: { ...defaults.theme.colors, ...saved?.colors },
        fonts: { ...defaults.theme.fonts, ...saved?.fonts },
        tokens: { ...saved?.tokens },
        variants: { ...defaults.theme.variants, ...saved?.variants }
    };

    if (!saved) {
        if (legacy.primary === "black") {
            theme.blackAsPrimary = true;
        }
        else if (legacy.primary) {
            theme.colors.primary = legacy.primary;
        }

        if (legacy.secondary && legacy.secondary !== "black") {
            theme.colors.secondary = legacy.secondary;
        }

        theme.colors.neutral = legacy.neutral ?? theme.colors.neutral;
        theme.radius = legacy.radius ?? theme.radius;
    }

    return {
        colorMode: internals?.colorMode ?? legacy.colorMode ?? defaults.colorMode,
        locale: internals?.locale ?? legacy.locale ?? defaults.locale,
        theme
    };
}

export function getColorEntries(theme: TTheme) {
    return [...COLOR_KEYS, "neutral" as const].map((key) => [key, theme.colors[key]] as const);
}
