import { LogicType, type TComponent } from "@luna-park/plugin";
import Chip from "@nuxt/ui/components/Chip.vue";

import { color, position, size } from "@/lib/variants.ts";

const chip = {
    component: Chip,
    name: "Element/Chip",
    properties: {
        color,
        inset: LogicType.boolean({ description: "When `true`, keep the chip inside for rounded elements." }),
        position,
        size,
        standalone: LogicType.boolean({ description: "When `true`, render the chip relative to the parent." }),
        text: LogicType.union([LogicType.string(), LogicType.number()], { description: "Display some text inside the chip." })
    },
    slots: {
        content: LogicType.void(),
        default: LogicType.void()
    }
} satisfies TComponent;

export default chip;
