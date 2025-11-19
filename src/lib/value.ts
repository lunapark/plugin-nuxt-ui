import { LogicType } from "@luna-park/plugin";

export const AcceptableValues = LogicType.union([
    LogicType.string(),
    LogicType.number(),
    LogicType.boolean()
]);
