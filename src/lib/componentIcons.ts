import { LogicType, LogicUtil } from "@luna-park/plugin";

import { AvatarProps } from "@/components/element/avatar.ts";
import { iconType } from "@/lib/icon.ts";

export const ComponentIconsProps = LogicUtil.partial(LogicType.object({
    avatar: AvatarProps,
    icon: iconType(),
    leading: LogicType.boolean({ description: "When `true`, the icon will be displayed on the left side." }),
    leadingIcon: iconType({ description: "Display an icon on the left side." }),
    loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed." }),
    loadingIcon: iconType({ description: "The icon when the `loading` prop is `true`." }),
    trailing: LogicType.boolean({ description: "When `true`, the icon will be displayed on the right side." }),
    trailingIcon: iconType({ description: "Display an icon on the right side." })
}));
