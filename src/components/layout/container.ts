import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Container from "@nuxt/ui/components/Container.vue";

const container = {
    component: Container,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/container"
    },
    name: "Layout/Container",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default container;
export const ContainerProps = LogicUtil.partial(LogicType.object(container.properties));
