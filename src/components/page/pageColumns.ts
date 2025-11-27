import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageColumns from "@nuxt/ui/components/PageColumns.vue";

const pageColumns = {
    component: PageColumns,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-column"
    },
    name: "Page/PageColumns",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageColumns;
export const PageColumnsProps = LogicUtil.partial(LogicType.object(pageColumns.properties));
