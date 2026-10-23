import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import SelectMenu from "@nuxt/ui/components/SelectMenu.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { SelectItem } from "@/components/form/select.ts";
import { PopoverContentProps } from "@/components/overlay/popover.ts";
import { withCollisionBoundary } from "@/lib/boundary.ts";
import { ComponentIconsProps } from "@/lib/componentIcons.ts";
import { iconType } from "@/lib/icon.ts";
import { AcceptableValues } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

const selectMenu = {
    build: {
        name: "USelectMenu"
    },
    component: withCollisionBoundary(SelectMenu),
    documentation: {
        link: "https://ui.nuxt.com/docs/components/select-menu"
    },
    emits: {
        create: LogicType.object({ item: LogicType.string() })
    },
    models: (props) => ({
        modelValue: props.multiple?.value ? LogicType.array(AcceptableValues) : AcceptableValues,
        open: LogicType.boolean()
    }),
    name: "Form/SelectMenu",
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
        defaultOpen: LogicType.boolean(),
        descriptionKey: LogicType.string({ default: "description", description: "When `items` is an array of objects, select the field to use as the description." }),
        disabled: LogicType.boolean(),
        filterFields: LogicType.array(LogicType.string(), { description: "Fields to filter items by." }),
        fixed: LogicType.boolean({ description: "Keep the mobile text size on all breakpoints." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        highlightOnHover: LogicType.boolean({ description: "When `true`, hover over item will trigger highlight." }),
        id: LogicType.string(),
        ignoreFilter: LogicType.boolean({ description: "When `true`, disable the default filters, useful for custom filtering." }),
        items: LogicType.array(SelectItem),
        labelKey: LogicType.string({ default: "label", description: "When `items` is an array of objects, select the field to use as the label." }),
        loop: LogicType.boolean({ description: "Whether keyboard navigation should loop around." }),
        multiple: LogicType.boolean(),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the select is empty." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        required: LogicType.boolean(),
        resetSearchTermOnBlur: LogicType.boolean({ description: "Whether to reset the searchTerm when the input loses focus." }),
        resetSearchTermOnSelect: LogicType.boolean({ description: "Whether to reset the searchTerm when an item is selected." }),
        searchInput: LogicType.boolean({ description: "Whether to display the search input." }),
        selectedIcon: iconType({ description: "The icon displayed when an item is selected." }),
        size,
        valueKey: LogicType.string({ default: "value", description: "When `items` is an array of objects, select the field to use as the value." }),
        variant,
        virtualize: LogicType.boolean({ description: "Enable virtualization for the menu items." })
    },
    slots: {
        default: LogicType.void(),
        empty: LogicType.void(),
        item: LogicType.object({ item: SelectItem }),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default selectMenu;
export const SelectMenuProps = LogicUtil.partial(LogicType.object(selectMenu.properties));
