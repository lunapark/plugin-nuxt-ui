import { LogicType, type TComponent } from "@luna-park/plugin";
import InputRating from "@nuxt/ui/components/InputRating.vue";

import { iconType } from "@/lib/icon.ts";
import { color, orientation, size } from "@/lib/variants.ts";

const inputRating = {
    build: {
        name: "UInputRating"
    },
    component: InputRating,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input-rating"
    },
    emits: {
        change: LogicType.void()
    },
    models: {
        modelValue: LogicType.number()
    },
    name: "Form/InputRating",
    properties: {
        clearable: LogicType.boolean({ description: "When `true`, clicking the current value resets the rating." }),
        color,
        defaultValue: LogicType.number({ description: "The rating value when initially rendered." }),
        disabled: LogicType.boolean(),
        emptyIcon: iconType({ description: "The icon displayed for empty items. Defaults to `icon`." }),
        hoverable: LogicType.boolean({ description: "Preview the rating on hover." }),
        icon: iconType({ description: "The icon displayed for filled items." }),
        id: LogicType.string(),
        length: LogicType.number({ default: 5, description: "The number of items." }),
        name: LogicType.string({ description: "The name of the field. Submitted with its owning form as part of a name/value pair." }),
        orientation,
        readonly: LogicType.boolean(),
        required: LogicType.boolean(),
        size,
        step: LogicType.number({ default: 1, description: "The rating step, use `0.5` for half ratings." })
    },
    slots: {
        item: LogicType.object({ filled: LogicType.boolean(), index: LogicType.number() })
    }
} satisfies TComponent;

export default inputRating;
