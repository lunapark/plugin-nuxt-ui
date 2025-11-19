import { LogicType, LogicUtil } from "@luna-park/plugin";

export const DateStep = LogicUtil.partial(LogicType.object({
    day: LogicType.number(),
    hour: LogicType.number(),
    millisecond: LogicType.number(),
    minute: LogicType.number(),
    month: LogicType.number(),
    second: LogicType.number(),
    year: LogicType.number()
}));
