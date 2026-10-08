import type { CalendarDate, CalendarDateTime, DateValue, Time, ZonedDateTime } from "@internationalized/date";
import { LogicType, LogicUtil } from "@luna-park/plugin";

type TArgs<T> = Parameters<typeof LogicType.interface<T>>[1];

export function dateValueType(args?: TArgs<DateValue>) {
    return LogicType.interface<DateValue>("DateValue", args);
}

export function calendarDateType(args?: TArgs<CalendarDate>) {
    return LogicType.interface<CalendarDate>("CalendarDate", args);
}

export function calendarDateTimeType(args?: TArgs<CalendarDateTime>) {
    return LogicType.interface<CalendarDateTime>("CalendarDateTime", args);
}

export function zonedDateTimeType(args?: TArgs<ZonedDateTime>) {
    return LogicType.interface<ZonedDateTime>("ZonedDateTime", args);
}

export function timeType(args?: TArgs<Time>) {
    return LogicType.interface<Time>("Time", args);
}

export function timeValueType(args?: TArgs<Time | CalendarDateTime | ZonedDateTime>) {
    return LogicType.union([timeType(), calendarDateTimeType(), zonedDateTimeType()], args);
}

export const DateRange = LogicType.object({
    end: dateValueType(),
    start: dateValueType()
});

export const DateDuration = LogicUtil.partial(LogicType.object({
    days: LogicType.number(),
    hours: LogicType.number(),
    milliseconds: LogicType.number(),
    minutes: LogicType.number(),
    months: LogicType.number(),
    seconds: LogicType.number(),
    weeks: LogicType.number(),
    years: LogicType.number()
}));
