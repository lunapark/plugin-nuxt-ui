import { LogicType, type TComponent } from "@luna-park/plugin";
import InputNumber from "@nuxt/ui/components/InputNumber.vue";

import { color, orientation, size, variant } from "@/lib/variants.ts";

const inputNumber = {
    component: InputNumber,
    models: {
        modelValue: LogicType.number()
    },
    name: "Form/InputNumber",
    properties: {
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        decrement: LogicType.boolean({ description: "Show decrement button." }),
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        increment: LogicType.boolean({ description: "Show increment button." }),
        locale: LogicType.string({ description: "Locale for formatting/parsing." }),
        max: LogicType.number({ description: "Maximum value." }),
        min: LogicType.number({ description: "Minimum value." }),
        name: LogicType.string(),
        orientation,
        placeholder: LogicType.string({ description: "Placeholder text when empty." }),
        readOnly: LogicType.boolean(),
        required: LogicType.boolean(),
        size,
        step: LogicType.number({ description: "Step interval." }),
        stepSnapping: LogicType.boolean({ description: "Snap to step interval." }),
        variant
    },
    slots: {
        decrement: LogicType.void(),
        increment: LogicType.void()
    }
} satisfies TComponent;

export default inputNumber;
