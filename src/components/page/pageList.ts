import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageList from "@nuxt/ui/components/PageList.vue";

const pageList = {
    component: PageList,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-list"
    },
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
