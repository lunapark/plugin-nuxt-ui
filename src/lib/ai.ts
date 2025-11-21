import { LogicType } from "@luna-park/plugin";

export const UIMessagePart = LogicType.object({
    sourceId: LogicType.string({ optional: true }),
    state: LogicType.string({ enum: ["streaming", "done"], optional: true }),
    text: LogicType.string({ optional: true }),
    title: LogicType.string({ optional: true }),
    type: LogicType.string({ enum: ["text", "reasoning", "source-url", "source-document", "file"] }),
    url: LogicType.string({ optional: true })
});

export const UIMessage = LogicType.object({
    id: LogicType.string(),
    metadata: LogicType.record(LogicType.string(), LogicType.unknown(), { optional: true }),
    parts: LogicType.array(UIMessagePart),
    role: LogicType.string({ enum: ["system", "user", "assistant"] })
});
