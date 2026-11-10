import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Container from "@nuxt/ui/components/Container.vue";

const container = {
    build: {
        name: "UContainer"
    },
    component: Container,
    documentation: {
        description: "A layout element to center and constrain the width of your content.",
        link: "https://ui.nuxt.com/docs/components/container"
    },
    guides: ["site-layout"],
    name: "Layout/Container",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default container;
export const ContainerProps = LogicUtil.partial(LogicType.object(container.properties));
