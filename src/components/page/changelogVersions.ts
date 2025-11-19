import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChangelogVersions from "@nuxt/ui/components/ChangelogVersions.vue";

import { ChangelogVersionProps } from "@/components/page/changelogVersion.ts";

const SpringOptions = LogicUtil.partial(LogicType.object({
    bounce: LogicType.number(),
    damping: LogicType.number(),
    duration: LogicType.number(),
    mass: LogicType.number(),
    restDelta: LogicType.number(),
    restSpeed: LogicType.number(),
    stiffness: LogicType.number(),
    velocity: LogicType.number(),
    visualDuration: LogicType.number()
}));

const changelogVersions = {
    component: ChangelogVersions,
    name: "Page/ChangelogVersions",
    properties: {
        indicator: LogicType.boolean({ description: "Display an indicator bar on the left." }),
        indicatorMotion: LogicType.union([LogicType.boolean(), SpringOptions], { description: "Enable scrolling motion effect on the indicator bar." }),
        versions: LogicType.array(ChangelogVersionProps)
    },
    slots: {
        actions: LogicType.void(),
        authors: LogicType.void(),
        badge: LogicType.void(),
        body: LogicType.void(),
        date: LogicType.void(),
        default: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        image: LogicType.void(),
        indicator: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default changelogVersions;
export const ChangelogVersionsProps = LogicUtil.partial(LogicType.object(changelogVersions.properties));
