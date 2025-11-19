import { LogicType, type TComponent } from "@luna-park/plugin";
import FormField from "@nuxt/ui/components/FormField.vue";

import { size } from "@/lib/variants.ts";

const formField = {
    component: FormField,
    name: "Form/FormField",
    properties: {
        description: LogicType.string(),
        eagerValidation: LogicType.boolean({ description: "Validate on input immediately instead of on blur." }),
        error: LogicType.union([LogicType.string(), LogicType.boolean()]),
        errorPatten: LogicType.interface("RegExp"),
        help: LogicType.string(),
        hint: LogicType.string(),
        label: LogicType.string(),
        name: LogicType.string({ description: "Field name used to match form errors." }),
        required: LogicType.boolean(),
        size,
        validateOnInputDelay: LogicType.number({ default: 300, description: "Delay before validating on input (ms)." })
    },
    slots: {
        default: LogicType.object({ error: LogicType.string() }),
        description: LogicType.object({ description: LogicType.string() }),
        error: LogicType.object({ error: LogicType.string() }),
        help: LogicType.object({ help: LogicType.string() }),
        hint: LogicType.object({ hint: LogicType.string() }),
        label: LogicType.object({ label: LogicType.string() })
    }
} satisfies TComponent;

export default formField;
