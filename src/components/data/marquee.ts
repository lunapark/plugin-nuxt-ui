import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Marquee from "@nuxt/ui/components/Marquee.vue";

import { orientation } from "@/lib/variants.ts";

export const marquee = {
    component: Marquee,
    name: "Data/Marquee",
    properties: {
        orientation: { ...orientation, description: "The orientation of the marquee." },
        overlay: LogicType.boolean({ description: "Display an overlay on the marquee." }),
        pauseOnHover: LogicType.boolean({ description: "Pause the marquee on hover." }),
        repeat: LogicType.number({ default: 4, description: "The number of times the marquee should repeat." }),
        reverse: LogicType.boolean({ description: "Reverse the direction of the marquee." })
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default marquee;
export const MarqueeProps = LogicUtil.partial(LogicType.object(marquee.properties));
