import { LogicType, type TComponent } from "@luna-park/plugin";
import Skeleton from "@nuxt/ui/components/Skeleton.vue";

const skeleton = {
    build: {
        name: "USkeleton"
    },
    component: Skeleton,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/skeleton"
    },
    name: "Element/Skeleton",
    properties: {},
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default skeleton;
