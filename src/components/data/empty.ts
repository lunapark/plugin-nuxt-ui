import { LogicType, type TComponent } from "@luna-park/plugin";
import Empty from "@nuxt/ui/components/Empty.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { size, variant } from "@/lib/variants.ts";

const empty = {
    component: Empty,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/empty"
    },
    name: "Data/Empty",
    properties: {
        actions: LogicType.array(ButtonProps, { description: "Display a list of Button in the body." }),
        avatar: AvatarProps,
        description: LogicType.string(),
        icon: LogicType.string({ description: "The icon displayed above the title." }),
        size,
        title: LogicType.string(),
        variant
    },
    slots: {
        actions: LogicType.void(),
        body: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        leading: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default empty;
