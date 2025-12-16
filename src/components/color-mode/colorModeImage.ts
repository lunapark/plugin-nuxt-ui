import { LogicType, type TComponent } from "@luna-park/plugin";
import ColorModeImage from "@nuxt/ui/components/color-mode/ColorModeImage.vue";

const colorModeImage = {
    build: {
        name: "UColorModeImage"
    },
    component: ColorModeImage,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/color-mode-image"
    },
    name: "ColorMode/ColorModeImage",
    properties: {
        alt: LogicType.string(),
        dark: LogicType.string(),
        light: LogicType.string(),
        loading: LogicType.string({ default: "eager", enum: ["lazy", "eager"] })
    }
} satisfies TComponent;

export default colorModeImage;
