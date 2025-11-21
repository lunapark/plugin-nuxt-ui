import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import FooterColumns from "@nuxt/ui/components/FooterColumns.vue";

import { LinkProps } from "@/components/navigation/link.ts";

const FooterColumnLink = LogicType.object({
    ...LogicUtil.omit(LinkProps, ["custom"]).properties,
    icon: LogicType.string({ optional: true }),
    label: LogicType.string()
});

const FooterColumn = LogicType.object({
    children: LogicType.array(FooterColumnLink, { optional: true }),
    label: LogicType.string()
});

const footerColumns = {
    component: FooterColumns,
    name: "Navigation/FooterColumns",
    properties: {
        columns: LogicType.array(FooterColumn)
    },
    slots: {
        "column-label": LogicType.object({ column: FooterColumn }),
        "default": LogicType.void(),
        "left": LogicType.void(),
        "link": LogicType.object({ active: LogicType.boolean(), link: FooterColumnLink }),
        "right": LogicType.void()
    }
} satisfies TComponent;

export default footerColumns;
export const FooterColumnsProps = LogicUtil.partial(LogicType.object(footerColumns.properties));
