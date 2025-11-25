/* eslint-disable sort-keys-custom-order/object-keys */
import { LogicType, type TSchema } from "@luna-park/plugin";

export default LogicType.object({
    colorMode: LogicType.string({
        default: "auto",
        enum: ["light", "dark", "auto"]
    }),
    primary: LogicType.string({
        default: "green",
        enum: ["black", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
    }),
    secondary: LogicType.string({
        default: "blue",
        enum: ["black", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
    }),
    neutral: LogicType.string({
        default: "slate",
        enum: ["slate", "gray", "zinc", "neutral", "stone"]
    }),
    radius: LogicType.number({
        default: 0.25,
        options: { clamp: true, max: 1, min: 0, step: 0.125 }
    })
}) satisfies TSchema;
