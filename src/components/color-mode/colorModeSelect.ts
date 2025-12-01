import { LogicUtil, type TComponent } from "@luna-park/plugin";
import ColorModeSelect from "@nuxt/ui/components/color-mode/ColorModeSelect.vue";

import { SelectMenuProps } from "@/components/form/selectMenu.ts";

const colorModeSelect = {
    component: ColorModeSelect,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/color-mode-select"
    },
    name: "ColorMode/ColorModeSelect",
    properties: LogicUtil.omit(SelectMenuProps, ["icon", "items"]).properties
} satisfies TComponent;

export default colorModeSelect;
