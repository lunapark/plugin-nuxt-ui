import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Select from "@nuxt/ui/components/Select.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { ComponentIconsProps } from "@/lib/icon.ts";
import { AcceptableValues } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

export const SelectItem = LogicType.union([
    ...AcceptableValues.elements,
    LogicUtil.partial(LogicType.object({
        avatar: AvatarProps,
        chip: ChipProps,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        icon: LogicType.string(),
        label: LogicType.string(),
        type: LogicType.string({ enum: ["label", "separator", "item"] }),
        value: AcceptableValues
    }))
]);

const select = {
    component: Select,
    models: {
        modelValue: AcceptableValues
    },
    name: "Form/Select",
    properties: {
        ...ComponentIconsProps.properties,
        arrow: LogicType.boolean({ description: "Show arrow icon." }),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        defaultOpen: LogicType.boolean(),
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        multiple: LogicType.boolean(),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the select is empty." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        required: LogicType.boolean(),
        size,
        variant
    },
    slots: {
        default: LogicType.void(),
        item: LogicType.void({ item: SelectItem }),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default select;
