import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import NavigationMenu, { type NavigationMenuChildItem } from "@nuxt/ui/components/NavigationMenu.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { BadgeProps } from "@/components/element/badge.ts";
import { LinkProps } from "@/components/navigation/link.ts";
import { PopoverProps } from "@/components/overlay/popover.ts";
import { TooltipProps } from "@/components/overlay/tooltip.ts";
import { color, orientation } from "@/lib/variants.ts";

const NavigationMenuItem = LogicUtil.partial(LogicType.object({
    ...LogicUtil.omit(LinkProps, ["type", "raw", "custom"]).properties,
    avatar: AvatarProps,
    badge: LogicType.union([LogicType.string(), LogicType.number(), BadgeProps]),
    defaultOpen: LogicType.boolean(),
    icon: LogicType.string(),
    label: LogicType.string(),
    onSelect: LogicType.function(LogicType.object({ event: LogicType.interface("Event") }), LogicType.void()),
    open: LogicType.boolean(),
    popover: LogicType.union([LogicType.boolean(), PopoverProps]),
    slot: LogicType.string(),
    tooltip: LogicType.union([LogicType.boolean(), TooltipProps]),
    trailingIcon: LogicType.string(),
    type: LogicType.string({ enum: ["label", "trigger", "link"] }),
    value: LogicType.string()
}));

const NavigationMenuChildItem = LogicType.object({
    ...LogicUtil.omit(NavigationMenuItem, ["type"]).properties,
    description: LogicType.string({ description: "Description is only used when `orientation` is `horizontal`.", optional: true })
});

NavigationMenuItem.properties.children = LogicType.array(NavigationMenuChildItem, { optional: true });

const navigationMenu = {
    component: NavigationMenu,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/navigation-menu"
    },
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.array(LogicType.string())])
    },
    name: "Navigation/NavigationMenu",
    properties: {
        ...LogicUtil.omit(LinkProps, ["type", "raw", "custom"]).properties,
        arrow: LogicType.boolean({ description: "Display an arrow alongside the menu." }),
        collapsed: LogicType.boolean({ description: "Collapse the navigation menu to only show icons." }),
        collapsible: LogicType.boolean({ description: "Allows closing content when clicking trigger for an open item." }),
        color,
        contentOrientation: orientation,
        delayDuration: LogicType.number({ description: "The duration from when the pointer enters the trigger until the tooltip gets opened." }),
        disableClickTrigger: LogicType.boolean({ description: "If `true`, menu cannot be open by click on trigger" }),
        disabled: LogicType.boolean({ description: "When `true`, prevents the user from interacting with the accordion and all its items" }),
        disableHoverTrigger: LogicType.boolean({ description: "If `true`, menu cannot be open by hover on trigger" }),
        disablePointerLeaveClose: LogicType.boolean({ description: "If `true`, menu will not close during pointer leave event" }),
        externalIcon: LogicType.union([LogicType.string(), LogicType.boolean()], { description: "The icon displayed when the item is an external link." }),
        highlight: LogicType.boolean({ description: "Display a line next to the active item." }),
        highlightColor: color,
        items: LogicType.array(NavigationMenuItem),
        labelKey: LogicType.string(),
        orientation,
        popover: LogicType.union([LogicType.boolean(), PopoverProps], { description: "Display a popover on the items when the menu is collapsed." }),
        skipDelayDuration: LogicType.number({ default: 300, description: "How much time a user has to enter another trigger without incurring a delay again." }),
        tooltip: LogicType.union([LogicType.boolean(), TooltipProps], { description: "Display a tooltip on the items when the menu is collapsed." }),
        trailingIcon: LogicType.string({ description: "The icon displayed to open the menu." }),
        type: LogicType.string({ default: "multiple", enum: ["single", "multiple"] }),
        unmountOnHide: LogicType.boolean({ description: "When `true`, the element will be unmounted on closed state." }),
        variant: LogicType.string({ default: "pill", enum: ["pill", "link"] })
    },
    slots: {
        item: LogicType.object({ active: LogicType.boolean(), index: LogicType.number(), item: NavigationMenuItem })
    }
} satisfies TComponent;

export default navigationMenu;
export const NavigationMenuProps = LogicUtil.partial(LogicType.object(navigationMenu.properties));
