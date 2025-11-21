import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageBody from "@nuxt/ui/components/PageBody.vue";

const pageBody = {
    component: PageBody,
    name: "Page/PageBody",
    properties: { },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default pageBody;
export const PageBodyProps = LogicUtil.partial(LogicType.object(pageBody.properties));
