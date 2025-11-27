import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageHeader from "@nuxt/ui/components/PageHeader.vue";

import { ButtonProps } from "@/components/element/button.ts";

const pageHeader = {
    component: PageHeader,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-header"
    },
    name: "Page/PageHeader",
    properties: {
        description: LogicType.string(),
        headline: LogicType.string(),
        links: LogicType.array(ButtonProps, { description: "Display a list of Button next to the title." }),
        title: LogicType.string()
    },
    slots: {
        default: LogicType.void(),
        description: LogicType.void(),
        headline: LogicType.void(),
        links: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default pageHeader;
export const PageHeaderProps = LogicUtil.partial(LogicType.object(pageHeader.properties));
