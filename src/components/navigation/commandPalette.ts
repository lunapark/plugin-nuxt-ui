import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import CommandPalette from "@nuxt/ui/components/CommandPalette.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { KbdProps } from "@/components/element/kbd.ts";
import { LinkProps } from "@/components/navigation/link.ts";
import { iconType } from "@/lib/icon.ts";
import { size } from "@/lib/variants.ts";

export const CommandPaletteItem = LogicUtil.partial(LogicType.object({
    ...LogicUtil.omit(LinkProps, ["type", "raw", "custom"]).properties,
    active: LogicType.boolean(),
    avatar: AvatarProps,
    chip: ChipProps,
    description: LogicType.string(),
    disabled: LogicType.boolean(),
    icon: iconType(),
    kbds: LogicType.array(KbdProps),
    label: LogicType.string(),
    loading: LogicType.boolean(),
    onSelect: LogicType.function(LogicType.object({ event: LogicType.interface("Event") }), LogicType.void()),
    placeholder: LogicType.string(),
    prefix: LogicType.string(),
    slot: LogicType.string(),
    suffix: LogicType.string()
}));

CommandPaletteItem.properties.children = LogicType.array(CommandPaletteItem, { optional: true });

export const CommandPaletteGroup = LogicUtil.partial(LogicType.object({
    highlightedIcon: iconType(),
    id: LogicType.string({ required: true }),
    ignoreFilter: LogicType.boolean(),
    items: LogicType.array(CommandPaletteItem),
    label: LogicType.string(),
    slot: LogicType.string()
}));

const commandPalette = {
    build: {
        name: "UCommandPalette"
    },
    component: CommandPalette,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/command-palette"
    },
    models: {
        searchTerm: LogicType.string()
    },
    name: "Navigation/CommandPalette",
    properties: {
        autofocus: LogicType.boolean({ description: "Automatically focus the input when component is mounted." }),
        back: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a button to navigate back in history." }),
        backIcon: iconType({ description: "The icon displayed in the back button." }),
        childrenIcon: iconType({ description: "The icon displayed when an item has children." }),
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button in the input." }),
        closeIcon: iconType({ description: "The icon displayed in the close button." }),
        descriptionKey: LogicType.string(),
        disabled: LogicType.boolean({ description: "When `true`, prevents the user from interacting with listbox" }),
        groups: LogicType.array(CommandPaletteGroup),
        highlightOnHover: LogicType.boolean({ description: "When `true`, hover over item will trigger highlight" }),
        icon: iconType({ description: "The icon displayed in the input." }),
        input: LogicType.boolean({ description: "Whether to display the search input." }),
        labelKey: LogicType.string(),
        loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed." }),
        loadingIcon: iconType({ description: "The icon when the `loading` prop is `true`." }),
        loop: LogicType.boolean({ description: "Whether keyboard navigation should loop around." }),
        modelValue: LogicType.unknown({ description: "The controlled value of the listbox." }),
        multiple: LogicType.boolean({ description: "Whether multiple options can be selected or not." }),
        placeholder: LogicType.string({ description: "The placeholder text for the input." }),
        preserveGroupOrder: LogicType.boolean({ description: "Whether to preserve the order of groups." }),
        searchDelay: LogicType.number({ description: "The delay in milliseconds before the search is triggered." }),
        selectedIcon: iconType({ description: "The icon displayed when an item is selected." }),
        selectionBehavior: LogicType.string({ default: "toggle", description: "How multiple selection should behave.", enum: ["replace", "toggle"] }),
        size,
        trailingIcon: iconType({ description: "The icon displayed on the right side of the input." }),
        valueKey: LogicType.string({ default: "value", description: "When `items` is an array of objects, select the field to use as the value." }),
        virtualize: LogicType.union([LogicType.boolean(), LogicType.object({
            estimateSize: LogicType.number({ optional: true }),
            overscan: LogicType.number({ optional: true })
        })], { description: "Enable virtualization for large lists." })
    },
    slots: {
        back: LogicType.void(),
        close: LogicType.void(),
        empty: LogicType.void(),
        footer: LogicType.void(),
        item: LogicType.object({ index: LogicType.number(), item: CommandPaletteItem })
    }
} satisfies TComponent;

export default commandPalette;
export const CommandPaletteProps = LogicUtil.partial(LogicType.object(commandPalette.properties));
