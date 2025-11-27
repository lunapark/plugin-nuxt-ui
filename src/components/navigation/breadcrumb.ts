import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Breadcrumb from "@nuxt/ui/components/Breadcrumb.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { LinkProps } from "@/components/navigation/link.ts";

const BreadcrumbItem = LogicUtil.partial(LogicType.object({
    ...LogicUtil.omit(LinkProps, ["raw", "custom"]).properties,
    avatar: AvatarProps,
    icon: LogicType.string(),
    label: LogicType.string(),
    slot: LogicType.string()
}));

const breadcrumb = {
    component: Breadcrumb,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/breadcrumb"
    },
    name: "Navigation/Breadcrumb",
    properties: {
        items: LogicType.array(BreadcrumbItem),
        labelKey: LogicType.string({ default: "label" }),
        separatorIcon: LogicType.string()
    },
    slots: {
        item: LogicType.object({ active: LogicType.boolean(), index: LogicType.number(), item: BreadcrumbItem }),
        separator: LogicType.void()
    }
} satisfies TComponent;

export default breadcrumb;
export const BreadcrumbProps = LogicUtil.partial(LogicType.object(breadcrumb.properties));
