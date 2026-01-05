import { Icon } from "@iconify/vue";
import { LogicType, type TComponent } from "@luna-park/plugin";

const icon = {
    build: {
        name: "UIcon"
    },
    component: Icon,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/icon"
    },
    name: "Element/Icon",
    properties: {
        icon: LogicType.string(),
        mode: LogicType.string({ enum: ["style", "bg", "mask", "svg"] })
    }
} satisfies TComponent;

export default icon;
