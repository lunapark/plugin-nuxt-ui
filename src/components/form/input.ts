import { LogicType, type TComponent } from "@luna-park/plugin";
import Input from "@nuxt/ui/components/Input.vue";

import { ComponentIconsProps } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const input = {
    component: Input,
    emits: {
        blur: LogicType.function(LogicType.object(), LogicType.unknown()),
        change: LogicType.function(LogicType.object(), LogicType.unknown())
    },
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.number()])
    },
    name: "Form/Input",
    properties: {
        ...ComponentIconsProps.properties,
        autocomplete: LogicType.string({ default: "off" }),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the input is empty." }),
        readOnly: LogicType.boolean(),
        required: LogicType.boolean(),
        size,
        type: LogicType.string({ default: "text", enum: ["text", "number", "password", "search", "file"] }),
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default input;
