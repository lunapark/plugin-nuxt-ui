import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageSection from "@nuxt/ui/components/PageSection.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { PageFeatureProps } from "@/components/page/pageFeature.ts";
import { orientation } from "@/lib/variants.ts";

const pageSection = {
    component: PageSection,
    name: "Page/PageSection",
    properties: {
        description: LogicType.string(),
        features: LogicType.array(PageFeatureProps, { description: "Display a list of PageFeature under the description." }),
        headline: LogicType.string({ description: "The headline displayed above the title." }),
        icon: LogicType.string({ description: "The icon displayed above the title." }),
        links: LogicType.array(ButtonProps, { description: "Display a list of Button under the description." }),
        orientation: { ...orientation, default: "vertical" },
        reverse: LogicType.boolean({ description: "Reverse the order of the default slot." }),
        title: LogicType.string()
    },
    slots: {
        body: LogicType.void(),
        bottom: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        features: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        headline: LogicType.void(),
        leading: LogicType.void(),
        links: LogicType.void(),
        title: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default pageSection;
export const PageSectionProps = LogicUtil.partial(LogicType.object(pageSection.properties));
