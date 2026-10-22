import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Avatar from "@nuxt/ui/components/Avatar.vue";

import { iconType } from "@/lib/icon.ts";
import { color, size } from "@/lib/variants.ts";

const avatar = {
    build: {
        name: "UAvatar"
    },
    component: Avatar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/avatar"
    },
    name: "Element/Avatar",
    properties: {
        alt: LogicType.string(),
        chip: LogicType.boolean(),
        color: { ...color, default: "neutral" },
        icon: iconType(),
        loading: LogicType.string({ description: "How the browser should load the image.", enum: ["lazy", "eager"] }),
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
