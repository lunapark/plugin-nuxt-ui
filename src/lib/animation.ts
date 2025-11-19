import { LogicType } from "@luna-park/plugin";

export const animation = LogicType.string({
    default: "carousel",
    enum: ["carousel", "carousel-inverse", "swing", "elastic"]
});
