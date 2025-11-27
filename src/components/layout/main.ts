import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Main from "@nuxt/ui/components/Main.vue";

const main = {
    component: Main,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/main"
    },
    name: "Layout/Main",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default main;
export const MainProps = LogicUtil.partial(LogicType.object(main.properties));
