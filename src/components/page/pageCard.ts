import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageCard from "@nuxt/ui/components/PageCard.vue";

import { LinkProps } from "@/components/navigation/link.ts";
import { color, orientation, variant } from "@/lib/variants.ts";

const pageCard = {
    component: PageCard,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-card"
    },
    name: "Page/PageCard",
    properties: {
        ...LogicUtil.pick(LinkProps, ["to", "target"]).properties,
        description: LogicType.string(),
        highlight: LogicType.boolean({ description: "Display a line around the page card." }),
        highlightColor: color,
        icon: LogicType.string({ description: "The icon displayed above the title." }),
        orientation,
        reverse: LogicType.boolean({ description: "Reverse the order of the default slot." }),
        spotlight: LogicType.boolean({ description: "Display a spotlight effect that follows your mouse cursor and highlights borders on hover." }),
        spotlightColor: color,
        title: LogicType.string(),
        variant
    },
    slots: {
        body: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        leading: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default pageCard;
export const PageCardProps = LogicUtil.partial(LogicType.object(pageCard.properties));
