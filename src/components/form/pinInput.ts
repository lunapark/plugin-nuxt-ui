import { LogicType, type TComponent } from "@luna-park/plugin";
import PinInput from "@nuxt/ui/components/PinInput.vue";

import { color, size, variant } from "@/lib/variants.ts";

const pinInput = {
    component: PinInput,
    emits: {
        complete: LogicType.function(LogicType.object({ value: LogicType.array(LogicType.string()) }), LogicType.unknown())
    },
    models: {
        modelValue: LogicType.array(LogicType.array(LogicType.string()))
    },
    name: "Form/PinInput",
    properties: {
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        disabled: LogicType.boolean(),
        highlight: LogicType.boolean(),
        length: LogicType.number({ description: "Number of input fields." }),
        mask: LogicType.boolean({ description: "Treat inputs as password." }),
        name: LogicType.string(),
        otp: LogicType.boolean({ description: "Enable OTP autocomplete on supported devices." }),
        placeholder: LogicType.string({ description: "Placeholder character for empty inputs." }),
        required: LogicType.boolean(),
        size,
        type: LogicType.string({ default: "text", description: "Input type for each field.", enum: ["text", "number"] }),
        variant
    }
} satisfies TComponent;

export default pinInput;
