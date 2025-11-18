import { LogicType, LogicUtil } from "@luna-park/plugin";

import { AvatarProps } from "@/components/element/avatar.ts";

export const ComponentIconsProps = LogicUtil.partial(LogicType.object({
    avatar: AvatarProps,
    icon: LogicType.string(),
    leading: LogicType.boolean({ description: "When `true`, the icon will be displayed on the left side." }),
    leadingIcon: LogicType.string({ description: "Display an icon on the left side." }),
    loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed." }),
    loadingIcon: LogicType.string({ description: "The icon when the `loading` prop is `true`." }),
    trailing: LogicType.boolean({ description: "When `true`, the icon will be displayed on the right side." }),
    trailingIcon: LogicType.string({ description: "Display an icon on the right side." })
}));
