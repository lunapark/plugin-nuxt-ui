import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageColumns from "@nuxt/ui/components/PageColumns.vue";

const pagecolumns = {
    component: PageColumns,
    name: "Page/PageColumns",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pagecolumns;
export const PageColumnsProps = LogicUtil.partial(LogicType.object(pagecolumns.properties));
