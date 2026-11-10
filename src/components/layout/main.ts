import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Main from "@nuxt/ui/components/Main.vue";

const main = {
    build: {
        name: "UMain"
    },
    component: Main,
    documentation: {
        description: "A main element that fills the available viewport height.",
        link: "https://ui.nuxt.com/docs/components/main"
    },
    guides: ["site-layout"],
    name: "Layout/Main",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default main;
export const MainProps = LogicUtil.partial(LogicType.object(main.properties));
