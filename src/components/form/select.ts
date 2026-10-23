import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Select from "@nuxt/ui/components/Select.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { PopoverContentProps } from "@/components/overlay/popover.ts";
import { withCollisionBoundary } from "@/lib/boundary.ts";
import { ComponentIconsProps } from "@/lib/componentIcons.ts";
import { iconType } from "@/lib/icon.ts";
import { AcceptableValues } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

export const SelectItem = LogicType.union([
    ...AcceptableValues.elements,
    LogicUtil.partial(LogicType.object({
        avatar: AvatarProps,
        chip: ChipProps,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        icon: iconType(),
        label: LogicType.string(),
        type: LogicType.string({ enum: ["label", "separator", "item"] }),
        value: AcceptableValues
    }))
]);

const select = {
    build: {
        name: "USelect"
    },
    component: withCollisionBoundary(Select),
    documentation: {
        link: "https://ui.nuxt.com/docs/components/select"
    },
    models: (props) => ({
        modelValue: props.multiple?.value ? LogicType.array(AcceptableValues) : AcceptableValues,
        open: LogicType.boolean()
    }),
    name: "Form/Select",
    properties: {
        ...ComponentIconsProps.properties,
        arrow: LogicType.boolean({ description: "Show arrow icon." }),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        content: PopoverContentProps,
        defaultOpen: LogicType.boolean(),
        descriptionKey: LogicType.string({ default: "description", description: "When `items` is an array of objects, select the field to use as the description." }),
        disabled: LogicType.boolean(),
        fixed: LogicType.boolean({ description: "Keep the mobile text size on all breakpoints." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        id: LogicType.string(),
        items: LogicType.array(SelectItem),
        labelKey: LogicType.string({ default: "label", description: "When `items` is an array of objects, select the field to use as the label." }),
        multiple: LogicType.boolean(),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the select is empty." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        required: LogicType.boolean(),
        selectedIcon: iconType({ description: "The icon displayed when an item is selected." }),
        size,
        valueKey: LogicType.string({ default: "value", description: "When `items` is an array of objects, select the field to use as the value." }),
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
