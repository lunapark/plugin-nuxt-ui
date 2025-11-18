import { LogicType, type TComponent } from "@luna-park/plugin";
import Card from "@nuxt/ui/components/Card.vue";

import { variant } from "@/lib/variants.ts";

const card = {
    component: Card,
    name: "Element/Card",
    properties: {
        variant
    },
    slots: {
        default: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void()
    }
} satisfies TComponent;

export default card;
