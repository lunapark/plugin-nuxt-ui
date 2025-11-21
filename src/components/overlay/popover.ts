import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Popover from "@nuxt/ui/components/Popover.vue";

const PopoverContentProps = LogicUtil.partial(LogicType.object({
    align: LogicType.string({ description: "The preferred alignment against the trigger.", enum: ["start", "center", "end"] }),
    alignFlip: LogicType.boolean({ description: "Flip alignment when colliding with boundary." }),
    alignOffset: LogicType.number({ description: "An offset in pixels from the `start` or `end` alignment options." }),
    arrowPadding: LogicType.number({ description: "The padding between the arrow and the edges of the content." }),
    avoidCollisions: LogicType.boolean({ description: "When `true`, overrides the side and align preferences to prevent collisions with boundary edges." }),
    collisionBoundary: LogicType.union([LogicType.interface("Element"), LogicType.interface("Element")], { description: "The element used as the collision boundary." }),
    collisionPadding: LogicType.union([LogicType.number(), LogicType.object()], { description: "The distance in pixels from the boundary edges where collision detection should occur." }),
    disableOutsidePointerEvents: LogicType.boolean({ description: "When `true`, hover/focus/click interactions will be disabled on elements outside the `DismissableLayer`." }),
    disableUpdateOnLayoutShift: LogicType.boolean({ description: "Whether to disable the update position for the content when the layout shifted." }),
    forceMount: LogicType.boolean({ description: "Used to force mounting when more control is needed." }),
    hideWhenDetached: LogicType.boolean({ description: "Whether to hide the content when the trigger becomes fully occluded." }),
    positionStrategy: LogicType.string({ description: "The type of CSS position property to use.", enum: ["absolute", "fixed"] }),
    prioritizePosition: LogicType.boolean({ description: "Force content to be position within the viewport." }),
    side: LogicType.string({ description: "The preferred side of the trigger to render against when open.", enum: ["top", "right", "bottom", "left"] }),
    sideFlip: LogicType.boolean({ description: "Flip to the opposite side when colliding with boundary." }),
    sideOffset: LogicType.number({ description: "The distance in pixels from the trigger." }),
    sticky: LogicType.string({ description: "The sticky behavior on the align axis.", enum: ["partial", "always"] }),
    updatePositionStrategy: LogicType.string({ description: "Strategy to update the position of the floating element on every animation frame.", enum: ["always", "optimized"] })
}));

const PopoverArrowProps = LogicUtil.partial(LogicType.object({
    height: LogicType.number({ description: "The height of the arrow in pixels." }),
    rounded: LogicType.boolean({ description: "When `true`, render the rounded version of arrow." }),
    width: LogicType.number({ description: "The width of the arrow in pixels." })
}));

export const popover: TComponent = {
    component: Popover,
    models: {
        open: LogicType.boolean()
    },
    name: "Overlay/Popover",
    properties: {
        arrow: LogicType.union([LogicType.boolean(), PopoverArrowProps], { description: "Display an arrow alongside the popover." }),
        closeDelay: LogicType.number({ description: "The duration from when the mouse leaves the trigger or content until the hover card closes." }),
        content: PopoverContentProps,
        defaultOpen: LogicType.boolean({ description: "The open state of the popover when it is initially rendered." }),
        dismissible: LogicType.boolean({ description: "When `false`, the popover will not close when clicking outside or pressing escape." }),
        modal: LogicType.boolean({ description: "The modality of the popover." }),
        mode: LogicType.string({ description: "The display mode of the popover.", enum: ["hover", "click"] }),
        openDelay: LogicType.number({ description: "The duration from when the mouse enters the trigger until the hover card opens." }),
        portal: LogicType.boolean({ description: "Render the popover in a portal." })
    },
    slots: {
        anchor: LogicType.object({ close: LogicType.function() }),
        content: LogicType.object({ close: LogicType.function() }),
        default: LogicType.object({ open: LogicType.boolean() })
    }
};

export default popover;
export const PopoverProps = LogicUtil.partial(LogicType.object(popover.properties));
