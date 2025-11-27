import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Tabs from "@nuxt/ui/components/Tabs.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { BadgeProps } from "@/components/element/badge.ts";
import { color, orientation, size } from "@/lib/variants.ts";

const TabsItem = LogicUtil.partial(LogicType.object({
    avatar: AvatarProps,
    badge: LogicType.union([LogicType.string(), LogicType.number(), BadgeProps]),
    content: LogicType.string(),
    description: LogicType.string(),
    disabled: LogicType.boolean(),
    icon: LogicType.string(),
    label: LogicType.string(),
    slot: LogicType.string(),
    value: LogicType.union([LogicType.string(), LogicType.number()], { description: "A unique value for the tab item. Defaults to the index." })
}));

const tabs = {
    component: Tabs,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/tabs"
    },
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.number()])
    },
    name: "Navigation/Tabs",
    properties: {
        activationMode: LogicType.string({ default: "automatic", description: "Whether a tab is activated automatically (on focus) or manually (on click).", enum: ["automatic", "manual"] }),
        color,
        content: LogicType.boolean({ description: "The content of the tabs, can be disabled to prevent rendering the content." }),
        defaultValue: LogicType.union([LogicType.string(), LogicType.number()], { description: "The value of the tab that should be active when initially rendered." }),
        items: LogicType.array(TabsItem),
        labelKey: LogicType.union([LogicType.string(), LogicType.number()]),
        orientation,
        size,
        unmountOnHide: LogicType.boolean({ description: "When `true`, the element will be unmounted on closed state." }),
        variant: LogicType.string({ default: "pill", enum: ["pill", "link"] })
    },
    slots: {
        content: LogicType.object({ item: TabsItem }),
        default: LogicType.object({ item: TabsItem }),
        leading: LogicType.object({ item: TabsItem }),
        trailing: LogicType.object({ item: TabsItem })
    }
} satisfies TComponent;

export default tabs;
export const TabsProps = LogicUtil.partial(LogicType.object(tabs.properties));
