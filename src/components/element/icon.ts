import { LogicType, type TComponent } from "@luna-park/plugin";
import Icon from "@nuxt/ui/components/Icon.vue";

const icon = {
    component: Icon,
    name: "Element/Icon",
    properties: {
        mode: LogicType.string({ enum: ["svg", "css"] }),
        name: LogicType.string(),
        size: LogicType.union([LogicType.string(), LogicType.number()])
    }
} satisfies TComponent;

export default icon;
