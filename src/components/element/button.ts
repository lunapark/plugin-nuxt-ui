import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Button from "@nuxt/ui/components/Button.vue";

import { LinkProps } from "@/components/navigation/link.ts";
import { ComponentIconsProps } from "@/lib/componentIcons.ts";
import { iconType } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const button = {
    build: {
        name: "UButton"
    },
    component: Button,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/button"
    },
    name: "Element/Button",
    properties: {
        ...ComponentIconsProps.properties,
        ...LogicUtil.omit(LinkProps, ["custom"]).properties,
        activeColor: { ...color, description: "The color of the button when active." },
        activeVariant: { ...variant, description: "The variant of the button when active." },
        block: LogicType.boolean({ description: "Render the button full width." }),
        color,
        icon: iconType(),
        label: LogicType.string(),
        loadingAuto: LogicType.boolean({ description: "When `true`, the loading icon will be displayed while the `onClick` promise is pending." }),
        size,
        square: LogicType.boolean({ description: "Render the button with equal padding on all sides." }),
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default button;
export const ButtonProps = LogicUtil.partial(LogicType.object(button.properties));
