import { LogicType, type TComponent } from "@luna-park/plugin";
import InputDate from "@nuxt/ui/components/InputDate.vue";

import { ComponentIconsProps } from "@/lib/icon.ts";
import { DateStep } from "@/lib/time.ts";
import { color, size, variant } from "@/lib/variants.ts";

const DateValue = LogicType.unknown(); // TODO

const inputDate = {
    component: InputDate,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/input-date"
    },
    emits: {
        blur: LogicType.function(),
        change: LogicType.function(),
        focus: LogicType.function()
    },
    models: {
        modelValue: DateValue // TODO: add dynamic for range
    },
    name: "Form/InputDate",
    properties: {
        ...ComponentIconsProps.properties,
        autofocus: LogicType.boolean(),
        autofocusDelay: LogicType.number(),
        color,
        disabled: LogicType.boolean(),
        granularity: LogicType.string({ description: "Granularity for date/time segments.", enum: ["day", "hour", "minute", "second"] }),
        hideTimeZone: LogicType.boolean({ description: "Hide the time zone segment." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        hourCycle: LogicType.number({ description: "The hour cycle to use for formatting the hour.", enum: [12, 24] }),
        id: LogicType.string(),
        isDateUnavailable: LogicType.function(LogicType.object({ date: DateValue }), LogicType.boolean()),
        maxValue: DateValue,
        minValue: DateValue,
        name: LogicType.string({ description: "The name of the field. Submitted with its owning form as part of a name/value pair." }),
        placeholder: LogicType.interface("Date", { description: "Placeholder text when empty." }),
        range: LogicType.boolean({ description: "Allow selecting a range of dates." }),
        readonly: LogicType.boolean(),
        required: LogicType.boolean(),
        separatorIcon: LogicType.string({ description: "Icon to use as range separator." }),
        size,
        step: DateStep,
        variant
    },
    slots: {
        default: LogicType.void(),
        leading: LogicType.void(),
        separator: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default inputDate;
