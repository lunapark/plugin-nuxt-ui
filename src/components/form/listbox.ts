import { LogicType, type TComponent } from "@luna-park/plugin";
import Listbox from "@nuxt/ui/components/Listbox.vue";

import { SelectItem } from "@/components/form/select.ts";
import { iconType } from "@/lib/icon.ts";
import { AcceptableValues, MaybeArray } from "@/lib/value.ts";
import { color, orientation, size } from "@/lib/variants.ts";

const ItemSlot = LogicType.object({ index: LogicType.number(), item: SelectItem });

const listbox = {
    build: {
        name: "UListbox"
    },
    component: Listbox,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/listbox"
    },
    emits: {
        change: LogicType.void()
    },
    models: {
        modelValue: MaybeArray(AcceptableValues)
    },
    name: "Form/Listbox",
    properties: {
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        descriptionKey: LogicType.string({ default: "description", description: "The key used to get the description from the item." }),
        disabled: LogicType.boolean(),
        filter: LogicType.boolean({ description: "Display a search input to filter the items." }),
        filterFields: LogicType.array(LogicType.string(), { description: "Fields to filter items by." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        highlightOnHover: LogicType.boolean({ description: "Highlight the item when hovered." }),
        items: LogicType.array(SelectItem),
        labelKey: LogicType.string({ default: "label", description: "The key used to get the label from the item." }),
        loading: LogicType.boolean(),
        loadingIcon: iconType(),
        multiple: LogicType.boolean(),
        name: LogicType.string(),
        orientation: { ...orientation, default: "vertical" },
        required: LogicType.boolean(),
        selectedIcon: iconType({ description: "The icon displayed when an item is selected." }),
        selectionBehavior: LogicType.string({ description: "How multiple selection should behave in the collection.", enum: ["replace", "toggle"] }),
        size,
        valueKey: LogicType.string({ description: "When `items` is an array of objects, select the field to use as the value." }),
        virtualize: LogicType.boolean({ description: "Enable virtualization for large lists." })
    },
    slots: {
        "empty": LogicType.object({ searchTerm: LogicType.string() }),
        "item": ItemSlot,
        "item-description": ItemSlot,
        "item-label": ItemSlot,
        "item-leading": ItemSlot,
        "item-trailing": ItemSlot,
        "loading": LogicType.void()
    }
} satisfies TComponent;

export default listbox;
