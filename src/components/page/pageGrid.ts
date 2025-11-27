import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageGrid from "@nuxt/ui/components/PageGrid.vue";

const pageGrid = {
    component: PageGrid,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/page-grid"
    },
    name: "Page/PageGrid",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageGrid;
export const PageGridProps = LogicUtil.partial(LogicType.object(pageGrid.properties));
