import { LogicType, type TComponent } from "@luna-park/plugin";
import ColorPicker from "@nuxt/ui/components/ColorPicker.vue";

import { size } from "@/lib/variants.ts";

const colorPicker = {
    component: ColorPicker,
    models: {
        modelValue: LogicType.string()
    },
    name: "Form/ColorPicker",
    properties: {
        defaultValue: LogicType.string({ default: "#ffffff", description: "The default value of the color picker" }),
        disabled: LogicType.boolean({ description: "Disable the color picker" }),
        format: LogicType.string({ description: "Format of the color", enum: ["hex", "rgb", "hsl", "cmyk", "lab"], name: "format" }),
        size,
        throttle: LogicType.number({ default: 50, description: "Throttle time in ms for the color picker" })
    }
} satisfies TComponent;

export default colorPicker;
