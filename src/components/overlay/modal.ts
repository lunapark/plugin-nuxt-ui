import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Modal from "@nuxt/ui/components/Modal.vue";

import { ButtonProps } from "@/components/element/button.ts";

const modal = {
    component: Modal,
    models: {
        open: LogicType.boolean()
    },
    name: "Overlay/Modal",
    properties: {
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the modal." }),
        closeIcon: LogicType.string({ description: "The icon displayed in the close button." }),
        defaultOpen: LogicType.boolean({ description: "The open state of the dialog when it is initially rendered." }),
        description: LogicType.string(),
        dismissible: LogicType.boolean({ description: "When `false`, the modal will not close when clicking outside or pressing escape." }),
        fullscreen: LogicType.boolean({ description: "When `true`, the modal will take up the full screen." }),
        modal: LogicType.boolean({ description: "The modality of the dialog." }),
        overlay: LogicType.boolean({ description: "Render an overlay behind the modal." }),
        portal: LogicType.boolean({ description: "Render the modal in a portal." }),
        scrollable: LogicType.boolean({ description: "When `true`, enables scrollable overlay mode where content scrolls within the overlay." }),
        title: LogicType.string(),
        transition: LogicType.boolean({ description: "Animate the modal when opening or closing." })
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
} satisfies TComponent;

export default modal;
export const ModalProps = LogicUtil.partial(LogicType.object(modal.properties));
