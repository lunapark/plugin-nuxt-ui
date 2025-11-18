import { LogicType, type TComponent } from "@luna-park/plugin";
import Skeleton from "@nuxt/ui/components/Skeleton.vue";

const skeleton = {
    component: Skeleton,
    name: "Element/Skeleton",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default skeleton;
