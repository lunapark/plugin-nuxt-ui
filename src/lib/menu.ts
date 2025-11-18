import { LogicType, LogicUtil } from "@luna-park/plugin";

import { ButtonProps } from "@/components/element/button.ts";
import { side } from "@/lib/variants.ts";

export const ModalProps = LogicUtil.partial(LogicType.object({
    close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the modal." }),
    closeIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "The icon displayed in the close button." }),
    description: LogicType.string(),
    dismissable: LogicType.boolean({ description: "When `false`, the modal will not close when clicking outside or pressing escape." }),
    fullscreen: LogicType.boolean({ description: "When `true`, the modal will take up the full screen." }),
    overlay: LogicType.boolean({ description: "Render an overlay behind the modal." }),
    portal: LogicType.boolean({ description: "Render the modal in a portal." }),
    title: LogicType.string(),
    transition: LogicType.boolean({ description: "Animate the modal when opening or closing." })
}));

export const SlideoverProps = LogicUtil.partial(LogicType.object({
    close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the slideover." }),
    closeIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "The icon displayed in the close button." }),
    description: LogicType.string(),
    dismissable: LogicType.boolean({ description: "When `false`, the slideover will not close when clicking outside or pressing escape." }),
    overlay: LogicType.boolean({ description: "Render an overlay behind the slideover." }),
    portal: LogicType.boolean({ description: "Render the slideover in a portal." }),
    side,
    title: LogicType.string(),
    transition: LogicType.boolean({ description: "Animate the slideover when opening or closing." })
}));

export const DrawerProps = LogicUtil.partial(LogicType.object({
    description: LogicType.string(),
    handle: LogicType.boolean({ description: "Render a handle on the drawer." }),
    inset: LogicType.boolean({ description: "Whether to inset the drawer from the edges." }),
    nested: LogicType.boolean({ description: "Whether the drawer is nested in another drawer." }),
    overlay: LogicType.boolean({ description: "Render an overlay behind the drawer." }),
    portal: LogicType.boolean({ description: "Render the drawer in a portal." }),
    title: LogicType.string()
}));
