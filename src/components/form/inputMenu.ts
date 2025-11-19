import { LogicType, type TComponent } from "@luna-park/plugin";
import InputMenu from "@nuxt/ui/components/InputMenu.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { ComponentIconsProps } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const InputMenuItem = LogicType.union([
    LogicType.string(),
    LogicType.number(),
    LogicType.object({
        avatar: AvatarProps,
        chip: ChipProps,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        icon: LogicType.string(),
        label: LogicType.string(),
        type: LogicType.string({ enum: ["label", "separator", "item"] })
    })
]);

const inputMenu = {
    component: InputMenu,
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.number()]) // TODO: Add dynamic for array
    },
    name: "Form/InputMenu",
    properties: {
        ...ComponentIconsProps.properties,
        arrow: LogicType.boolean({ description: "Show arrow icon." }),
        autofocus: LogicType.boolean(),
        autoFocusDelay: LogicType.number(),
        autofocusDelay: LogicType.number(),
        color,
        createItem: LogicType.boolean({ description: "Allow creating new items." }),
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        id: LogicType.string(),
        items: LogicType.array(InputMenuItem),
        multiple: LogicType.boolean({ description: "Whether multiple options can be selected or not." }),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "Placeholder text when the input is empty." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        readonly: LogicType.boolean({ description: "Make the input read-only." }),
        required: LogicType.boolean(),
        size,
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
