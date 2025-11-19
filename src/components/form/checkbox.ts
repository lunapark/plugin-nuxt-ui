import { LogicType, type TComponent } from "@luna-park/plugin";
import Checkbox from "@nuxt/ui/components/Checkbox.vue";

import { color, indicator, size, variant } from "@/lib/variants.ts";

const checkbox = {
    component: Checkbox,
    emits: {
        change: LogicType.function(LogicType.object(), LogicType.unknown())
    },
    models: {
        modelValue: LogicType.boolean()
    },
    name: "Form/Checkbox",
    properties: {
        color,
        description: LogicType.string(),
        disabled: LogicType.boolean({ description: "Prevent interaction." }),
        icon: LogicType.string({ description: "The icon displayed when checked." }),
        id: LogicType.string(),
        indeterminateIcon: LogicType.string({ description: "The icon displayed when indeterminate." }),
        indicator: { ...indicator, description: "Position of the indicator." },
        label: LogicType.string(),
        name: LogicType.string({ description: "The name of the field. Submitted with its owning form as part of a name/value pair." }),
        required: LogicType.boolean({ description: "When `true`, indicates that the user must set the value before the owning form can be submitted." }),
        size,
        variant: LogicType.string({ default: "list", enum: ["list", "card"] })
    },
    slots: {
        description: LogicType.object({ description: LogicType.string() }),
        label: LogicType.object({ label: LogicType.string() })
    }
} satisfies TComponent;

export default checkbox;
