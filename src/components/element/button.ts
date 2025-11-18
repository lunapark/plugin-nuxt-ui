import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Button from "@nuxt/ui/components/Button.vue";

import { ComponentIconsProps } from "@/lib/icon.ts";
import { LinkProps } from "@/lib/link.ts";
import { color, size, variant } from "@/lib/variants.ts";

const button = {
    component: Button,
    name: "Element/Button",
    properties: {
        ...ComponentIconsProps.properties,
        ...LogicUtil.omit(LinkProps, ["custom"]).properties,
        block: LogicType.boolean({ description: "Render the button full width.", name: "block" }),
        color,
        icon: LogicType.string(),
        label: LogicType.string(),
        size,
        square: LogicType.boolean({ description: "Render the button with equal padding on all sides.", name: "square" }),
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
