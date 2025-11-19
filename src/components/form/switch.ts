import { LogicType, type TComponent } from "@luna-park/plugin";
import Switch from "@nuxt/ui/components/Switch.vue";

import { color, size } from "@/lib/variants.ts";

const sw = {
    component: Switch,
    models: {
        modelValue: LogicType.boolean()
    },
    name: "Form/Switch",
    properties: {
        checkedIcon: LogicType.string({ description: "Icon when the switch is checked." }),
        color,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        label: LogicType.string(),
        loading: LogicType.boolean({ description: "Display loading icon when true." }),
        loadingIcon: LogicType.string({ description: "Icon to display when loading." }),
        name: LogicType.string(),
        required: LogicType.boolean(),
        size,
        uncheckedIcon: LogicType.string({ description: "Icon when the switch is unchecked." })
    },
    slots: {
        description: LogicType.object({ description: LogicType.string() }),
        label: LogicType.object({ label: LogicType.string() })
    }
} satisfies TComponent;

export default sw;
