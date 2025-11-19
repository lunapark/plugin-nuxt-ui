import { LogicType, type TComponent } from "@luna-park/plugin";
import User from "@nuxt/ui/components/User.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { orientation, size } from "@/lib/variants.ts";

export const user = {
    component: User,
    emits: {
        click: LogicType.union([LogicType.function(LogicType.object({ event: LogicType.interface("MouseEvent") }), LogicType.interface("void")), LogicType.interface("void")])
    },
    name: "Data/User",
    properties: {
        avatar: AvatarProps,
        chip: LogicType.union([LogicType.boolean(), ChipProps]),
        description: LogicType.string(),
        name: LogicType.string(),
        orientation: { ...orientation, description: "The orientation of the user." },
        size,
        target: LogicType.string({ enum: ["_blank", "_self", "_parent", "_top"] }),
        to: LogicType.string()
    },
    slots: {
        avatar: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        name: LogicType.void()
    }
} satisfies TComponent;

export default user;
