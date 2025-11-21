import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import Link from "@nuxt/ui/components/Link.vue";

export const NuxtLinkProps = LogicUtil.partial(LogicType.object({
    external: LogicType.boolean({ description: "Forces the link to be considered as external (true) or internal (false). This is helpful to handle edge-cases" }),
    noRel: LogicType.boolean({ description: "If set to true, no rel attribute will be added to the link" }),
    rel: LogicType.string({ description: "A rel attribute value to apply on the link. Defaults to \"noopener noreferrer\" for external links.", enum: ["noopener", "noreferrer", "nofollow", "sponsored", "ugc"] }),
    target: LogicType.string({ description: "Where to display the linked URL, as the name for a browsing context.", enum: ["_blank", "_self", "_parent", "_top"] }),
    to: LogicType.string({ description: "Route Location the link should navigate to when clicked on." })
}));

const link = {
    component: Link,
    name: "Navigation/Link",
    properties: {
        ...NuxtLinkProps.properties,
        active: LogicType.boolean({ description: "Force the link to be active independent of the current route." }),
        disabled: LogicType.boolean(),
        exact: LogicType.boolean({ description: "Will only be active if the current route is an exact match." }),
        exactHash: LogicType.boolean({ description: "Will only be active if the current route hash is an exact match." }),
        exactQuery: LogicType.union([LogicType.boolean(), LogicType.string({ enum: ["partial"] })], { description: "Allows controlling how the current route query sets the link as active." }),
        inactiveClass: LogicType.string({ description: "The class to apply when the link is inactive." }),
        raw: LogicType.boolean({ description: "When `true`, only styles from `class`, `activeClass`, and `inactiveClass` will be applied." }),
        type: LogicType.string({ description: "The type of the button when not a link.", enum: ["button", "submit", "reset"] })
    },
    slots: {
        default: LogicType.object({ active: LogicType.boolean() })
    }
} satisfies TComponent;

export default link;
export const LinkProps = LogicUtil.partial(LogicType.object(link.properties));
