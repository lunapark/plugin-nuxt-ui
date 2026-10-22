import type { TComponent } from "@luna-park/plugin";
import { LogicType } from "@luna-park/plugin";
import InputMenu from "@nuxt/ui/components/InputMenu.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { PopoverContentProps } from "@/components/overlay/popover.ts";
import { withCollisionBoundary } from "@/lib/boundary.ts";
import { ComponentIconsProps } from "@/lib/componentIcons.ts";
import { iconType } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const InputMenuItem = LogicType.union([
    LogicType.string(),
    LogicType.number(),
    LogicType.object({
        avatar: AvatarProps,
        chip: ChipProps,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        icon: iconType(),
        label: LogicType.string(),
        type: LogicType.string({ enum: ["label", "separator", "item"] })
    })
]);

const inputMenu = {
    build: {
        name: "UInputMenu"
    },
    component: withCollisionBoundary(InputMenu),
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input-menu"
    },
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.number()]), // TODO: Add dynamic for array
        open: LogicType.boolean()
    },
    name: "Form/InputMenu",
    properties: {
        ...ComponentIconsProps.properties,
        arrow: LogicType.boolean({ description: "Show arrow icon." }),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        clear: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a clear button to reset the model value." }),
        clearIcon: iconType({ description: "The icon displayed in the clear button." }),
        color,
        content: PopoverContentProps,
        createItem: LogicType.boolean({ description: "Allow creating new items." }),
        deleteIcon: iconType({ description: "The icon displayed to delete a tag. Works only when `multiple` is `true`." }),
        descriptionKey: LogicType.string({ default: "description", description: "When `items` is an array of objects, select the field to use as the description." }),
        disabled: LogicType.boolean(),
        filterFields: LogicType.array(LogicType.string(), { description: "Fields to filter items by." }),
        fixed: LogicType.boolean({ description: "Keep the mobile text size on all breakpoints." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        highlightOnHover: LogicType.boolean({ description: "When `true`, hover over item will trigger highlight." }),
        id: LogicType.string(),
        ignoreFilter: LogicType.boolean({ description: "When `true`, disable the default filters, useful for custom filtering." }),
        items: LogicType.array(InputMenuItem),
        labelKey: LogicType.string({ default: "label", description: "When `items` is an array of objects, select the field to use as the label." }),
        loop: LogicType.boolean({ description: "Whether keyboard navigation should loop around." }),
        mode: LogicType.string({ default: "combobox", description: "`combobox` selects items from the suggestions, `autocomplete` keeps free-form text with optional suggestions.", enum: ["combobox", "autocomplete"] }),
        multiple: LogicType.boolean({ description: "Whether multiple options can be selected or not." }),
        name: LogicType.string(),
        openOnClick: LogicType.boolean({ description: "Whether to open the menu when the input is clicked." }),
        openOnFocus: LogicType.boolean({ description: "Whether to open the menu when the input is focused." }),
        placeholder: LogicType.string({ description: "Placeholder text when the input is empty." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        readonly: LogicType.boolean({ description: "Make the input read-only." }),
        required: LogicType.boolean(),
        resetSearchTermOnBlur: LogicType.boolean({ description: "Whether to reset the searchTerm when the input loses focus." }),
        resetSearchTermOnSelect: LogicType.boolean({ description: "Whether to reset the searchTerm when an item is selected." }),
        selectedIcon: iconType({ description: "The icon displayed when an item is selected." }),
        size,
        valueKey: LogicType.string({ default: "value", description: "When `items` is an array of objects, select the field to use as the value." }),
        variant,
        virtualize: LogicType.boolean({ description: "Enable virtualization for the menu items." })
    },
    slots: {
        empty: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default inputMenu;
