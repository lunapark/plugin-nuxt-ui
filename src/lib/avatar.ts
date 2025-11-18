import { LogicType, LogicUtil } from "@luna-park/plugin";

import { size } from "./variants.ts";

export const AvatarProps = LogicUtil.partial(LogicType.object({
    alt: LogicType.string(),
    chip: LogicType.boolean(),
    icon: LogicType.string(),
    size,
    src: LogicType.string(),
    text: LogicType.string()
}, { name: "AvatarProps" }));
