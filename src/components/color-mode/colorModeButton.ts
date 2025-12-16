import { type TComponent } from "@luna-park/plugin";
import ColorModeButton from "@nuxt/ui/components/color-mode/ColorModeButton.vue";

import { ButtonProps } from "@/components/element/button.ts";

const colorModeButton = {
    build: {
        name: "UColorModeButton"
    },
    component: ColorModeButton,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/color-mode-button"
    },
    name: "ColorMode/ColorModeButton",
    properties: ButtonProps.properties
} satisfies TComponent;

export default colorModeButton;
