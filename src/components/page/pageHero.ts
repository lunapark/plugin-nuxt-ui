import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageHero from "@nuxt/ui/components/PageHero.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { orientation } from "@/lib/variants.ts";

const pageHero = {
    component: PageHero,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-hero"
    },
    name: "Page/PageHero",
    properties: {
        description: LogicType.string(),
        headline: LogicType.string(),
        links: LogicType.array(ButtonProps, { description: "Display a list of Button under the description." }),
        orientation,
        reverse: LogicType.boolean({ description: "Reverse the order of the default slot." }),
        title: LogicType.string()
    },
    slots: {
        body: LogicType.void(),
        bottom: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        headline: LogicType.void(),
        links: LogicType.void(),
        title: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default pageHero;
export const PageHeroProps = LogicUtil.partial(LogicType.object(pageHero.properties));
