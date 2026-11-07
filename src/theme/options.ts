import colors from "tailwindcss/colors";

export const NEUTRAL_COLORS = ["slate", "gray", "zinc", "neutral", "stone", "taupe", "mauve", "mist", "olive"];

const excludedColors = ["inherit", "current", "transparent", "black", "white", ...NEUTRAL_COLORS];

export const PRIMARY_COLORS = Object.keys(colors).filter((name) => !excludedColors.includes(name) && typeof colors[name as keyof typeof colors] === "object");

export const COLOR_KEYS = ["primary", "secondary", "success", "info", "warning", "error"] as const;

export type TColorKey = typeof COLOR_KEYS[number];

export const RADIUSES = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75];

export const SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

export type TSize = typeof SIZES[number];

export const VARIANT_GROUPS = {
    buttons: {
        components: ["button"],
        label: "Buttons",
        variants: ["solid", "outline", "soft", "subtle", "ghost", "link"]
    },
    inputs: {
        components: ["input", "inputNumber", "inputMenu", "inputTags", "inputDate", "inputTime", "select", "selectMenu", "textarea", "pinInput"],
        label: "Inputs",
        variants: ["outline", "soft", "subtle", "ghost", "none"]
    },
    panels: {
        components: ["card", "pageCard", "empty"],
        label: "Panels",
        variants: ["solid", "outline", "soft", "subtle"]
    }
} as const;

export type TVariantGroup = keyof typeof VARIANT_GROUPS;

export const SIZED_COMPONENTS = [
    "avatar", "avatarGroup", "badge", "button", "calendar", "checkbox", "checkboxGroup", "chip", "colorPicker",
    "commandPalette", "contextMenu", "dropdownMenu", "fieldGroup", "fileUpload", "formField", "input", "inputDate",
    "inputMenu", "inputNumber", "inputRating", "inputTags", "inputTime", "kbd", "listbox", "pinInput", "progress",
    "radioGroup", "select", "selectMenu", "slider", "stepper", "switch", "tabs", "textarea", "timeline", "tree", "user"
];

export type TFontCategory = "mono" | "sans" | "serif";

export const FONTS: Array<{ category: TFontCategory; name: string; weights: string; }> = [
    { category: "sans", name: "Public Sans", weights: "400;500;600;700" },
    { category: "sans", name: "Inter", weights: "400;500;600;700" },
    { category: "sans", name: "DM Sans", weights: "400;500;600;700" },
    { category: "sans", name: "Geist", weights: "400;500;600;700" },
    { category: "sans", name: "Outfit", weights: "400;500;600;700" },
    { category: "sans", name: "Poppins", weights: "400;500;600;700" },
    { category: "sans", name: "Raleway", weights: "400;500;600;700" },
    { category: "sans", name: "Roboto", weights: "400;500;600;700" },
    { category: "sans", name: "Figtree", weights: "400;500;600;700" },
    { category: "sans", name: "Nunito", weights: "400;500;600;700" },
    { category: "sans", name: "Manrope", weights: "400;500;600;700" },
    { category: "sans", name: "Plus Jakarta Sans", weights: "400;500;600;700" },
    { category: "sans", name: "Bricolage Grotesque", weights: "400;500;600;700" },
    { category: "sans", name: "Comic Neue", weights: "400;700" },
    { category: "serif", name: "Source Serif 4", weights: "400;500;600;700" },
    { category: "serif", name: "Lora", weights: "400;500;600;700" },
    { category: "serif", name: "Playfair Display", weights: "400;500;600;700" },
    { category: "serif", name: "Merriweather", weights: "400;700" },
    { category: "serif", name: "Instrument Serif", weights: "400" },
    { category: "mono", name: "Geist Mono", weights: "400;500;600;700" },
    { category: "mono", name: "JetBrains Mono", weights: "400;500;600;700" },
    { category: "mono", name: "Fira Code", weights: "400;500;600;700" },
    { category: "mono", name: "IBM Plex Mono", weights: "400;500;600;700" },
    { category: "mono", name: "Space Mono", weights: "400;700" }
];

export const FONT_FALLBACKS: Record<TFontCategory, string> = {
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    sans: "ui-sans-serif, system-ui, sans-serif",
    serif: "ui-serif, Georgia, Cambria, serif"
};

export function getColorSwatch(name: string, shade = 500) {
    const palette = colors[name as keyof typeof colors];
    return typeof palette === "object" ? (palette as Record<number, string>)[shade] : undefined;
}
