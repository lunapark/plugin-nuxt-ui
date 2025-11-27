import { LogicType, type TComponent } from "@luna-park/plugin";
import AvatarGroup from "@nuxt/ui/components/AvatarGroup.vue";

import { size } from "@/lib/variants.ts";

const avatarGroup = {
    component: AvatarGroup,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/avatar-group"
    },
    name: "Element/AvatarGroup",
    properties: {
        max: LogicType.number({ description: "The maximum number of avatars to display." }),
        size
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default avatarGroup;
