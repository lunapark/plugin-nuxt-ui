import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
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
    build: {
        name: "URadioGroup"
    },
    component: RadioGroup,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/radio-group"
    },
    emits: {
        change: LogicType.void()
    },
    models: {
        modelValue: AcceptableValues
    },
    name: "Form/RadioGroup",
    properties: {
        color,
        descriptionKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "description", description: "When `items` is an array of objects, select the field to use as the description." }),
        disabled: LogicType.boolean({ description: "Prevent interaction with radio items." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        indicator,
        items: LogicType.array(RadioGroupItem),
        labelKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "label", description: "When `items` is an array of objects, select the field to use as the label." }),
        legend: LogicType.string(),
        loop: LogicType.boolean({ description: "Loop keyboard navigation." }),
        name: LogicType.string(),
        orientation,
        required: LogicType.boolean(),
        size,
        valueKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "value", description: "When `items` is an array of objects, select the field to use as the value." }),
        variant: LogicType.string({ default: "list", enum: ["list", "card", "table"] })
    },
    slots: {
        description: LogicType.object({ item: RadioGroupItem }),
        label: LogicType.object({ item: RadioGroupItem }),
        legend: LogicType.void()
    }
} satisfies TComponent;

export default radioGroup;
