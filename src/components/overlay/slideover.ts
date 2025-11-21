import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Slideover from "@nuxt/ui/components/Slideover.vue";

import { ButtonProps } from "@/components/element/button";

export const slideover: TComponent = {
    component: Slideover,
    models: {
        open: LogicType.boolean()
    },
    name: "Overlay/Slideover",
    properties: {
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the slideover." }),
        closeIcon: LogicType.string({ description: "The icon displayed in the close button." }),
        defaultOpen: LogicType.boolean({ description: "The open state of the dialog when it is initially rendered." }),
        description: LogicType.string(),
        dismissible: LogicType.boolean({ description: "When `false`, the slideover will not close when clicking outside or pressing escape." }),
        modal: LogicType.boolean({ description: "The modality of the dialog." }),
        overlay: LogicType.boolean({ description: "Render an overlay behind the slideover." }),
        portal: LogicType.boolean({ description: "Render the slideover in a portal." }),
        side: LogicType.string({ default: "right", description: "The side of the slideover.", enum: ["left", "right", "top", "bottom"] }),
        title: LogicType.string(),
        transition: LogicType.boolean({ description: "Animate the slideover when opening or closing." })
    },
    slots: {
        actions: LogicType.void(),
        body: LogicType.object({ close: LogicType.function() }),
        close: LogicType.void(),
        content: LogicType.object({ close: LogicType.function() }),
        default: LogicType.object({ open: LogicType.boolean() }),
        description: LogicType.void(),
        footer: LogicType.object({ close: LogicType.function() }),
        header: LogicType.object({ close: LogicType.function() }),
        title: LogicType.void()
    }
};

export default slideover;
export const SlideoverProps = LogicUtil.partial(LogicType.object(slideover.properties));
