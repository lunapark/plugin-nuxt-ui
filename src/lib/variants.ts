import { LogicType } from "@luna-park/plugin";

export const variant = LogicType.string({
    default: "solid",
    enum: ["solid", "outline", "soft", "subtle", "ghost", "link"]
});

export const color = LogicType.string({
    default: "primary",
    enum: ["primary", "secondary", "success", "info", "warning", "error", "neutral"]
});

export const size = LogicType.string({
    default: "md",
    enum: ["xs", "sm", "md", "lg", "xl"]
});

export const orientation = LogicType.string({
    default: "horizontal",
    enum: ["horizontal", "vertical"]
});

export const side = LogicType.string({
    default: "top",
    enum: ["top", "right", "bottom", "left"]
});

export const position = LogicType.string({
    default: "top-right",
    enum: ["top-right", "bottom-right", "top-left", "bottom-left"]
});

export const indicator = LogicType.string({
    default: "start",
    enum: ["start", "end", "hidden"]
});
