import type { TComponent } from "@luna-park/plugin";
import { LogicType } from "@luna-park/plugin";
import InputTime from "@nuxt/ui/components/InputTime.vue";

import { timeValueType } from "@/lib/date.ts";
import { ComponentIconsProps } from "@/lib/icon.ts";
import { DateStep } from "@/lib/time.ts";
import { color, size, variant } from "@/lib/variants.ts";

const inputTime = {
    build: {
        name: "UInputTime"
    },
    component: InputTime,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input-time"
    },
    models: {
        modelValue: timeValueType()
    },
    name: "Form/InputTime",
    properties: {
        ...ComponentIconsProps.properties,
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        disabled: LogicType.boolean(),
        granularity: LogicType.string({ description: "Granularity for time segments.", enum: ["hour", "minute", "second"] }),
        hideTimeZone: LogicType.boolean({ description: "Hide the time zone segment." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        hourCycle: LogicType.number({ description: "The hour cycle to use for the input.", enum: [12, 24] }),
        maxValue: timeValueType(),
        minValue: timeValueType(),
        name: LogicType.string({ description: "The name of the field. Submitted with its owning form as part of a name/value pair." }),
        placeholder: timeValueType({ description: "The time used to fill the segments when empty." }),
        readonly: LogicType.boolean(),
        required: LogicType.boolean(),
        size,
        step: DateStep,
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default inputTime;
