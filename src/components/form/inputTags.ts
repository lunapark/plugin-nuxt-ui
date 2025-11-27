import { LogicType, type TComponent } from "@luna-park/plugin";
import InputTags from "@nuxt/ui/components/InputTags.vue";

import { ComponentIconsProps } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const InputTagItem = LogicType.union([LogicType.string(), LogicType.number()]);

const inputTags = {
    component: InputTags,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input-tags"
    },
    emits: {
        addTag: LogicType.function(LogicType.object({ item: InputTagItem }), LogicType.unknown()),
        invalid: LogicType.function(LogicType.object({ item: InputTagItem }), LogicType.unknown()),
        removeTag: LogicType.function(LogicType.object({ item: InputTagItem }), LogicType.unknown())
    },
    models: {
        modelValue: LogicType.array(InputTagItem)
    },
    name: "Form/InputTags",
    properties: {
        ...ComponentIconsProps.properties,
        addOnBlur: LogicType.boolean({ description: "Allow adding tags on blur." }),
        addOnPaste: LogicType.boolean({ description: "Allow adding tags on paste (uses delimiter)." }),
        addOnTab: LogicType.boolean({ description: "Allow adding tags on Tab key." }),
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        delimiter: LogicType.union([LogicType.string(), LogicType.interface("RegExp")], { description: "Character/regexp string to split tags (e.g., , or ;)." }),
        disabled: LogicType.boolean(),
        duplicate: LogicType.boolean({ description: "Allow duplicate tags." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        max: LogicType.number({ description: "Maximum number of tags." }),
        maxLength: LogicType.number({ description: "Maximum number of characters allowed." }),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "Placeholder text when the input is empty." }),
        readonly: LogicType.boolean({ description: "Make the input read-only." }),
        required: LogicType.boolean(),
        size,
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default inputTags;
