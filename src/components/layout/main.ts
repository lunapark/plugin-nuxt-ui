import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Main from "@nuxt/ui/components/Main.vue";

const main = {
    name: "Layout/Main",
    component: Main,
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default main;
export const MainProps = LogicUtil.partial(LogicType.object(main.properties));
