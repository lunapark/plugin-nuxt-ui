import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Footer from "@nuxt/ui/components/Footer.vue";

const footer = {
    component: Footer,
    name: "Layout/Footer",
    properties: {},
    slots: {
        bottom: LogicType.void(),
        default: LogicType.void(),
        left: LogicType.void(),
        right: LogicType.void(),
        top: LogicType.void()
    }
} satisfies TComponent;

export default footer;
export const FooterProps = LogicUtil.partial(LogicType.object(footer.properties));
