import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import RadioGroup from "@nuxt/ui/components/RadioGroup.vue";

import { AcceptableValues } from "@/lib/value.ts";
import { color, indicator, orientation, size, variant } from "@/lib/variants.ts";

const RadioGroupItem = LogicType.union([
    ...AcceptableValues.elements,
    LogicUtil.partial(LogicType.object({
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        label: LogicType.string(),
        value: AcceptableValues
    }))
]);

const radioGroup = {
    component: RadioGroup,
    emits: {
        change: LogicType.function()
    },
    models: {
        modelValue: AcceptableValues
    },
    name: "Form/RadioGroup",
    properties: {
        color,
        disabled: LogicType.boolean({ description: "Prevent interaction with radio items." }),
        indicator,
        items: LogicType.array(RadioGroupItem),
        legend: LogicType.string(),
        loop: LogicType.boolean({ description: "Loop keyboard navigation." }),
        name: LogicType.string(),
        orientation,
        required: LogicType.boolean(),
        size,
        variant
    },
    slots: {
        description: LogicType.object({ item: RadioGroupItem }),
        label: LogicType.object({ item: RadioGroupItem }),
        legend: LogicType.void()
    }
} satisfies TComponent;

export default radioGroup;
