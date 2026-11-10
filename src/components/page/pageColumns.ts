import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import PageColumns from "@nuxt/ui/components/PageColumns.vue";

const pageColumns = {
    build: {
        name: "UPageColumns"
    },
    component: PageColumns,
    documentation: {
        description: "A responsive multi-column layout system for organizing content side-by-side.",
        link: "https://ui.nuxt.com/docs/components/page-columns"
    },
    guides: ["lists"],
    name: "Page/PageColumns",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageColumns;
export const PageColumnsProps = LogicUtil.partial(LogicType.object(pageColumns.properties));
