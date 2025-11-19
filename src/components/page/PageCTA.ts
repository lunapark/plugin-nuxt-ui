import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageCTA from "@nuxt/ui/components/PageCTA.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { orientation, variant } from "@/lib/variants.ts";

const pageCTA = {
    component: PageCTA,
    name: "Page/PageCTA",
    properties: {
        description: LogicType.string(),
        links: LogicType.array(ButtonProps, { description: "Display a list of Button under the description." }),
        orientation,
        reverse: LogicType.boolean({ description: "Reverse the order of the default slot." }),
        title: LogicType.string(),
        variant
    },
    slots: {
        body: LogicType.void(),
        bottom: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        links: LogicType.void(),
        title: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default pageCTA;
export const PageCTAProps = LogicUtil.partial(LogicType.object(pageCTA.properties));
