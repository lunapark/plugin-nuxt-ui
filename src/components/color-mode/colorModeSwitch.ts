import { LogicUtil, type TComponent } from "@luna-park/plugin";
import ColorModeSwitch from "@nuxt/ui/components/color-mode/ColorModeSwitch.vue";

import { SwitchProps } from "@/components/form/switch.ts";

const colorModeSwitch = {
    build: {
        name: "UColorModeSwitch"
    },
    component: ColorModeSwitch,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/color-mode-switch"
    },
    name: "ColorMode/ColorModeSwitch",
    properties: LogicUtil.omit(SwitchProps, ["checkedIcon", "uncheckedIcon"]).properties
} satisfies TComponent;

export default colorModeSwitch;
