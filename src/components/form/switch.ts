import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Switch from "@nuxt/ui/components/Switch.vue";

import { iconType } from "@/lib/icon.ts";
import { color, size } from "@/lib/variants.ts";

const switch_ = {
    build: {
        name: "USwitch"
    },
    component: Switch,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/switch"
    },
    models: {
        modelValue: LogicType.boolean()
    },
    name: "Form/Switch",
    properties: {
        checkedIcon: iconType({ description: "Icon when the switch is checked." }),
        color,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        label: LogicType.string(),
        loading: LogicType.boolean({ description: "Display loading icon when true." }),
        loadingIcon: iconType({ description: "Icon to display when loading." }),
        name: LogicType.string(),
        required: LogicType.boolean(),
        size,
        uncheckedIcon: iconType({ description: "Icon when the switch is unchecked." })
    },
    slots: {
        description: LogicType.object({ description: LogicType.string() }),
        label: LogicType.object({ label: LogicType.string() })
    }
} satisfies TComponent;

export default switch_;
export const SwitchProps = LogicUtil.partial(LogicType.object(switch_.properties));
