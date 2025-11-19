import { LogicType, type TComponent } from "@luna-park/plugin";
import Badge from "@nuxt/ui/components/Badge.vue";

import { ComponentIconsProps } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const badge = {
    component: Badge,
    name: "Element/Badge",
    properties: {
        ...ComponentIconsProps.properties,
        color,
        icon: LogicType.string(),
        label: LogicType.string(),
        size,
        square: LogicType.boolean({ description: "Render the badge with equal padding on all sides." }),
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default badge;
export const BadgeProps = LogicType.object(badge.properties);
