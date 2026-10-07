import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ProgressGroup from "@nuxt/ui/components/ProgressGroup.vue";

import { iconType } from "@/lib/icon.ts";
import { color, orientation, size } from "@/lib/variants.ts";

const ProgressGroupItem = LogicUtil.partial(LogicType.object({
    color,
    icon: iconType(),
    label: LogicType.string(),
    value: LogicType.number()
}));

const ItemSlot = LogicType.object({ index: LogicType.number(), item: ProgressGroupItem, percent: LogicType.number() });

const progressGroup = {
    build: {
        name: "UProgressGroup"
    },
    component: ProgressGroup,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/progress-group"
    },
    name: "Element/ProgressGroup",
    properties: {
        color,
        items: LogicType.array(ProgressGroupItem, { description: "The segments of the progress bar." }),
        max: LogicType.number({ description: "The maximum value. Defaults to the sum of the item values." }),
        orientation,
        size,
        status: LogicType.boolean({ description: "Display the current total progress value." })
    },
    slots: {
        "item": ItemSlot,
        "item-label": ItemSlot,
        "item-leading": ItemSlot,
        "item-trailing": ItemSlot,
        "status": LogicType.object({ percent: LogicType.number() })
    }
} satisfies TComponent;

export default progressGroup;
