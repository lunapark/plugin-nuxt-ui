import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import DropdownMenu from "@nuxt/ui/components/DropdownMenu.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { KbdProps } from "@/components/element/kbd.ts";
import { LinkProps } from "@/components/navigation/link.ts";
import { color, size } from "@/lib/variants.ts";

const DropdownMenuItem = LogicUtil.partial(LogicType.object({
    ...LogicUtil.omit(LinkProps, ["type", "raw", "custom"]).properties,
    avatar: AvatarProps,
    checked: LogicType.boolean(),
    color,
    defaultOpen: LogicType.boolean(),
    description: LogicType.string(),
    disabled: LogicType.boolean(),
    icon: LogicType.string(),
    kbds: LogicType.array(LogicType.union([LogicType.string(), KbdProps])),
    label: LogicType.string(),
    loading: LogicType.boolean(),
    onSelect: LogicType.function(LogicType.object({ event: LogicType.interface("Event") }), LogicType.void()),
    open: LogicType.boolean(),
    slot: LogicType.string(),
    type: LogicType.string({ enum: ["label", "separator", "link", "checkbox"] })
}));

DropdownMenuItem.properties.children = LogicType.array(DropdownMenuItem, { optional: true });

const dropdownMenu = {
    component: DropdownMenu,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/dropdown-menu"
    },
    models: {
        open: LogicType.boolean()
    },
    name: "Overlay/DropdownMenu",
    properties: {
        arrow: LogicType.boolean({ description: "Display an arrow alongside the menu." }),
        checkedIcon: LogicType.string({ description: "The icon displayed when an item is checked." }),
        defaultOpen: LogicType.boolean({ description: "The open state of the dropdown menu when it is initially rendered." }),
        descriptionKey: LogicType.union([LogicType.string(), LogicType.number()]),
        disabled: LogicType.boolean(),
        externalIcon: LogicType.union([LogicType.string(), LogicType.boolean()], { description: "The icon displayed when the item is an external link." }),
        items: LogicType.array(DropdownMenuItem),
        labelKey: LogicType.union([LogicType.string(), LogicType.number()]),
        loadingIcon: LogicType.string({ description: "The icon displayed when an item is loading." }),
        modal: LogicType.boolean({ description: "The modality of the dropdown menu." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        size
    },
    slots: {
        default: LogicType.object({ open: LogicType.boolean() }),
        item: LogicType.object({ active: LogicType.boolean(), index: LogicType.number(), item: DropdownMenuItem })
    }
} satisfies TComponent;

export default dropdownMenu;
export const DropdownMenuProps = LogicUtil.partial(LogicType.object(dropdownMenu.properties));
