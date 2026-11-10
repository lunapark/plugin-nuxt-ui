import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import PageAside from "@nuxt/ui/components/PageAside.vue";

const pageAside = {
    build: {
        name: "UPageAside"
    },
    component: PageAside,
    documentation: {
        description: "A sticky aside to display your page navigation.",
        link: "https://ui.nuxt.com/docs/components/page-aside"
    },
    guides: ["page"],
    name: "Page/PageAside",
    properties: {},
    slots: {
        bottom: LogicType.void(),
        default: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default pageAside;
export const PageAsideProps = LogicUtil.partial(LogicType.object(pageAside.properties));
