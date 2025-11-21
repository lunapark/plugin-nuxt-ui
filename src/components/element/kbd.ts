import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Kbd from "@nuxt/ui/components/Kbd.vue";

import { color, size, variant } from "@/lib/variants.ts";

const kbd = {
    component: Kbd,
    name: "Element/Kbd",
    properties: {
        color,
        size,
        value: LogicType.string(),
        variant
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default kbd;
export const KbdProps = LogicUtil.partial(LogicType.object(kbd.properties));
