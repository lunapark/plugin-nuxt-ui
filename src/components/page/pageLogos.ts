import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageLogos from "@nuxt/ui/components/PageLogos.vue";

import { MarqueeProps } from "@/components/data/marquee.ts";

const PageLogoItem = LogicType.union([LogicType.string(), LogicType.object({
    alt: LogicType.string(),
    src: LogicType.string()
})]);

const pageLogos = {
    component: PageLogos,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-logos"
    },
    name: "Page/PageLogos",
    properties: {
        items: LogicType.array(PageLogoItem),
        marquee: LogicType.union([LogicType.boolean(), MarqueeProps]),
        title: LogicType.string()
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageLogos;
export const PageLogosProps = LogicUtil.partial(LogicType.object(pageLogos.properties));
