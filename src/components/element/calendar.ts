import { LogicType, type TComponent } from "@luna-park/plugin";
import Calendar from "@nuxt/ui/components/Calendar.vue";

import { color, size, variant } from "@/lib/variants.ts";

const calendar = {
    component: Calendar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/calendar"
    },
    models: {
        modelValue: LogicType.array(LogicType.interface("Date"))
    },
    name: "Element/Calendar",
    properties: {
        color,
        monthControls: LogicType.boolean({ description: "Show month controls" }),
        multiple: LogicType.boolean({ description: "Allow selecting multiple dates." }),
        range: LogicType.boolean({ description: "Allow selecting a range of dates." }),
        size,
        variant,
        yearControls: LogicType.boolean({ description: "Show year controls" })
    },
    slots: {
        "day": LogicType.object({ day: LogicType.interface("Date") }),
        "heading": LogicType.object({ value: LogicType.string() }),
        "week-day": LogicType.object({ day: LogicType.string() })
    }
} satisfies TComponent;

export default calendar;
