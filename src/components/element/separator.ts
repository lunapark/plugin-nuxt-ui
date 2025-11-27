import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Separator from "@nuxt/ui/components/Separator.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { color, orientation, size } from "@/lib/variants.ts";

const separator = {
    component: Separator,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/separator"
    },
    name: "Element/Separator",
    properties: {
        avatar: AvatarProps,
        color,
        decorative: LogicType.boolean({ description: "When true, mark as decorative for a11y." }),
        icon: LogicType.string({ description: "Display an icon in the middle." }),
        label: LogicType.string({ description: "Display a label in the middle." }),
        orientation,
        size,
        type: LogicType.string({ enum: ["solid", "dashed", "dotted"] })
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default separator;
export const SeparatorProps = LogicUtil.partial(LogicType.object(separator.properties));
