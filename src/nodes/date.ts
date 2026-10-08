import { CalendarDate, DateFormatter, fromDate, getLocalTimeZone, isSameDay, now, parseDate, parseDateTime, parseZonedDateTime, Time, today } from "@internationalized/date";
import { LogicType, makeLogicNode } from "@luna-park/plugin";

import { calendarDateType, DateDuration, dateValueType, timeType, zonedDateTimeType } from "@/lib/date.ts";
import { locale } from "@/locale.ts";

const timeZone = LogicType.string({ name: "time zone", optional: true });

function dateBuild(code: string, imports: Array<string>) {
    return {
        generate: () => `()=>{${ code }}`,
        imports: imports.map((name) => ({ name, target: "@internationalized/date" }))
    };
}

export default [
    makeLogicNode({
        build: dateBuild("return getLocalTimeZone();", ["getLocalTimeZone"]),
        display: {
            name: "Local Time Zone"
        },
        documentation: {
            description: "Returns the IANA identifier of the local time zone, like `Europe/Paris`.",
            short: "Read the user's time zone"
        },
        inputs: {},
        methods: {
            out_value() {
                return getLocalTimeZone();
            }
        },
        name: "date/time-zone",
        outputs: {
            out_value: LogicType.string({ name: "time zone" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return today(this.in_timeZone || getLocalTimeZone());", ["getLocalTimeZone", "today"]),
        display: {
            name: "Today"
        },
        documentation: {
            description: "Returns the current date as a CalendarDate, in the given time zone or the local one.",
            short: "Read the current date"
        },
        inputs: {
            in_timeZone: timeZone
        },
        methods: {
            out_value() {
                return today(this.in_timeZone || getLocalTimeZone());
            }
        },
        name: "date/today",
        outputs: {
            out_value: calendarDateType({ name: "date" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return now(this.in_timeZone || getLocalTimeZone());", ["getLocalTimeZone", "now"]),
        display: {
            name: "Now"
        },
        documentation: {
            description: "Returns the current date and time as a ZonedDateTime, in the given time zone or the local one.",
            short: "Read the current date and time"
        },
        inputs: {
            in_timeZone: timeZone
        },
        methods: {
            out_value() {
                return now(this.in_timeZone || getLocalTimeZone());
            }
        },
        name: "date/now",
        outputs: {
            out_value: zonedDateTimeType({ name: "date" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return new CalendarDate(this.in_year, this.in_month, this.in_day);", ["CalendarDate"]),
        display: {
            name: "Create Calendar Date"
        },
        documentation: {
            description: "Creates a CalendarDate from a year, month, and day.",
            short: "Build a date from its parts"
        },
        inputs: {
            /* eslint-disable sort-keys-custom-order/object-keys */
            in_year: LogicType.number({ name: "year" }),
            in_month: LogicType.number({ name: "month", options: { max: 12, min: 1 } }),
            in_day: LogicType.number({ name: "day", options: { max: 31, min: 1 } })
            /* eslint-enable sort-keys-custom-order/object-keys */
        },
        methods: {
            out_value() {
                return new CalendarDate(this.in_year, this.in_month, this.in_day);
            }
        },
        name: "date/create",
        outputs: {
            out_value: calendarDateType({ name: "date" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return new Time(this.in_hour, this.in_minute ?? 0, this.in_second ?? 0);", ["Time"]),
        display: {
            name: "Create Time"
        },
        documentation: {
            description: "Creates a Time from an hour, minute, and second.",
            short: "Build a time from its parts"
        },
        inputs: {

            in_hour: LogicType.number({ name: "hour", options: { max: 23, min: 0 } }),
            in_minute: LogicType.number({ name: "minute", optional: true, options: { max: 59, min: 0 } }),
            in_second: LogicType.number({ name: "second", optional: true, options: { max: 59, min: 0 } })

        },
        methods: {
            out_value() {
                return new Time(this.in_hour, this.in_minute ?? 0, this.in_second ?? 0);
            }
        },
        name: "date/create-time",
        outputs: {
            out_value: timeType({ name: "time" })
        }
    }),
    makeLogicNode({
        build: dateBuild("const value = this.in_value; if (value.includes(\"[\")) { return parseZonedDateTime(value); } return value.includes(\"T\") ? parseDateTime(value) : parseDate(value);", ["parseDate", "parseDateTime", "parseZonedDateTime"]),
        display: {
            name: "Parse Date"
        },
        documentation: {
            description: "Parses an ISO 8601 string into a CalendarDate (`2026-10-08`), a CalendarDateTime (`2026-10-08T10:30`) or a ZonedDateTime (`2026-10-08T10:30[Europe/Paris]`).",
            short: "Turn an ISO string into a date"
        },
        inputs: {
            in_value: LogicType.string({ name: "value" })
        },
        methods: {
            out_value() {
                if (this.in_value.includes("[")) {
                    return parseZonedDateTime(this.in_value);
                }

                return this.in_value.includes("T") ? parseDateTime(this.in_value) : parseDate(this.in_value);
            }
        },
        name: "date/parse",
        outputs: {
            out_value: dateValueType({ name: "date" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return fromDate(this.in_date, this.in_timeZone || getLocalTimeZone());", ["fromDate", "getLocalTimeZone"]),
        display: {
            name: "From JS Date"
        },
        documentation: {
            description: "Converts a native JavaScript Date to a ZonedDateTime, in the given time zone or the local one.",
            short: "Convert a native Date"
        },
        inputs: {
            in_date: LogicType.interface("Date", { name: "date" }),
            in_timeZone: timeZone
        },
        methods: {
            out_value() {
                return fromDate(this.in_date as Date, this.in_timeZone || getLocalTimeZone());
            }
        },
        name: "date/from-date",
        outputs: {
            out_value: zonedDateTimeType({ name: "date" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return this.in_date.toDate(this.in_timeZone || getLocalTimeZone());", ["getLocalTimeZone"]),
        display: {
            name: "To JS Date"
        },
        documentation: {
            description: "Converts a date value to a native JavaScript Date, in the given time zone or the local one.",
            short: "Convert to a native Date"
        },
        inputs: {
            in_date: dateValueType({ name: "date" }),
            in_timeZone: timeZone
        },
        methods: {
            out_value() {
                return this.in_date.toDate(this.in_timeZone || getLocalTimeZone());
            }
        },
        name: "date/to-date",
        outputs: {
            out_value: LogicType.interface("Date", { name: "date" })
        }
    }),
    makeLogicNode({
        display: {
            name: "Date To String"
        },
        documentation: {
            description: "Returns the ISO 8601 representation of a date value or a time.",
            short: "Turn a date into an ISO string"
        },
        inputs: {
            in_date: LogicType.union([dateValueType(), timeType()], { name: "date" })
        },
        methods: {
            out_value() {
                return this.in_date.toString();
            }
        },
        name: "date/to-string",
        outputs: {
            out_value: LogicType.string({ name: "string" })
        }
    }),
    makeLogicNode({
        build: dateBuild("const timeZone = this.in_timeZone || getLocalTimeZone(); const locale = this.in_locale || document.documentElement.lang || navigator.language; return new DateFormatter(locale, { dateStyle: this.in_dateStyle, timeStyle: this.in_timeStyle, timeZone }).format(this.in_date.toDate(timeZone));", ["DateFormatter", "getLocalTimeZone"]),
        display: {
            name: "Format Date"
        },
        documentation: {
            description: "Formats a date value with `Intl.DateTimeFormat`, using the given locale or the one configured in the plugin.",
            short: "Display a date for humans"
        },
        inputs: {
            /* eslint-disable sort-keys-custom-order/object-keys */
            in_date: dateValueType({ name: "date" }),
            in_dateStyle: LogicType.string({ default: "medium", enum: ["full", "long", "medium", "short"], name: "date style" }),
            in_timeStyle: LogicType.string({ enum: ["full", "long", "medium", "short"], name: "time style", optional: true }),
            in_locale: LogicType.string({ name: "locale", optional: true }),
            in_timeZone: timeZone
            /* eslint-enable sort-keys-custom-order/object-keys */
        },
        methods: {
            out_value() {
                const timeZone = this.in_timeZone || getLocalTimeZone();
                const formatter = new DateFormatter(this.in_locale || locale.value.code, {
                    dateStyle: this.in_dateStyle as Intl.DateTimeFormatOptions["dateStyle"],
                    timeStyle: this.in_timeStyle as Intl.DateTimeFormatOptions["timeStyle"],
                    timeZone
                });

                return formatter.format(this.in_date.toDate(timeZone));
            }
        },
        name: "date/format",
        outputs: {
            out_value: LogicType.string({ name: "string" })
        }
    }),
    makeLogicNode({
        display: {
            name: "Date Add"
        },
        documentation: {
            description: "Adds a duration to a date value and returns a new date of the same type.",
            short: "Move forward by a duration"
        },
        inputs: {
            in_date: dateValueType({ name: "date" }),
            in_duration: { ...DateDuration, name: "duration" }
        },
        methods: {
            out_value() {
                return this.in_date.add(this.in_duration);
            }
        },
        name: "date/add",
        outputs: {
            out_value: dateValueType({ name: "date" })
        }
    }),
    makeLogicNode({
        display: {
            name: "Date Subtract"
        },
        documentation: {
            description: "Subtracts a duration from a date value and returns a new date of the same type.",
            short: "Move backward by a duration"
        },
        inputs: {
            in_date: dateValueType({ name: "date" }),
            in_duration: { ...DateDuration, name: "duration" }
        },
        methods: {
            out_value() {
                return this.in_date.subtract(this.in_duration);
            }
        },
        name: "date/subtract",
        outputs: {
            out_value: dateValueType({ name: "date" })
        }
    }),
    makeLogicNode({
        display: {
            name: "Date Compare"
        },
        documentation: {
            description: "Returns a negative number if A is before B, a positive number if A is after B, and `0` if they are equal.",
            short: "Check which date comes first"
        },
        inputs: {
            in_A: dateValueType({ name: "A" }),
            in_B: dateValueType({ name: "B" })
        },
        methods: {
            out_diff() {
                return this.in_A.compare(this.in_B);
            }
        },
        name: "date/compare",
        outputs: {
            out_diff: LogicType.number({ name: "diff" })
        }
    }),
    makeLogicNode({
        build: dateBuild("return isSameDay(this.in_A, this.in_B);", ["isSameDay"]),
        display: {
            name: "Is Same Day"
        },
        documentation: {
            description: "Returns whether two date values fall on the same day, regardless of their time.",
            short: "Check if two dates share a day"
        },
        inputs: {
            in_A: dateValueType({ name: "A" }),
            in_B: dateValueType({ name: "B" })
        },
        methods: {
            out_value() {
                return isSameDay(this.in_A, this.in_B);
            }
        },
        name: "date/is-same-day",
        outputs: {
            out_value: LogicType.boolean({ name: "same day" })
        }
    })
];
