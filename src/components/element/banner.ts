import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Banner from "@nuxt/ui/components/Banner.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { LinkProps } from "@/components/navigation/link.ts";
import { color } from "@/lib/variants.ts";

const banner = {
    component: Banner,
    emits: {
        close: LogicType.function()
    },
    name: "Element/Banner",
    properties: {
        ...LogicUtil.pick(LinkProps, ["to", "target"]).properties,
        actions: LogicType.array(ButtonProps, { description: "Display a list of actions next to the title." }),
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the banner." }),
        closeIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "The icon displayed in the close button." }),
        color,
        icon: LogicType.string({ description: "The icon displayed next to the title." }),
        title: LogicType.string()
    },
    slots: {
        actions: LogicType.void(),
        close: LogicType.void(),
        leading: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default banner;
