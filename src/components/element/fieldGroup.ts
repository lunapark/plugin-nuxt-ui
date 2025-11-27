import { LogicType, type TComponent } from "@luna-park/plugin";
import FieldGroup from "@nuxt/ui/components/FieldGroup.vue";

import { orientation, size } from "@/lib/variants.ts";

const fieldGroup = {
    component: FieldGroup,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/field-group"
    },
    name: "Element/FieldGroup",
    properties: {
        orientation: { ...orientation, description: "The orientation the buttons are laid out." },
        size
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default fieldGroup;
