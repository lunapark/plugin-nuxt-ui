import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import BlogPost from "@nuxt/ui/components/BlogPost.vue";

import { UserProps } from "@/components/data/user.ts";
import { BadgeProps } from "@/components/element/badge.ts";
import { LinkProps } from "@/lib/link.ts";
import { orientation, variant } from "@/lib/variants.ts";

const blogPost = {
    component: BlogPost,
    emits: {
        click: LogicType.void()
    },
    name: "Page/BlogPost",
    properties: {
        ...LogicUtil.pick(LinkProps, ["to", "target"]).properties,
        authors: LogicType.array(UserProps, { description: "The authors of the blog post." }),
        badge: LogicType.union([LogicType.string(), BadgeProps], { description: "Display a badge on the blog post." }),
        date: LogicType.union([LogicType.string(), LogicType.interface("Date")], { description: "The date of the blog post." }),
        description: LogicType.string(),
        image: LogicType.string({ description: "The image of the blog post." }),
        orientation: { ...orientation, description: "The orientation of the blog post." },
        title: LogicType.string(),
        variant
    },
    slots: {
        authors: LogicType.void(),
        badge: LogicType.void(),
        body: LogicType.void(),
        date: LogicType.void(),
        description: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        title: LogicType.void()
    }
} satisfies TComponent;

export default blogPost;
export const BlogPostProps = LogicUtil.partial(LogicType.object(blogPost.properties));
