import type { TComponent } from "@luna-park/plugin";
import { LogicType } from "@luna-park/plugin";
import Input from "@nuxt/ui/components/Input.vue";

import { ComponentIconsProps } from "@/lib/componentIcons.ts";
import { ModelModifiers } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

const input = {
    build: {
        name: "UInput"
    },
    component: Input,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input"
    },
    emits: {
        blur: LogicType.void(),
        change: LogicType.void()
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
        fixed: LogicType.boolean({ description: "Keep the mobile text size on all breakpoints." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        id: LogicType.string(),
        max: LogicType.number({ description: "The maximum value when `type` is `number` or a date type." }),
        maxlength: LogicType.number({ description: "The maximum number of characters allowed." }),
        min: LogicType.number({ description: "The minimum value when `type` is `number` or a date type." }),
        minlength: LogicType.number({ description: "The minimum number of characters required." }),
        modelModifiers: ModelModifiers,
        name: LogicType.string(),
        pattern: LogicType.string({ description: "A regular expression the value must match to pass validation." }),
        placeholder: LogicType.string({ description: "The placeholder text when the input is empty." }),
        readonly: LogicType.boolean(),
        required: LogicType.boolean(),
        size,
        step: LogicType.number({ description: "The granularity the value must adhere to when `type` is `number`." }),
        type: LogicType.string({ default: "text", enum: ["text", "email", "password", "number", "tel", "url", "search", "date", "time", "datetime-local", "color", "file"] }),
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default input;
