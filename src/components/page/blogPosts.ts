import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import BlogPosts from "@nuxt/ui/components/BlogPosts.vue";

import { BlogPostProps } from "@/components/page/blogPost.ts";
import { orientation } from "@/lib/variants.ts";

const blogPosts = {
    component: BlogPosts,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/blog-posts"
    },
    name: "Page/BlogPosts",
    properties: {
        orientation: { ...orientation, description: "The orientation of the blog posts." },
        posts: LogicType.array(BlogPostProps)
    },
    slots: {
        authors: LogicType.object({ post: BlogPostProps }),
        badge: LogicType.object({ post: BlogPostProps }),
        body: LogicType.object({ post: BlogPostProps }),
        date: LogicType.object({ post: BlogPostProps }),
        default: LogicType.void(),
        description: LogicType.object({ post: BlogPostProps }),
        footer: LogicType.object({ post: BlogPostProps }),
        header: LogicType.object({ post: BlogPostProps }),
        title: LogicType.object({ post: BlogPostProps })
    }
} satisfies TComponent;

export default blogPosts;
export const BlogPostsProps = LogicUtil.partial(LogicType.object(blogPosts.properties));
