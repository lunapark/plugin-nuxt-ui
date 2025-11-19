import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChangelogVersion from "@nuxt/ui/components/ChangelogVersion.vue";

import { UserProps } from "@/components/data/user.ts";
import { BadgeProps } from "@/components/element/badge.ts";
import { LinkProps } from "@/lib/link.ts";

const changelogVersion = {
    component: ChangelogVersion,
    emits: {
        click: LogicType.void()
    },
    name: "Page/ChangelogVersion",
    properties: {
        ...LogicUtil.pick(LinkProps, ["to", "target"]).properties,
        authors: LogicType.array(UserProps, { description: "The authors of the changelog version." }),
        badge: LogicType.union([LogicType.string(), BadgeProps], { description: "Display a badge on the changelog version." }),
        date: LogicType.union([LogicType.string(), LogicType.interface("Date")], { description: "The date of the changelog version." }),
        description: LogicType.string(),
        image: LogicType.string({ description: "The image of the changelog version." }),
        indicator: LogicType.boolean({ description: "Display an indicator dot on the left." }),
        title: LogicType.string()
    },
    slots: {
        actions: LogicType.void(),
        authors: LogicType.void(),
        badge: LogicType.void(),
        body: LogicType.void(),
        date: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        image: LogicType.void(),
        indicator: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default changelogVersion;
export const ChangelogVersionProps = LogicUtil.partial(LogicType.object(changelogVersion.properties));
