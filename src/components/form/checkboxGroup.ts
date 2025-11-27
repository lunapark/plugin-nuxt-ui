import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import CheckboxGroup from "@nuxt/ui/components/CheckboxGroup.vue";

import { AcceptableValues } from "@/lib/value.ts";
import { color, indicator, orientation, size } from "@/lib/variants.ts";

const CheckboxGroupItem = LogicType.union([
    ...AcceptableValues.elements,
    LogicUtil.partial(LogicType.object({
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        label: LogicType.string(),
        value: LogicType.string()
    }))
]);

const checkboxGroup = {
    component: CheckboxGroup,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/checbox-group"
    },
    models: {
        modelValue: LogicType.array(LogicType.union([LogicType.string(), LogicType.number(), LogicType.boolean()]))
    },
    name: "Form/CheckboxGroup",
    properties: {
        color,
        description: LogicType.string(),
        descriptionKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "description", description: "When `items` is an array of objects, select the field to use as the description." }),
        icon: LogicType.string(),
        id: LogicType.string(),
        indicator,
        items: LogicType.array(CheckboxGroupItem),
        labelKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "label", description: "When `items` is an array of objects, select the field to use as the label." }),
        legend: LogicType.string(),
        loop: LogicType.boolean({ description: "Whether keyboard navigation should loop around" }),
        name: LogicType.string({ description: "The name of the field. Submitted with its owning form as part of a name/value pair." }),
        orientation,
        required: LogicType.boolean({ description: "When `true`, indicates that the user must set the value before the owning form can be submitted." }),
        size,
        valueKey: LogicType.union([LogicType.string(), LogicType.number()], { default: "value", description: "When `items` is an array of objects, select the field to use as the value." }),
        variant: LogicType.string({ default: "list", enum: ["list", "card", "table"] })
    },
    slots: {
        description: LogicType.object({ item: CheckboxGroupItem }),
        label: LogicType.object({ item: CheckboxGroupItem }),
        legend: LogicType.void()
    }
} satisfies TComponent;

export default checkboxGroup;
