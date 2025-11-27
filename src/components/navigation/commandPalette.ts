import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import CommandPalette from "@nuxt/ui/components/CommandPalette.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { ChipProps } from "@/components/element/chip.ts";
import { KbdProps } from "@/components/element/kbd.ts";
import { LinkProps } from "@/components/navigation/link.ts";

export const CommandPaletteItem = LogicUtil.partial(LogicType.object({
    ...LogicUtil.omit(LinkProps, ["type", "raw", "custom"]).properties,
    active: LogicType.boolean(),
    avatar: AvatarProps,
    chip: ChipProps,
    description: LogicType.string(),
    disabled: LogicType.boolean(),
    icon: LogicType.string(),
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
    highlightedIcon: LogicType.string(),
    id: LogicType.string({ required: true }),
    ignoreFilter: LogicType.boolean(),
    items: LogicType.array(CommandPaletteItem),
    label: LogicType.string(),
    slot: LogicType.string()
}));

const commandPalette = {
    component: CommandPalette,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/command-palette"
    },
    name: "Navigation/CommandPalette",
    properties: {
        autofocus: LogicType.boolean({ description: "Automatically focus the input when component is mounted." }),
        back: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a button to navigate back in history." }),
        backIcon: LogicType.string({ description: "The icon displayed in the back button." }),
        childrenIcon: LogicType.string({ description: "The icon displayed when an item has children." }),
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button in the input." }),
        closeIcon: LogicType.string({ description: "The icon displayed in the close button." }),
        descriptionKey: LogicType.string(),
        disabled: LogicType.boolean({ description: "When `true`, prevents the user from interacting with listbox" }),
        groups: LogicType.array(CommandPaletteGroup),
        highlightOnHover: LogicType.boolean({ description: "When `true`, hover over item will trigger highlight" }),
        icon: LogicType.string({ description: "The icon displayed in the input." }),
        labelKey: LogicType.string(),
        loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed." }),
        loadingIcon: LogicType.string({ description: "The icon when the `loading` prop is `true`." }),
        modelValue: LogicType.unknown({ description: "The controlled value of the listbox." }),
        multiple: LogicType.boolean({ description: "Whether multiple options can be selected or not." }),
        placeholder: LogicType.string({ description: "The placeholder text for the input." }),
        preserveGroupOrder: LogicType.boolean({ description: "Whether to preserve the order of groups." }),
        searchTerm: LogicType.string(),
        selectedIcon: LogicType.string({ description: "The icon displayed when an item is selected." }),
        selectionBehavior: LogicType.string({ default: "toggle", description: "How multiple selection should behave.", enum: ["replace", "toggle"] }),
        trailingIcon: LogicType.string({ description: "The icon displayed on the right side of the input." }),
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
