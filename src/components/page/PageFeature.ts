import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageFeature from "@nuxt/ui/components/PageFeature.vue";

import { LinkProps } from "@/lib/link.ts";
import { orientation } from "@/lib/variants.ts";

const pagefeature = {
    component: PageFeature,
    name: "Page/PageFeature",
    properties: {
        ...LogicUtil.pick(LinkProps, ["to", "target"]).properties,
        description: LogicType.string(),
        icon: LogicType.string({ description: "The icon displayed next to the title." }),
        orientation,
        title: LogicType.string()
    },
    slots: {
        default: LogicType.void(),
        description: LogicType.void(),
        leading: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default pagefeature;
export const PageFeatureProps = LogicUtil.partial(LogicType.object(pagefeature.properties));
