import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageAnchors from "@nuxt/ui/components/PageAnchors.vue";

import { LinkProps } from "@/lib/link.ts";

const PageAnchor = LogicType.object({
    ...LogicUtil.omit(LinkProps, ["custom"]).properties,
    icon: LogicType.string({ optional: true }),
    label: LogicType.string()
});

const pageAnchors = {
    component: PageAnchors,
    name: "Page/PageAnchors",
    properties: {
        links: LogicType.array(PageAnchor, { description: "The links to display in the anchors." })
    },
    slots: {
        link: LogicType.object({ active: LogicType.boolean(), link: PageAnchor })
    }
} satisfies TComponent;

export default pageAnchors;
export const PageAnchorsProps = LogicUtil.partial(LogicType.object(pageAnchors.properties));
