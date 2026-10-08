import type { TComponent } from "@luna-park/plugin";
import { LogicType } from "@luna-park/plugin";
import Calendar from "@nuxt/ui/components/Calendar.vue";

import { DateRange, dateValueType } from "@/lib/date.ts";
import { color, size, variant } from "@/lib/variants.ts";

const calendar = {
    build: {
        name: "UCalendar"
    },
    component: Calendar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/calendar"
    },
    models: {
        modelValue: LogicType.union([dateValueType(), LogicType.array(dateValueType()), DateRange])
    },
    name: "Element/Calendar",
    properties: {
        color,
        isDateDisabled: LogicType.function(LogicType.object({ date: dateValueType() }), LogicType.boolean()),
        isDateUnavailable: LogicType.function(LogicType.object({ date: dateValueType() }), LogicType.boolean()),
        maxValue: dateValueType({ description: "The maximum date that can be selected." }),
        minValue: dateValueType({ description: "The minimum date that can be selected." }),
        monthControls: LogicType.boolean({ description: "Show month controls" }),
        multiple: LogicType.boolean({ description: "Allow selecting multiple dates." }),
        placeholder: dateValueType({ description: "The date used to determine which month to display when no date is selected." }),
        range: LogicType.boolean({ description: "Allow selecting a range of dates." }),
        size,
        variant,
        yearControls: LogicType.boolean({ description: "Show year controls" })
    },
    slots: {
        "day": LogicType.object({ day: dateValueType() }),
        "heading": LogicType.object({ value: LogicType.string() }),
        "week-day": LogicType.object({ day: LogicType.string() })
    }
} satisfies TComponent;

export default calendar;
