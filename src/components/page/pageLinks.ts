import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageLinks from "@nuxt/ui/components/PageLinks.vue";

import { LinkProps } from "@/components/navigation/link.ts";

const PageLink = LogicType.object({
    ...LogicUtil.omit(LinkProps, ["custom"]).properties,
    icon: LogicType.string({ optional: true }),
    label: LogicType.string()
});

const pageLinks = {
    component: PageLinks,
    name: "Page/PageLinks",
    properties: {
        links: LogicType.array(PageLink),
        title: LogicType.string()
    },
    slots: {
        link: LogicType.object({ active: LogicType.boolean(), link: PageLink }),
        title: LogicType.object({ active: LogicType.boolean(), link: PageLink })
    }
} satisfies TComponent;

export default pageLinks;
export const PageLinksProps = LogicUtil.partial(LogicType.object(pageLinks.properties));
