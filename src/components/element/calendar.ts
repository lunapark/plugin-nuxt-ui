import type { TComponent } from "@luna-park/plugin";
import { LogicType } from "@luna-park/plugin";
import Calendar from "@nuxt/ui/components/Calendar.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { DateRange, dateValueType } from "@/lib/date.ts";
import { iconType } from "@/lib/icon.ts";
import { color, size, variant } from "@/lib/variants.ts";

const calendar = {
    build: {
        name: "UCalendar"
    },
    component: Calendar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/calendar"
    },
    models: (props) => {
        if (props.range?.value) {
            return { modelValue: DateRange };
        }

        return { modelValue: props.multiple?.value ? LogicType.array(dateValueType()) : dateValueType() };
    },
    name: "Element/Calendar",
    properties: {
        color,
        disabled: LogicType.boolean(),
        disableDaysOutsideCurrentView: LogicType.boolean({ description: "Whether the days outside the current view are disabled." }),
        fixedWeeks: LogicType.boolean({ description: "Whether to always display 6 weeks in the calendar." }),
        isDateDisabled: LogicType.function(LogicType.object({ date: dateValueType() }), LogicType.boolean()),
        isDateUnavailable: LogicType.function(LogicType.object({ date: dateValueType() }), LogicType.boolean()),
        locale: LogicType.string({ description: "The locale to use for formatting and parsing." }),
        maximumDays: LogicType.number({ description: "The maximum number of days that can be selected in a range." }),
        maxValue: dateValueType({ description: "The maximum date that can be selected." }),
        minValue: dateValueType({ description: "The minimum date that can be selected." }),
        monthControls: LogicType.boolean({ description: "Show month controls" }),
        multiple: LogicType.boolean({ description: "Allow selecting multiple dates." }),
        nextMonthIcon: iconType({ description: "The icon to use for the next month control." }),
        nextYearIcon: iconType({ description: "The icon to use for the next year control." }),
        numberOfMonths: LogicType.number({ description: "The number of months to display at once." }),
        pagedNavigation: LogicType.boolean({ description: "Whether to navigate by the number of months displayed instead of one." }),
        placeholder: dateValueType({ description: "The date used to determine which month to display when no date is selected." }),
        preventDeselect: LogicType.boolean({ description: "Whether to prevent the user from deselecting a date without selecting another one." }),
        prevMonthIcon: iconType({ description: "The icon to use for the previous month control." }),
        prevYearIcon: iconType({ description: "The icon to use for the previous year control." }),
        range: LogicType.boolean({ description: "Allow selecting a range of dates." }),
        readonly: LogicType.boolean(),
        size,
        type: LogicType.string({ default: "date", description: "The type of picker.", enum: ["date", "month", "year"] }),
        variant,
        viewControl: LogicType.union([LogicType.boolean(), ButtonProps], { description: "Make the heading a button that switches between the day, month and year views." }),
        weekdayFormat: LogicType.string({ default: "narrow", description: "The format to use for the weekday strings.", enum: ["narrow", "short", "long"] }),
        weekNumbers: LogicType.boolean({ description: "Display the week numbers." }),
        weekStartsOn: LogicType.number({ description: "The day of the week to start the calendar on (0 is Sunday).", enum: [0, 1, 2, 3, 4, 5, 6] }),
        yearControls: LogicType.boolean({ description: "Show year controls" })
    },
    slots: {
        "day": LogicType.object({ day: dateValueType() }),
        "heading": LogicType.object({ value: LogicType.string() }),
        "week-day": LogicType.object({ day: LogicType.string() })
    }
} satisfies TComponent;

export default calendar;
