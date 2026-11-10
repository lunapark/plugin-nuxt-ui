import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Page from "@nuxt/ui/components/Page.vue";

const page = {
    build: {
        name: "UPage"
    },
    component: Page,
    documentation: {
        description: "A grid layout for your pages with left and right columns.",
        link: "https://ui.nuxt.com/docs/components/page"
    },
    guides: ["page"],
    name: "Page/Page",
    properties: {},
    slots: {
        default: LogicType.void(),
        left: LogicType.void(),
        right: LogicType.void()
    }
} satisfies TComponent;

export default page;
export const PageProps = LogicUtil.partial(LogicType.object(page.properties));
