import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import Textarea from "@nuxt/ui/components/Textarea.vue";

import { ComponentIconsProps } from "@/lib/componentIcons.ts";
import { ModelModifiers } from "@/lib/value.ts";
import { color, size, variant } from "@/lib/variants.ts";

const textarea = {
    build: {
        name: "UTextarea"
    },
    component: Textarea,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/textarea"
    },
    models: {
        modelValue: LogicType.string()
    },
    name: "Form/Textarea",
    properties: {
        ...ComponentIconsProps.properties,
        autocomplete: LogicType.string(),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        autoresize: LogicType.boolean(),
        autoresizeDelay: LogicType.number(),
        color,
        disabled: LogicType.boolean(),
        fixed: LogicType.boolean({ description: "Keep the mobile text size on all breakpoints." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        id: LogicType.string(),
        maxlength: LogicType.number({ description: "The maximum number of characters allowed." }),
        maxrows: LogicType.number({ default: 0 }),
        minlength: LogicType.number({ description: "The minimum number of characters required." }),
        modelModifiers: ModelModifiers,
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the textarea is empty." }),
        readonly: LogicType.boolean(),
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
export const TextareaProps = LogicUtil.partial(LogicType.object(textarea.properties));
