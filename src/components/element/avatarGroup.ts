import type { TComponent } from "@luna-park/plugin";
import { LogicType } from "@luna-park/plugin";
import AvatarGroup from "@nuxt/ui/components/AvatarGroup.vue";

import { color, size } from "@/lib/variants.ts";

const avatarGroup = {
    build: {
        name: "UAvatarGroup"
    },
    component: AvatarGroup,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/avatar-group"
    },
    name: "Element/AvatarGroup",
    properties: {
        color: { ...color, default: "neutral" },
        max: LogicType.number({ description: "The maximum number of avatars to display." }),
        size
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default avatarGroup;
