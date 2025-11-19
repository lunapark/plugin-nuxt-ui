import { LogicType, type TComponent } from "@luna-park/plugin";
import Textarea from "@nuxt/ui/components/Textarea.vue";

import { ComponentIconsProps } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const textarea = {
    component: Textarea,
    models: {
        modelValue: LogicType.string()
    },
    name: "Form/Textarea",
    properties: {
        ...ComponentIconsProps.properties,
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        autoresize: LogicType.boolean(),
        autoresizeDelay: LogicType.number(),
        color,
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        maxrows: LogicType.number({ default: 0 }),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the textarea is empty." }),
        required: LogicType.boolean(),
        rows: LogicType.number({ default: 3 }),
        size,
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default textarea;
