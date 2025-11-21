import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Tooltip from "@nuxt/ui/components/Tooltip.vue";

import { KbdProps } from "@/components/element/kbd";

const TooltipContentProps = LogicType.object({
    align: LogicType.string({ description: "The preferred alignment against the trigger.", enum: ["end", "start", "center"], optional: true }),
    alignOffset: LogicType.number({ description: "An offset in pixels from the `start` or `end` alignment options.", optional: true }),
    ariaLabel: LogicType.string({ description: "By default, screenreaders will announce the content inside the component.", optional: true }),
    arrowPadding: LogicType.number({ description: "The padding between the arrow and the edges of the content.", optional: true }),
    avoidCollisions: LogicType.boolean({ description: "When `true`, overrides the side and align preferences to prevent collisions with boundary edges.", optional: true }),
    collisionBoundary: LogicType.union([LogicType.interface("Element"), LogicType.array(LogicType.interface("Element"))], { description: "The element used as the collision boundary.", optional: true }),
    collisionPadding: LogicType.union([LogicType.number(), LogicType.object()], { description: "The distance in pixels from the boundary edges where collision detection should occur.", optional: true }),
    forceMount: LogicType.boolean({ description: "Used to force mounting when more control is needed.", optional: true }),
    hideWhenDetached: LogicType.boolean({ description: "Whether to hide the content when the trigger becomes fully occluded.", optional: true }),
    positionStrategy: LogicType.string({ description: "The type of CSS position property to use.", enum: ["absolute", "fixed"], optional: true }),
    side: LogicType.string({ description: "The preferred side of the trigger to render against when open.", enum: ["top", "right", "bottom", "left"], optional: true }),
    sideOffset: LogicType.number({ description: "The distance in pixels from the trigger.", optional: true }),
    sticky: LogicType.string({ description: "The sticky behavior on the align axis.", enum: ["partial", "always"], optional: true }),
    updatePositionStrategy: LogicType.string({ description: "Strategy to update the position of the floating element on every animation frame.", enum: ["always", "optimized"], optional: true })
});

const TooltipArrowProps = LogicType.object({
    height: LogicType.number({ description: "The height of the arrow in pixels.", optional: true }),
    width: LogicType.number({ description: "The width of the arrow in pixels.", optional: true })
});

export const tooltip: TComponent = {
    component: Tooltip,
    name: "Overlay/Tooltip",
    properties: {
        arrow: LogicType.union([LogicType.boolean(), TooltipArrowProps], { description: "Display an arrow alongside the tooltip." }),
        content: TooltipContentProps,
        defaultOpen: LogicType.boolean({ description: "The open state of the tooltip when it is initially rendered." }),
        delayDuration: LogicType.number({ default: 700, description: "Override the duration given to the `Provider` to customise the open delay for a specific tooltip." }),
        disableClosingTrigger: LogicType.boolean({ description: "When `true`, clicking on trigger will not close the content." }),
        disabled: LogicType.boolean({ description: "When `true`, disable tooltip" }),
        disableHoverableContent: LogicType.boolean({ description: "Prevents Tooltip.Content from remaining open when hovering." }),
        ignoreNonKeyboardFocus: LogicType.boolean({ description: "Prevent the tooltip from opening if the focus did not come from the keyboard." }),
        kbds: LogicType.array(LogicType.union([LogicType.string(), KbdProps]), { description: "The keyboard keys to display in the tooltip." }),
        portal: LogicType.boolean({ description: "Render the tooltip in a portal." }),
        reference: LogicType.interface("Element"),
        text: LogicType.string({ description: "The text content of the tooltip." })
    },
    slots: {
        content: LogicType.void(),
        default: LogicType.object({ open: LogicType.boolean() })
    }
};

export default tooltip;
export const TooltipProps = LogicUtil.partial(LogicType.object(tooltip.properties));
