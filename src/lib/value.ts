import type { TSchema } from "@luna-park/plugin";
import { LogicType, LogicUtil } from "@luna-park/plugin";

export const AcceptableValues = LogicType.union([
    LogicType.string(),
    LogicType.number(),
    LogicType.boolean()
]);

export function MaybeArray(schema: TSchema) {
    return LogicType.union([schema, LogicType.array(schema)]);
}

export const ModelModifiers = LogicUtil.partial(LogicType.object({
    lazy: LogicType.boolean({ description: "Sync the value on `change` instead of `input`." }),
    nullable: LogicType.boolean({ description: "Convert empty values to `null`." }),
    number: LogicType.boolean({ description: "Cast the value to a number." }),
    optional: LogicType.boolean({ description: "Convert empty values to `undefined`." }),
    trim: LogicType.boolean({ description: "Trim whitespace from the value." })
}));
