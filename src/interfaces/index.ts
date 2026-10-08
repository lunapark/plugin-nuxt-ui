import { parseDate, parseDateTime, parseTime, parseZonedDateTime } from "@internationalized/date";
import type { TInterface } from "@luna-park/plugin";
import { defineAsyncComponent } from "vue";

const DateInput = defineAsyncComponent(() => import("@/interfaces/DateInput.vue"));
const ZonedDateTimeInput = defineAsyncComponent(() => import("@/interfaces/ZonedDateTimeInput.vue"));

const parsers = {
    parseDate,
    parseDateTime,
    parseTime,
    parseZonedDateTime
};

type TParser = keyof typeof parsers;
type TEditor = NonNullable<TInterface["constant"]>["editor"];

const imports = (names: Array<TParser>) => names.map((name) => ({ name, target: "@internationalized/date" }));

function getDateValueParser(value: string): TParser {
    if (value.includes("[")) {
        return "parseZonedDateTime";
    }

    return value.includes("T") ? "parseDateTime" : "parseDate";
}

function dateInterface(name: string, description: string, parser: TParser, editor: TEditor, extend?: Array<string>): TInterface {
    return {
        constant: {
            build: {
                generate: (code) => `${ parser }(${ code })`,
                imports: imports([parser])
            },
            editor,
            parse: (value) => parsers[parser](value as string)
        },
        description,
        extends: extend,
        name
    };
}

export const interfaces: Array<TInterface> = [
    {
        constant: {
            build: {
                generate: (code) => `${ getDateValueParser(code) }(${ code })`,
                imports: imports(["parseDate", "parseDateTime", "parseZonedDateTime"])
            },
            editor: DateInput,
            parse: (value) => parsers[getDateValueParser(value as string)](value as string)
        },
        description: "A date value, either a CalendarDate, a CalendarDateTime or a ZonedDateTime.",
        name: "DateValue"
    },
    dateInterface("CalendarDate", "A date without any time components, in a specific calendar system.", "parseDate", DateInput, ["DateValue"]),
    dateInterface("CalendarDateTime", "A date with a time, in a specific calendar system, without a time zone.", "parseDateTime", DateInput, ["DateValue"]),
    dateInterface("ZonedDateTime", "A date and time, in a specific calendar system and time zone.", "parseZonedDateTime", ZonedDateTimeInput, ["DateValue"]),
    dateInterface("Time", "A clock time without any date components.", "parseTime", DateInput)
];
