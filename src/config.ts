import { LogicType, type TSchema } from "@luna-park/plugin";

export default LogicType.object({
    colorMode: LogicType.string({
        default: "auto",
        enum: ["light", "dark", "auto"]
    }),
    neutral: LogicType.string({
        default: "slate",
        enum: ["slate", "gray", "zinc", "neutral", "stone"]
    }),
    primary: LogicType.string({
        default: "green",
        enum: ["black", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
    }),
    radius: LogicType.number({
        default: 0.25,
        options: { clamp: true, max: 1, min: 0, step: 0.125 }
    })
}) satisfies TSchema;
