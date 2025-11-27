import { LogicType, type TComponent } from "@luna-park/plugin";
import Slider from "@nuxt/ui/components/Slider.vue";

import { color, orientation, size } from "@/lib/variants.ts";

const slider = {
    component: Slider,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/slider"
    },
    models: {
        modelValue: LogicType.union([LogicType.number(), LogicType.array(LogicType.number())])
    },
    name: "Form/Slider",
    properties: {
        color,
        disabled: LogicType.boolean(),
        inverted: LogicType.boolean({ description: "Whether the slider is visually inverted." }),
        max: LogicType.number({ default: 100, description: "Maximum value." }),
        min: LogicType.number({ default: 0, description: "Minimum value." }),
        minStepsBetweenThumbs: LogicType.number({ description: "Minimum steps between multiple thumbs." }),
        name: LogicType.string(),
        orientation,
        size,
        step: LogicType.number({ default: 1, description: "Stepping interval." }),
        tooltip: LogicType.boolean({ description: "Show tooltip on hover." })
    }
} satisfies TComponent;

export default slider;
