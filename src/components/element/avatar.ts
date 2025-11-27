import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Avatar from "@nuxt/ui/components/Avatar.vue";

import { size } from "@/lib/variants.ts";

const avatar = {
    component: Avatar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/avatar"
    },
    name: "Element/Avatar",
    properties: {
        alt: LogicType.string(),
        chip: LogicType.boolean(),
        icon: LogicType.string(),
        size,
        src: LogicType.string(),
        text: LogicType.string()
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default avatar;
export const AvatarProps = LogicUtil.partial(LogicType.object(avatar.properties));
