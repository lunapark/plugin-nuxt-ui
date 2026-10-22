import type { TComponent } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";
import InputNumber from "@nuxt/ui/components/InputNumber.vue";

import { iconType } from "@/lib/icon.ts";
import { color, orientation, size, variant } from "@/lib/variants.ts";

const inputNumber = {
    build: {
        name: "UInputNumber"
    },
    component: InputNumber,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input-number"
    },
    models: {
        modelValue: LogicType.number()
    },
    name: "Form/InputNumber",
    properties: {
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        decrement: LogicType.boolean({ description: "Show decrement button." }),
        decrementDisabled: LogicType.boolean({ description: "Disable the decrement button." }),
        decrementIcon: iconType({ description: "The icon displayed to decrement the value." }),
        disabled: LogicType.boolean(),
        disableWheelChange: LogicType.boolean({ description: "When `true`, prevents the value from changing on wheel scroll." }),
        fixed: LogicType.boolean({ description: "Keep the mobile text size on all breakpoints." }),
        formatOptions: LogicUtil.partial(LogicType.object({
            currency: LogicType.string({ description: "The currency code, e.g. `EUR`, when `style` is `currency`." }),
            maximumFractionDigits: LogicType.number(),
            minimumFractionDigits: LogicType.number(),
            style: LogicType.string({ enum: ["decimal", "currency", "percent", "unit"] }),
            unit: LogicType.string({ description: "The unit, e.g. `kilometer`, when `style` is `unit`." }),
            useGrouping: LogicType.boolean()
        })),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        id: LogicType.string(),
        increment: LogicType.boolean({ description: "Show increment button." }),
        incrementDisabled: LogicType.boolean({ description: "Disable the increment button." }),
        incrementIcon: iconType({ description: "The icon displayed to increment the value." }),
        invertWheelChange: LogicType.boolean({ description: "When `true`, inverts the direction of the wheel change." }),
        locale: LogicType.string({ description: "Locale for formatting/parsing." }),
        max: LogicType.number({ description: "Maximum value." }),
        min: LogicType.number({ description: "Minimum value." }),
        name: LogicType.string(),
        orientation,
        placeholder: LogicType.string({ description: "Placeholder text when empty." }),
        readonly: LogicType.boolean(),
        required: LogicType.boolean(),
        size,
        step: LogicType.number({ description: "Step interval." }),
        stepSnapping: LogicType.boolean({ description: "Snap to step interval." }),
        variant
    },
    slots: {
        decrement: LogicType.void(),
        increment: LogicType.void()
    }
} satisfies TComponent;

export default inputNumber;
