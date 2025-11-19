import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import PageAside from "@nuxt/ui/components/PageAside.vue";

const pageaside = {
    component: PageAside,
    name: "Page/PageAside",
    properties: {},
    slots: {
        bottom: LogicType.void(),
        default: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default pageaside;
export const PageAsideProps = LogicUtil.partial(LogicType.object(pageaside.properties));
