import { LogicType, type TComponent } from "@luna-park/plugin";
import SelectMenu from "@nuxt/ui/components/SelectMenu.vue";

import { SelectItem } from "@/components/form/select.ts";
import { ComponentIconsProps } from "@/lib/icon.ts";
import { AcceptableValues } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

const selectMenu = {
    component: SelectMenu,
    emits: {
        create: LogicType.function(LogicType.object({ item: LogicType.string() }), LogicType.unknown())
    },
    models: {
        modelValue: AcceptableValues
    },
    name: "Form/SelectMenu",
    properties: {
        ...ComponentIconsProps.properties,
        arrow: LogicType.boolean({ description: "Show arrow icon." }),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        createItem: LogicType.boolean({ description: "Allow creating new items." }),
        defaultOpen: LogicType.boolean(),
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        items: LogicType.array(SelectItem),
        multiple: LogicType.boolean(),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the select is empty." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        required: LogicType.boolean(),
        size,
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
