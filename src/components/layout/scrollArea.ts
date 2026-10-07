import { LogicType, type TComponent } from "@luna-park/plugin";
import ScrollArea from "@nuxt/ui/components/ScrollArea.vue";

import { orientation } from "@/lib/variants.ts";

const scrollArea = {
    build: {
        name: "UScrollArea"
    },
    component: ScrollArea,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/scroll-area"
    },
    emits: {
        scroll: LogicType.boolean()
    },
    name: "Layout/ScrollArea",
    properties: {
        items: LogicType.array(LogicType.unknown(), { description: "Items to render through the default slot. Required for virtualization." }),
        orientation: { ...orientation, default: "vertical" },
        shadow: LogicType.boolean({ description: "Display a fading shadow on the scrollable edges." }),
        virtualize: LogicType.boolean({ description: "Enable virtualization for large lists." })
    },
    slots: {
        default: LogicType.object({ index: LogicType.number(), item: LogicType.unknown() })
    }
} satisfies TComponent;

export default scrollArea;
