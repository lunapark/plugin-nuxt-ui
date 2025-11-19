import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Page from "@nuxt/ui/components/Page.vue";

const page = {
    component: Page,
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
