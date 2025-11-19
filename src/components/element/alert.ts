import { LogicType, type TComponent } from "@luna-park/plugin";
import Alert from "@nuxt/ui/components/Alert.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { ButtonProps } from "@/components/element/button.ts";
import { color, orientation, variant } from "@/lib/variants.ts";

const alert = {
    component: Alert,
    emits: {
        "update:open": LogicType.function(LogicType.object({ value: LogicType.boolean() }), LogicType.unknown())
    },
    name: "Element/Alert",
    properties: {
        actions: LogicType.array(ButtonProps, { description: "Display a list of actions:\n- under the title and description when orientation is `vertical`\n- next to the close button when orientation is `horizontal`" }),
        avatar: AvatarProps,
        close: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Display a close button to dismiss the alert." }),
        closeIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "The icon displayed in the close button." }),
        color,
        description: LogicType.string(),
        icon: LogicType.string(),
        orientation: { ...orientation, description: "The orientation between the content and the actions." },
        title: LogicType.string(),
        variant
    },
    slots: {
        actions: LogicType.void(),
        close: LogicType.void(),
        description: LogicType.void(),
        leading: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default alert;
