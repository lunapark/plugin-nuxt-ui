import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Toast from "@nuxt/ui/components/Toast.vue";

import { AvatarProps } from "@/components/element/avatar";
import { ButtonProps } from "@/components/element/button";
import modal from "@/components/overlay/modal.ts";
import { color, orientation } from "@/lib/variants.ts";

export const toast: TComponent = {
    component: Toast,
    name: "Overlay/Toast",
    properties: {
        actions: LogicType.array(ButtonProps, { description: "Display a list of actions." }),
        avatar: AvatarProps,
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the toast." }),
        closeIcon: LogicType.string({ description: "The icon displayed in the close button." }),
        color,
        description: LogicType.string(),
        duration: LogicType.number({ description: "Time in milliseconds that toast should remain visible for." }),
        icon: LogicType.string(),
        orientation: { ...orientation, default: "vertical", description: "The orientation between the content and the actions." },
        progress: LogicType.union([LogicType.boolean(), LogicType.object({ color })], { description: "Display a progress bar showing the toast's remaining duration." }),
        title: LogicType.string(),
        type: LogicType.string({ description: "Control the sensitivity of the toast for accessibility purposes.", enum: ["foreground", "background"] })
    },
    slots: {
        actions: LogicType.void(),
        close: LogicType.void(),
        description: LogicType.void(),
        leading: LogicType.void(),
        title: LogicType.void()
    }
};

export default toast;
export const ToastProps = LogicUtil.partial(LogicType.object(toast.properties));
