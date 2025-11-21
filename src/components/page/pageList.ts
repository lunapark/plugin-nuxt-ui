import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageList from "@nuxt/ui/components/PageList.vue";

const pageList = {
    component: PageList,
    name: "Page/PageList",
    properties: {
        divide: LogicType.boolean()
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageList;
export const PageListProps = LogicUtil.partial(LogicType.object(pageList.properties));
