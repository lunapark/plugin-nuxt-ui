import { LogicType, type TSchema } from "@luna-park/plugin";

export const AcceptableValues = LogicType.union([
    LogicType.string(),
    LogicType.number(),
    LogicType.boolean()
]);

export function MaybeArray(schema: TSchema) {
    return LogicType.union([schema, LogicType.array(schema)]);
}
