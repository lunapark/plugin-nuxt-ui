import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Timeline from "@nuxt/ui/components/Timeline.vue";

import { AvatarProps } from "@/components/element/avatar.ts";
import { color, orientation, size } from "@/lib/variants.ts";

const TimelineItem = LogicUtil.partial(LogicType.object({
    avatar: AvatarProps,
    date: LogicType.string(),
    description: LogicType.string(),
    icon: LogicType.string(),
    slot: LogicType.string(),
    title: LogicType.string(),
    value: LogicType.union([LogicType.string(), LogicType.number()])
}));

export const timeline = {
    component: Timeline,
    models: {
        modelValue: LogicType.union([LogicType.string(), LogicType.number()])
    },
    name: "Data/Timeline",
    properties: {
        color,
        defaultValue: LogicType.union([LogicType.string(), LogicType.number()]),
        items: LogicType.array(TimelineItem),
        orientation: { ...orientation, description: "The orientation of the Timeline." },
        reverse: LogicType.boolean(),
        size
    },
    slots: {
        date: LogicType.object({ item: TimelineItem }),
        description: LogicType.object({ item: TimelineItem }),
        indicator: LogicType.object({ item: TimelineItem }),
        title: LogicType.object({ item: TimelineItem })
    }
} satisfies TComponent;

export default timeline;
