import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ContextMenu from "@nuxt/ui/components/ContextMenu.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { KbdProps } from "@/components/element/kbd.ts";
import { color, size } from "@/lib/variants.ts";

const ContextMenuItem = LogicUtil.partial(LogicType.object({
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

ContextMenuItem.properties.children = LogicType.array(ContextMenuItem, { optional: true });

const contextMenu = {
    component: ContextMenu,
    emits: {
        "update:open": LogicType.function(LogicType.object({ value: LogicType.boolean() }), LogicType.void())
    },
    name: "Overlay/ContextMenu",
    properties: {
        checkedIcon: LogicType.string({ description: "The icon displayed when an item is checked." }),
        descriptionKey: LogicType.string(),
        disabled: LogicType.boolean(),
        externalIcon: LogicType.union([LogicType.string(), LogicType.boolean()], { description: "The icon displayed when the item is an external link." }),
        items: LogicType.array(ContextMenuItem),
        labelKey: LogicType.string(),
        loadingIcon: LogicType.string({ description: "The icon displayed when an item is loading." }),
        modal: LogicType.boolean({ description: "The modality of the dropdown menu." }),
        portal: LogicType.boolean({ description: "Render the menu in a portal." }),
        pressOpenDelay: LogicType.number({ default: 700, description: "The duration from when the trigger is pressed until the menu opens." }),
        size
    },
    slots: {
        default: LogicType.void(),
        item: LogicType.object({ item: ContextMenuItem })
    }
} satisfies TComponent;

export default contextMenu;
export const ContextMenuProps = LogicUtil.partial(LogicType.object(contextMenu.properties));
