import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ColorModeAvatar from "@nuxt/ui/components/color-mode/ColorModeAvatar.vue";

import { AvatarProps } from "@/components/element/avatar.ts";

const colorModeAvatar = {
    build: {
        name: "UColorModeAvatar"
    },
    component: ColorModeAvatar,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/color-mode-avatar"
    },
    name: "ColorMode/ColorModeAvatar",
    properties: {
        ...LogicUtil.omit(AvatarProps, ["src"]).properties,
        dark: LogicType.string(),
        light: LogicType.string()
    }
} satisfies TComponent;

export default colorModeAvatar;
