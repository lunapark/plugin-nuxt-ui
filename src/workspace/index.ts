import { faFont, faGear, faPalette, faShapes, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import type { TPluginWorkspaceSection } from "@luna-park/plugin";
import { defineAsyncComponent } from "vue";

export const workspacePreview = defineAsyncComponent(() => import("@/workspace/LThemePreview.vue"));

export const workspaceSections: Array<TPluginWorkspaceSection> = [
    {
        component: defineAsyncComponent(() => import("@/workspace/LThemePresets.vue")),
        description: "Start from a complete theme, then adjust it below.",
        icon: faWandMagicSparkles,
        id: "presets",
        title: "Presets"
    },
    {
        component: defineAsyncComponent(() => import("@/workspace/LThemeColors.vue")),
        description: "Colors used by component color props and the semantic CSS variables.",
        icon: faPalette,
        id: "colors",
        title: "Colors"
    },
    {
        component: defineAsyncComponent(() => import("@/workspace/LThemeTypography.vue")),
        description: "Google Fonts loaded in the editor and in the exported app.",
        icon: faFont,
        id: "typography",
        title: "Typography"
    },
    {
        component: defineAsyncComponent(() => import("@/workspace/LThemeStyle.vue")),
        description: "Radius, icons and the default size and variant of components.",
        icon: faShapes,
        id: "style",
        title: "Style"
    },
    {
        component: defineAsyncComponent(() => import("@/workspace/LGeneralSettings.vue")),
        description: "Color mode and language of the app.",
        icon: faGear,
        id: "general",
        title: "General"
    }
];
