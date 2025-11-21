import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageColumns from "@nuxt/ui/components/PageColumns.vue";

const pageColumns = {
    component: PageColumns,
    name: "Page/PageColumns",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageColumns;
export const PageColumnsProps = LogicUtil.partial(LogicType.object(pageColumns.properties));
