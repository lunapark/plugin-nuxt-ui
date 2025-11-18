import { LogicType, type TComponent } from "@luna-park/plugin";
import Progress from "@nuxt/ui/components/Progress.vue";

import { color, orientation, size } from "@/lib/variants.ts";

const progress = {
    component: Progress,
    models: {
        modelValue: LogicType.number()
    },
    name: "Element/Progress",
    properties: {
        animation: LogicType.string({ description: "The animation of the progress bar.", enum: ["carousel", "carousel-inverse", "swing", "elastic"] }),
        color,
        inverted: LogicType.boolean({ description: "Whether the progress is visually inverted." }),
        max: LogicType.number({ description: "The maximum progress value." }),
        orientation,
        size,
        status: LogicType.boolean({ description: "Display the current progress value." })
    },
    slots: {
        status: LogicType.object({ percent: LogicType.number({ optional: true }) })
    }
} satisfies TComponent;

export default progress;
