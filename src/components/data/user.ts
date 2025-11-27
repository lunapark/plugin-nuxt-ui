import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import User from "@nuxt/ui/components/User.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { LinkProps } from "@/components/navigation/link.ts";
import { orientation, size } from "@/lib/variants.ts";

export const user = {
    component: User,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/user"
    },
    emits: {
        click: LogicType.union([LogicType.function(LogicType.object({ event: LogicType.interface("MouseEvent") }), LogicType.interface("void")), LogicType.interface("void")])
    },
    name: "Data/User",
    properties: {
        ...LogicUtil.pick(LinkProps, ["to", "target"]).properties,
        avatar: AvatarProps,
        chip: LogicType.union([LogicType.boolean(), ChipProps]),
        description: LogicType.string(),
        name: LogicType.string(),
        orientation: { ...orientation, description: "The orientation of the user." },
        size
    },
    slots: {
        avatar: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        name: LogicType.void()
    }
} satisfies TComponent;

export default user;
export const UserProps = LogicUtil.partial(LogicType.object(user.properties));
