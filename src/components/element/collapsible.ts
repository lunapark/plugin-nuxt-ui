import { LogicType, type TComponent } from "@luna-park/plugin";
import Collapsible from "@nuxt/ui/components/Collapsible.vue";

const collapsible = {
    component: Collapsible,
    models: {
        open: LogicType.boolean()
    },
    name: "Element/Collapsible",
    properties: {
        defaultOpen: LogicType.boolean({ description: "Initial open state." }),
        disabled: LogicType.boolean({ description: "When true, prevents user interaction." }),
        unmountOnHide: LogicType.boolean({ description: "Unmount content when closed." })
    },
    slots: {
        content: LogicType.void(),
        default: LogicType.object({ open: LogicType.boolean() })
    }
} satisfies TComponent;

export default collapsible;
